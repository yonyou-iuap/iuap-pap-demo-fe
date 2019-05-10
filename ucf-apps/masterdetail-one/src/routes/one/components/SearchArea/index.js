import React, {Component} from 'react'
import {actions} from "mirrorx";
import {FormControl, Select} from "tinper-bee";
import FormList from 'components/FormList';
import SearchPanel from 'components/SearchPanel';
import {getValidateFieldsTrim} from "utils";

import './index.less'

const FormItem = FormList.Item;
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
        this.props.form.validateFields((err, _values) => {
            let values = getValidateFieldsTrim(_values);
            // 获取默认请求的 分页信息
            if(!err){
                let {pageSize} = this.props.orderObj;
                values.pageIndex = 0;
                values.pageSize = pageSize;
                actions.masterDetailOne.loadList(values);
            }
        });
    }

    reset = () => {
        this.props.form.resetFields();
    }

    render() {
        let {form: {getFieldProps}} = this.props;
        return (
            <SearchPanel
                reset={this.reset}
                search={this.search}
            >

                <FormList size="sm">
                    <FormItem
                        label="编号"
                    >
                        <FormControl
                            placeholder='模糊查询'
                            {...getFieldProps('search_orderCode', {initialValue: '',})}
                        />
                    </FormItem>

                    <FormItem
                        label="名称"
                    >
                        <FormControl placeholder='模糊查询' {...getFieldProps('search_orderName', {initialValue: '',})}/>
                    </FormItem>

                    <FormItem
                        label="类型"
                    >
                        <Select {...getFieldProps('search_orderType', {initialValue: ''})}>
                            <Option value="">请选择</Option>
                            <Option value="1">普通采购</Option>
                            <Option value="2">委托代销</Option>
                            <Option value="3">直运采购</Option>
                        </Select>
                    </FormItem>

                    <FormItem
                        label="流程状态"
                    >
                        <Select {...getFieldProps('search_bpmState', {initialValue: ''})}>
                            <Option value="">全部</Option>
                            <Option value={0}>待确认</Option>
                            <Option value={1}>执行中</Option>
                            <Option value={2}>已办结</Option>
                            <Option value={3}>终止</Option>
                        </Select>
                    </FormItem>
                </FormList>

            </SearchPanel>
        )
    }
}

export default FormList.createForm()(SearchArea)
