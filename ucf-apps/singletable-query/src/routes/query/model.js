import {actions} from "mirrorx";
// 引入services，如不需要接口请求可不写
import * as api from "./service";
// 接口返回数据公共处理方法，根据具体需要

import {processData, structureObj, initStateObj,deepClone} from "utils";


export default {
    // 确定 Store 中的数据模型作用域
    name: "query",
    // 设置当前 Model 所需的初始化 state
    initialState: {
        showLoading: false,
        // 缓存行过滤条件
        cacheFilter: [],
        queryParam: {
            pageParams: {
                pageIndex: 0,
                pageSize: 25,
            },
            sortMap: [],
            whereParams: [],
        },
        queryObj: {
            list: [],
            pageIndex: 0,
            pageSize: 25,
            totalPages: 1,
            total: 0,
        },
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
                ...deepClone(data)
            };
        }
    },
    effects: {

        /**
         * 加载列表数据
         * @param {*} param
         * @param {*} getState
         */
        async loadList(param = {}, getState) {
            // 正在加载数据，显示加载 Loading 图标
            actions.query.updateState({showLoading: true});
            let {result} = processData(await api.getList(param));  // 调用 getList 请求数据
            let {data:res}=result;
            let updateData = {showLoading: false};
            if (res) {
                let {pageParams} = param;
                let queryObj = structureObj(res, pageParams);
                updateData.queryObj = queryObj;
                updateData.queryParam = param;
            } else {
                // 如果请求出错,数据初始化
                let {queryObj} = getState().query;
                updateData.queryObj = initStateObj(queryObj);
            }
            actions.query.updateState(updateData); // 更新数据和查询条件
        },

        /**
         * 获取行过滤的下拉数据
         * @param {*} param
         */
        async getListByCol(param, getState) {
            let {result} = processData(await api.getListByCol(param));
            let {data=[]} = result;
            let {distinctParams} = param,
                column = distinctParams[0];
            let selectValList = data.map((item) => {
                let {deptName, dept} = item;
                return {key: deptName, value: dept};
            });
            actions.query.updateState({['colFilterSelect' + column]: selectValList});
        },

    }
};
