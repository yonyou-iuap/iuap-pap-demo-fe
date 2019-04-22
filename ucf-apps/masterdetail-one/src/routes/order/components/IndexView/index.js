import React, { Component } from "react";
import { actions } from "mirrorx";
import { Loading, Icon, Modal } from "tinper-bee";
import queryString from 'query-string';
import moment from "moment";
import FormList from 'components/FormList';
import Grid from 'components/Grid';
import { BpmTaskApprovalWrap } from 'yyuap-bpm';
import Header from "components/Header";
import Button from 'components/Button';
import Alert from 'components/Alert';
import Child from '../OrderChild';
import FactoryComp from './FactoryComp';

import { uuid, deepClone, getCookie, Info, getPageParam } from "utils";
import './index.less'

let titleArr = ["新增", "修改", "详情"];

class IndexView extends Component {
    constructor(props) {
        super(props);
        const searchObj = queryString.parse(props.location.search);
        let { btnFlag: flag, search_id: searchId, from, ...oterSearch } = searchObj;
        const btnFlag = Number(flag);

        this.state = {
            showPopAlert: false,
            showPopBackVisible: false,
            searchId: searchId || "",
            btnFlag: btnFlag,
            selectData: [],
            ...oterSearch
        }
        this.validateKeys = [
            "detailCount",
            "detailDate",
            "detailModel",
            "detailName"
        ]
    }

    //缓存数据
    oldData = []

    componentDidMount() {
        const searchObj = queryString.parse(this.props.location.search);
        let {btnFlag: flag, search_id: searchId, from} = searchObj;
        const { queryParent } = this.props;
        //非新增状态 当 没有提前设置主数据时 根据 search_id 向后台请求主表数据
        if (!queryParent.id && flag > 0) {
            const btnFlag = Number(flag);
            this.setState({btnFlag, searchId});
            if (btnFlag && btnFlag > 0) {
                const param = {search_id: searchId, search_from: from};
                actions.masterDetailOrder.getQueryParent(param); // 获取主表
            }
        }
    }

    componentWillUnmount() {
        const { history } = this.props;
        if (history.action === "POP") {
            actions.masterDetailOrder.initState();
        }
    }

    /**
     * 同步修改后的数据不操作State
     *
     * @param {string} field 字段
     * @param {any} value 值
     * @param {Number} index 位置
     */
    changeAllData = (field, value, index) => {
        this.oldData[index][field] = value;
    }

    /**
     * 处理验证后的状态
     *
     * @param {string} field 校验字段
     * @param {Object} flag 是否有错误
     * @param {Number} index 位置
     */
    // onValidate = (field, flag, index) => {
    //     //只要是修改过就启用校验
    //     if(this.oldData.length>index){
    //         this.oldData[index][`_${field}Validate`] = (flag == null);
    //     }
    // }

    /**
     * 清空
     */
    clearQuery() {
        this.props.form.resetFields();
        actions.masterDetailOrder.initState({
            queryParent: {},
            queryDetailObj: { list: [], total: 0, pageIndex: 0 },
        });
    }

    detailColumn = [
        {
            title: "物料名称",
            dataIndex: "detailName",
            key: "detailName",
            width: 200,
            render: (text, record, index) => {
                return <FactoryComp
                    type='detailName'//物料名称业务组件类型
                    value={text}//初始化值
                    field='detailName'//修改的字段
                    index={index}//字段的行号
                    required={true}//必输项
                    record={record}//记录集用于多字段处理
                    onChange={this.changeAllData}//回调函数
                // onValidate={this.onValidate}//校验的回调
                />
            }
        },
        {
            title: "物料型号",
            dataIndex: "detailModel",
            key: "detailModel",
            width: 200,
            render: (text, record, index) => {
                return <FactoryComp
                    type='detailModel'//物料型号业务组件类型
                    value={text}//初始化值
                    field='detailModel'//修改的字段
                    index={index}//字段的行号
                    required={true}//必输项
                    record={record}//记录集用于多字段处理
                    onChange={this.changeAllData}//回调函数
                // onValidate={this.onValidate}//校验的回调
                />
            }

        },
        {
            title: "物料数量",
            dataIndex: "detailCount",
            key: "detailCount",
            width: 200,
            className: 'column-number-right ', // 靠右对齐
            render: (text, record, index) => {
                return <FactoryComp
                    type='detailCount'//物料数量业务组件类型
                    value={text}//初始化值
                    field='detailCount'//修改的字段
                    index={index}//字段的行号
                    required={true}//必输项
                    record={record}//记录集用于多字段处理
                    onChange={this.changeAllData}//回调函数
                // onValidate={this.onValidate}//校验的回调
                />
            }
        }, {
            title: "需求日期",
            dataIndex: "detailDate",
            key: "detailDate",
            width: 200,
            render: (text, record, index) => {
                return <FactoryComp
                    type='detailDate'//需求日期业务组件类型
                    value={text}//初始化值
                    field='detailDate'//修改的字段
                    index={index}//字段的行号
                    required={true}//必输项
                    record={record}//记录集用于多字段处理
                    onChange={this.changeAllData}//回调函数
                // onValidate={this.onValidate}//校验的回调
                />
            }
        },

    ];

