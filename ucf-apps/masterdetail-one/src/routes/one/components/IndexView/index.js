import React, {Component} from 'react'
import {actions} from 'mirrorx';
import {Loading} from 'tinper-bee';
import Grid from 'components/Grid';
import moment from 'moment'
import Header from 'components/Header';
import Button from 'components/Button';
import Alert from 'components/Alert';
import SearchArea from '../SearchArea/index';
import ButtonRoleGroup from 'components/ButtonRoleGroup';
import {BpmButtonSubmit, BpmButtonRecall} from 'yyuap-bpm';

import {deepClone, success, Error,getPageParam} from "utils";

import './index.less';

const format = "YYYY-MM-DD";

export default class IndexView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delModalVisible: false,
        }
    }

    componentDidMount() {
        this.loadPage();
    }

    /**
     *
     *获取主表数据
     * @param {Object} [searchParam={}]
     */
    loadPage = (searchParam = {}) => {
        // 获取默认请求的 分页信息
        const {pageSize, pageIndex} = this.props.orderObj;
        const tempPageSize = pageIndex ? pageIndex : 1; //默认第一页
        const initPage = {pageIndex: tempPageSize - 1, pageSize};
        actions.masterDetailOne.loadList({...initPage, ...searchParam});
    }


    /**
     * 通过btnFlag判断用户是添加、修改和详情操作
     * @param {Number} btnFlag 0标识为新增，1标识为修改，2标识为详情
     */
    onClickAddEditView = (btnFlag) => {
        const {selectIndex, orderObj} = this.props;
        const {list = []} = orderObj;
        let orderInfo = null;

        if (btnFlag !== 0) {
            orderInfo = list[selectIndex]
        }
        this.goToOrder(orderInfo, btnFlag);
    }

    /**
     *
     *通过URL跳转
     * @param {string} id 主表id
     * @param {Number} btnFlag 页面状态 0标识为新增，1标识为修改，2标识为详情
     */
    goToOrder = (orderInfo, btnFlag) => {
        // actions.masterDetailOrder.setQueryParent(orderInfo)
        actions.routing.push(
            {
                pathname: 'order',
                search: `?search_id=${orderInfo ? orderInfo.id : ""}&btnFlag=${btnFlag}`
            }
        )
    }

    /**
     *
     * @param {Number} pageIndex 当前分页值 第几条
     * @param {string} tableObj 分页table
     */
    freshData = (pageIndex, tableObj) => {
        this.onPageSelect(pageIndex, 0, tableObj);
    }

    /**
     *
     *
     * @param {Number} pageIndex 当前分页值 第几条
     * @param {Number} value 分页条数
     * @param {string} tableObj 分页table
     */
    onDataNumSelect = (pageIndex, value, tableObj) => {
        this.onPageSelect(value, 1, tableObj);
    }

    /**
     *
     * @param {Number} value pageIndex或者pageSize值
     * @param {Number} type type为0标识为 pageIndex,为1标识 pageSize,
     * @param {string} tableName 分页 table 名称
     */
    onPageSelect = (value, type, tableName) => {
        let searchParam = deepClone(this.props.searchParam); // 深拷贝查询条件从action里
        let modalObj = this.props[tableName];
        let {pageIndex, pageSize} = getPageParam(value, type,modalObj);

        if (tableName === "orderObj") { //主表分页
            searchParam.pageSize = pageSize;
            searchParam.pageIndex = pageIndex;
            actions.masterDetailOne.updateState({searchParam});
            actions.masterDetailOne.loadList(searchParam);
        }

        if (tableName === "detailObj") { //detail 表分页
            const {selectIndex, orderObj} = this.props;
            const {id: search_orderId} = orderObj.list[selectIndex];
            const temp = {search_orderId, pageSize, pageIndex};
            actions.masterDetailOne.loadOrderDetailList(temp);
        }

    }

    /**
     *  删除 弹框展示
     */

    onClickDel = () => this.setState({delModalVisible: true});

    /**
     *
     * @param {Number} status  1确定删除 2 取消删除
     */
    async confirmGoBack(status) {
        const {selectIndex, orderObj} = this.props;
        const {list = []} = orderObj;
        const record = list[selectIndex];
        this.setState({delModalVisible: false});
        if (status === 1) { // 主表
            await actions.masterDetailOne.delOrder(record);
        }
    }

    /**
     * 导出excel
     */
    export = () => {
        this.grid.exportExcel();
    }

    orderColumn = [
        {
            title: "编号",
            dataIndex: "orderCode",
            key: "orderCode",
            width: 250,
            render: (text, record, index) => {
                return (
                    <span
                        className="demo-table-code"
                        onClick={(event) => {
                            event.preventDefault();
                            this.goToOrder(record, 2);
                        }}>{text}</span>
                );
            }
        },
        {
            title: "名称",
            dataIndex: "orderName",
            key: "orderName",
            width: 100,
        },
        {
            title: "类型",
            dataIndex: "orderTypeEnumValue",
            key: "orderTypeEnumValue",
            width: 100,

        },
        {
            title: "价格",
            dataIndex: "orderPrice",
            key: "orderPrice",
            width: 80,
            className: 'column-number-right ', // 靠右对齐
            render: (text, record, index) => {
                return (<span>{(typeof text)==='number'? text.toFixed(2):""}</span>)
            }
        },
        {
            title: "申请人",
            dataIndex: "orderUserName",
            key: "orderUserName",
            width: 200,
        },
        {
            title: "申请部门",
            dataIndex: "orderDeptName",
            key: "orderDeptName",
            width: 150,
        },
        {
            title: "申请日期",
            dataIndex: "orderDate",
            key: "orderDate",
            width: 150,
            render: (text, record, index) => {
                return <div>{text ? moment(text).format(format) : ""}</div>
            }
        },
        {
            title: "流程状态",
            dataIndex: "bpmStateEnumValue",
            key: "bpmStateEnumValue",
            width: 150,
        }
    ];

    detailColumn = [
        {
            title: "物料名称",
            dataIndex: "detailName",
            key: "detailName",
            width: 200,
            fixed: 'left',
        },
        {
            title: "物料型号",
            dataIndex: "detailModel",
            key: "detailModel",
            width: 200,
        },
        {
            title: "物料数量",
            dataIndex: "detailCount",
            key: "detailCount",
            width: 200,
            className: 'column-number-right ', // 靠右对齐
        },
        {
            title: "需求日期",
            dataIndex: "detailDate",
            key: "detailDate",
            width: 200,
            render: (text, record, index) => {
                return <div>{text ? moment(text).format(format) : ""}</div>
            }
        },

    ];


    /**
     *
     * 组装分页参数
     * @param {Object} data 后端返回的数据，拼接成分页组件要求的格式
     * @returns
     */
    getBasicPage = (data) => {
        const {pageIndex, total, totalPages} = data;
        return {   // 分页
            activePage: pageIndex,//当前页
            total: total,//总条数
            items: totalPages,
            dataNum: 1, //默认数组第一个值
        };

    }

    /**
     *
     * @description 提交初始执行函数
     * @param {string, string} operation为submit recall type 为start、success
     */
    bpmStart = (operation, type) => async () => {
        if (type == 'start') {
            await actions.masterDetailOne.updateState({
                showLoading: true
            })
        } else {
            let msg = operation == 'submit' && '单据提交成功' || '单据撤回成功';
            success(msg);
            const searchParam = deepClone(this.props.searchParam); // 深拷贝查询条件从action里
            this.loadPage(searchParam);
        }

    }

    /**
     *
     * @description 提交失败和结束执行的函数
     * @param {string,string} operation为submit recall type 为error、end
     */
    bpmEnd = (operation, type) => async (error) => {
        if (type == 'error') {
            Error(error.msg);
        }
        actions.masterDetailOne.updateState({
            showLoading: false
        })
    }


    getDataNum = (num) => {
        const val = {"5": 0, "10": 1, "15": 2, "20": 3, "25": 4, "50": 5};
        let dataNum = val[num];
        if (dataNum === undefined) {
            dataNum = 6;
        }
        return dataNum;
    }

    handleBpmState = (list, selectIndex) => {
        let resObj = {
            submitForbid : false,
            recallForbid : true
        };
        if ( list.length ) {
            let bpmState = list[selectIndex]['bpmState'];
            let submitForbid = bpmState ? true : false,
                recallForbid = bpmState == 1 ? false : true;

            resObj = {
                submitForbid,
                recallForbid
            }
        }

        return resObj;
    }


    render() {
        const _this = this;
        const {delModalVisible} = _this.state;
        let {showLoading, showDetailLoading, orderObj, detailObj, selectIndex} = this.props;
        let {list} = orderObj;

        const {submitForbid, recallForbid} = _this.handleBpmState(list, selectIndex);
        //  数据为空，按钮disable
        const btnForbid = list.length === 0;
        return (
            <div className="master-detail-one">
                <Header title='B2 一主一子示例 '/>
                <SearchArea orderObj={orderObj}/>
                <div className='table-header'>
                    <ButtonRoleGroup funcCode="masterdetail-one">
                        <Button
                            colors="primary"
                            className="ml8"
                            role="add"
                            onClick={() => _this.onClickAddEditView(0)}
                        >新增</Button>
                        <Button
                            shape="border"
                            className="ml8"
                            role="update"
                            disabled={submitForbid || btnForbid }
                            onClick={() => _this.onClickAddEditView(1)}
                        >修改</Button>
                        <Button
                            shape="border"
                            className="ml8"
                            disabled={btnForbid}
                            onClick={() => _this.onClickAddEditView(2)}
                        >详情</Button>
                        <Button
                            role="delete"
                            shape="border"
                            className="ml8"
                            disabled={submitForbid || btnForbid}
                            onClick={_this.onClickDel}
                        >删除</Button>
                        <Alert show={delModalVisible} context="是否要删除 ?"
                               confirmFn={() => _this.confirmGoBack(1)}
                               cancelFn={() => _this.confirmGoBack(2)}
                        />
                        <Button shape="border" key="export" className="ml8" onClick={_this.export}>
                            导出
                        </Button>
                        <BpmButtonSubmit
                            className="ml8"
                            checkedArray={[orderObj['list'][selectIndex]]}
                            funccode="masterdetail-one"
                            nodekey="purchaseOrder"
                            url={`${GROBAL_HTTP_CTX}/purchase_order/submit`}
                            urlAssignSubmit={`${GROBAL_HTTP_CTX}/purchase_order/assignSubmit`}
                            onStart={_this.bpmStart('submit', 'start')}
                            onSuccess={_this.bpmStart('submit', 'success')}
                            onError={_this.bpmEnd('submit', 'error')}
                            onEnd={_this.bpmEnd('submit', 'end')}
                        >
                            <Button className="ml8"  size='sm' colors="primary"
                                disabled={submitForbid}>提交</Button>
                        </BpmButtonSubmit>
                        <BpmButtonRecall
                            checkedArray={[orderObj['list'][selectIndex]]}
                            url={`${GROBAL_HTTP_CTX}/purchase_order/recall`}
                            onStart={_this.bpmStart('recall', 'start')}
                            onSuccess={_this.bpmStart('recall', 'success')}
                            onError={_this.bpmEnd('recall', 'error')}
                            onEnd={_this.bpmEnd('recall', 'end')}
                        >
                            <Button className="ml8" size='sm' colors="primary"
                                disabled={recallForbid}>收回</Button>
                        </BpmButtonRecall>
                    </ButtonRoleGroup>
                </div>
                <Grid
                    ref={(el) => this.grid = el}
                    data={orderObj.list}
                    rowKey={(r, i) => i}
                    columns={this.orderColumn}
                    multiSelect={false}
                    dragborder={true}
                    onRowClick={(record, index) => {
                        // 获取子表数据
                        actions.masterDetailOne.updateState({selectIndex: index}); // 更新默认主表行 数据
                        const {list} = orderObj;
                        const {pageSize} = detailObj;
                        const {id: search_orderId} = list[index];
                        const param = {search_orderId, pageSize, pageIndex: 0};
                        actions.masterDetailOne.loadOrderDetailList(param);
                    }}
                    rowClassName={(record, index, indent) => {
                        return selectIndex === index ? "selected" : "";
                    }}

                    // 分页
                    paginationObj={{
                        ...this.getBasicPage(orderObj),
                        freshData: pageSize => _this.freshData(pageSize, "orderObj"),
                        onDataNumSelect: (index, value) => _this.onDataNumSelect(index, value, "orderObj"),
                        dataNum: _this.getDataNum(orderObj.pageSize),
                    }}
                />
                <div className="table-space"> </div>
                <div className='gird-parent'>
                    <Grid
                        data={detailObj.list}
                        rowKey={(r, i) => i}
                        columns={this.detailColumn}
                        multiSelect={false}
                        // 分页
                        paginationObj={{
                            ...this.getBasicPage(detailObj),
                            freshData: pageSize => _this.freshData(pageSize, "detailObj"),
                            onDataNumSelect: (index, value) => _this.onDataNumSelect(index, value, "detailObj"),
                            dataNum: _this.getDataNum(detailObj.pageSize),
                        }}
                        loading={{show: (!showLoading && showDetailLoading), loadingType: "line"}}
                    />
                    <Loading
                        loadingType="line"
                        show={showLoading}
                        fullScreen={true}
                    />
                </div>
            </div>

        )

    }
}
