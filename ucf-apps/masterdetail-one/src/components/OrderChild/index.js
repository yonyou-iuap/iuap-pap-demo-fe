import React, {Component} from "react";
import moment from "moment";
import {Col, Row, FormControl, Label, InputNumber,} from "tinper-bee";
import {RefIuapDept} from 'components/RefViews';
import DatePicker from 'bee-datepicker';
import Form from 'bee-form';
import Select from 'bee-select';
import FormError from 'components/FormError';

import {getCookie} from "utils";

import './index.less';

const {Option} = Select;
const {FormItem} = Form;
const format = "YYYY-MM-DD";

class OrderChild extends Component {

    render() {
        const _this = this;
        let {orderRow, btnFlag, form} = _this.props;
        const {getFieldProps, getFieldError} = form;
        return (
            <Row className='detail-body form-panel order-panel'>
                <Col md={4} xs={6}>
                    <FormItem>
                        <Label>编号</Label>
                        <FormControl disabled={true}
                                     {...getFieldProps('orderCode', {
                                         initialValue: orderRow.orderCode || ""
                                     })}
                        />
                        <FormError errorMsg={getFieldError('orderCode')}/>
                    </FormItem>
                </Col>

                <Col md={4} xs={6}>
                    <FormItem>
                        <Label className="mast">名称</Label>
                        <FormControl disabled={btnFlag === 2}
                                     {...getFieldProps('orderName', {
                                             validateTrigger: 'onBlur',
                                             initialValue: orderRow.orderName || '',
                                             rules: [{
                                                 required: true,
                                                 message: '请输入名称',
                                             }],
                                         }
                                     )}
                        />
                        <FormError errorMsg={getFieldError('orderName')}/>
                    </FormItem>
                </Col>
                <Col md={4} xs={6}>
                    <FormItem>
                        <Label className="mast">类型</Label>
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

                </Col>

                <Col md={4} xs={6}>
                    <FormItem>
                        <Label className="mast">部门</Label>
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

                </Col>


                <Col md={4} xs={6}>
                    <FormItem className="time">
                        <Label className="mast">价格</Label>
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
                </Col>

                <Col md={4} xs={6}>
                    <FormItem>
                        <Label>申请人</Label>
                        <FormControl disabled={true}
                                     {...getFieldProps('createUserName', {
                                         initialValue: orderRow.orderUserName ? orderRow.orderUserName : decodeURIComponent(getCookie("_A_P_userName")),
                                     })}
                        />
                    </FormItem>
                </Col>

                <Col md={4} xs={6}>
                    <FormItem className="time">
                        <Label className="datepicker mast">申请日期</Label>
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
                </Col>


            </Row>

        )
    }
}

export default OrderChild

