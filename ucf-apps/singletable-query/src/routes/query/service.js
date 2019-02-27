import request from "utils/request";
import { deepClone } from 'utils';
//定义接口地址
const URL = {
    "GET_LIST": `${GROBAL_HTTP_CTX}/query_allowances/list`,
    "GET_LIST_BY_COL": `${GROBAL_HTTP_CTX}/query_allowances/distinct`,
}

/**
 * 获取列表
 * @param {*} params
 */
export const getList = (param) => {
    let newParam = Object.assign({}, param),
        pageParams = deepClone(newParam.pageParams);

    delete newParam.pageParams;

    return request(URL.GET_LIST, {
        method: "post",
        data: newParam,
        param: pageParams
    });
}

/**
 * 获取行过滤的下拉数据
 *   @param {*} params
 */
export const getListByCol = (param) => {
    return request(URL.GET_LIST_BY_COL, {
        method: "post",
        data: param
    });
}