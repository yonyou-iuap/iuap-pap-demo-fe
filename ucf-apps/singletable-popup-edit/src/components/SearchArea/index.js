import { FormattedMessage, injectIntl } from 'react-intl';
import React, {Component} from 'react'
import {actions} from "mirrorx";
import {FormControl, Select} from "tinper-bee";
import DatePicker from "bee-datepicker";
import SearchPanel from 'components/SearchPanel';
import SelectMonth from 'components/SelectMonth';
import { RefIuapDept } from 'components/RefViews';

import FormList from 'components/FormList'

import {deepClone} from "utils";
import { dateLocal } from 'components/Intl'

import './index.less'

const FormItem = FormList.Item;
const {Option} = Select;
const format = "YYYY";
const {YearPicker} = DatePicker;

class SearchAreaForm extends Component {

    /** 查询数据
     * @param {*} error 校验是否成功
     * @param {*} values 表单数据
     */
    search = () => {
        this.props.form.validateFields((err, values) => {
            if (values.year) {
                values.year = values.year.format('YYYY');
            }
            const {dept} = values;
            if (dept) {
                const {refpk} = JSON.parse(dept);
                values.dept = refpk;
            }

            this.getQuery(values, 0);
        });

    }

    /**
     * 重置 如果无法清空，请手动清空
     */
    reset = () => {
        this.props.form.resetFields();
    }


    /** 查询数据
     * @param {Object} values 表单对象
     * @param {Number} type 1位清空操作，0位查询操作
     */
    getQuery = (values, type) => {
        const queryParam = deepClone(this.props.queryParam);
        let {pageParams, whereParams} = queryParam;
        whereParams = deepClone(whereParams);
        pageParams.pageIndex = 0;
        for (let key in values) {
            for (const [index, elem] of whereParams.entries()) {
                if (key === elem.key) {
                    whereParams.splice(index, 1);
                    break;
                }
            }

            if ((values[key] || values[key] === 0) && type === 0) {
                let condition = "LIKE";
                // 这里通过根据项目自己优化
                const equalArray = ["code", "month"];
                if (equalArray.includes(key)) { // 等于
                    condition = "EQ";
                }
                whereParams.push({key, value: values[key], condition}); //前后端约定
            }
        }
        queryParam.whereParams = whereParams;
        actions.popupEdit.updateState(queryParam);
        if (type === 0) {
            actions.popupEdit.loadList(queryParam);
        }
        this.props.onCloseEdit();

    }



    render() {
        const {form,onCallback} = this.props;
        const {getFieldProps} = form;

        return (
            <SearchPanel
                form={form}
                reset={this.reset}
                onCallback={onCallback}
                search={this.search}
                intl={this.props.intl}
            >

                <FormList size="sm">
                    <FormItem
                        label={<FormattedMessage id="js.com.Sea3.0001" defaultMessage="员工编号" />}
                    >
                        <FormControl placeholder={this.props.intl.formatMessage({id:"js.com.Sea3.0002", defaultMessage:"精确查询"})} {...getFieldProps('code', { initialValue: '' })} />
                    </FormItem>

                    <FormItem
                        label={<FormattedMessage id="js.com.Sea3.0003" defaultMessage="员工姓名" />}
                    >
                        <FormControl placeholder={this.props.intl.formatMessage({id:"js.com.Sea3.0004", defaultMessage:"模糊查询"})} {...getFieldProps('name', { initialValue: '' })} />
                    </FormItem>

                    <FormItem
                        label={<FormattedMessage id="js.com.Sea3.0005" defaultMessage="部门" />}
                    >
                        <RefIuapDept {...getFieldProps('dept', { initialValue: '' })} />
                    </FormItem>

                    <FormItem
                        label={<FormattedMessage id="js.com.Sea3.0006" defaultMessage="年份" />}
                    >
                        <YearPicker
                            {...getFieldProps('year', { initialValue: null })}
                            format={format}
                            locale={dateLocal}
                            placeholder={this.props.intl.formatMessage({id:"js.com.Sea3.0007", defaultMessage:"选择年"})}
                        />
                    </FormItem>

                    <FormItem
                        label={<FormattedMessage id="js.com.Sea3.0008" defaultMessage="月份" />}
                    >
                        <SelectMonth  {...getFieldProps('month', { initialValue: '' })} />
                    </FormItem>

                    <FormItem
                        label={<FormattedMessage id="js.com.Sea3.0009" defaultMessage="是否超标" />}
                    >
                        <Select {...getFieldProps('exdeeds', { initialValue: '' })}>
                            <Option value=""><FormattedMessage id="js.com.Sea3.0010" defaultMessage="请选择" /></Option>
                            <Option value="0"><FormattedMessage id="js.com.Sea3.0011" defaultMessage="未超标" /></Option>
                            <Option value="1"><FormattedMessage id="js.com.Sea3.0012" defaultMessage="超标" /></Option>
                        </Select>

                    </FormItem>
                </FormList>


            </SearchPanel>
        )
    }
}

export default FormList.createForm()(injectIntl(SearchAreaForm))
