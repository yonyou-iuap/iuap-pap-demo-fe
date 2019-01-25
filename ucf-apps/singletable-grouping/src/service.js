
import request from "utils/request";
//定义接口地址
const URL = {
    "GET_LIST": `${GROBAL_HTTP_CTX}/ALLOWANCES/listAllByGroupsAndSorts`,
    "GET_LIST_NEW":`${GROBAL_HTTP_CTX}/ALLOWANCES/listAllByGroupsAndSortsNewPage`
}

/**
 * 获取聚合主列表
 */
export const loadMasterTableList = (data = {}) => {
    return request(URL.GET_LIST, {
        method: "POST",
        data
    });
}

/**
 * 获取聚合子列表
 */
export const loadSubTableList = (data = {}) => {
    return request(URL.GET_LIST, {
        method: "POST",
        data
    });
}

/**
 * 获得分组数据
 */
export const loadGroupTableList = (data = {}) => {
    return request(URL.GET_LIST_NEW, {
        method: "POST",
        data
    });
}




