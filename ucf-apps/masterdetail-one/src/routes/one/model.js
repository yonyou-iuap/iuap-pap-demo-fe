import { actions } from "mirrorx";
// 引入services，如不需要接口请求可不写
import * as api from "./service";
// 接口返回数据公共处理方法，根据具体需要
import { processData, deepAssign, structureObj, initStateObj, Error ,deepClone} from "utils";

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
    name: "masterDetailOne",
    // 设置当前 Model 所需的初始化 state
    initialState: {
        cacheData: [],//新增、修改缓存原始数据
        tableData: [],//表格最终处理渲染的数据
        selectData: [],//选中的状态数组
        status: 'view',//表格状态：view=查看、edit=编辑、new=新增、del=删除
        queryParams: {},//查询条件参数
        selectIndex: 0,
        showLoading: false,
        showDetailLoading: false,
        showModalCover: false,
        orderObj: {
            list: [],
            pageIndex: 1,
            pageSize: 5,
            totalPages: 1,
            total: 0,
        },
        detailObj: {
            list: [],
            pageIndex: 1,
            pageSize: 10,
            totalPages: 1,
            total: 0,
        },
        searchParam: {},
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
        //     return {
        //         ...assignState,
        //     };
        // },

    },
    effects: {

        /**
         * 加载主列表数据
         * @param {*} param
         * @param {*} getState
         */
        async loadList(param, getState) {

            actions.masterDetailOne.updateState({ showLoading: true });   // 正在加载数据，显示加载 Loading 图标
            let { result } = processData(await api.getList(param));  // 调用 getList 请求数据
            let { data: res } = result;
            // 默认选中第一条
            actions.masterDetailOne.updateState({ showLoading: false, selectIndex: 0 });
            let { content = [] } = res || {};

            if (content.length > 0) { // 获取子表数据
                let orderObj = structureObj(res, param);
                actions.masterDetailOne.updateState({ orderObj, searchParam: param }); // 更新主表数据
                let { pageSize } = getState().masterDetailOne.detailObj;
                let { id: search_orderId } = content[0];
                let paramObj = { pageSize, pageIndex: 0, search_orderId };
                actions.masterDetailOne.loadOrderDetailList(paramObj);
            } else {
                // 如果请求出错,数据初始化
                let { orderObj, detailObj } = getState().masterDetailOne;
                actions.masterDetailOne.updateState({
                        orderObj: initStateObj(orderObj),
                        detailObj: initStateObj(detailObj),
                    }
                );
            }

        },


        /**
         * 加载子表信息
         * @param param
         * @param getState
         * @returns {Promise<void>}
         */
        async loadOrderDetailList(param, getState) {
            // 调用 getList 请求数据
            actions.masterDetailOne.updateState({ showDetailLoading: true });
            let { result } = processData(await api.getOrderDetail(param));  // 调用 getList 请求数据
            actions.masterDetailOne.updateState({ showDetailLoading: false });
            let { data: res } = result;
            if (res) {
                let detailObj = structureObj(res, param);
                actions.masterDetailOne.updateState({ detailObj }); // 更新主表数据
            } else {
                // 如果请求出错,数据初始化
                let { detailObj } = getState().masterDetailOne;
                actions.masterDetailOne.updateState({ detailObj: initStateObj(detailObj) });
            }
        },




        /**
         * 删除主表数据
         * @param {*} param
         * @param {*} getState
         */
        async delOrder(param, getState) {
            actions.masterDetailOne.updateState({ showLoading: true });
            let { result } = processData(await api.delOrder([param]), '删除成功');
            actions.masterDetailOne.updateState({ showLoading: false });
            let { status } = result;
            if (status === 'success') {
                // 获取 pageSize
                let { orderObj } = getState().masterDetailOne;
                let { pageSize } = orderObj;
                let initPage = { pageIndex: 0, pageSize };
                await actions.masterDetailOne.updateState({
                    selectIndex: 0
                })
                actions.masterDetailOne.loadList(initPage);
            }
        },

    }
};
