import { actions } from "mirrorx";
// 引入services，如不需要接口请求可不写
import * as api from "./service";
// 接口返回数据公共处理方法，根据具体需要
import { processData, resultDataAdditional } from "utils";

/**
 * 复杂的分组条件转换值
 */
let conditionConvertValue = (val) => {
    let _valArray = [];
    if (val.indexOf('/') > -1) {
        _valArray = val.split('/');
    } else {
        _valArray = [val];
    }
    return _valArray;
}

export default {
    // 确定 Store 中的数据模型作用域
    name: "grouping",
    // 设置当前 Model 所需的初始化 state
    initialState: {
        pageIndex: 1,
        pageSize: 10,
        totalPages: 1,
        total: 0,
        search: null,
        queryParam: {
            pageParams: {
                pageIndex: 0,
                pageSize: 10
            },
            groupParams: {
                groupList: []
            },
            whereParams: {
                whereParamsList: []
            },
            orderParams: {
                orderParamsList: []
            }
        },
        masterTableList: [],//主表数据
        masterTableLoading: false,//主表Loading
        subTableAllData: [],//子表下的数组集合对象
        subTableAllLoading: [],//子表下的数组集合对象Loading
        subTableAllPaging: [],//子表分页
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
         * 加载主表数据
         * @param {*} param
         * @param {*} getState
         */
        async loadMasterTableList(param, getState) {
            actions.grouping.updateState({ masterTableLoading: true });
            let {result} = processData(await api.loadMasterTableList(param));
            const {data:res}=result;
            actions.grouping.updateState({ masterTableLoading: false, queryParam: param });
            if (res) {
                actions.grouping.updateState({
                    masterTableList: resultDataAdditional(res.content),
                    pageIndex: res.number + 1,
                    totalPages: res.totalPages,
                    total: res.totalElements,
                    search: param, //更新搜索条件
                });
            }
        },
        /**
 * 加载分组主表数据
 * @param {*} param
 * @param {*} getState
 */
        async loadGroupTableList(param, getState) {
            actions.grouping.updateState({ masterTableLoading: true, masterTableList: [] });
            let {result} = processData(await api.loadGroupTableList(param));
            const {data:res}=result;
            actions.grouping.updateState({ masterTableLoading: false, queryParam: param });
            if (res) {
                actions.grouping.updateState({
                    masterTableList: resultDataAdditional(res.content),
                    pageIndex: res.number + 1,
                    totalPages: res.totalPages,
                    total: res.totalElements,
                    search: param, //更新搜索条件
                });
            }
        },
        /**
         * 加载子表数据
         * @param {*} param
         * @param {*} getState
         */
        async loadSubTableList(param, getState) {
            let _subTableAllLoading = getState().grouping.subTableAllLoading.slice();
            let _subTableAllPaging = getState().grouping.subTableAllPaging.slice();

            _subTableAllLoading[param.record.key] = true;
            if (_subTableAllPaging[param.record.key]) {
                //有搜索条件
                // _subTableAllPaging[param.record.key];
                _subTableAllPaging[param.record.key]['paging']['pageParams']['pageIndex'] = param.page ? param.page : 0;
                _subTableAllPaging[param.record.key]['paging']['pageParams']['pageSize'] = param.size ? param.size : _subTableAllPaging[param.record.key]['paging']['pageParams']['pageSize'];
            } else {
                //没有搜索条件
                _subTableAllPaging[param.record.key] = {
                    paging: {
                        pageParams: {
                            pageIndex: 0,
                            pageSize: 10
                        },
                        groupParams: {
                            groupList: []
                        },
                        whereParams: {
                            whereParamsList: []
                        },
                        orderParams: {
                            orderParamsList: []
                        }
                    },
                    pageParams: {
                        pageIndex: 0,
                        total: 0,
                        totalPages: 0
                    }
                }
            }
            _subTableAllPaging[param.record.key].paging.whereParams.whereParamsList = Array.from(getState().grouping.queryParam.groupParams.groupList, (item, i) => {
                return {
                    "key": item,
                    "value": conditionConvertValue(param.record['value'])[i],//TO DO: 处理搜索条件拆分
                    "condition": "eq"
                }
            })
            //与最上方的搜索条件进行组合
            let _pubParamsList = getState().grouping.queryParam.whereParams.whereParamsList.slice();
            _subTableAllPaging[param.record.key].paging.whereParams.whereParamsList = _pubParamsList.concat(_subTableAllPaging[param.record.key].paging.whereParams.whereParamsList);

            actions.grouping.updateState({ subTableAllLoading: _subTableAllLoading, subTableAllPaging: _subTableAllPaging });
            let {result} = processData(await api.loadSubTableList(_subTableAllPaging[param.record.key]['paging']));//返回数据
            const {data:res}=result;
            let _subTableAllData = getState().grouping.subTableAllData.slice();
            if (res) {
                _subTableAllData[param.record.key] = resultDataAdditional(res.content);//处理缺少key的数据，保存store
                _subTableAllPaging[param.record.key]['pageParams'] = {
                    pageIndex: res.number + 1,
                    totalPages: res.totalPages,
                    total: res.totalElements,
                }
                _subTableAllLoading[param.record.key] = false;
                actions.grouping.updateState({ subTableAllPaging: _subTableAllPaging, subTableAllData: _subTableAllData, subTableAllLoading: _subTableAllLoading });
            }
        },
        /**
         * 清楚子表指定下标的数据
         * @param {*} param
         * @param {*} getState
         */
        clearSubTable(param, getState) {
            let _subTableAllData = getState().grouping.subTableAllData.slice();
            _subTableAllData[param.key] = [];
            actions.grouping.updateState({ subTableAllData: _subTableAllData });
        }
    }
};
