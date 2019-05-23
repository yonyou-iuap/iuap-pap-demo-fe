/**
 * mirrorx定义modal
 */

import { actions } from "mirrorx";
// 引入services，如不需要接口请求可不写
import * as api from "./service";
// 接口返回数据公共处理方法，根据具体需要
import { processData, success, Error ,deepClone} from "utils";


export default {
    // 确定 Store 中的数据模型作用域
    name: "inlineEdit",
    // 设置当前 Model 所需的初始化 state
    initialState: {
        cacheData: [],//新增、修改缓存原始数据
        tableData: [],//表格最终处理渲染的数据
        selectData: [],//选中的状态数组
        status: 'view',//表格状态：view=查看、edit=编辑、new=新增、del=删除
        rowEditStatus: true,//操作拖拽列、宽开关
        showLoading: false,
        list: [],
        totalPages: 1,
        total: 0,
        queryParam: {
            pageParams: {
                pageIndex: 0,
                pageSize: 25
            },
            // groupParams: [],
            whereParams: []
        }
    },
    reducers: {
        /**
         * 纯函数，相当于 Redux 中的 Reducer，只负责对数据的更新。
         * @param {object} state
         * @param {object} data
         */
        updateState(state, data) { //更新state
            return {
                ...state,
                ...deepClone(data)
            };
        }
    },
    effects: {
        /**
         * 加载列表数据
         * @param {object} param
         */
        async loadList(param, getState) {
            // 正在加载数据，显示加载 Loading 图标, 并初识化配置
            actions.inlineEdit.updateState({
                showLoading: true,
                status: "view",
                rowEditStatus: true,
                selectData: []
            });

            let inlineEditState = getState().inlineEdit;
            let _param = param || inlineEditState.queryParam;
            // 调用 getList 请求数据

            let {result} = processData(await api.getList(_param));
            let res = result?result.data:null;
            let defState = { showLoading: false }
            let _state = null;
            if (res) {
                let { content: list, number, totalPages, totalElements: total } = res;

                list.forEach(da=>{
                    da.postLevelName = da.levelName;
                })
                let pageIndex = number + 1;
                _state = Object.assign({}, defState, {
                    list,
                    pageIndex,
                    totalPages,
                    total,
                    queryParam: _param,
                    cacheData: list
                })
            }else {
                _state = defState
            }
            actions.inlineEdit.updateState(_state);
        },
        /**
         * 批量添加数据
         *
         * @param {Array} [param=[]] 数组对象的数据
         * @returns {bool} 操作是否成功
         */
        async adds(param) {
            actions.inlineEdit.updateState({ showLoading: true });
            let { result } = processData(await api.adds(param),'保存成功');
            let {status}=result;
            actions.inlineEdit.updateState({ showLoading: false});
            if (status === 'success') {
                actions.inlineEdit.loadList();
                return true;
            } else {
                return false;
            }
        },
        /**
         * 批量删除数据
         *
         * @param {Array} [param=[]]
         */
        async removes(param, getState) {
            actions.inlineEdit.updateState({ showLoading: true });
            let { result } = processData(await api.removes(param),'删除成功');
            let {status}=result;
            actions.inlineEdit.updateState({ showLoading: false });
            if (status === 'success') {
                let inlineEditState = getState().inlineEdit;
                let { queryParam, list, totalPages } = inlineEditState;
                // 调用 getList 请求数据

                let { pageParams: { pageIndex } } = queryParam;
                if (pageIndex > 0 && pageIndex + 1 === totalPages && param.length === list.length) {
                    queryParam.pageParams.pageIndex = pageIndex - 1;
                }

                actions.inlineEdit.loadList(queryParam);
                return true;
            } else {
                return false;
            }
        },
        /**
         * 批量删除数据
         *
         * @param {Array} [param=[]]
         */
        async updates(param) {
            actions.inlineEdit.updateState({ showLoading: true });
            let { result } = processData(await api.updates(param),'更新成功');
            let {status}=result;
            actions.inlineEdit.updateState({ showLoading: false });
            if (status === 'success') {
                actions.inlineEdit.loadList();
                return true;
            } else {
                return false;
            }
        },
        resetData(status, getState) {
            let cacheData = getState().inlineEdit.cacheData.slice();
            cacheData.forEach(item => {
                delete item._edit;
            });
            let state = {
                list: cacheData
            }
            if (status) {
                state.status = 'view';
            }
            actions.inlineEdit.updateState(state);
        }
    }
};
