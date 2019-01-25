
import request from "utils/request";
import { deepClone } from 'utils';
//定义接口地址
const URL = {
    "GET_LIST": `${GROBAL_HTTP_CTX}/allowances/list`,
    "GET_TEMPLATE_LIST": `${GROBAL_HTTP_CTX}/origin_model/list`,
    "DELETE_TEMPLATE":`${GROBAL_HTTP_CTX}/origin_model/deleteBatch`,
    "SAVE_TEMPLATE":`${GROBAL_HTTP_CTX}/origin_model/save`,
}

/**
 * 获取列表
 * @param {*} params
 */
export const getList = (param) => {
    let newParam = Object.assign({},param),
    pageParams = deepClone(newParam.pageParams);
    delete newParam.pageParams;
    return request(URL.GET_LIST, {
        method: "post",
        data : newParam,
        param : pageParams
    });
}

/**
 * 获取列表
 * @param {*} params
 */
export const getTemplateList = (param) => {
    return request(URL.GET_TEMPLATE_LIST, {
        method: "get",
        param
    });
}

/**
 * 删除模板数据
 * @param {*} params
 */
export const deleteTemplate = (params) => {
    return request(URL.DELETE_TEMPLATE, {
        method: "post",
        data: params
    });
}
/**
 * 保存模板数据
 */
export const saveTemplate = (params) => {
    return request(URL.SAVE_TEMPLATE, {
        method: "post",
        data: params
    });
}