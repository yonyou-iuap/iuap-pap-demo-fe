import React, { Component } from 'react';
import { actions } from 'mirrorx';
import moment from 'moment';
import { Row, Col, Label, FormControl } from 'tinper-bee';
import Select from 'bee-select';
import Pagination from 'bee-pagination';
import Form from 'bee-form';
import Grid from 'components/Grid';
import Table from 'bee-table';

import Header from "components/Header";
import SearchPanel from 'components/SearchPanel';
import SelectMonth from 'components/SelectMonth';
import Button from 'components/Button';

import 'bee-pagination/build/Pagination.css';
import './index.less';


const FormItem = Form.FormItem;
const { Option } = Select;
const groupItem = [
    { 'value_cn': '所属部门', 'value_en': 'dept' },
    { 'value_cn': '补贴类别', 'value_en': 'allowanceType' }
];

class SingleTableGrouping extends Component {
    constructor(props) {
        super(props);
        this.masterNornalColumn = [
            {
                title: "员工编号",
                dataIndex: "code",
                key: "code",
                width: 120,
            },
            {
                title: "员工姓名",
                dataIndex: "name",
                key: "name",
                width: 120,
            },
            {
                title: "员工性别",
                dataIndex: "sexEnumValue",
                key: "sexEnumValue",
                width: 120
            },
            {
                title: "所属部门",
                dataIndex: "deptName",
                key: "deptName",
                width: 120
            },
            {
                title: "职级",
                dataIndex: "levelEnumValue",
                key: "levelEnumValue",
                width: 140

            },
            {
                title: "工龄",
                dataIndex: "serviceYears",
                key: "serviceYears",
                width: 130
            },
            {
                title: "司龄",
                dataIndex: "serviceYearsCompany",
                key: "serviceYearsCompany",
                width: 130
            },
            {
                title: "年份",
                dataIndex: "year",
                key: "year",
                width: 100,
                render(text,record,index){
                    return <div>{moment(text).format('YYYY')}</div>
                }
            },
            {
                title: "月份",
                dataIndex: "monthEnumValue",
                key: "monthEnumValue",
                width: 100
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
            },
            {
                title: "实际补贴",
                dataIndex: "allowanceActual",
                key: "allowanceActual",
                width: 120,
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
            },
            {
                title: "备注",
                dataIndex: "remark",
                key: "remark",
                width: 100,
            }
        ]
        //分组主表的表头
        this.masterColumn = [
            {
                title: "员工编号",
                dataIndex: "code",
                key: "code",
                width: 120,
                render: (value, record, index) => {
                    let obj = {
                        children: `【${record.name}】 \t 总人数：${record.count}人 \t 金额：${record.sum}`,
                        props: {
                            colSpan: 17
                        }
                    };
                    return obj;
                }
            },
            {
                title: "员工姓名",
                dataIndex: "name",
                key: "name",
                width: 120,
                render: () => <div></div>
            },
            {
                title: "员工性别",
                dataIndex: "sexEnumValue",
                key: "sexEnumValue",
                width: 120,
                render: () => <div></div>
            },
            {
                title: "所属部门",
                dataIndex: "deptName",
                key: "deptName",
                width: 120,
                render: () => <div></div>
            },
            {
                title: "职级",
                dataIndex: "levelEnumValue",
                key: "levelEnumValue",
                width: 140,
                render: () => <div></div>

            },
            {
                title: "工龄",
                dataIndex: "serviceYears",
                key: "serviceYears",
                width: 130,
                render: () => <div></div>
            },
            {
                title: "司龄",
                dataIndex: "serviceYearsCompany",
                key: "serviceYearsCompany",
                width: 130,
                render: () => <div></div>
            },
            {
                title: "年份",
                dataIndex: "year",
                key: "year",
                width: 100,
                render: () => <div></div>
            },
            {
                title: "月份",
                dataIndex: "monthEnumValue",
                key: "monthEnumValue",
                width: 100,
                render: () => <div></div>
            },
            {
                title: "补贴类别",
                dataIndex: "allowanceTypeEnumValue",
                key: "allowanceTypeEnumValue",
                width: 120,
                render: () => <div></div>
            },
            {
                title: "补贴标准",
                dataIndex: "allowanceStandard",
                key: "allowanceStandard",
                width: 120,
                render: () => <div></div>
            },
            {
                title: "实际补贴",
                dataIndex: "allowanceActual",
                key: "allowanceActual",
                width: 120,
                render: () => <div></div>
            },
            {
                title: "是否超标",
                dataIndex: "exdeedsEnumValue",
                key: "exdeedsEnumValue",
                width: 120,
                render: () => <div></div>
            },
            {
                title: "申请时间",
                dataIndex: "applyTime",
                key: "applyTime",
                width: 150,
                render: () => <div></div>
            },
            {
                title: "领取方式",
                dataIndex: "pickTypeEnumValue",
                key: "pickTypeEnumValue",
                width: 120,
                render: () => <div></div>
            },
            {
                title: "领取时间",
                dataIndex: "pickTime",
                key: "pickTime",
                width: 150,
                render: () => <div></div>
            },
            {
                title: "备注",
                dataIndex: "remark",
                key: "remark",
                width: 100,
                render: () => <div></div>
            }
        ];
        //子表的表头
        this.subColumn = [
            {
                title: "员工编号",
                dataIndex: "code",
                key: "code",
                width: 120
            },
            {
                title: "员工姓名",
                dataIndex: "name",
                key: "name",
                width: 120
            },
            {
                title: "员工性别",
                dataIndex: "sexEnumValue",
                key: "sexEnumValue",
                width: 120
            },
            {
                title: "所属部门",
                dataIndex: "deptName",
                key: "deptName",
                width: 120
            },
            {
                title: "职级",
                dataIndex: "levelEnumValue",
                key: "levelEnumValue",
                width: 140
            },
            {
                title: "工龄",
                dataIndex: "serviceYears",
                key: "serviceYears",
                width: 130
            }
        ];
    }

