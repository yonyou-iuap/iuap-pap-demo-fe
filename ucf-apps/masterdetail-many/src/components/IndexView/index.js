import React, {Component} from 'react'
import {actions} from 'mirrorx';
import {Tabs, Loading} from 'tinper-bee';
import Grid from 'components/Grid';
import Header from 'components/Header';
import Button from 'components/Button';
import Alert from 'components/Alert';
import moment from 'moment';
import ButtonRoleGroup from 'components/ButtonRoleGroup';
import AcAttachment from 'ac-attachment';

import SearchArea from '../SearchArea';
import Passenger from '../PassengerModal';
import Emergency from '../EmergencyModal';
import Traveling from '../TraveModal';


import {deepClone, Warning, getPageParam} from "utils";
import 'ac-attachment/dist/ac-attachment.css';
import './index.less'

const {TabPane} = Tabs;
const format = "YYYY-MM-DD";

export default class IndexView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delModalVisible: false,
            modalVisible: false, // 添加、编辑、详情 弹框
            delPicModalVisible: false, // 添加、编辑、详情 弹框
            checkTable: "passenger", //选中的表名 用于modal 弹框标记
            flag: -1, //按钮状态
            emergencyIndex: 0,
            travelingIndex: 0,
        }

    }

    componentDidMount() {
        const param = {pageIndex: 0, pageSize: 5};
        actions.masterDetailMany.loadList(param);//table数据
    }


    /**
     *
     * 关闭弹框 view update modal
     * @param {Boolean} isSave 判断是否添加或者更新
     * */
    onCloseModal = (isSave = false) => {
        this.setState({modalVisible: false, flag: -1});
        if ((typeof isSave) === 'boolean') {
            this.child.reset();
        }

    }

    /**
     *
     *
     * @param {string} resetObj 重置state，默认选中第一条
     */
    resetIndex = (resetObj) => {
        this.setState({[resetObj]: 0})
    }


    /**
     *
     *tab 切换
     * @param {string} tabKey uploadFill为文件上传，emergency子表，traveling子表
     */
    onChangeTab = (tabKey) => {
        // if (tabKey !== "uploadFill") { // 判断是否文件上传
        //     const {passengerObj, passengerIndex, searchParam} = this.props;
        //     const {pageSize} = this.props[tabKey + "Obj"];
        //     const {id: search_passengerId} = passengerObj.list[passengerIndex] || {};
        //     if (search_passengerId) { //如果主表有数据，子表在获取数据
        //         const param = {search_passengerId, pageIndex: 0, pageSize};
        //         if (tabKey === "emergency") {
        //             const {search_contactName} = searchParam;
        //             param.search_contactName = search_contactName; // 添加子表数据
        //             actions.masterDetailMany.loadEmergencyList(param); //获取emergency
        //         }
        //         if (tabKey === "traveling") {
        //             actions.masterDetailMany.loadTravelingList(param);  //获取traveling
        //         }
        //     }
        // }
        Promise
            .resolve(actions.masterDetailMany.updateState({tabKey}))
            .then(() => {
                actions.masterDetailMany.loadSubList()
            })
    }


    /**
     * 显示删除弹框
     */
    onClickDel = (checkTable) => {
        this.setState({delModalVisible: true, checkTable});
    }

    /**
     *
     * @param {Number} pageIndex 当前分页值 第几条
     * @param {string} tableObj 分页 table 名称
     */
    freshData = (pageIndex, tableObj) => {
        this.onPageSelect(pageIndex, 0, tableObj);
    }


    /**
     *
     * @param {number} pageIndex 当前分页值 第几条
     * @param {number} value 分页条数
     * @param {string} tableObj 分页table名称
     */
    onDataNumSelect = (pageIndex, value, tableObj) => {
        this.onPageSelect(value, 1, tableObj);
    }

    /**
     *
     *
     * @param {number} value  pageIndex 或者 pageSize值
     * @param {string} type  type为0标识为 pageIndex,为1标识 pageSize,
     * @param {string} tableName 分页table名称
     */
    onPageSelect = (value, type, tableName) => {
        let searchParam = deepClone(this.props.searchParam);
        let modalObj = this.props[tableName];

        let {pageIndex, pageSize} = getPageParam(value, type, modalObj);

        if (tableName === "passengerObj") { //主表分页
            searchParam.pageSize = pageSize;
            searchParam.pageIndex = pageIndex;
            actions.masterDetailMany.loadList(searchParam);
        } else {
            //子表分页
            actions.masterDetailMany.loadSubList({
                pageSize,
                pageIndex
            });
            // const {passengerIndex, passengerObj} = this.props;
            // const {id: search_passengerId} = passengerObj.list[passengerIndex];
            //
            // const {search_contactName} = searchParam;
            //
            // if (tableName === "emergencyObj") { //emergency 表分页
            //     const temp = {search_passengerId, pageSize, pageIndex, search_contactName};
            //     actions.masterDetailMany.loadEmergencyList(temp);
            // }
            // if (tableName === "travelingObj") { //emergency 表分页
            //     const temp = {search_passengerId, pageSize, pageIndex, search_contactName};
            //     actions.masterDetailMany.loadTravelingList(temp);
            // }
        }
    }

    /**
     * @description 该方法为页面打印调用方法,打印功能需要先查询打印模板，再调打印接口
     *
     */
    onPrint = () => {
        const {passengerIndex, passengerObj} = this.props;
        const {list} = passengerObj;
        if (list.length === 0) {
            Warning('请选择需打印的数据');
            return;
        }
        const {id} = list[passengerIndex];
        actions.masterDetailMany.printDocument({
            queryParams: {
                funccode: 'masterdetail-many',
                nodekey: 'passenger'
            },
            printParams: {id: id}
        });

    }

    /**
     *
     * @param {string} type 当前选中的table
     * @param {number} status 状态 0 添加，1 编辑 2. 详情
     */
    onShowModal = (type, status) => {
        this.setState({
            modalVisible: true,
            flag: status,
            checkTable: type,
        });

    }

    /**
     *删除确定操作
     * @param {number} type 1.删除 2.取消
     */
    async confirmGoBack(type) {
        const {checkTable} = this.state; //获取删除的表名
        const {list} = this.props[checkTable + "Obj"];
        this.setState({delModalVisible: false});
        if (type === 1 && list.length > 0) {
            if (checkTable === "passenger") { // 主表
                const {passengerIndex} = this.props;
                const record = list[passengerIndex];
                await actions.masterDetailMany.delPassenger(record);
            }
            if (checkTable === "emergency") { // 子表
                const {emergencyIndex} = this.state;
                const record = list[emergencyIndex];
                this.setState({emergencyIndex: 0}); //默认选中第一条
                await actions.masterDetailMany.delEmergency(record);
            }
            if (checkTable === "traveling") { // 子表
                const {travelingIndex} = this.state;
                const record = list[travelingIndex];
                this.setState({travelingIndex: 0}); //默认选中第一条
                await actions.masterDetailMany.delTraveling(record);
            }
        }
    }

    /**
     *删除确定操作
     * @param {number} type 1.删除 2.取消
     */
    async confirmDelPic(type) {
        if (type === 1) {
            this.attach.fDelete();
        }
        this.setState({delPicModalVisible: false});
    }


    passengerColumn = [
        {
            title: "乘客编号",
            dataIndex: "code",
            key: "code",
            // fixed: "left",
            width: 180,
        },
        {
            title: "乘客姓名",
            dataIndex: "name",
            key: "name",
            width: 120,
        },
        {
            title: "乘客性别",
            dataIndex: "sexEnumValue",
            key: "sexEnumValue",
            width: 120,

        },
        {
            title: "所属部门",
            dataIndex: "deptName",
            key: "deptName",
            width: 120,
        },
        {
            title: "手机号",
            dataIndex: "phone",
            key: "phone",
            width: 120,
        },
        {
            title: "是否会员",
            dataIndex: "isVip",
            key: "isVip",
            width: 120,
            render(text, record, index) {
                return text ? "是" : "否";
            }

        },
        {
            title: "会员等级",
            dataIndex: "gradeEnumValue",
            key: "gradeEnumValue",
            width: 120,
        },
        {
            title: "会员到期日期",
            dataIndex: "expirationDate",
            key: "expirationDate",
            render: (text, record, index) => {
                return <div>
                    {text ? moment(text).format(format) : ""}
                </div>
            }

        }
    ];

    emergencyColumn = [
        {
            title: "联系人姓名",
            dataIndex: "contactName",
            key: "contactName",
            width: 180,
        },
        {
            title: "联系人电话",
            dataIndex: "contactPhone",
            key: "contactPhone",
            width: 180,
        },
        {
            title: "与乘客关系",
            dataIndex: "contactRelation",
            key: "contactRelation",
            width: 180,
        },
        {
            title: "备注",
            dataIndex: "remark",
            key: "remark",
            width: 120,
        },
    ];

    travelingColumn = [
        {
            title: "乘车路线",
            dataIndex: "line",
            key: "line",
            width: 120,
        },
        {
            title: "上车站点",
            dataIndex: "stationBegin",
            key: "stationBegin",
            width: 120,
        },
        {
            title: "下车站点",
            dataIndex: "stationEnd",
            key: "stationEnd",
            width: 120,
        },
        {
            title: "费用",
            dataIndex: "cost",
            key: "cost",
            width: 120,
            className: 'column-number-right ', // 靠右对齐
            render: (text, record, index) => {
                return (<span>{(typeof text)==='number'? text.toFixed(2):""}</span>)
            }
        },
        {
            title: "支付状态",
            dataIndex: "payStatusEnumValue",
            key: "payStatusEnumValue",
            width: 120,
        }, {
            title: "备注",
            dataIndex: "remark",
            key: "remark",
            width: 120,
        },

    ];


    /**
     *
     *导出excel
     * @param {string} type 导出某个表
     */
    export = (type) => {
        this.refs[type].exportExcel();
    }

    /**
     *
     * 费用合计
     * @param {Array} data 费用原始数据
     * @returns
     */
    getTotalCost = (data) => {
        let cost = 0;
        for (const item of data) {
            if (item.cost) cost += Number(item.cost);
        }
        return cost;
    }


    /**
     *
     * @param {Object} data 组装分页参数
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

    onRef = (ref) => {
        this.child = ref
    }


    render() {
        const _this = this;
        const {
            passengerObj, emergencyObj, travelingObj, showLoading,
            showTravelingLoading, showEmergencyLoading, tabKey, passengerIndex
        } = this.props;
        const {
            delModalVisible, modalVisible, flag, checkTable,
            emergencyIndex, travelingIndex, delPicModalVisible
        } = this.state;

        let selectRow = passengerObj['list'][passengerIndex] || {};
        // 主表数据为空
        const passengerForbid = passengerObj.list.length > 0 ? false : true;
        const emergencyForbid = emergencyObj.list.length > 0 ? false : true;
        const travelingForbid = travelingObj.list.length > 0 ? false : true;
        return (
            <div className='master-detail-many'>
                <Header title='B3 一主多子示例'/>
                <SearchArea passengerObj={passengerObj} onRef={this.onRef}/>
                <div className='table-header'>
                    <ButtonRoleGroup funcCode="masterdetail-many">
                        <Button
                          className="ml8"
                          role="add"
                          colors="primary"
                          onClick={() => this.onShowModal('passenger', 0)}
                        >新增</Button>
                        <Button
                          className="ml8"
                          role="update"
                          shape='border'
                          disabled={passengerForbid}
                          onClick={() => _this.onShowModal("passenger", 1)}
                        >修改</Button>
                        <Button
                          className="ml8"
                          shape='border'
                          disabled={passengerForbid}
                          onClick={() => _this.onShowModal("passenger", 2)}
                        >详情</Button>
                        <Button
                          className="ml8"
                          role="delete"
                          shape='border'
                          disabled={passengerForbid}
                          onClick={() => _this.onClickDel("passenger")}
                        >删除</Button>
                        <Button
                          className="ml8"
                          shape='border'
                          onClick={() => _this.export("passenger")}
                        >导出</Button>
                        {/*<Button
                          className="ml8"
                          shape='border'
                          disabled={passengerForbid}
                          onClick={_this.onPrint}
                        >
                            打印
                        </Button>*/}
                    </ButtonRoleGroup>
                </div>
                <Grid
                  ref="passenger"
                  data={passengerObj.list}
                  rowKey={(r, i) => i}
                  columns={_this.passengerColumn}
                  getSelectedDataFunc={this.getSelectedDataFunc}
                  showHeaderMenu={true}
                  draggable={true}
                  multiSelect={false}
                  onRowClick={(record, index) => {
                      actions.masterDetailMany.updateState({passengerIndex: index});
                      actions.masterDetailMany.loadSubList();
                  }}
                  rowClassName={(record, index, indent) => { //判断是否选中当前行
                      return passengerIndex === index ? "selected" : "";
                  }}
                  paginationObj={{
                      ...this.getBasicPage(passengerObj),
                      freshData: (pageSize) => {
                          _this.freshData(pageSize, "passengerObj");
                      },
                      onDataNumSelect: (index, value) => {
                          _this.onDataNumSelect(index, value, "passengerObj");
                      },
                      dataNum: 0,
                  }}
                />

                <div className={passengerForbid? "tabel-header-wrap-hide":"tabel-header-wrap"} >
                    <div className="table-space"> </div>
                    <Tabs
                        defaultActiveKey={tabKey}
                        tabBarStyle="upborder"
                        onChange={this.onChangeTab}
                    >
                        <TabPane tab='紧急联系人' key="emergency">
                            <div className='table-header-child'>
                                <ButtonRoleGroup funcCode="masterdetail-many">
                                    <Button
                                        className="ml8"
                                        role="add_em"
                                        colors="primary"
                                        disabled={passengerForbid}
                                        onClick={() => _this.onShowModal('emergency', 0)}
                                    >新增</Button>
                                    <Button
                                        className="ml8"
                                        role="update_em"
                                        shape="border"
                                        disabled={emergencyForbid}
                                        onClick={() => {
                                            _this.onShowModal("emergency", 1);
                                        }}
                                    >修改</Button>
                                    <Button
                                        className="ml8"
                                        shape="border"
                                        disabled={emergencyForbid}
                                        onClick={() => _this.onShowModal("emergency", 2)}
                                    >详情</Button>
                                    <Button
                                        className="ml8"
                                        role="delete_em"
                                        shape="border"
                                        disabled={emergencyForbid}
                                        onClick={() => _this.onClickDel("emergency")}
                                    >删除</Button>
                                    <Button
                                        className="ml8"
                                        shape="border"
                                        onClick={() => _this.export("emergency")}
                                    >导出</Button>
                                </ButtonRoleGroup>
                            </div>
                            <div style={{marginBottom: 24}}>
                                <Grid
                                    ref="emergency"
                                    data={emergencyObj.list}
                                    rowKey={(r, i) => i}
                                    columns={_this.emergencyColumn}
                                    showHeaderMenu={true}
                                    draggable={true}
                                    multiSelect={false}
                                    // 分页
                                    paginationObj={{
                                        ...this.getBasicPage(emergencyObj),
                                        freshData: (pageSize) => {
                                            _this.freshData(pageSize, "emergencyObj");
                                        },
                                        onDataNumSelect: (index, value) => {
                                            _this.onDataNumSelect(index, value, "emergencyObj");
                                        },

                                    }}

                                    onRowClick={(record, index) => {
                                        _this.setState({emergencyIndex: index});
                                    }}
                                    rowClassName={(record, index, indent) => {
                                        if (_this.state.emergencyIndex === index) {
                                            return 'selected';
                                        } else {
                                            return '';
                                        }
                                    }}
                                    loading={{
                                        show: (showEmergencyLoading && showLoading === false),
                                    }}
                                />
                            </div>
                        </TabPane>
                        <TabPane tab='订票信息' key="traveling">
                            <div className='table-header-child'>
                                <ButtonRoleGroup funcCode="masterdetail-many">
                                    <Button
                                        className="ml8"
                                        role="add_tr"
                                        colors="primary"
                                        disabled={passengerForbid}
                                        onClick={() => this.onShowModal('traveling', 0)}
                                    >新增</Button>
                                    <Button
                                        className="ml8"
                                        role="update_tr"
                                        shape="border"
                                        disabled={travelingForbid}
                                        onClick={() => _this.onShowModal("traveling", 1)}
                                    >修改</Button>
                                    <Button
                                        className="ml8"
                                        shape="border"
                                        disabled={travelingForbid}
                                        onClick={() => _this.onShowModal("traveling", 2)}
                                    >详情</Button>
                                    <Button
                                        className="ml8" role="delete_tr"
                                        shape="border"
                                        disabled={travelingForbid}
                                        onClick={() => _this.onClickDel("traveling")}
                                    >删除</Button>
                                    <Button
                                        className="ml8"
                                        shape="border"
                                        onClick={() => _this.export("traveling")}
                                    >导出</Button>
                                </ButtonRoleGroup>
                            </div>
                            <div className="total">费用小计：{_this.getTotalCost(travelingObj.list)}元</div>
                            <div style={{marginBottom: 24}}>
                                <Grid
                                    ref="traveling"
                                    data={travelingObj.list}
                                    rowKey={(r, i) => i}
                                    columns={_this.travelingColumn}
                                    showHeaderMenu={true}
                                    draggable={true}
                                    multiSelect={false}
                                    // 分页
                                    paginationObj={{
                                        ...this.getBasicPage(travelingObj),
                                        freshData: (pageSize) => {
                                            _this.freshData(pageSize, "travelingObj");
                                        },
                                        onDataNumSelect: (index, value) => {
                                            _this.onDataNumSelect(index, value, "travelingObj");
                                        },
                                    }}
                                    onRowClick={(record, index) => {
                                        _this.setState({travelingIndex: index});
                                    }}
                                    rowClassName={(record, index, indent) => {
                                        if (_this.state.travelingIndex === index) {
                                            return 'selected';
                                        } else {
                                            return '';
                                        }
                                    }}
                                    loading={{
                                        show: (showTravelingLoading && showLoading === false),
                                    }}

                                />
                            </div>
                        </TabPane>
                        {/*<TabPane tab='附件管理' key="uploadFill">
                            <div className='table-header-child'>
                                <AcAttachment
                                    className="upload-box"
                                    disabled={passengerForbid}
                                    recordId={selectRow['id']}
                                    groupname='abc'
                                    onDelete={(attach) => {
                                        _this.setState({delPicModalVisible: true});
                                        _this.attach = attach;
                                    }}
                                >
                                    <Button
                                        data-btn="upload"
                                        className="ml8"
                                        colors="primary" size='sm'
                                    >上传</Button>
                                    <Button
                                        data-btn="download"
                                        className="ml8"
                                        shape="border"
                                        size='sm'>下载</Button>
                                    <Button
                                        data-btn="delete"
                                        className="ml8"
                                        shape="border"
                                        size='sm'
                                    >删除</Button>
                                </AcAttachment>
                            </div>
                        </TabPane>*/}
                    </Tabs>
                </div>

                {/*添加乘客乘客信息modal*/}
                <Passenger
                    passengerObj={passengerObj}
                    // 1.少写变量modalVisible， 2.减少bug 永远只有一个弹框
                    modalVisible={modalVisible && checkTable === "passenger" && flag !== -1}
                    btnFlag={flag}
                    onCloseModal={this.onCloseModal}
                    currentIndex={passengerIndex}
                    checkTable={checkTable}
                />
                {/*添加紧急联系人信息modal*/}
                <Emergency
                    emergencyObj={emergencyObj}
                    passengerIndex={passengerIndex}
                    passengerObj={passengerObj}
                    modalVisible={modalVisible && checkTable === "emergency" && flag !== -1}
                    btnFlag={flag}
                    onCloseModal={this.onCloseModal}
                    currentIndex={emergencyIndex}
                    checkTable={checkTable}
                    resetIndex={this.resetIndex}
                />
                {/*添加订票信息信息modal*/}
                <Traveling
                    travelingObj={travelingObj}
                    passengerIndex={passengerIndex}
                    passengerObj={passengerObj}
                    modalVisible={modalVisible && checkTable === "traveling" && flag !== -1}
                    btnFlag={flag}
                    onCloseModal={this.onCloseModal}
                    currentIndex={travelingIndex}
                    checkTable={checkTable}
                    resetIndex={this.resetIndex}

                />
                <Loading
                    show={showLoading}
                    fullScreen={true}
                />
                <Alert
                    show={delModalVisible}
                    context="确定删除这条记录吗 ?"
                    confirmFn={() => _this.confirmGoBack(1)}
                    cancelFn={() => _this.confirmGoBack(2)}/>

                <Alert
                    show={delPicModalVisible}
                    context="确定删除文件吗 ?"
                    confirmFn={() => _this.confirmDelPic(1)}
                    cancelFn={() => _this.confirmDelPic(2)}/>
            </div>

        )

    }
}
