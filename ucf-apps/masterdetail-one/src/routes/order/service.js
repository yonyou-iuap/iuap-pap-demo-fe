import request from "utils/request";
//定义接口地址
const URL = {

    "DEL_ORDER_DETAIL":  `${GROBAL_HTTP_CTX}/purchase_order_detail/deleteBatch`, // 删除子表
    "SAVE_ASSO":  `${GROBAL_HTTP_CTX}/purchase_order/saveAssoVo`, //保存
    "UPDATE_ASSO":  `${GROBAL_HTTP_CTX}/purchase_order/updateAssoVo`, //保存
    "GET_USER": `${GROBAL_HTTP_CTX}/purchase_order/listForAdd`, //保存
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
 * 修改
 * @param {*} params
 */
export const updateAsso = (params) => {
    return request(URL.UPDATE_ASSO, {
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

