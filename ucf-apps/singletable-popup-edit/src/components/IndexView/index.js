import React, {Component} from 'react';
import {actions} from 'mirrorx';
import moment from 'moment'
import {Tooltip} from 'tinper-bee';
import Grid from 'components/Grid';
import Header from 'components/Header';
import Button from 'components/Button';
import Alert from 'components/Alert';
import ButtonRoleGroup from 'components/ButtonRoleGroup';
import SearchArea from '../SearchArea';
import PopupModal from '../PopupModal';

import {deepClone, Info, success,getHeight,getPageParam} from "utils";

import 'ref-tree/dist/index.css';
import 'bee-complex-grid/build/Grid.css';
import 'bee-table/build/Table.css';
import 'bee-pagination/build/Pagination.css';
import './index.less';

const formatDate = "YYYY-MM-DD HH:mm:ss";

class IndexView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHeight: 0,
            selectedIndex: 0, //默认选中行
            editModelVisible: false,
            btnFlag: 0,
            delModalVisible: false, //删除弹框
        }

    }
    componentWillMount() {
        //计算表格滚动条高度
        this.resetTableHeight(true);
    }
    componentDidMount() {
        this.onRefreshList();
    }

    onRefreshList = () => {
        actions.popupEdit.loadList(this.props.queryParam);
    }

    /**
     *
     * @param {Number} pageIndex 跳转指定页数
     */
    freshData = (pageIndex) => {
        this.onPageSelect(pageIndex, 0);
    }

    /**
     *
     * @param {*} index 跳转指定页数
     * @param {*} value 设置一页数据条数
     */
    onDataNumSelect = (index, value) => {
        this.onPageSelect(value, 1);
    }

    /**
     *
     * @param {Number} value  pageIndex 或者 pageIndex
     * @param {Number} type 为0标识为 pageIndex,为1标识 pageSize
     */
    onPageSelect = (value, type) => {
        let queryParam = deepClone(this.props.queryParam);
        const {pageIndex, pageSize} = getPageParam(value, type,queryParam.pageParams);
        queryParam['pageParams'] = {pageIndex, pageSize};
        this.setState({selectedIndex: 0}); //默认选中第一行
        actions.popupEdit.loadList(queryParam);
    }

    /**
     *
     * @param {Number} btnFlag 弹框框状态 0为添加、1为修改、2为详情
     */
    onClickShowModel = (btnFlag) => {
        this.setState({editModelVisible: true, btnFlag});
    }

    /**
     * 关闭修改model
     */
    onCloseEdit = () => {
        this.setState({editModelVisible: false, btnFlag: -1});
    }

    /**
     *
     * @param {Number} type 1、取消 2、确定
     * @returns {Promise<void>}
     */
    async confirmGoBack(type) {
        this.setState({delModalVisible: false});
        if (type === 1) { // 确定
            const {list} = this.props;
            const {selectedIndex: index} = this.state;
            const record = list[index];
            const {status} = await actions.popupEdit.removeList(record);
            if (status === 'success') {
                this.setState({selectedIndex: 0}); //默认选中第一行
                this.onRefreshList();
            }
        }
    }

    /**
     * 删除modal 显示
     */
    onClickDel = () => {
        const {list} = this.props;
        if (list.length > 0) {
            this.setState({delModalVisible: true});
        } else {
            Info("数据为空，不能删除");
        }
    }

    column = [
        {
            title: "员工编号",
            dataIndex: "code",
            key: "code",
            width: 150,
        },
        {
            title: "员工姓名",
            dataIndex: "name",
            key: "name",
            width: 120,
            filterType: "text",
            filterDropdown: "show",
            render: (text, record, index) => {
                return (
                    <Tooltip inverse overlay={text}>
                        <span tootip={text} className="popTip">{text}</span>
                    </Tooltip>
                );
            }
        },
        {
            title: "员工性别",
            dataIndex: "sexEnumValue",
            key: "sexEnumValue",
            width: 150,
        },
        {
            title: "所属部门",
            dataIndex: "deptName",
            key: "deptName",
            width: 120,
        },
        {
            title: "职级",
            dataIndex: "levelName",
            key: "levelName",
            width: 140,
        },
        {
            title: "工龄",
            dataIndex: "serviceYears",
            key: "serviceYears",
            width: 130,
            className: 'column-number-right ', // 靠右对齐
        },
        {
            title: "司龄",
            dataIndex: "serviceYearsCompany",
            key: "serviceYearsCompany",
            width: 130,
            className: 'column-number-right ', // 靠右对齐
        },
        {
            title: "年份",
            dataIndex: "year",
            key: "year",
            width: 100,
            className: 'column-number-right ', // 靠右对齐
            render: (text, record, index) => {
                return <div>
                    {text ? moment(text).format('YYYY') : ""}
                </div>
            }
        },
        {
            title: "月份",
            dataIndex: "monthEnumValue",
            key: "monthEnumValue",
            width: 100,
        },
        {
            title: "补贴类别",
            dataIndex: "allowanceTypeEnumValue",
            key: "allowanceTypeEnumValue",
            width: 120,
        },
        {
            title: "补贴标准",
            dataIndex: "allowanceStandard",
            key: "allowanceStandard",
            width: 120,
            className: 'column-number-right ', // 靠右对齐
            render: (text, record, index) => {
                return (<span>{(typeof text)==='number'? text.toFixed(2):""}</span>)
            }
        },
        {
            title: "实际补贴",
            dataIndex: "allowanceActual",
            key: "allowanceActual",
            width: 120,
            className: 'column-number-right ', // 靠右对齐
            render: (text, record, index) => {
                return (<span>{(typeof text)==='number'? text.toFixed(2):""}</span>)
            }
        },
        {
            title: "是否超标",
            dataIndex: "exdeedsEnumValue",
            key: "exdeedsEnumValue",
            width: 120,
        },
        {
            title: "申请时间",
            dataIndex: "applyTime",
            key: "applyTime",
            width: 150,
            render: (text, record, index) => {
                return <div>
                    {text ? moment(text).format(formatDate) : ""}
                </div>
            }

        },
        {
            title: "领取方式",
            dataIndex: "pickTypeEnumValue",
            key: "pickTypeEnumValue",
            width: 120,
        },
        {
            title: "领取时间",
            dataIndex: "pickTime",
            key: "pickTime",
            width: 150,
            render: (text, record, index) => {
                return <div>
                    {text ? moment(text).format(formatDate) : ""}
                </div>
            }
        },
        {
            title: "备注",
            dataIndex: "remark",
            key: "remark",
            width: 100,
        }
    ];

    /**
     * 导出excel
     */
    export = () => {
        this.grid.exportExcel();
    }
    /**
     * 重置表格高度计算回调
     *
     * @param {Boolean} isopen 是否展开
     */
    resetTableHeight = (isopen) => {
        let tableHeight = 0;
        if (isopen) {
            //展开的时候并且适配对应页面数值px
            tableHeight = getHeight() - 420
        } else {
            //收起的时候并且适配对应页面数值px
            tableHeight = getHeight() - 270
        }
        this.setState({ tableHeight });
    }

    render() {
        const _this = this;
        let {list, showLoading, pageIndex, totalPages, total} = _this.props;
        let {editModelVisible, selectedIndex, btnFlag, delModalVisible,tableHeight} = _this.state;
        const paginationObj = {   // 分页
            activePage: pageIndex,//当前页
            total: total,//总条数
            items: totalPages,
            freshData: _this.freshData,
            onDataNumSelect: _this.onDataNumSelect,
        }

        const sortObj = {
            mode: 'multiple',
            backSource: true
        }

        const btnForbid = list.length > 0 ? false : true;

        return (
            <div className='single-table-popup'>
                <Header title='A3 单表弹框编辑示例'/>
                <SearchArea
                {...this.props}
                onCloseEdit={this.onCloseEdit}
                onCallback={this.resetTableHeight}
                />
                <div className='table-header'>
				<ButtonRoleGroup funcCode="singletable-popupedit">
                        <Button
                            role="add"
                            colors="primary"
                            className="ml8"
                            onClick={() => {
                                _this.onClickShowModel(0);
                            }}
                        >新增</Button>
                        <Button
                            role="update"
                            shape="border"
                            className="ml8"
                            disabled={btnForbid}
                            onClick={() => {
                                _this.onClickShowModel(1);
                            }}
                        >修改</Button>
                        <Button
                            shape="border"
                            className="ml8"
                            disabled={btnForbid}
                            onClick={() => {
                                _this.onClickShowModel(2);
                            }}
                        >详情</Button>
                        <Button
                            role="delete"
                            shape="border"
                            className="ml8"
                            disabled={btnForbid}
                            onClick={_this.onClickDel}>删除</Button>
				</ButtonRoleGroup>

                    <Alert show={delModalVisible} context="是否要删除 ?"
                           confirmFn={() => {
                               _this.confirmGoBack(1);
                           }}
                           cancelFn={() => {
                               _this.confirmGoBack(2);
                           }}
                    />
                    <Button shape="border" className="ml8" onClick={_this.export}>
                        导出
                    </Button>
                </div>
                <div className="gird-parent">
                    <Grid
                        ref={(el) => this.grid = el} //存模版
                        data={list}
                        rowKey={(r, i) => i}
                        columns={this.column}
                        paginationObj={paginationObj}
                        selectedRow={this.selectedRow}
                        multiSelect={false}
                        onRowClick={(record, index) => {
                            _this.setState({selectedIndex: index, editModelVisible: false});
                        }}
                        rowClassName={(record, index, indent) => {
                            if (_this.state.selectedIndex === index) {
                                return 'selected';
                            } else {
                                return '';
                            }
                        }}
                        showHeaderMenu={true}
                        sort={sortObj} //后端排序
                        loading={{show: showLoading, loadingType: "line"}}
                        scroll={{ y: tableHeight }}
                        sheetHeader={{height: 30, ifshow: false}}
                    />
                </div>

                <PopupModal
                    editModelVisible={editModelVisible}
                    onCloseEdit={this.onCloseEdit}
                    currentIndex={selectedIndex}
                    btnFlag={btnFlag}
                    list={list}
                />
            </div>
        )

    }
}

export default IndexView;


