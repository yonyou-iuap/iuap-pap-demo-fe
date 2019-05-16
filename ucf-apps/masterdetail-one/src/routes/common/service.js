/*用于定义两个以上页面公用的service*/
import request from "utils/request";
//定义接口地址
const URL = {
    "GET_ORDER_DETAIL":  `${GROBAL_HTTP_CTX}/purchase_order_detail/getOrderDetail`, // 获取子表
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
