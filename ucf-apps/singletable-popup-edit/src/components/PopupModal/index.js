import { FormattedMessage, injectIntl } from 'react-intl';
import React, {Component} from "react";
import {actions} from "mirrorx";
import {FormControl, Select, InputNumber} from "tinper-bee";
import FormList from 'components/FormList';
import {getValidateFieldsTrim} from "utils";
import moment from "moment";
import DatePicker from "bee-datepicker";
import SelectMonth from 'components/SelectMonth';
import PopDialog from 'components/Pop';
import FormError from 'components/FormError';
import {RefWalsinLevel, RefIuapDept} from 'components/RefViews'

import { dateLocal } from 'components/Intl'
import './index.less'
const {YearPicker} = DatePicker;
const FormItem = FormList.Item;
const {Option} = Select;

const format = "YYYY-MM-DD HH:mm:ss";
const formatYYYY = "YYYY";
let titleArr = [<FormattedMessage id="js.com.Pop.0001" defaultMessage="新增" />, <FormattedMessage id="js.com.Pop.0002" defaultMessage="修改" />, <FormattedMessage id="js.com.Pop.0003" defaultMessage="详情" />];

class PopupModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowData: {},
            btnFlag: 0,
            cancelFlag: false
        }
    }

    async componentWillReceiveProps(nextProps) {
        let _this = this;
        let {btnFlag, currentIndex} = this.props;
        let {btnFlag: nextBtnFlag, currentIndex: nextCurrentIndex, editModelVisible} = nextProps;
        // 判断是否 btnFlag新弹框状态  currentIndex当前选中行
        if (btnFlag !== nextBtnFlag || currentIndex !== nextCurrentIndex) {
            _this.props.form.resetFields();
            // 防止网络阻塞造成btnFlag显示不正常
            this.setState({btnFlag: nextBtnFlag}); 
            if (nextBtnFlag !== 0 && editModelVisible) {
                let {list} = this.props;
                let rowData = list[nextCurrentIndex] || {};
                this.setState({rowData});
            }
        }

    }

    /**
     * 关闭Modal
     */
    onCloseEdit = () => {
        this.setState({rowData: {}, btnFlag: 0});
        this.props.onCloseEdit();
    }

    /**
     * 提交表单信息
     */
    onSubmitEdit = () => {
        let _this = this;
        let {btnFlag}=_this.state;
        _this.props.form.validateFields((err, _values) => {
            let values = getValidateFieldsTrim(_values);
            if (!err) {
                values = _this.onHandleSaveData(values);
                this.onCloseEdit();
                values.btnFlag=btnFlag; // 弹框状态标识
                actions.popupEdit.saveOrder(values);
            }
        } );
    }

    /**
     *
     * @description 处理保存数据
     * @param {Object} values 待处理数据
     */
    onHandleSaveData = (values) => {
        let _this = this,
            {rowData} = this.state,
            resObj = {};

        if (rowData) {
            resObj = Object.assign({}, rowData, values);
        }
        resObj.year = resObj.year.format(formatYYYY);
        //修改状态日期格式化
        if(resObj.applyTime){
            resObj.applyTime=resObj.applyTime.format(format);
        }
        _this.onHandleRef(resObj);
        return resObj;
    }

    onHandleRef = (values) => {
        let arr = ['dept', 'postLevel'];
        for (let i = 0, len = arr.length; i < len; i++) {
            let item = JSON.parse(values[arr[i]]);
            values[arr[i]] = item['refpk'];
        }
    }

    /**
     *
     * @description 底部按钮是否显示处理函数
     * @param {Number} btnFlag 为页面标识
     * @returns footer中的底部按钮
     */
    onHandleBtns = (btnFlag) => {
        let _this = this;
        let btns = [

            {
                label: <FormattedMessage id="js.com.Pop.0004" defaultMessage="取消" />,
                fun: this.onCloseEdit,
                shape: 'border'
            },
            {
                label: <FormattedMessage id="js.com.Pop.0005" defaultMessage="确定" />,
                fun: _this.onSubmitEdit,
                colors: 'primary'
            },
        ];

        if (btnFlag == 2) {
            btns = [];
        }
        return btns;
    }


    render() {
        const _this = this;
        let {form, editModelVisible} = _this.props;
        let {rowData, btnFlag} = _this.state;
        let {getFieldProps, getFieldError} = form;
        let {
            code, serviceYearsCompany, pickTime,
            postLevel, levelName, year, sex, allowanceStandard, remark,
            deptName, dept, exdeeds, allowanceActual,
            allowanceType, month, pickType, name,
            serviceYears, applyTime
        } = rowData;

        // console.log('rowData', allowanceStandard);
        let btns = _this.onHandleBtns(btnFlag);


        return (

            <PopDialog
                show={editModelVisible}
                title={titleArr[btnFlag]}
                size='lg'
                btns={btns}
                autoFocus={false}
                enforceFocus={false}
                close={this.onCloseEdit}
                className="single-table-pop-model"
            >


                <FormList>
                    <FormItem
                        label={<FormattedMessage id="js.com.Pop.0006" defaultMessage="员工编号" />}
                    >
                        <FormControl disabled={true}
                                     {...getFieldProps('code', {
                                         initialValue: code || '',
                                     })}
                        />
                    </FormItem>
                    <FormItem
                        required
                        label={<FormattedMessage id="js.com.Pop.0007" defaultMessage="员工姓名" />}
                    >
                        <FormControl disabled={btnFlag === 2}
                                     {...getFieldProps('name', {
                                         validateTrigger: 'onBlur',
                                         initialValue: name || '',
                                         rules: [{
                                             type: 'string',
                                             required: true,
                                             pattern: /\S+/ig,
                                             message: <FormattedMessage id="js.com.Pop.0008" defaultMessage="请输入员工姓名" />,
                                         }],
                                     })}
                        />
                        <FormError errorMsg={getFieldError('name')}/>
                    </FormItem>

                    <FormItem
                        required
                        label={<FormattedMessage id="js.com.Pop.0009" defaultMessage="员工性别" />}
                    >
                        <Select disabled={btnFlag === 2}
                                {...getFieldProps('sex', {
                                    initialValue: typeof sex !== 'undefined' ? sex : 0,
                                    rules: [{
                                        required: true, message: <FormattedMessage id="js.com.Pop.0010" defaultMessage="请选择员工性别" />,
                                    }],
                                })}
                        >
                            <Option value={0}><FormattedMessage id="js.com.Pop.0011" defaultMessage="女" /></Option>
                            <Option value={1}><FormattedMessage id="js.com.Pop.0012" defaultMessage="男" /></Option>
                        </Select>
                        <FormError errorMsg={getFieldError('sex')}/>
                    </FormItem>

                    <FormItem
                        required
                        label={<FormattedMessage id="js.com.Pop.0013" defaultMessage="部门" />}
                    >
                        <RefIuapDept
                            disabled={btnFlag === 2}
                            placeholder={this.props.intl.formatMessage({id:"js.com.Pop.0014", defaultMessage:"请选择部门"})}
                            {...getFieldProps('dept', {
                                initialValue: JSON.stringify({
                                    refname: deptName || '',
                                    refpk: dept || ''
                                }),
                                rules: [{
                                    message: <FormattedMessage id="js.com.Pop.0015" defaultMessage="请选择部门" />,
                                    pattern: /[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/
                                }],
                            })}
                            backdrop={false}
                        />
                        <FormError errorMsg={getFieldError('dept')}/>
                    </FormItem>

                    <FormItem
                        required
                        label={<FormattedMessage id="js.com.Pop.0016" defaultMessage="职级" />}
                    >
                        <RefWalsinLevel
                            disabled={btnFlag === 2}
                            placeholder={this.props.intl.formatMessage({id:"js.com.Pop.0017", defaultMessage:"请选择职级"})}
                            {...getFieldProps('postLevel', {
                                initialValue: JSON.stringify({
                                    refpk: postLevel ? postLevel.toString() : "",
                                    refname: levelName ? levelName.toString() : ""
                                }),
                                rules: [{
                                    message: <FormattedMessage id="js.com.Pop.0018" defaultMessage="请选择职级" />,
                                    pattern: /[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/
                                }]
                            })}
                        />
                        <FormError errorMsg={getFieldError('postLevel')}/>
                    </FormItem>

                    <FormItem
                        className="time"
                        required
                        label={<FormattedMessage id="js.com.Pop.0019" defaultMessage="工龄" />}
                    >
                        <InputNumber iconStyle="one" min={0} step={1} disabled={btnFlag === 2} max={99}
                                     {...getFieldProps('serviceYears', {
                                         initialValue: (typeof serviceYears) === "number" ? serviceYears : 1,
                                         rules: [{pattern: /^[0-9]+$/, required: true}],
                                     })}
                        />
                    </FormItem>

                    <FormItem
                        className="time"
                        required
                        label={<FormattedMessage id="js.com.Pop.0020" defaultMessage="司龄" />}
                    >
                        <InputNumber iconStyle="one" min={0} step={1} disabled={btnFlag === 2} max={99}
                                     {...getFieldProps('serviceYearsCompany', {
                                         initialValue: (typeof serviceYearsCompany) === "number" ? serviceYearsCompany : 1,
                                         rules: [{pattern: /^[0-9]+$/, required: true}],
                                     })}
                        />
                    </FormItem>

                    <FormItem
                        className="time"
                        required
                        label={<FormattedMessage id="js.com.Pop.0021" defaultMessage="年份" />}
                    >
                        <YearPicker disabled={btnFlag == 2}
                                    {...getFieldProps('year', {
                                        initialValue: year ? moment(year) : moment(),
                                        validateTrigger: 'onBlur',
                                        rules: [{required: true, message: <FormattedMessage id="js.com.Pop.0022" defaultMessage="请选择申请时间" />}],
                                    })}
                                    getCalendarContainer={() => {
                                        return document.querySelector('.single-table-pop-model')
                                    }}
                                    format={formatYYYY}
                                    locale={dateLocal}
                                    placeholder={this.props.intl.formatMessage({id:"js.com.Pop.0023", defaultMessage:"选择年"})}
                        />
                    </FormItem>

                    <FormItem
                        required
                        label={<FormattedMessage id="js.com.Pop.0024" defaultMessage="月份" />}
                    >
                        <SelectMonth disabled={btnFlag === 2}
                                     {...getFieldProps('month', {
                                         initialValue: month ? month : 1,
                                         rules: [{
                                             required: true, message: <FormattedMessage id="js.com.Pop.0025" defaultMessage="请选择月份" />,
                                         }],
                                     })} />
                        <FormError errorMsg={getFieldError('month')}/>
                    </FormItem>

                    <FormItem
                        required
                        label={<FormattedMessage id="js.com.Pop.0026" defaultMessage="补贴类别" />}
                    >
                        <Select disabled={btnFlag === 2}
                                {...getFieldProps('allowanceType', {
                                    initialValue: allowanceType ? allowanceType.toString() : '1',
                                    rules: [{
                                        required: true, message: <FormattedMessage id="js.com.Pop.0027" defaultMessage="请选择补贴类别" />,
                                    }],
                                })}
                        >
                            <Option value="1"><FormattedMessage id="js.com.Pop.0028" defaultMessage="电脑补助" /></Option>
                            <Option value="2"><FormattedMessage id="js.com.Pop.0029" defaultMessage="住宿补助" /></Option>
                            <Option value="3"><FormattedMessage id="js.com.Pop.0030" defaultMessage="交通补助" /></Option>
                        </Select>
                        <FormError errorMsg={getFieldError('allowanceType')}/>
                    </FormItem>

                    <FormItem
                        className="time"
                        required
                        label={<FormattedMessage id="js.com.Pop.0031" defaultMessage="补贴标准" />}
                    >
                        <InputNumber iconStyle="one" precision={2} min={0} max={9999} disabled={btnFlag === 2}
                                     {...getFieldProps('allowanceStandard', {
                                         initialValue: allowanceStandard ? Number(allowanceStandard) : 100,
                                     })}
                        />
                    </FormItem>

                    <FormItem
                        className="time"
                        required
                        label={<FormattedMessage id="js.com.Pop.0032" defaultMessage="实际补贴" />}
                    >
                        <InputNumber iconStyle="one" precision={2} min={0} max={9999} disabled={btnFlag === 2}
                                     {...getFieldProps('allowanceActual', {
                                         initialValue: allowanceActual ? Number(allowanceActual) : 100,
                                     })}
                        />
                    </FormItem>

                    <FormItem
                        required
                        label={<FormattedMessage id="js.com.Pop.0033" defaultMessage="是否超标" />}
                    >
                        <Select disabled={btnFlag === 2}
                                {...getFieldProps('exdeeds', {
                                    initialValue: exdeeds ? exdeeds.toString() : '0',
                                    rules: [{required: true, message: <FormattedMessage id="js.com.Pop.0034" defaultMessage="请选择是否超标" />}],
                                })}
                        >
                            <Option value="0"><FormattedMessage id="js.com.Pop.0035" defaultMessage="未超标" /></Option>
                            <Option value="1"><FormattedMessage id="js.com.Pop.0036" defaultMessage="超标" /></Option>
                        </Select>
                        <FormError errorMsg={getFieldError('exdeeds')}/>
                    </FormItem>

                    {btnFlag >= 2 ? (
                        <FormItem
                            className="time"
                            required
                            label={<FormattedMessage id="js.com.Pop.0037" defaultMessage="申请时间" />}
                        >
                            <DatePicker className='form-item' format={format} disabled={btnFlag === 2} locale={dateLocal}
                                        {...getFieldProps('applyTime', {
                                            initialValue: applyTime ? moment(applyTime) : moment(),
                                            validateTrigger: 'onBlur',
                                            rules: [{required: true, message: <FormattedMessage id="js.com.Pop.0022" defaultMessage="请选择申请时间" />}],
                                        })}
                            />
                        </FormItem>
                    ) : null}

                    <FormItem
                        required
                        label={<FormattedMessage id="js.com.Pop.0038" defaultMessage="领取方式" />}
                    >
                        <Select disabled={btnFlag === 2}
                                {...getFieldProps('pickType', {
                                    initialValue: pickType ? pickType.toString() : '1',
                                    rules: [{required: true, message: <FormattedMessage id="js.com.Pop.0039" defaultMessage="请选择领取方式" />}],
                                })}
                        >
                            <Option value="1"><FormattedMessage id="js.com.Pop.0040" defaultMessage="转账" /></Option>
                            <Option value="2"><FormattedMessage id="js.com.Pop.0041" defaultMessage="现金" /></Option>
                        </Select>
                        <FormError errorMsg={getFieldError('pickType')}/>
                    </FormItem>

                    {btnFlag >= 2 ? (
                        <FormItem
                            className="time"
                            label={<FormattedMessage id="js.com.Pop.0042" defaultMessage="领取时间" />}
                        >
                            <DatePicker className='form-item' format={format} disabled={btnFlag === 2} locale={dateLocal}
                                        {...getFieldProps('pickTime', {
                                            initialValue: pickTime && moment(pickTime) || '',
                                            validateTrigger: 'onBlur',
                                            rules: [{required: false, message: <FormattedMessage id="js.com.Pop.0043" defaultMessage="请选择领取时间" />,}],
                                        })}
                            />
                        </FormItem>
                    ) : null}

                    <FormItem
                        label={<FormattedMessage id="js.com.Pop.0044" defaultMessage="备注" />}
                    >
                        <FormControl disabled={btnFlag === 2}
                                     {...getFieldProps('remark', {
                                             initialValue: remark || ''
                                         }
                                     )}
                        />
                    </FormItem>
                </FormList>

            </PopDialog>
        )
    }
}

export default FormList.createForm()(injectIntl(PopupModal));
