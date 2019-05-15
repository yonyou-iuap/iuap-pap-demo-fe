import {actions} from "mirrorx";
// 引入services，如不需要接口请求可不写
import * as api from "./service";
// 接口返回数据公共处理方法，根据具体需要
import {processData, initStateObj, structureObj, Error, getCookie,deepClone} from "utils";

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
                ...deepClone(data)
            };
        },

        /**
         * 纯函数 合并 initialState
         * @param {*} state
         * @param {*} data
         */
        // initState(state, data) { //更新state
        //     const assignState = deepAssign(state, data);
        //     return (
        //       assignState
        //     );
        // },

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
            let {result} = processData(await api.getList(param));
            let {data: resPassenger} = result;
            let {content = []} = resPassenger || {};

            if (content.length > 0) {
                // 获取子表数据
                const passengerObj = structureObj(resPassenger, param);
                // 更新主表数据
                actions.masterDetailMany.updateState({passengerObj, searchParam: param});

                actions.masterDetailMany.loadSubList()
            } else {
                let {travelingObj, emergencyObj, passengerObj} = getState().masterDetailMany;
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
            let state = getState().masterDetailMany;
            let { tabKey, passengerObj: {list}, passengerIndex} = state;
            if (tabKey !== 'uploadFill' && list.length > 0) {
                let passenger = list[passengerIndex];
                let subObj = state[`${tabKey}Obj`];
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
                    let {result: { data: res }} = processData(await apiService(_param));
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
            let {btnFlag} = param;
            let status = null;
            delete param.btnFlag; //删除标识字段
            if (btnFlag === 0) { // 添加数据
                let {result} = processData(await api.savePassenger(param), '添加成功');
                status = result.status;
            }
            if (btnFlag === 1) { // 修改数据
                let {result} = processData(await api.updatePassenger(param), '修改成功');
                status = result.status;
            }

            if (status === 'success') { // 如果不判断是会报错，param参数有错
                let {
                    passengerObj: {pageSize} ,
                    searchParam: {search_contactName}
                } = getState().masterDetailMany;
                let param = {pageIndex: 0, pageSize, search_contactName}; // 获取主表信息
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
            let {btnFlag} = param;
            let status;
            delete param.btnFlag; //删除标识字段
            if (btnFlag === 0) { // 添加数据
                let {result} = processData(await api.saveTraveling(param), '保存成功');
                status = result.status;
            }
            if (btnFlag === 1) { // 修改数据
                let {result} = processData(await api.updateTraveling(param), '修改成功');
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
            let {btnFlag} = param;
            let status;
            delete param.btnFlag; //删除标识字段
            if (btnFlag === 0) { // 添加数据
                let {result} = processData(await api.saveEmergency(param), '保存成功');
                status = result.status;
            }
            if (btnFlag === 1) { // 修改数据
                let {result} = processData(await api.updateEmergency(param), '修改成功');
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
            let {id} = param;
            let {result}=processData(await api.delPassenger([{id}]), '删除成功');
            let {status}=result;
            if(status==='success'){
                // 获取表pageSize;
                let {passengerObj} = getState().masterDetailMany;
                let {pageSize} = passengerObj;
                let initPage = {pageIndex: 0, pageSize};
                actions.masterDetailMany.loadList(initPage);
            }
        },


        /**
         * 删除子表 Emergency 数据
         * @param {*} param
         * @param {*} getState
         */
        async delEmergency(param, getState) {
            let {id} = param;
            let {result}=processData(await api.delEmergency([{id}]), '删除成功');
            let {status}=result;
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
            let {id} = param;
            let {result}=processData(await api.delTraveling([{id}]), '删除成功');
            let {status}=result;
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
            let tenantid =  await api.getTenant;
            let {data:res}=result;
            if (!res || !res.res_code) {
                return false;
            }
            await api.printDocument({
                tenantId: tenantid,
                printcode: res['res_code'],
                serverUrl: `${GROBAL_HTTP_CTX}/passenger/dataForPrint`,
                params: encodeURIComponent(JSON.stringify(param.printParams)),
                sendType: 'post'
            })
        },
    }
};