    componentDidMount() {
        //加载主表数据
        actions.grouping.loadMasterTableList(this.props.queryParam);
    }

    /**
     * 子表格下拉分页
     */
    onSelectSubPaging = (record, page) => {
        actions.grouping.loadSubTableList({ record, page: page - 1 });
    }

    /**
     * 子表格页面跳转分页
     */
    onSelectSubPagingSize = (record, index, size) => {
        actions.grouping.loadSubTableList({ record, size });
    }

    /**
     * 展开数据回调
     */
    expandedRowRender = (record, index, indent) => {
        let { subTableAllData, subTableAllPaging, subTableAllLoading } = this.props;
        let { pageParams: { pageIndex, total, totalPages } } = subTableAllPaging[record.key];
        return (<div>
            <Table
                className="grouping-sub-table"
                emptyText={() => <div>暂无数据</div>}
                showHeader={false}
                loading={{ show: subTableAllLoading[record.key], loadingType: "line" }}
                columns={this.masterNornalColumn}
                rowKey={(record, index) => record.key}//渲染需要的Key
                data={subTableAllData[record.key]}
            />
            <Pagination
                first
                last
                prev
                next
                maxButtons={5}
                boundaryLinks
                activePage={pageIndex}
                showJump={true}
                total={total}
                items={totalPages}
                dataNum={1}
                dataNumSelect={['5', '10', '15', '20', '25', '50', 'ALL']}
                onSelect={this.onSelectSubPaging.bind(this, record)}//点击页数回调
                onDataNumSelect={this.onSelectSubPagingSize.bind(this, record)}//点击跳转页数回调
            />
        </div>);
    }
    /**
     * 点击+的时候请求数据
     */
    getData = (expanded, record) => {
        if (expanded) {
            actions.grouping.clearSubTable(record);
            actions.grouping.loadSubTableList({ queryParam: this.props.queryParam, record });
        }
    }
    /**
     * 搜索
     */
    onSearch = (error, values) => {
        let _this = this;
        let { queryParam } = _this.props,
            groupArray = [],
            resultArray = [];

        for (let key in values) {
            if (key == "group") {
                groupArray = values.group
            } else if (values[key]) {
                resultArray.push({
                    key,
                    value: values[key],
                    condition: "eq"
                })
            }
        }

        let resultObj = Object.assign({}, queryParam, {
            "whereParams": {
                "whereParamsList": resultArray
            },
            "groupParams": {
                "groupList": groupArray
            }
        });
        if (Array.isArray(resultObj.groupParams.groupList) && resultObj.groupParams.groupList.length > 0) {
            actions.grouping.loadGroupTableList(resultObj);
        } else {
            actions.grouping.loadMasterTableList(resultObj);
        }
        //loadGroupTableList
    }
    /**
     * 点击分页按钮回调
     */
    onSelectPaginationIndex = (page) => {
        this.onSelectPagination(page, 0);
    }
    /**
     * 点击跳转页数回调
     */
    onSelectPaginationSize = (index, size) => {
        this.onSelectPagination(size, 1);
    }
    /**
     * 底层兼容分页方法
     */
    onSelectPagination = (value, type) => {
        let _this = this;
        let { queryParam, queryParam: { pageParams } } = _this.props,
            searchObj = {};
        if (type == 0) {
            searchObj = Object.assign({}, pageParams, {
                pageIndex: value - 1
            });
        } else {
            searchObj = Object.assign({}, pageParams, {
                pageSize: value
            });
        }
        queryParam['pageParams'] = searchObj;
        actions.grouping.loadMasterTableList(queryParam);
    }
    render() {
        let { masterTableList, masterTableLoading, form, pageIndex, pageSize, totalPages, total, queryParam: { groupParams } } = this.props;
        const { getFieldProps, getFieldError } = this.props.form;
        let tableAttr = {}
        tableAttr['columns'] = this.masterNornalColumn;
        tableAttr['data'] = masterTableList;
        if (groupParams['groupList'] && groupParams['groupList'].length > 0) {
            tableAttr['columns'] = this.masterColumn;
            tableAttr['expandedRowRender'] = this.expandedRowRender;
            tableAttr['onExpand'] = this.getData;
        }
        return (
            <div className='grouping u-grid'>
                <Header title="C1单表分组聚合示例" />
                <SearchPanel
                    className='grouping-form'
                    searchOpen={true}
                    form={form}
                    reset={() => this.props.form.resetFields()}
                    search={this.onSearch}>
                    <Row className='form-panel'>
                        <Col md={4} xs={6}>
                            <FormItem>
                                <Label>分组条件</Label>
                                <Select multiple {...getFieldProps('group')}>
                                    {groupItem.map((item) => {
                                        const { value_cn, value_en } = item;
                                        return <Option key={value_en}>{value_cn}</Option>
                                    })}
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row className='form-panel'>
                        <Col md={4} xs={6}>
                            <FormItem>
                                <Label>员工编号</Label>
                                <FormControl{...getFieldProps('code', { initialValue: '' })} />
                            </FormItem>
                        </Col>
                        <Col md={4} xs={6}>
                            <FormItem>
                                <Label>员工姓名</Label>
                                <FormControl {...getFieldProps('name', { initialValue: "" })} />
                            </FormItem>
                        </Col>
                        <Col md={4} xs={6}>
                            <FormItem>
                                <Label>是否超标</Label>
                                <Select {...getFieldProps('exdeeds', { initialValue: "" })}>
                                    <Option value="">请选择</Option>
                                    <Option value="0">未超标</Option>
                                    <Option value="1">超标</Option>
                                </Select>
                            </FormItem>
                        </Col>
                    </Row>
                    <Row className='form-panel'>
                        <Col md={4} xs={6}>
                            <FormItem>
                                <Label>月份</Label>
                                <SelectMonth  {...getFieldProps('month', { initialValue: "" })}></SelectMonth>
                            </FormItem>
                        </Col>
                        <Col md={4} xs={6}>
                            <FormItem>
                                <Label>年份</Label>
                                <FormControl {...getFieldProps('year', { initialValue: '' })} />
                            </FormItem>
                        </Col>
                    </Row>
                </SearchPanel>
                <div className='table-header'>
                    <Button iconType="uf-export" colors="primary" className="ml8" size='sm'>导出</Button>
                </div>
                <Pagination
                    first
                    last
                    prev
                    next
                    maxButtons={5}
                    boundaryLinks
                    activePage={pageIndex}
                    showJump={true}
                    total={total}
                    items={totalPages}//总记录
                    dataNumSelect={['5', '10', '15', '20', '25', '50', 'ALL']}
                    dataNum={1}//默认显示下拉位置
                    onSelect={this.onSelectPaginationIndex}//点击分页按钮回调
                    onDataNumSelect={this.onSelectPaginationSize}//点击跳转页数回调
                />
                <Table
                    emptyText={() => <div>暂无数据</div>}//表格无数据的时候显示的组件
                    bordered//边框
                    loading={{ show: masterTableLoading, loadingType: "line" }}
                    //rowKey={(record, index) => record.key}//渲染需要的Key
                    {...tableAttr}
                />
            </div >
        )
    }
}

export default Form.createForm()(SingleTableGrouping);
