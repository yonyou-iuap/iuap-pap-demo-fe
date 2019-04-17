import {actions} from "mirrorx";
// 引入services，如不需要接口请求可不写
import * as api from "./service";
// 接口返回数据公共处理方法，根据具体需要
import {processData, initStateObj, structureObj, Error, getCookie} from "utils";

/**
 *          btnFlag为按钮状态，新增、修改是可编辑，查看详情不可编辑，
 *          新增表格为空
 *          修改需要将行数据带上并显示在卡片页面
 *          查看详情携带行数据但是表格不可编辑
 *          0表示新增、1表示编辑，2表示查看详情 3提交
 *async loadList(param, getState) {
 *          rowData为行数据
 */

export default {
    // 确定 Store 中的数据模型作用域
    name: "masterDetailMany",
    // 设置当前 Model 所需的初始化 state
    initialState: {
        tabKey: "emergency", // table 页切换
        passengerIndex: 0, // 默认选中第一行
        showLoading: false,
        showEmergencyLoading: false,
        showTravelingLoading: false,
        searchParam: {},
        passengerObj: {
            list: [],
            pageIndex: 1,
            pageSize: 5,
            totalPages: 1,
            total: 0,
        },
        emergencyObj: {
            list: [],
            pageIndex: 1,
            pageSize: 10,
            totalPages: 1,
            total: 0,
        },
        travelingObj: {
            list: [],
            pageIndex: 1,
            pageSize: 10,
            totalPages: 1,
            total: 0,
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
        },

        /**
         * 纯函数 合并 initialState
         * @param {*} state
         * @param {*} data
         */
        initState(state, data) { //更新state
            const assignState = deepAssign(state, data);
            return {
                ...assignState,
            };
        },

    },
    effects: {
        /**
         * 加载主列表数据
         * @param {*} param
         * @param {*} getState
         */
        async loadList(param, getState) {
            // 正在加载数据，显示加载 Loading 图标
            actions.masterDetailMany.updateState({showLoading: true});
            // 调用 getList 请求数据
            const {result} = processData(await api.getList(param));
            const {data: resPassenger} = result;
            const {content = []} = resPassenger || {};

            if (content.length > 0) {
                // 获取子表数据
                const passengerObj = structureObj(resPassenger, param);
                // 更新主表数据
                actions.masterDetailMany.updateState({passengerObj, searchParam: param});

                actions.masterDetailMany.loadSubList()
            } else {
                const {travelingObj, emergencyObj, passengerObj} = getState().masterDetailMany;
                actions.masterDetailMany.updateState({   // 如果请求出错,数据初始化
                        passengerObj: initStateObj(passengerObj),
                        emergencyObj: initStateObj(emergencyObj),
                        travelingObj: initStateObj(travelingObj),
                        passengerRow: {},
                        searchParam: param
                    }
                );
            }
            actions.masterDetailMany.updateState({showLoading: false, passengerIndex: 0});
        },

        /**
         * @function loadSubList 获取子表数据
         * @description 根据tabKey调用不通的后台接口
         * @param {Object} param 后台接口参数 可不不传默认{}
         * */

        async loadSubList(param = {}, getState) {
            const state = getState().masterDetailMany;
            const { tabKey, passengerObj: {list}, passengerIndex} = state;
            if (tabKey !== 'uploadFill' && list.length > 0) {
                const passenger = list[passengerIndex];
                const subObj = state[`${tabKey}Obj`];
                if (passenger) {
                    let _param = Object.assign({}, {
                        search_passengerId: passenger.id,
                        pageIndex: 0,
                        pageSize: subObj.pageSize
                    }, param);
                    let apiService = null;
                    let loadingKey = ''; //子表loading显示key
                    if (tabKey === 'emergency') {
                        const { searchParam: { search_contactName } } = state;
                        _param.search_contactName = search_contactName;
                        apiService = api.getEmergency;
                        loadingKey = 'showEmergencyLoading';
                    } else if (tabKey === 'traveling') {
                        apiService = api.getTraveling;
                        loadingKey = 'showTravelingLoading';
                    }
                    actions.masterDetailMany.updateState({[loadingKey]: true});
                    const {result: { data: res }} = processData(await apiService(_param));
                    let newObj = null;
                    if (res) {
                        newObj = structureObj(res, param);

                    } else {
                        newObj = initStateObj(subObj); // 如果请求出错,数据初始化
                    }
                    actions.masterDetailMany.updateState({
                        [`${tabKey}Obj`]: newObj,
                        [loadingKey]: false
                    });
                }
            }

        },


        async savePassenger(param, getState) {
            actions.masterDetailMany.updateState({showLoading: true});   // 正在加载数据，显示加载 Loading 图标
            const {btnFlag} = param;
            let status = null;
            delete param.btnFlag; //删除标识字段
            if (btnFlag === 0) { // 添加数据
                const {result} = processData(await api.savePassenger(param), '添加成功');
                status = result.status;
            }
            if (btnFlag === 1) { // 修改数据
                const {result} = processData(await api.updatePassenger(param), '修改成功');
                status = result.status;
            }

            if (status === 'success') { // 如果不判断是会报错，param参数有错
                const {
                    passengerObj: {pageSize} ,
                    searchParam: {search_contactName}
                } = getState().masterDetailMany;
                const param = {pageIndex: 0, pageSize, search_contactName}; // 获取主表信息
                actions.masterDetailMany.loadList(param);
            }
            actions.masterDetailMany.updateState({showLoading: false});
        },

        /**
         * getSelect：保存子表数据
         * @param {*} param
         * @param {*} getState
         */
        async saveTraveling(param, getState) {
            actions.masterDetailMany.updateState({showLoading: true});
            const {btnFlag} = param;
            let status = null;
            delete param.btnFlag; //删除标识字段
            if (btnFlag === 0) { // 添加数据
                const {result} = processData(await api.saveTraveling(param), '保存成功');
                status = result.status;
            }
            if (btnFlag === 1) { // 修改数据
                const {result} = processData(await api.updateTraveling(param), '修改成功');
                status = result.status;
            }
            if (status === 'success') {
                // 获取主表的id;
                // const {passengerIndex, passengerObj} = getState().masterDetailMany;
                // const {list} = passengerObj;
                // const {id: search_passengerId} = list[passengerIndex];
                // const {pageSize} = getState().masterDetailMany.travelingObj;
                // const param = {pageIndex: 0, pageSize, search_passengerId}; // 获取Traveling表信息
                actions.masterDetailMany.loadSubList();
            }
            actions.masterDetailMany.updateState({showLoading: false});

        },
        /**
         * getSelect：保存子表数据 紧急联系人
         * @param {*} param
         * @param {*} getState
         */
        async saveEmergency(param, getState) {

            actions.masterDetailMany.updateState({showLoading: true});
            const {btnFlag} = param;
            let status = null;
            delete param.btnFlag; //删除标识字段
            if (btnFlag === 0) { // 添加数据
                const {result} = processData(await api.saveEmergency(param), '保存成功');
                status = result.status;
            }
            if (btnFlag === 1) { // 修改数据
                const {result} = processData(await api.updateEmergency(param), '修改成功');
                status = result.status;
            }
            if (status === 'success') {
                // 获取主表的id;
                // const {passengerIndex, passengerObj, emergencyObj} = getState().masterDetailMany;
                // const {list} = passengerObj;
                // const {id: search_passengerId} = list[passengerIndex];
                //
                // const {pageSize} = emergencyObj;
                // // 带上子表信息
                // const {search_contactName} = getState().masterDetailMany.searchParam;
                // const param = {pageIndex: 0, pageSize, search_passengerId, search_contactName}; // 获取Emergency表信息
                actions.masterDetailMany.loadSubList();
            }
            actions.masterDetailMany.updateState({showLoading: false});
        },

        // /**
        //  * getSelect：通过id查询主表数据
        //  * @param {*} param
        //  * @param {*} getState
        //  */
        //
        // async queryPassenger(param, getState) {
        //     let res = await api.getList(param);
        //     const {data: {detailMsg: {data: {content}}}} = res;
        //     return content[0];
        // },
        //
        // /**
        //  * getSelect：通过id查询子表数据 紧急联系人
        //  * @param {*} param
        //  * @param {*} getState
        //  */
        //
        // async queryEmergency(param, getState) {
        //     let res = await api.getEmergency(param);
        //     const {data: {detailMsg: {data: {content}}}} = res;
        //     return content[0];
        // },
        //
        // /**
        //  * getSelect：通过id查询子表数据 traveling
        //  * @param {*} param
        //  * @param {*} getState
        //  */
        //
        // async queryTraveling(param, getState) {
        //     let res = await api.getTraveling(param);
        //     const {data: {detailMsg: {data: {content}}}} = res;
        //     return content[0];
        // },


        /**
         * 删除主表数据
         * @param {*} param
         * @param {*} getState
         */
        async delPassenger(param, getState) {
            const {id} = param;
            const {result}=processData(await api.delPassenger([{id}]), '删除成功');
            const {status}=result;
            if(status==='success'){
                // 获取表pageSize;
                const {passengerObj} = getState().masterDetailMany;
                const {pageSize} = passengerObj;
                const initPage = {pageIndex: 0, pageSize};
                actions.masterDetailMany.loadList(initPage);
            }
        },


        /**
         * 删除子表 Emergency 数据
         * @param {*} param
         * @param {*} getState
         */
        async delEmergency(param, getState) {
            const {id} = param;
            const {result}=processData(await api.delEmergency([{id}]), '删除成功');
            const {status}=result;
            if(status==='success'){
                //获取表pageSize;
                // const {emergencyObj} = getState().masterDetailMany;
                // const {pageSize} = emergencyObj;
                // const initPage = {pageIndex: 0, pageSize, search_passengerId};
                actions.masterDetailMany.loadSubList();
            }
        },


        /**
         * 删除子表 Traveling 数据
         * @param {*} param
         * @param {*} getState
         */
        async delTraveling(param, getState) {
            const {id} = param;
            const {result}=processData(await api.delTraveling([{id}]), '删除成功');
            const {status}=result;
            if(status==='success'){
                // 获取表pageSize;
                // const {travelingObj} = getState().masterDetailMany;
                // const {pageSize} = travelingObj;
                // const initPage = {pageIndex: 0, pageSize, search_passengerId};
                actions.masterDetailMany.loadSubList();
            }
        },

        /**
         *
         *
         * @param {*} param
         * @returns
         */
        async printDocument(param) {

            let {result} = processData(await api.queryPrintTemplateAllocate(param.queryParams), '');
            const {data:res}=result;
            if (!res || !res.res_code) {
                return false;
            }
            await api.printDocument({
                tenantId: getCookie('tenantid'),
                printcode: res['res_code'],
                serverUrl: `${GROBAL_HTTP_CTX}/passenger/dataForPrint`,
                params: encodeURIComponent(JSON.stringify(param.printParams)),
                sendType: 'post'
            })
        },
    }
};
