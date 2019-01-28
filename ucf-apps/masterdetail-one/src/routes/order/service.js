import request from "utils/request";
//定义接口地址
const URL = {
    "GET_LIST":  `${GROBAL_HTTP_CTX}/purchase_order/list`, // 获取主表
    "GET_ORDER_DETAIL":  `${GROBAL_HTTP_CTX}/purchase_order_detail/list`, // 获取子表
    "DEL_ORDER":  `${GROBAL_HTTP_CTX}/purchase_order/deleAssoVo`, // 删除主表
    "DEL_ORDER_DETAIL":  `${GROBAL_HTTP_CTX}/purchase_order_detail/deleteBatch`, // 删除子表
    "SAVE_ASSO":  `${GROBAL_HTTP_CTX}/purchase_order/saveAssoVo`, //保存
    "GET_USER": `${GROBAL_HTTP_CTX}/purchase_order/listForAdd`, //保存

}

/**
 * 获取主列表
 * @param {*} params
 */
export const getList = (param) => {
    return request(URL.GET_LIST, {
        method: "get",
        param
    });
}

/**
 * 获取子列表
 * @param {*} params
 */
export const getOrderDetail = (param) => {
    return request(URL.GET_ORDER_DETAIL, {
        method: "get",
        param
    });
}

/**
 * 保存
 * @param {*} params
 */
export const saveAsso = (params) => {
    return request(URL.SAVE_ASSO, {
        method: "post",
        data:params
    });
}


/**
 * 删除数据
 * @param {*} params
 */
export const delOrder = (params) => {
    return request(URL.DEL_ORDER, {
        method: "post",
        data:params
    });
}

/**
 * 删除子表数据
 * @param {*} params
 */
export const delOrderDetail = (params) => {
    return request(URL.DEL_ORDER_DETAIL, {
        method: "post",
        data:params
    });
}


/**
 * 获取申请人信息
 * @param {*} params
 */
export const getUser = (param) => {
    return request(URL.GET_USER, {
        method: "get",
        param
    });
}

