import {actions} from "mirrorx";
// 引入services，如不需要接口请求可不写
import * as api from "./service";
// 接口返回数据公共处理方法，根据具体需要
import {processData,deepClone} from "utils";


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
            // groupParams: [],
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
                ...deepClone(data)
            };
        }
    },
    effects: {
        /**
         * 加载列表数据
         * @param {*} param
         * @param {*} getState
         */
        async loadList(param, getState) {
            // 正在加载数据，显示加载 Loading 图标
            actions.popupEdit.updateState({showLoading: true});
            // 调用 getList 请求数据
            let _param = param || getState().popupEdit.queryParam;
            let {result} = processData(await api.getList(_param));
            let {data:res}=result;
            let _state = {
                showLoading: false,
                queryParam: _param //更新搜索条件
            }

            if (res) {
                _state = Object.assign({}, _state, {
                    list: res.content,
                    pageIndex: res.number + 1,
                    totalPages: res.totalPages,
                    total: res.totalElements,
                    pageSize: res.size,
                    rowPopData: (res.content.length > 0 ? res.content[0] : {}),
                })
            }
            actions.popupEdit.updateState(_state);
        },

        /**
         * 删除table数据
         * @param {*} id
         * @param {*} getState
         */
        async removeList(param, getState) {
            actions.popupEdit.updateState({ showLoading: true });
            let {id} = param;
            let mirState = getState();
            let { localeData } = mirState.intl;
            let msg = localeData['js.sin.src5.0001'] || '删除成功';
            let { result } = processData(await api.deleteList([{id}]),msg);
            if (result.status === "success") {
                let state = getState().popupEdit;
                let { queryParam, list, totalPages } = state;
                // 调用 getList 请求数据
                let { pageParams: { pageIndex } } = queryParam;
                if ( pageIndex > 0 && pageIndex + 1 === totalPages && list.length === 1) {
                    queryParam.pageParams.pageIndex = pageIndex - 1;
                }

                actions.popupEdit.loadList(queryParam);
            } else {
                actions.popupEdit.updateState({ showLoading: false});
            }
        },


        async saveOrder(param, getState) {//保存或许更新
            actions.popupEdit.updateState({showLoading: true});
            let status = null;
            let {btnFlag} = param;
            delete param.btnFlag; //删除标识字段
            const mirState = getState();
            const { localeData } = mirState.intl;
            if (btnFlag === 0) { // 添加
                const msg = localeData['js.sin.src5.0002'] || '保存成功';
                let {result} = processData(await api.saveOrder(param), msg);
                status=result.status;

            }
            if (btnFlag === 1) { // 修改
                const msg = localeData['js.sin.src5.0003'] || '修改成功';
                let {result} = processData(await api.updateOrder(param), msg);
                status = result.status;
            }
            if (status==="success") {
                actions.popupEdit.loadList();
            }else {
                actions.popupEdit.updateState({showLoading: false});
            }
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
