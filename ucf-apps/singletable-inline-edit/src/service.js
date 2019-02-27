/**
 * request服务请求类
 */

import request from "utils/request";
import axios from "axios";
import { deepClone } from 'utils';
//定义接口地址
const URL = {
    "GET_LIST": `${GROBAL_HTTP_CTX}/inline_allowances/list`,
    "GET_ADD": `${GROBAL_HTTP_CTX}/inline_allowances/saveMultiple`,
    "GET_UPDATE": `${GROBAL_HTTP_CTX}/inline_allowances/updateMultiple`,
    "GET_DELETE": `${GROBAL_HTTP_CTX}/inline_allowances/deleteBatch`,
    "GET_LIST_BY_COL": `${GROBAL_HTTP_CTX}/inline_allowances/listByColumn`,
    "GET_TOEXPORTEXCEL": `${GROBAL_HTTP_CTX}/inline_allowances/toExportExcel`
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
 * 添加数据
 * @param {Array} data 数组对象批量添加
 * @returns {Promise}
 */
export const adds = (data) => {
    return request(URL.GET_ADD, {
        method: "post",
        data
    });
}

/**
 * 删除数据
 * @param {Array} data 数组对象批量删除ids
 * @returns {Promise}
 */
export const removes = (data) => {
    return request(URL.GET_DELETE, {
        method: "post",
        data
    });
}

/**
 * 修改数据
 * @param {Array} data 数组对象批量修改id+ts
 * @returns {Promise}
 */
export const updates = (data) => {
    return request(URL.GET_UPDATE, {
        method: "post",
        data
    });
}

/**
 * 获取行过滤的下拉数据
 *   @param {*} params
 */
export const getListByCol = (param) => {
    return request(URL.GET_LIST_BY_COL, {
        method: "get",
        param
    });
}



const selfURL = window[window.webkitURL ? 'webkitURL' : 'URL'];
let exportData = (url, data) => {
    axios({
        method: 'post',
        url: url,
        data: data,
        responseType: 'blob'
    }).then((res) => {
        const content = res.data;
        const blob = new Blob([content]);
        const fileName = "导出数据.xls";

        let elink = document.createElement('a');
        if ('download' in elink) {
            elink.download = fileName;
            elink.style.display = 'none';
            elink.href = selfURL['createObjectURL'](blob);
            document.body.appendChild(elink);

            // 触发链接
            elink.click();
            selfURL.revokeObjectURL(elink.href);
            document.body.removeChild(elink)
        } else {
            navigator.msSaveBlob(blob, fileName);
        }
    })
}