    /**
     * 新增行数据
     */
    handlerNew = () => {
        let list = this.oldData;
        const queryDetailObj = deepClone(this.props.queryDetailObj);

        let { list: queryDetailList } = queryDetailObj; // 获取子表数据
        // 如果是第一次添加，则从action取值
        if (list.length === 0) {
            list = queryDetailList;
        }
        // 行数据
        let tmp = {
            key: uuid(),
            _edit: true,
            _isNew: true,
            _checked: false,
            detailName: '',
            detailModel: '',
            detailCount: 1,
            detailDate: moment(),
            _detailNameValidate: false, // detailName默认验证没有通过
            _detailModelValidate: false,
            _detailCountValidate: true, // detailName默认验证通过
            _detailDateValidate: true,

        }
        list.unshift(tmp);//插入到最前
        //禁用其他checked
        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            if (!list[i]['_isNew']) {
                list[i]['_checked'] = false;
                list[i]['_status'] = 'new';

            }
        }
        //同步状态数据
        this.oldData = deepClone(list);

        //保存处理后的数据，并且切换操作态'新增'
        queryDetailObj.list = deepClone(list);
        this.setState({ selectData: [] }); //清空选中的数据
        actions.masterDetailOrder.updateState({ queryDetailObj, status: "new", rowEditStatus: false });
    }


    /**
     * 子表从其他状态切换到修改状态
     */
    onClickUpdate = () => {
        let list = this.oldData;
        const queryDetailObj = deepClone(this.props.queryDetailObj);

        let { list: queryDetailList } = deepClone(queryDetailObj); // 获取子表数据
        // 如果是第一次修改，则从action取值
        if (list.length === 0) {
            list = queryDetailList;
        }
        //当前行数据设置编辑态
        for (const index in list) {
            const item = list[index];

            item['_checked'] = false;
            item['_status'] = 'edit';
            item['_edit'] = true;
            item['_disable']  = true;
        }
        //同步状态数据
        this.oldData = deepClone(list);
        //保存处理后的数据，并且切换操作态'编辑'
        queryDetailObj.list = list;
        this.setState({ selectData: [] }); //清空选中的数据
        actions.masterDetailOrder.updateState({
            queryDetailObj: deepClone(queryDetailObj),
            status: "edit",
            rowEditStatus: false
        });
    }


    onClickDel = () => {
        const { selectData } = this.state;
        if (selectData.length === 0) {
            Info('请勾选数据后再删除');
        } else {
            this.setState({ showPopAlert: true });
        }
    }


    /**
     *
     * 删除子表选中的数据
     * @param {Number} type 1、取消 2、确定
     * @memberof Order
     */
    async confirmDel(type) {
        this.setState({ showPopAlert: false });
        if (type === 1) { // 确定
            const { selectData, searchId } = this.state;
            if (this.clearOldData()) {
                const { status } = await actions.masterDetailOrder.delOrderDetail(selectData);
                if (status === "success") {
                    actions.masterDetailOrder.queryChild({ search_orderId: searchId }); // 获取子表
                    this.oldData = []; //清空用于编辑和添加的缓存数据
                }
            }
        }
        this.setState({ showPopAlert: false });
    }

    /**
     * @description 判断选中的行数据中是否有从后端的数据，有则后端删除，没有则前端删除
     */
    clearOldData = () => {
        const queryDetailObj = deepClone(this.props.queryDetailObj);
        let { list } = queryDetailObj;
        const { selectData } = this.state;
        for (const elementSelect of selectData) {
            for (const [indexOld, elementOld] of list.entries()) {
                // 判断当前数据是否来自后端，如果是来自后端，后端删除,
                if (elementSelect.id && elementOld.id === elementSelect.id) {
                    return true;
                }
                // 判断当前数据是否新增，如果是新增，前端删除
                if (elementSelect.key && elementOld.key === elementSelect.key) {
                    list.splice(indexOld, 1);
                }
            }
        }
        this.oldData = list; //将数据加入缓存
        queryDetailObj.list = list;
        this.setState({ selectData: [] }); //清空选中的数据
        actions.masterDetailOrder.updateState({ queryDetailObj });  //更新action里的子表数据
        return false
    }


    /**
     *
     * 返回上一级弹框提示
     * @param {Number} type 1、取消 2、确定
     * @memberof Order
     */
    async confirmGoBack(type) {
        this.setState({ showPopBackVisible: false });
        if (type === 1) { // 确定
            this.clearQuery();
            actions.routing.replace({ pathname: '/' });
        }
    }

    /**
     * 返回
     * @returns {Promise<void>}
     */

    onBack = async () => {
        const { btnFlag } = this.state;
        if (btnFlag === 2) { //判断是否为详情态
            const searchObj = queryString.parse(this.props.location.search);
            console.log(searchObj)
            let { from } = searchObj;
            switch (from) {
                case undefined:
                    this.clearQuery();
                    actions.routing.replace({ pathname: '/' });
                    break;
                default:
                    window.history.go(-1);
            }

        } else {
            this.setState({ showPopBackVisible: true });
        }
    }


    /**
     *
     *对添加数据中的日期数据格式化
     * @param {Object} data form表单数据
     * @returns
     */
    filterDataParam = (data) => {
        for (const [index, detailItem] of data.entries()) {
            const { detailDate = moment() } = detailItem;
            detailItem.detailDate = moment(detailDate).format("YYYY-MM-DD");
            data[index] = detailItem;
        }
        return data;
    }

    /**
     * 处理验证后的状态
     *
     * @param {string} field 校验字段
     * @param {Object} flag 是否有错误
     * @param {Number} index 位置
     */
    validateChild = (data) => {
        data.forEach(item => {
            this.validateKeys.forEach(key => {
                if (item[key] !== "") {
                    item[`_${key}Validate`] = true;
                }else {
                    item[`_${key}Validate`] = false;
                }
            })
        })

        return data;
    }

    /**
     *
     *验证子表的数据是否通过，
     * @param {*} data 子表数据集
     * @returns
     */
    filterListKey = (childData) => {
        const data = this.validateChild(childData);
        let flag = true;
        for (const [index, rowObj] of data.entries()) {
            for (const key in rowObj) {
                // 默认验证通过
                data[index]['_validate'] = false;
                // 只要一个值为空，验证不通过
                if (key.includes("Validate") && !rowObj[key]) {
                    data[index]['_validate'] = true;
                    flag = false;
                    break
                }
            }
        }
        return { rowData: data, flag }
    }


    /**
     *
     *
     * @param {*} entity 获取主表数据
     * @returns
     */
    filterOrder = (entity) => {
        const btnFlag = Number(this.state.btnFlag);
        if (btnFlag === 1) {  //为主表添加编辑信息
            const { queryParent: orderRow } = this.props;
            if (orderRow && orderRow.id) {
                entity.id = orderRow.id;
                entity.ts = orderRow.ts;
            }
        }
        // 主表日期处理
        const { orderDept, orderDate } = entity;
        entity.orderDate = orderDate.format("YYYY-MM-DD");
        // 主表参照特殊处理
        if (orderDept) {
            const { refpk } = JSON.parse(orderDept);
            entity.orderDept = refpk;
        }
        return entity;
    }


    /**
     * 保存
     */
    onClickSave =  () => {
        const queryDetailObj = deepClone(this.props.queryDetailObj);
        let { form } = this.props;
        let entity = {};
        let formValidate = false;

        //对主表数据进行处理
        form.validateFields((error, value) => {
            if (!error) {
                entity = this.filterOrder(value);
                entity.orderUser = decodeURIComponent(getCookie("_A_P_userId"));
                formValidate = true;
            }
        });

        //开始校验
        const { rowData, flag } = this.filterListKey(this.oldData);
        queryDetailObj.list = rowData;
        actions.masterDetailOrder.updateState({ queryDetailObj: deepClone(queryDetailObj) });
        //检查是否验证通过
        if (flag && formValidate) {
            const purchaseOrderDetailList = this.filterDataParam(rowData);
            const sublist = { purchaseOrderDetailList };
            const param = { entity, sublist };
            actions.masterDetailOrder.adds(param);
            this.clearQuery();
        }

    }





    /**
     *
     * @param {Number} pageIndex 指定页数
     */
    freshData = (pageIndex) => {
        this.onPageSelect(pageIndex, 0);
    }


    /**
     *
     * @param {Number} index 分页页数
     * @param {Number} value 风页条数
     */
    onDataNumSelect = (index, value) => {
        this.onPageSelect(value, 1);
    }

    /**
     *
     * @param {Number} value pageIndex 或者 pageSize
     * @param {Number} type type 为0标识为 pageIndex,为1标识 pageSize
     */
    onPageSelect = (value, type) => {
        const { queryDetailObj, queryParent } = this.props;
        const { pageIndex, pageSize } = getPageParam(value, type, queryDetailObj);
        const { id: search_orderId } = queryParent;
        const temp = { search_orderId, pageSize, pageIndex };
        actions.masterDetailOrder.queryChild(temp);
    }

    /**
     *
     * @param {*} selectData 点击多选框回调函数
     */
    getSelectedDataFunc = (selectData, record, index) => {
        this.setState({ selectData });
        const { queryDetailObj } = this.props;
        let _list = deepClone(queryDetailObj.list);
        //当第一次没有同步数据
        // if (this.oldData.length == 0) {
        //     this.oldData = deepClone(list);
        // }
        //同步list数据状态
        if (index != undefined) {
            _list[index]['_checked'] = !_list[index]['_checked'];
        } else {//点击了全选
            if (selectData.length > 0) {//全选
                _list.map(item => {
                    if (!item['_disabled']) {
                        item['_checked'] = true
                    }
                });
            } else {//反选
                _list.map(item => {
                    if (!item['_disabled']) {
                        item['_checked'] = false
                    }
                });
            }
        }
        queryDetailObj.list = _list;
        actions.masterDetailOrder.updateState({ queryDetailObj });
    }

    /**
     *
     *
     * @param {Number} btnFlag
     * @param {*} appType
     * @param {数据id} id
     * @param {*} processDefinitionId 流程定义ID
     * @param {*} processInstanceId 流程实例ID
     * @param {行数据} rowData
     * @returns
     */
    showBpmComponent = (btnFlag, appType, processDefinitionId, processInstanceId, rowData) => {
        let _this = this;
        // btnFlag为2表示为详情
        if ((btnFlag == 2) && rowData && rowData['id']) {
            return (
                <div>
                    {appType == 1 && <BpmTaskApprovalWrap
                        id={rowData.id}
                        onBpmFlowClick={() => {
                            this.onClickToBPM(rowData)
                        }}
                        appType={appType}
                        onStart={_this.onBpmStart('start')}
                        onSuccess={_this.onBpmStart('success')}
                        onError={_this.onBpmEnd('error')}
                        onEnd={_this.onBpmEnd('end')}
                    />}
                    {appType == 2 && <BpmTaskApprovalWrap
                        id={this.state.id}
                        processDefinitionId={processDefinitionId}
                        processInstanceId={processInstanceId}
                        onBpmFlowClick={() => {
                            _this.onClickToBPM(rowData)
                        }}
                        appType={appType}
                        onStart={_this.onBpmStart('start')}
                        onSuccess={_this.onBpmStart('success')}
                        onError={_this.onBpmEnd('error')}
                        onEnd={_this.onBpmEnd('end')}
                    />}
                </div>

            );
        }
    }

    /**
     *
     * @description 提交初始执行函数
     * @param {string, string} type 为start、success
     */
    onBpmStart = (type) => async () => {
        if (type == 'start') {
            await actions.masterDetailOrder.updateState({
                showLoading: true
            })
        } else {
            await actions.masterDetailOrder.updateState({
                showLoading: false
            });
            this.onBack();
        }
    }

    /**
     *
     * @description 提交失败和结束执行的函数
     * @param {string,string} type 为error、end
     */
    onBpmEnd = (type) => async (error) => {
        if (type == 'error') {
            Error(error.msg);
        }
        actions.masterDetailOrder.updateState({
            showLoading: false
        })
    }

    /**
     *
     * @param rowData为行数据
     * @memberof AddEditPassenger
     */
    onClickToBPM = (rowData) => {
        const searchObj = queryString.parse(this.props.location.search);
        let { from } = searchObj;
        actions.routing.push({
            pathname: '/bpm-chart',
            search: `?id=${rowData.id}`
        })
    }

    closeModal() {
        actions.masterDetailOrder.updateState({
            showModalCover: false
        });
        actions.routing.goBack()
    }

    render() {
        const {
            queryDetailObj, status, showLoading, form, queryParent: orderRow, showDetailLoading, showModalCover
        } = this.props;
        const { showPopAlert, showPopBackVisible, btnFlag, appType, processDefinitionId, processInstanceId } = this.state;
        if (!orderRow.id && btnFlag > 0) {
            return null
        }
        const paginationObj = {   // 分页
            activePage: queryDetailObj.pageIndex,//当前页
            total: queryDetailObj.total,//总条数
            items: queryDetailObj.totalPages,
            freshData: this.freshData,
            onDataNumSelect: this.onDataNumSelect,
            dataNum: 1,
            disabled: status !== "view"
        }

        const rowEditStatus = btnFlag === 2;
        const btnForbid = queryDetailObj.list.length === 0;

        return (
            <div className='purchase-order'>
                <Loading showBackDrop={true}  show={showLoading} fullScreen={true} />
                <Alert
                    show={showPopBackVisible}
                    context="数据未保存，确定离开 ?"
                    confirmFn={() => {
                        this.confirmGoBack(1)
                    }}
                    cancelFn={() => {
                        this.confirmGoBack(2)
                    }} />
                <Header backFn={this.onBack} back title={titleArr[2]}>
                    <div className='head-btn'>
                        <Button shape="border" className="ml8" onClick={this.onBack}>取消</Button>
                        {(btnFlag !== 2) &&
                        <Button colors="primary" className="ml8" onClick={this.onClickSave}>保存</Button>
                        }
                    </div>

                </Header>
                {
                    this.showBpmComponent(btnFlag, appType ? appType : "1", processDefinitionId, processInstanceId, orderRow)
                }
                <Child orderRow={orderRow} btnFlag={btnFlag} form={form}/>
                {/*<ButtonRoleGroup funcCode="singletable-popupedit"></ButtonRoleGroup>*/}
                <div className='table-header'>
                    <Button
                        disabled={btnFlag === 2}
                        className="ml8"
                        size='sm'
                        colors="primary"
                        onClick={this.handlerNew}>
                        新增
                    </Button>
                    <Button
                        shape="border"
                        disabled={btnFlag === 2 || btnForbid}
                        className="ml8"
                        size='sm'
                        onClick={this.onClickUpdate}>
                        修改
                    </Button>
                    <Button
                        shape="border"
                        disabled={btnFlag === 2 || btnForbid}
                        className="ml8"
                        size='sm'
                        onClick={this.onClickDel}>
                        删除
                    </Button>
                    <Alert
                        show={showPopAlert}
                        context="新增、修改数据未保存将无法生效，确定删除这些记录吗 ?"
                        confirmFn={() => {
                            this.confirmDel(1)
                        }}
                        cancelFn={() => {
                            this.confirmDel(2)
                        }} />
                </div>
                <div className='grid-parent'>
                    <Grid
                        ref={(el) => this.grid = el}
                        data={queryDetailObj.list}
                        rowKey={(r, i) => r.id ? r.id : r.key}
                        columns={this.detailColumn}
                        paginationObj={paginationObj}
                        columnFilterAble={rowEditStatus}
                        showHeaderMenu={rowEditStatus}
                        dragborder={rowEditStatus}
                        draggable={rowEditStatus}
                        syncHover={rowEditStatus}
                        multiSelect={!rowEditStatus}
                        getSelectedDataFunc={this.getSelectedDataFunc}
                        emptyText={() => <Icon style={{ "fontSize": "60px" }} type="uf-nodata" />}
                        loading={{ show: (!showLoading && showDetailLoading), }}
                    />
                </div>
                <Modal
                    show={showModalCover}
                    onHide={this.close} >
                    <Modal.Header>
                        <Modal.Title>警告</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        未获取到单据信息
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.closeModal}>是</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default FormList.createForm()(IndexView);

