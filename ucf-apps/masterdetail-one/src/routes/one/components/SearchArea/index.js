import React, {Component} from 'react'
import {actions} from "mirrorx";
import {Col, Row, FormControl, Label} from "tinper-bee";
import Form from 'bee-form';
import Select from 'bee-select';
import SearchPanel from 'components/SearchPanel';

import './index.less'

const {FormItem} = Form;
const {Option} = Select;

class SearchArea extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    /** 查询数据
     * @param {*} error 校验是否成功
     * @param {Object} values 表单数据
     */
    search = () => {
        this.props.form.validateFields(async (err, values) => {
            // 获取默认请求的 分页信息
            if(!err){
                const {pageSize} = this.props.orderObj;
                values.pageIndex = 0;
                values.pageSize = pageSize;
                actions.masterDetailOne.updateState({searchParam:values}); // 保存查询条件
                await actions.masterDetailOne.loadList(values);
            }
        });
    }

    render() {
        const {form} = this.props;
        const {getFieldProps} = form;
        return (
            <SearchPanel
                className="small"
                form={form}
                reset={this.reset}
                search={this.search}>
                <Row>
                    <Col md={4} xs={6}>
                        <FormItem>
                            <Label>编号</Label>
                            <FormControl placeholder='模糊查询' {...getFieldProps('search_orderCode', {initialValue: '',})}/>
                        </FormItem>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormItem>
                            <Label>名称</Label>
                            <FormControl placeholder='模糊查询' {...getFieldProps('search_orderName', {initialValue: '',})}/>
                        </FormItem>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormItem>
                            <Label>类型</Label>
                            <Select {...getFieldProps('search_orderType', {initialValue: ''})}>
                                <Option value="">请选择</Option>
                                <Option value="1">普通采购</Option>
                                <Option value="2">委托代销</Option>
                                <Option value="3">直运采购</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col md={4} xs={6}>
                        <FormItem>
                            <Label>流程状态</Label>
                            <Select {...getFieldProps('search_bpmState', {initialValue: ''})}>
                                <Option value="">全部</Option>
                                <Option value={0}>待确认</Option>
                                <Option value={1}>执行中</Option>
                                <Option value={2}>已办结</Option>
                                <Option value={3}>终止</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
            </SearchPanel>
        )
    }
}

export default Form.createForm()(SearchArea)
