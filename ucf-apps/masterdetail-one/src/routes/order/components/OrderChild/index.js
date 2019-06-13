import React, {Component} from "react";
import moment from "moment";
import {FormControl, Select} from 'tinper-bee'
import {RefIuapDept} from 'components/RefViews';
import DatePicker from 'bee-datepicker';
import FormList from 'components/FormList';
import FormError from 'components/FormError';
import InputNumber from 'bee-input-number';
import {getCookie} from "utils";

import './index.less';

const {Option} = Select;
const FormItem = FormList.Item;
const format = "YYYY-MM-DD";

const layoutOpt = {
    md: 4,
    xs: 6
}

class OrderChild extends Component {

    render() {
        const _this = this;
        let {orderRow, btnFlag, form} = _this.props;
        let {getFieldProps, getFieldError} = form;
        return (
            <FormList className='detail-body form-panel order-panel' layoutOpt={layoutOpt}>
                <FormItem label="编号" layoutOpt={layoutOpt}>
                    <FormControl disabled={true}
                                 {...getFieldProps('orderCode', {
                                     initialValue: orderRow.orderCode || ""
                                 })}
                    />
                    <FormError errorMsg={getFieldError('orderCode')}/>
                </FormItem>

                <FormItem required label={"名称"} layoutOpt={layoutOpt}>
                    <FormControl disabled={btnFlag === 2}
                                 maxLength={20}
                                 {...getFieldProps('orderName', {
                                         validateTrigger: 'onBlur',
                                         initialValue: orderRow.orderName || '',
                                         rules: [{
                                             required: true,
                                             message: '请输入名称,长度小于20',
                                             max:20
                                         }],
                                     }
                                 )}
                    />
                    <FormError errorMsg={getFieldError('orderName')}/>
                </FormItem>
                <FormItem required label={"类型"} layoutOpt={layoutOpt}>
                    <Select disabled={btnFlag === 2}
                            {...getFieldProps('orderType', {
                                initialValue: orderRow.orderType ? orderRow.orderType.toString() : "1",
                                rules: [{
                                    type: 'string', required: true,
                                }],
                            })}
                    >
                        <Option value="1">普通采购</Option>
                        <Option value="2">委托代销</Option>
                        <Option value="3">直运采购</Option>
                    </Select>
                    <FormError errorMsg={getFieldError('orderType')}/>
                </FormItem>

                <FormItem required label={"部门"} layoutOpt={layoutOpt}>
                    <RefIuapDept
                        disabled={btnFlag === 2}
                        {...getFieldProps('orderDept', {
                            initialValue: JSON.stringify({
                                refname: orderRow.orderDeptName || '',
                                refpk: orderRow.orderDept || ''
                            }),
                            rules: [{
                                message: '请选择部门',
                                pattern: /[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/
                            }],
                        })}
                        backdrop = {false}
                    />
                    <FormError errorMsg={getFieldError('orderDept')}/>
                </FormItem>


                <FormItem required label={"价格"} layoutOpt={layoutOpt}>
                    <InputNumber
                        iconStyle="one"
                        precision={2}
                        min={0}
                        max={999999}
                        className="inputNumItem"
                        disabled={btnFlag === 2}
                        {...getFieldProps('orderPrice', {
                            initialValue: orderRow.orderPrice ? Number(orderRow.orderPrice) : 0.00,
                        })}
                    />
                </FormItem>

                <FormItem label={"申请人"} layoutOpt={layoutOpt}>
                    <FormControl disabled={true}
                                 {...getFieldProps('createUserName', {
                                     initialValue: orderRow.orderUserName ? orderRow.orderUserName : decodeURIComponent(getCookie("_A_P_userName")),
                                 })}
                    />
                </FormItem>

                <FormItem required label={"申请日期"} layoutOpt={layoutOpt}>
                    <DatePicker className='form-item' disabled={btnFlag === 2}
                                format={format}
                                {...getFieldProps('orderDate', {
                                        initialValue: orderRow.orderDate ? moment(orderRow.orderDate) : moment(),
                                        validateTrigger: 'onBlur',
                                        rules: [{
                                            required: true, message: '请选择申请日期',
                                        }],
                                    }
                                )}
                    />
                    <FormError errorMsg={getFieldError('orderDate')}/>
                </FormItem>


            </FormList>

        )
    }
}

export default OrderChild

