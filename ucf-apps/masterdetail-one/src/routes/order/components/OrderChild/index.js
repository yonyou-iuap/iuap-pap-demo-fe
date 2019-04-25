import { FormattedMessage, defineMessages, injectIntl, intlShape } from 'react-intl';
import React, {Component} from "react";
import moment from "moment";
import { FormControl, InputNumber, Select} from "tinper-bee";
import {RefIuapDept} from 'components/RefViews';
import DatePicker from 'bee-datepicker';
import FormList from 'components/FormList';
import FormError from 'components/FormError';
import { dateLocal } from 'components/Intl'
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
        const {getFieldProps, getFieldError} = form;
        return (
            <FormList className='detail-body form-panel order-panel'>
                <FormItem label={<FormattedMessage id="js.com.Ord.0001" defaultMessage="编号" />} layoutOpt={layoutOpt}>
                    <FormControl disabled={true}
                                 {...getFieldProps('orderCode', {
                                     initialValue: orderRow.orderCode || ""
                                 })}
                    />
                    <FormError errorMsg={getFieldError('orderCode')}/>
                </FormItem>

                <FormItem required label={<FormattedMessage id="js.com.Ord.0002" defaultMessage="名称" />} layoutOpt={layoutOpt}>
                    <FormControl disabled={btnFlag === 2}
                                 {...getFieldProps('orderName', {
                                         validateTrigger: 'onBlur',
                                         initialValue: orderRow.orderName || '',
                                         rules: [{
                                             required: true,
                                             message: <FormattedMessage id="js.com.Ord.0003" defaultMessage="请输入名称" />,
                                         }],
                                     }
                                 )}
                    />
                    <FormError errorMsg={getFieldError('orderName')}/>
                </FormItem>
                <FormItem required label={<FormattedMessage id="js.com.Ord.0004" defaultMessage="类型" />} layoutOpt={layoutOpt}>
                    <Select disabled={btnFlag === 2}
                            {...getFieldProps('orderType', {
                                initialValue: orderRow.orderType ? orderRow.orderType.toString() : "1",
                                rules: [{
                                    type: 'string', required: true,
                                }],
                            })}
                    >
                        <Option value="1"><FormattedMessage id="js.com.Ord.0005" defaultMessage="普通采购" /></Option>
                        <Option value="2"><FormattedMessage id="js.com.Ord.0006" defaultMessage="委托代销" /></Option>
                        <Option value="3"><FormattedMessage id="js.com.Ord.0007" defaultMessage="直运采购" /></Option>
                    </Select>
                    <FormError errorMsg={getFieldError('orderType')}/>
                </FormItem>

                <FormItem required label={<FormattedMessage id="js.com.Ord.0008" defaultMessage="部门" />} layoutOpt={layoutOpt}>
                    <RefIuapDept
                        disabled={btnFlag === 2}
                        {...getFieldProps('orderDept', {
                            initialValue: JSON.stringify({
                                refname: orderRow.orderDeptName || '',
                                refpk: orderRow.orderDept || ''
                            }),
                            rules: [{
                                message: <FormattedMessage id="js.com.Ord.0009" defaultMessage="请选择部门" />,
                                pattern: /[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/
                            }],
                        })}
                        backdrop = {false}
                    />
                    <FormError errorMsg={getFieldError('orderDept')}/>
                </FormItem>


                <FormItem required label={<FormattedMessage id="js.com.Ord.0010" defaultMessage="价格" />} layoutOpt={layoutOpt}>
                    <InputNumber
                        iconStyle="one"
                        precision={2}
                        min={0}
                        max={9999}
                        className="inputNumItem"
                        disabled={btnFlag === 2}
                        {...getFieldProps('orderPrice', {
                            initialValue: orderRow.orderPrice ? Number(orderRow.orderPrice) : 0.00,
                        })}
                    />
                </FormItem>

                <FormItem label={<FormattedMessage id="js.com.Ord.0011" defaultMessage="申请人" />} layoutOpt={layoutOpt}>
                    <FormControl disabled={true}
                                 {...getFieldProps('createUserName', {
                                     initialValue: orderRow.orderUserName ? orderRow.orderUserName : decodeURIComponent(getCookie("_A_P_userName")),
                                 })}
                    />
                </FormItem>

                <FormItem required label={<FormattedMessage id="js.com.Ord.0012" defaultMessage="申请日期" />} layoutOpt={layoutOpt}>
                    <DatePicker className='form-item' disabled={btnFlag === 2}
                                format={format}
                                locale={dateLocal}
                                {...getFieldProps('orderDate', {
                                        initialValue: orderRow.orderDate ? moment(orderRow.orderDate) : moment(),
                                        validateTrigger: 'onBlur',
                                        rules: [{
                                            required: true, message: <FormattedMessage id="js.com.Ord.0013" defaultMessage="请选择申请日期" />,
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

