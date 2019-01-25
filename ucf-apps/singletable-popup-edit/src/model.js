import {actions} from "mirrorx";
// 引入services，如不需要接口请求可不写
import * as api from "./service";
// 接口返回数据公共处理方法，根据具体需要
import {processData} from "utils";


/**
 *          btnFlag为按钮状态，新增、修改是可编辑，查看详情不可编辑，
 *          新增表格为空
 *          修改需要将行数据带上并显示在卡片页面
 *          查看详情携带行数据但是表格不可编辑
 *          0表示新增、1表示修改，2表示查看详情 3提交
 *async loadList(param, getState) {
 *          rowData为行数据
 */


export default {
    // 确定 Store 中的数据模型作用域
    name: "popupEdit",
    initialState: {
        rowPopData: {},
        showLoading: false,
        list: [],
        pageIndex: 0,
        pageSize: 25,
        totalPages: 1,
        total: 0,
        queryParam: {
            pageParams: {
                pageIndex: 0,
                pageSize: 25,
            },
            groupParams: [],
            whereParams: []
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
                ...data
            };
        }
    },
    effects: {
        /**
         * 加载列表数据
         * @param {*} param
         * @param {*} getState
         */
        async loadList(param = {}, getState) {
            // 正在加载数据，显示加载 Loading 图标
            await actions.popupEdit.updateState({showLoading: true});
            // 调用 getList 请求数据
            let {result} = processData(await api.getList(param));
            const {data:res}=result;
            actions.popupEdit.updateState({
                showLoading: false,
                queryParam: param //更新搜索条件
            });
            if (res) {
                actions.popupEdit.updateState({
                    list: res.content,
                    pageIndex: res.number + 1,
                    totalPages: res.totalPages,
                    total: res.totalElements,
                    pageSize: res.size,
                    rowPopData: (res.content.length > 0 ? res.content[0] : {}),
                });
            }
        },

        /**
         * 删除table数据
         * @param {*} id
         * @param {*} getState
         */
        async removeList(param, getState) {
            actions.popupEdit.updateState({ showLoading: true });
            const {id} = param;
            let { result } = processData(await api.deleteList([{id}]),'删除成功');
            actions.popupEdit.updateState({ showLoading: false});
            return result;
        },


        async saveOrder(param, getState) {//保存或许更新
            actions.popupEdit.updateState({showLoading: true});
            let queryParam = getState().popupEdit.queryParam;
            let status = null;
            const {btnFlag} = param;
            delete param.btnFlag; //删除标识字段
            if (btnFlag === 0) { // 添加
                let {result} = processData(await api.saveOrder(param), '保存成功');
                status=result.status;

            }
            if (btnFlag === 1) { // 修改
                let {result} = processData(await api.updateOrder(param), '修改成功');
                status = result.status;
            }
            if (status==="success") {
                actions.popupEdit.loadList(queryParam);
            }
            actions.popupEdit.updateState({showLoading: false});
        },

        // /**queryDetail
        //  *
        //  * @param param
        //  * @param getState
        //  * @returns {Promise<{}>}
        //  */
        // async queryDetail(param, getState) {
        //     let {result: {}} = processData(await api.getDetail(param));
        //     const {content: []} = result.data || [];
        //     return content[0] ? content[0] : {};
        // },

    }
};
