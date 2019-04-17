import { FormattedMessage, injectIntl } from 'react-intl';
import React, {Component} from 'react'
import {actions} from "mirrorx";
import {FormControl, Select} from "tinper-bee";
import FormList from 'components/FormList';
import SearchPanel from 'components/SearchPanel';

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
        this.props.form.validateFields((err, values) => {
            // 获取默认请求的 分页信息
            if(!err){
                const {pageSize} = this.props.orderObj;
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
        const {form: {getFieldProps}} = this.props;
        return (
            <SearchPanel
                reset={this.reset}
                search={this.search}
                intl={this.props.intl}
            >

                <FormList size="sm">
                    <FormItem
                        label={<FormattedMessage id="js.com.Sea4.0001" defaultMessage="编号" />}
                    >
                        <FormControl
                            placeholder={this.props.intl.formatMessage({id:"js.com.Sea4.0002", defaultMessage:"模糊查询"})}
                            {...getFieldProps('search_orderCode', {initialValue: '',})}
                        />
                    </FormItem>

                    <FormItem
                        label={<FormattedMessage id="js.com.Sea4.0003" defaultMessage="名称" />}
                    >
                        <FormControl placeholder={this.props.intl.formatMessage({id:"js.com.Sea4.0002", defaultMessage:"模糊查询"})} {...getFieldProps('search_orderName', {initialValue: '',})}/>
                    </FormItem>

                    <FormItem
                        label={<FormattedMessage id="js.com.Sea4.0004" defaultMessage="类型" />}
                    >
                        <Select {...getFieldProps('search_orderType', {initialValue: ''})}>
                            <Option value=""><FormattedMessage id="js.com.Sea4.0005" defaultMessage="请选择" /></Option>
                            <Option value="1"><FormattedMessage id="js.com.Sea4.0006" defaultMessage="普通采购" /></Option>
                            <Option value="2"><FormattedMessage id="js.com.Sea4.0007" defaultMessage="委托代销" /></Option>
                            <Option value="3"><FormattedMessage id="js.com.Sea4.0008" defaultMessage="直运采购" /></Option>
                        </Select>
                    </FormItem>

                    <FormItem
                        label={<FormattedMessage id="js.com.Sea4.0009" defaultMessage="流程状态" />}
                    >
                        <Select {...getFieldProps('search_bpmState', {initialValue: ''})}>
                            <Option value=""><FormattedMessage id="js.com.Sea4.0010" defaultMessage="全部" /></Option>
                            <Option value={0}><FormattedMessage id="js.com.Sea4.0011" defaultMessage="待确认" /></Option>
                            <Option value={1}><FormattedMessage id="js.com.Sea4.0012" defaultMessage="执行中" /></Option>
                            <Option value={2}><FormattedMessage id="js.com.Sea4.0013" defaultMessage="已办结" /></Option>
                            <Option value={3}><FormattedMessage id="js.com.Sea4.0014" defaultMessage="终止" /></Option>
                        </Select>
                    </FormItem>
                </FormList>

            </SearchPanel>
        )
    }
}

export default FormList.createForm()(injectIntl(SearchArea))
