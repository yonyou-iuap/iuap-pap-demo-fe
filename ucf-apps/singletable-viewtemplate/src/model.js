import {actions} from "mirrorx";
// 引入services，如不需要接口请求可不写
import * as api from "./service";
// 接口返回数据公共处理方法，根据具体需要
import {processData} from "utils";


export default {
    // 确定 Store 中的数据模型作用域
    name: "templateModel",
    // 设置当前 Model 所需的初始化 state
    initialState: {
        search: null,
        rowData: {},
        showLoading: false,
        list: [],
        orderTypes: [],
        totalPages: 1,
        total: 0,
        detail: {},
        queryParam : {
            pageParams : {
                pageIndex : 0,
                pageSize : 25
            },
            whereParams : []
        },
        selectOptionDataSource: [{ key: "默认模板", value: 0 }],

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
        async loadList(param, getState) {

            // 正在加载数据，显示加载 Loading 图标
            actions.templateModel.updateState({showLoading: true})
            // 调用 getList 请求数据
            let res = processData(await api.getList(param));
            actions.templateModel.updateState({showLoading: false});
            if (res) {
                actions.templateModel.updateState({
                    list: res.content,
                    pageIndex: res.number + 1,
                    totalPages: res.totalPages,
                    total: res.totalElements,
                    queryParam: param, //更新搜索条件
                });
            }
        },
         /**
         * 保存模板数据
         * @param {*} param
         * @param {*} getState
         */
        async saveTemplate(param, getState) {
             // 正在加载数据，显示加载 Loading 图标
             actions.templateModel.updateState({showLoading: true})
            let result = processData(await api.saveTemplate(param),'保存成功');
            actions.templateModel.updateState({
                showModal:false,
                showLoading: false
            });
            actions.templateModel.loadTemplateList();
            return result;
        },
        /**
         * 删除模板数据
         * @param {*} id
         * @param {*} getState
         */
        async removeTemplate(id, getState) {
            // 正在加载数据，显示加载 Loading 图标
            actions.templateModel.updateState({showLoading: true})
            let result =  processData(await api.deleteTemplate([{id}]),'删除成功');
            actions.templateModel.updateState({showLoading: false})
            actions.templateModel.loadTemplateList();
            return result;
        },
        /**
         * 加载模板列表数据
         * @param {*} param
         * @param {*} getState
         */
        async loadTemplateList(param, getState) {
            // 调用 getList 请求数据
            let res = processData(await api.getTemplateList(param));
            if (res) {
                let selectOptionDataSource = [{ key: "默认模板", value: 0 }];
               
                res.content.forEach((item,index) => {
                    let  modelContent=JSON.parse(item.modelContent);
                    if(item.modelName && modelContent){
                        selectOptionDataSource.push({
                            key:item.modelName,
                            value:index + 1,
                            trueValue: modelContent,
                            id:item.id,
                        });
                    }
                });
                actions.templateModel.updateState({
                    selectOptionDataSource
                });
            }
            return res
        },
    }
};
