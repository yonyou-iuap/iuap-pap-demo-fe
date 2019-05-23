import { actions } from "mirrorx";
// 引入services，如不需要接口请求可不写
import * as api from "./service";
import * as oneApi from '../one/service';
import * as commonApi from "../../common/service";
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

const initialState = {
    status: 'view',//表格状态：view=查看、edit=编辑、new=新增、del=删除
    showLoading: false,
    showDetailLoading: false,
    showModalCover: false,
    searchParam: {},
    queryParent: {},
    queryDetailObj: {
        list: [],
        pageIndex: 1,
        pageSize: 10,
        totalPages: 1,
        total: 0,
    },
}

export default {
    // 确定 Store 中的数据模型作用域
    name: "masterDetailOrder",
    // 设置当前 Model 所需的初始化 state
    initialState: initialState,
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
        initState(state, data) { //更新state
            if (data) {
                let _data = deepClone(data);
                return {
                    ...state, ..._data
                };
            } else {
                return initialState
            }
        },

    },
    effects: {

        /**
         * setQueryParent 当从主页跳转过来的时候设置 queryParent
         * */
        setQueryParent(orderInfo) {
            if (orderInfo) {
                actions.masterDetailOrder.updateState({ queryParent: orderInfo });
                let paramObj = { pageSize: 10, pageIndex: 0, search_orderId: orderInfo.id };
                actions.masterDetailOrder.queryChild(paramObj);
            }
        },

        async getQueryParent(param, getState) {
            actions.masterDetailOrder.updateState({ showLoading: true });   // 正在加载数据，显示加载 Loading 图标
            let { result } = processData(await oneApi.getList(param));  // 调用 getList 请求数据
            actions.masterDetailOrder.updateState({ showLoading: false });
            let { data: res, status } = result;

            // 跳转消息中心
            // let { search_from } = param;
            // if (status !== 'success' && search_from) {
            //     window.history.go(-1);
            // }

            let { content = [] } = res || {};
            let queryParent = content[0] ? content[0] : {};
            actions.masterDetailOrder.updateState({ queryParent });
            if (content.length > 0) { // 获取子表数据
                let { search_id: search_orderId } = param;
                // const {pageSize} = getState().masterDetailOne.queryDetailObj;
                let paramObj = { pageSize: 10, pageIndex: 0, search_orderId };
                actions.masterDetailOrder.queryChild(paramObj);
            } else {
                // 如果请求出错,数据初始化
                let { queryDetailObj } = getState().masterDetailOrder;
                actions.masterDetailOne.updateState({
                    queryDetailObj: initStateObj(queryDetailObj),
                    showModalCover: true,
                });
            }
        },

        /**
         * getSelect：通过id查询子表数据 紧急联系人
         * @param {*} param
         * @param {*} getState
         */

        async queryChild(param, getState) {

            actions.masterDetailOrder.updateState({ showDetailLoading: true });
            let { result } = processData(await commonApi.getOrderDetail(param));  // 调用 getList 请求数据
            actions.masterDetailOrder.updateState({ showDetailLoading: false });
            let { data: res } = result;
            if (res) {
                let queryDetailObj = structureObj(res, param);
                actions.masterDetailOrder.updateState({ queryDetailObj }); // 更新 子表
            } else {
                // 如果请求出错,数据初始化
                let { queryDetailObj } = getState().masterDetailOrder;
                actions.masterDetailOrder.updateState({ queryDetailObj: initStateObj(queryDetailObj) });
            }

        },

        /**
         * 添加主表和子表
         * @param param
         * @param getState
         * @returns {Promise<void>}
         */
        async adds(param, getState) {
            actions.masterDetailOrder.updateState({ showLoading: true });
            let { result } = processData(await api.saveAsso(param), '保存成功');
            let res = result?result.data:null;
            // let { data: res } = result;
            actions.masterDetailOrder.updateState({ showLoading: false, status: 'view' });
            if (res) {
                actions.routing.push({ pathname: '/' });
            }
            return result;
        },

         /**
         * 修改主表和子表
         * @param param
         * @param getState
         * @returns {Promise<void>}
         */
        async updateAsso(param, getState) {
            actions.masterDetailOrder.updateState({ showLoading: true });
            let { result } = processData(await api.updateAsso(param), '修改成功');
            // let { data: res } = result;
            let res = result?result.data:null;
            actions.masterDetailOrder.updateState({ showLoading: false, status: 'view' });
            if (res) {
                actions.routing.push({ pathname: '/' });
            }
            return result;
        },

        /**
         * 删除子表数据
         * @param {*} param
         * @param {*} getState
         */
        async delOrderDetail(param, getState) {
            actions.masterDetailOrder.updateState({ showLoading: true });
            let { result } = processData(await api.delOrderDetail(param), '删除成功');
            actions.masterDetailOrder.updateState({ showLoading: false });
            return result;
        },
    }
};
