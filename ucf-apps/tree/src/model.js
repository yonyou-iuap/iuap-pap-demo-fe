import {actions} from "mirrorx";
// 引入services，如不需要接口请求可不写
import * as api from "./service";
// 接口返回数据公共处理方法，根据具体需要
import {processData, addChild, handleChild, deepClone} from "utils";
import moment from 'moment';



export default {
    // 确定 Store 中的数据模型作用域
    name: "walsinTree",
    // 设置当前 Model 所需的初始化 state
    initialState: {
        content : [],
        cacheTree : [],
        paginationParam : {
            reqParam : {
                search_treeId : "",
                title : "",
                hierarchy : "",
                pageIndex : 0,
                pageSize : 25,
            },
            resParam : {
                totalPages : 0,
                total : 0
            }
        },
        tableData : [],
        tableSelValue : [],
        showLoading : false,
        comModalParam : {
            showModal : false,
            initEditValue : {},
            btnFlag : 0
        },
        delModal : false,
        searchRes : {
            expandedKeys : [],
            autoExpandParent : false
        }

    },
    reducers: {
        /**
         * 纯函数，相当于 Redux 中的 Reducer，只负责对数据的更新。
         * @param {*} state
         * @param {*} data
         */
        updateState(state, data) { //更新state
            return {
                ...state,
                ...data
            };
        }
    },
    effects: {
        /**
         * 加载列表数据
         * @param {*} param
         * @param {*} getState
         */
        async loadTree(param , getState) {
            console.log("loadTree param", param);
            let cacheTree = getState().walsinTree.cacheTree;
            let {result} = processData(await api.getTreeData(param));
            let {data:res}=result;
            let handledContent = [];
            let content = res && res.content || [];
            cacheTree = res && res.content && cacheTree.concat(res.content);
            let cacheContent = deepClone(getState().walsinTree.content);
            if(cacheContent.length === 0) {
                handledContent = deepClone(content);
            } else {
                handledContent = addChild(cacheContent, content);
            }
            actions.walsinTree.updateState({
                content : handledContent,
                cacheTree
            })

        },

        /**
         * @description 拖拽数节点函数
         *
         */
        async dragNode(param , getState) {
            let cacheContent = deepClone(getState().walsinTree.content);
            let res = {};
            if (param.reqParam) {
                const {result} = processData(await api.dragNode(param.reqParam));
                res=result.data;
            }

            if (res) {
                //  删除原来的节点，添加到新的父节点下
                handleChild(cacheContent, param.curNode, 1);
                console.log("cacheContent", cacheContent);
                // 将原节点插入到新的父节点下
                addChild(cacheContent, Array.isArray(res) ? res : [res]);

                actions.walsinTree.updateState({
                    content : cacheContent
                })
            }


        },

        /**
        * @description 加载列表,param中可以传分页信息，请求完成后需要设置总页数和总条数
        * @param {string} total 总数据条数
        * @param {string} totalPages 总页数
        */
        async loadTable(param , getState) {
            await actions.walsinTree.updateState({
                showLoading : true
            })

            try {
                let {result} = processData(await api.getTableData(param));
                let {data:res}=result;
                let tableData = [],
                    resultObj = {};

                if (res) {
                    tableData = res.content;
                    resultObj = Object.assign({},{
                        reqParam : param,
                        resParam : {
                            total : res['totalElements'],
                            totalPages : res['totalPages']
                        }
                    })
                }

                await actions.walsinTree.updateState({
                    tableData,
                    paginationParam : resultObj,
                    tableSelValue : [],
                    showLoading : false
                })

            } catch(e) {
                actions.walsinTree.updateState({
                    showLoading : false
                })
            }

        },

        /**
         * @description 列表新增添加数据，添加刷新后要保存分页信息
         */
        async addTableData(param, getState) {
            let {result} = processData(await api.addTableData(param),'添加成功');
            const {data:res}=result;
            if(res) {
                let reqParam = getState().walsinTree.paginationParam.reqParam;
                actions.walsinTree.loadTable(reqParam);
            }
        },

        /**
         *
         * @description 编辑保存
         *
         */
        async addEditData(param, getState) {
            let {result} = processData(await api.addEditData(param),'修改成功');
            const {data:res}=result;
            if(res) {
                let reqParam = getState().walsinTree.paginationParam.reqParam;
                actions.walsinTree.loadTable(reqParam);
            }
        },

        /**
         * @description 删除列表数据,可以进行多条删除,删除完成后返回第一页
         * @param {Object}
         */
        async delTableData(param, getState) {
            let {result} = processData(await api.delTableData(param),'删除成功');
            const {data:res}=result;
            if(res) {
                let reqParam = getState().walsinTree.paginationParam.reqParam;
                reqParam.pageIndex = 0;
                actions.walsinTree.loadTable(reqParam);
            }
        },
        /**
         *
         * @description 此处需要处理一下逻辑
	     * 				情况一：查询前有选中的树节点，查询完后树节点不包括在内，需要清空树节点
	     * 				情况二：在查询结果里选择一级一下树节点，清空数据后查询数据需要清除选中树节点
         * @param {Object} [param={}] param中的searchValue的字段为搜索值
         * @param {*} getState 通过getState可以获取所有注册的model信息
         * @returns {Array}
         */
        async getSearchTree(param, getState) {
            await actions.walsinTree.updateState({
                showLoading : true
            })

            let {searchValue} = param;
            let {paginationParam} = getState().walsinTree;
                    paginationParam = deepClone(paginationParam);
                    let {reqParam, reqParam: {title, hierarchy}} = paginationParam;

            console.log('searchValue',typeof param['searchValue']);
            try {
                let {result} = processData(await api.getSearchTree(param));
                const {data:res}=result;
                    // content = res['content'] && res['content'] || [];
                let {content, parentIdSet} = typeof res !== 'undefined' && res || {
                        content : [],
                        parentIdSet : []
                    };
                console.log('res',res);
                if(Array.isArray(content)) {

                    let temp = {};

                    let resultObj = {
                        content,
                        searchRes : {
                            expandedKeys : parentIdSet,
                            autoExpandParent : param['searchValue'] && true || false
                        }
                    };

                    if ( (searchValue == '' && hierarchy != '0' || !title.includes(searchValue) ) ) {
                        temp = {
                            search_treeId : "",
                            title : "",
                            hierarchy : ''
                        }
                    }

                    paginationParam.reqParam = Object.assign({}, reqParam, temp)
                    resultObj.paginationParam = paginationParam;

                    await actions.walsinTree.updateState(resultObj)
                } else {
                    throw new Error('返回content为null');
                }

            } catch(e) {
                console.log(e);
                actions.walsinTree.updateState({
                    showLoading : false,
                    content : []
                })
            }

            await actions.walsinTree.updateState({
                showLoading: false
            })

        }
    }
};
