import React, {Component} from "react";
import {actions} from "mirrorx";
import {FormControl} from "tinper-bee";
import FormList from 'components/FormList';
import Select from 'bee-select';
import moment from "moment";
import InputNumber from "bee-input-number";
import DatePicker from "tinper-bee/lib/Datepicker";
import SelectMonth from 'components/SelectMonth';
import PopDialog from 'components/Pop';
import FormError from 'components/FormError';
import {RefWalsinLevel, RefIuapDept, RefWalsinComboLevel} from 'components/RefViews'

import zhCN from "rc-calendar/lib/locale/zh_CN";
import './index.less'

const FormItem = FormList.Item;
const {Option} = Select;
const {YearPicker} = DatePicker;
const format = "YYYY-MM-DD HH:mm:ss";
const formatYYYY = "YYYY";
let titleArr = ["新增", "修改", "详情"];

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
        const {btnFlag, currentIndex} = this.props;
        const {btnFlag: nextBtnFlag, currentIndex: nextCurrentIndex, editModelVisible} = nextProps;
        // 判断是否 btnFlag新弹框状态  currentIndex当前选中行
        if (btnFlag !== nextBtnFlag || currentIndex !== nextCurrentIndex) {
            _this.props.form.resetFields();
            // 防止网络阻塞造成btnFlag显示不正常
            this.setState({btnFlag: nextBtnFlag});
            let rowData = {};
            try {
                if (nextBtnFlag !== 0 && editModelVisible) {
                    const {list} = this.props;
                    rowData = list[nextCurrentIndex] || {};
                }
            } catch (error) {
                console.log(error);
            } finally {
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
        const {btnFlag}=_this.state;
        _this.props.form.validateFields(async (err, values) => {
            if (!err) {
                await actions.popupEdit.updateState({
                    showLoading: true
                })
                try {
                    values = _this.onHandleSaveData(values);
                    this.onCloseEdit();
                    values.btnFlag=btnFlag; // 弹框状态标识
                    await actions.popupEdit.saveOrder(values);
                } catch (e) {
                    console.log('错误信息', e);
                } finally {
                    await actions.popupEdit.updateState({
                        showLoading: false
                    })
                }

            }
        });
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
                label: '取消',
                fun: this.onCloseEdit,
                shape: 'border'
            },
            {
                label: '确定',
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
        let _this = this;
        const {form, editModelVisible} = _this.props;
        const {rowData, btnFlag} = _this.state;
        const {getFieldProps, getFieldError} = form;
        const {
            code, serviceYearsCompany, pickTime,
            postLevel, levelName, year, sex, allowanceStandard, remark,
            deptName, dept, exdeeds, allowanceActual,
            allowanceType, month, pickType, name,
            serviceYears, applyTime
        } = rowData;

        console.log('rowData', allowanceStandard);
        let btns = _this.onHandleBtns(btnFlag);


        return (

            <PopDialog show={editModelVisible}
                       title={titleArr[btnFlag]}
                       size='lg'
                       btns={btns}
                       autoFocus={false}
                       enforceFocus={false}
                       close={this.onCloseEdit}>

                <FormList>
                    <FormItem
                        label="员工编号"
                    >
                        <FormControl disabled={true}
                                     {...getFieldProps('code', {
                                         initialValue: code || '',
                                     })}
                        />
                    </FormItem>
                    <FormItem
                        required
                        label="员工姓名"
                    >
                        <FormControl disabled={btnFlag === 2}
                                     {...getFieldProps('name', {
                                         validateTrigger: 'onBlur',
                                         initialValue: name || '',
                                         rules: [{
                                             type: 'string',
                                             required: true,
                                             pattern: /\S+/ig,
                                             message: '请输入员工姓名',
                                         }],
                                     })}
                        />
                        <FormError errorMsg={getFieldError('name')}/>
                    </FormItem>

                    <FormItem
                        required
                        label="员工性别"
                    >
                        <Select disabled={btnFlag === 2}
                                {...getFieldProps('sex', {
                                    initialValue: typeof sex !== 'undefined' ? sex : 0,
                                    rules: [{
                                        required: true, message: '请选择员工性别',
                                    }],
                                })}
                        >
                            <Option value={0}>女</Option>
                            <Option value={1}>男</Option>
                        </Select>
                        <FormError errorMsg={getFieldError('sex')}/>
                    </FormItem>

                    <FormItem
                        required
                        label="部门"
                    >
                        <RefIuapDept
                            disabled={btnFlag === 2}
                            placeholder="请选择部门"
                            {...getFieldProps('dept', {
                                initialValue: JSON.stringify({
                                    refname: deptName || '',
                                    refpk: dept || ''
                                }),
                                rules: [{
                                    message: '请选择部门',
                                    pattern: /[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/
                                }],
                            })}
                            backdrop={false}
                        />
                        <FormError errorMsg={getFieldError('dept')}/>
                    </FormItem>

                    <FormItem
                        required
                        label="职级"
                    >
                        <RefWalsinLevel
                            disabled={btnFlag === 2}
                            placeholder="请选择职级"
                            {...getFieldProps('postLevel', {
                                initialValue: JSON.stringify({
                                    refpk: postLevel ? postLevel.toString() : "",
                                    refname: levelName ? levelName.toString() : ""
                                }),
                                rules: [{
                                    message: '请选择职级',
                                    pattern: /[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/
                                }]
                            })}
                        />
                        <FormError errorMsg={getFieldError('postLevel')}/>
                    </FormItem>

                    <FormItem
                        className="time"
                        required
                        label="工龄"
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
                        label="司龄"
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
                        label="年份"
                    >
                        <YearPicker disabled={btnFlag == 2}
                                    {...getFieldProps('year', {
                                        initialValue: year ? moment(year) : moment(),
                                        validateTrigger: 'onBlur',
                                        rules: [{required: true, message: '请选择申请时间'}],
                                    })}
                                    format={formatYYYY}
                                    locale={zhCN}
                                    placeholder="选择年"
                        />
                    </FormItem>

                    <FormItem
                        required
                        label="月份"
                    >
                        <SelectMonth disabled={btnFlag === 2}
                                     {...getFieldProps('month', {
                                         initialValue: month ? month : 1,
                                         rules: [{
                                             required: true, message: '请选择月份',
                                         }],
                                     })} />
                        <FormError errorMsg={getFieldError('month')}/>
                    </FormItem>

                    <FormItem
                        required
                        label="补贴类别"
                    >
                        <Select disabled={btnFlag === 2}
                                {...getFieldProps('allowanceType', {
                                    initialValue: allowanceType ? allowanceType.toString() : '1',
                                    rules: [{
                                        required: true, message: '请选择补贴类别',
                                    }],
                                })}
                        >
                            <Option value="1">电脑补助</Option>
                            <Option value="2">住宿补助</Option>
                            <Option value="3">交通补助</Option>
                        </Select>
                        <FormError errorMsg={getFieldError('allowanceType')}/>
                    </FormItem>

                    <FormItem
                        className="time"
                        required
                        label="补贴标准"
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
                        label="实际补贴"
                    >
                        <InputNumber iconStyle="one" precision={2} min={0} max={9999} disabled={btnFlag === 2}
                                     {...getFieldProps('allowanceActual', {
                                         initialValue: allowanceActual ? Number(allowanceActual) : 100,
                                     })}
                        />
                    </FormItem>

                    <FormItem
                        required
                        label="是否超标"
                    >
                        <Select disabled={btnFlag === 2}
                                {...getFieldProps('exdeeds', {
                                    initialValue: exdeeds ? exdeeds.toString() : '0',
                                    rules: [{required: true, message: '请选择是否超标'}],
                                })}
                        >
                            <Option value="0">未超标</Option>
                            <Option value="1">超标</Option>
                        </Select>
                        <FormError errorMsg={getFieldError('exdeeds')}/>
                    </FormItem>

                    {btnFlag >= 2 ? (
                        <FormItem
                            className="time"
                            required
                            label="申请时间"
                        >
                            <DatePicker className='form-item' format={format} disabled={btnFlag === 2}
                                        {...getFieldProps('applyTime', {
                                            initialValue: applyTime ? moment(applyTime) : moment(),
                                            validateTrigger: 'onBlur',
                                            rules: [{required: true, message: '请选择申请时间'}],
                                        })}
                            />
                        </FormItem>
                    ) : null}

                    <FormItem
                        required
                        label="领取方式"
                    >
                        <Select disabled={btnFlag === 2}
                                {...getFieldProps('pickType', {
                                    initialValue: pickType ? pickType.toString() : '1',
                                    rules: [{required: true, message: '请选择领取方式'}],
                                })}
                        >
                            <Option value="1">转账</Option>
                            <Option value="2">现金</Option>
                        </Select>
                        <FormError errorMsg={getFieldError('pickType')}/>
                    </FormItem>

                    {btnFlag >= 2 ? (
                        <FormItem
                            className="time"
                            label="领取时间"
                        >
                            <DatePicker className='form-item' format={format} disabled={btnFlag === 2}
                                        {...getFieldProps('pickTime', {
                                            initialValue: pickTime && moment(pickTime) || '',
                                            validateTrigger: 'onBlur',
                                            rules: [{required: false, message: '请选择领取时间',}],
                                        })}
                            />
                        </FormItem>
                    ) : null}

                    <FormItem
                        label="备注"
                    >
                        <FormControl disabled={btnFlag === 2}
                                     {...getFieldProps('remark', {
                                             initialValue: remark || ''
                                         }
                                     )}
                        />
                    </FormItem>
                </FormList>

                {/*<Form>*/}
                    {/*<Row className='detail-body form-panel'>*/}
                        {/*<Col md={6} xs={12} sm={10}>*/}
                            {/*<FormItem>*/}
                                {/*<Label>员工编号</Label>*/}
                                {/*<FormControl disabled={true}*/}
                                             {/*{...getFieldProps('code', {*/}
                                                 {/*initialValue: code || '',*/}
                                             {/*})}*/}
                                {/*/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}
                        {/*<Col md={6} xs={12} sm={10}>*/}
                            {/*<FormItem>*/}
                                {/*<Label className="mast">员工姓名</Label>*/}
                                {/*<FormControl disabled={btnFlag === 2}*/}
                                             {/*{...getFieldProps('name', {*/}
                                                 {/*validateTrigger: 'onBlur',*/}
                                                 {/*initialValue: name || '',*/}
                                                 {/*rules: [{*/}
                                                     {/*type: 'string',*/}
                                                     {/*required: true,*/}
                                                     {/*pattern: /\S+/ig,*/}
                                                     {/*message: '请输入员工姓名',*/}
                                                 {/*}],*/}
                                             {/*})}*/}
                                {/*/>*/}
                                {/*<FormError errorMsg={getFieldError('name')}/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}
                        {/*<Col md={6} xs={12} sm={10}>*/}
                            {/*<FormItem>*/}
                                {/*<Label className="mast">员工性别</Label>*/}
                                {/*<Select disabled={btnFlag === 2}*/}
                                        {/*{...getFieldProps('sex', {*/}
                                            {/*initialValue: typeof sex !== 'undefined' ? sex : 0,*/}
                                            {/*rules: [{*/}
                                                {/*required: true, message: '请选择员工性别',*/}
                                            {/*}],*/}
                                        {/*})}*/}
                                {/*>*/}
                                    {/*<Option value={0}>女</Option>*/}
                                    {/*<Option value={1}>男</Option>*/}
                                {/*</Select>*/}
                                {/*<FormError errorMsg={getFieldError('sex')}/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}


                        {/*<Col md={6} xs={12} sm={10}>*/}
                            {/*<FormItem>*/}
                                {/*<Label className="mast">部门</Label>*/}
                                {/*<RefIuapDept*/}
                                    {/*disabled={btnFlag === 2}*/}
                                    {/*placeholder="请选择部门"*/}
                                    {/*{...getFieldProps('dept', {*/}
                                        {/*initialValue: JSON.stringify({*/}
                                            {/*refname: deptName || '',*/}
                                            {/*refpk: dept || ''*/}
                                        {/*}),*/}
                                        {/*rules: [{*/}
                                            {/*message: '请选择部门',*/}
                                            {/*pattern: /[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/*/}
                                        {/*}],*/}
                                    {/*})}*/}
                                    {/*backdrop={false}*/}
                                {/*/>*/}
                                {/*<FormError errorMsg={getFieldError('dept')}/>*/}
                            {/*</FormItem>*/}

                        {/*</Col>*/}
                        {/*<Col md={6} xs={12} sm={10}>*/}
                            {/*<FormItem>*/}
                                {/*<Label className="mast">职级</Label>*/}
                                {/*<RefWalsinLevel*/}
                                    {/*disabled={btnFlag === 2}*/}
                                    {/*placeholder="请选择职级"*/}
                                    {/*{...getFieldProps('postLevel', {*/}
                                        {/*initialValue: JSON.stringify({*/}
                                            {/*refpk: postLevel ? postLevel.toString() : "",*/}
                                            {/*refname: levelName ? levelName.toString() : ""*/}
                                        {/*}),*/}
                                        {/*rules: [{*/}
                                            {/*message: '请选择职级',*/}
                                            {/*pattern: /[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/*/}
                                        {/*}]*/}
                                    {/*})}*/}
                                {/*/>*/}
                                {/*<FormError errorMsg={getFieldError('postLevel')}/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}

                        {/*<Col md={6} xs={12} sm={10}>*/}
                            {/*<FormItem className="time">*/}
                                {/*<Label className="mast">工龄</Label>*/}
                                {/*<InputNumber iconStyle="one" min={0} step={1} disabled={btnFlag === 2} max={99}*/}
                                             {/*{...getFieldProps('serviceYears', {*/}
                                                 {/*initialValue: (typeof serviceYears) === "number" ? serviceYears : 1,*/}
                                                 {/*rules: [{pattern: /^[0-9]+$/, required: true}],*/}
                                             {/*})}*/}
                                {/*/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}
                        {/*<Col md={6} xs={12} sm={10}>*/}
                            {/*<FormItem className="time">*/}
                                {/*<Label className="mast">司龄</Label>*/}
                                {/*<InputNumber iconStyle="one" min={0} step={1} disabled={btnFlag === 2} max={99}*/}
                                             {/*{...getFieldProps('serviceYearsCompany', {*/}
                                                 {/*initialValue: (typeof serviceYearsCompany) === "number" ? serviceYearsCompany : 1,*/}
                                                 {/*rules: [{pattern: /^[0-9]+$/, required: true}],*/}
                                             {/*})}*/}
                                {/*/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}
                        {/*<Col md={6} xs={12} sm={10}>*/}
                            {/*<FormItem className="time">*/}
                                {/*<Label className="mast">年份</Label>*/}
                                {/*<YearPicker disabled={btnFlag == 2}*/}
                                            {/*{...getFieldProps('year', {*/}
                                                {/*initialValue: year ? moment(year) : moment(),*/}
                                                {/*validateTrigger: 'onBlur',*/}
                                                {/*rules: [{required: true, message: '请选择申请时间'}],*/}
                                            {/*})}*/}
                                            {/*format={formatYYYY}*/}
                                            {/*locale={zhCN}*/}
                                            {/*placeholder="选择年"*/}
                                {/*/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}
                        {/*<Col md={6} xs={12} sm={10}>*/}
                            {/*<FormItem>*/}
                                {/*<Label className="mast">月份</Label>*/}
                                {/*<SelectMonth disabled={btnFlag === 2}*/}
                                             {/*{...getFieldProps('month', {*/}
                                                 {/*initialValue: month ? month : 1,*/}
                                                 {/*rules: [{*/}
                                                     {/*required: true, message: '请选择月份',*/}
                                                 {/*}],*/}
                                             {/*})} />*/}
                                {/*<FormError errorMsg={getFieldError('month')}/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}
                        {/*<Col md={6} xs={12} sm={10}>*/}
                            {/*<FormItem>*/}
                                {/*<Label className="mast">补贴类别</Label>*/}
                                {/*<Select disabled={btnFlag === 2}*/}
                                        {/*{...getFieldProps('allowanceType', {*/}
                                            {/*initialValue: allowanceType ? allowanceType.toString() : '1',*/}
                                            {/*rules: [{*/}
                                                {/*required: true, message: '请选择补贴类别',*/}
                                            {/*}],*/}
                                        {/*})}*/}
                                {/*>*/}
                                    {/*<Option value="1">电脑补助</Option>*/}
                                    {/*<Option value="2">住宿补助</Option>*/}
                                    {/*<Option value="3">交通补助</Option>*/}
                                {/*</Select>*/}
                                {/*<FormError errorMsg={getFieldError('allowanceType')}/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}
                        {/*<Col md={6} xs={12} sm={10} className="inputNumItem">*/}
                            {/*<FormItem className="time">*/}
                                {/*<Label className="mast">补贴标准</Label>*/}
                                {/*<InputNumber iconStyle="one" precision={2} min={0} max={9999} disabled={btnFlag === 2}*/}
                                             {/*{...getFieldProps('allowanceStandard', {*/}
                                                 {/*initialValue: allowanceStandard ? Number(allowanceStandard) : 100,*/}
                                             {/*})}*/}
                                {/*/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}
                        {/*<Col md={6} xs={12} sm={10} className="inputNumItem">*/}
                            {/*<FormItem className="time">*/}
                                {/*<Label className="mast">实际补贴</Label>*/}
                                {/*<InputNumber iconStyle="one" precision={2} min={0} max={9999} disabled={btnFlag === 2}*/}
                                             {/*{...getFieldProps('allowanceActual', {*/}
                                                 {/*initialValue: allowanceActual ? Number(allowanceActual) : 100,*/}
                                             {/*})}*/}
                                {/*/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}
                        {/*<Col md={6} xs={12} sm={10}>*/}
                            {/*<FormItem>*/}
                                {/*<Label className="mast">是否超标</Label>*/}
                                {/*<Select disabled={btnFlag === 2}*/}
                                        {/*{...getFieldProps('exdeeds', {*/}
                                            {/*initialValue: exdeeds ? exdeeds.toString() : '0',*/}
                                            {/*rules: [{required: true, message: '请选择是否超标'}],*/}
                                        {/*})}*/}
                                {/*>*/}
                                    {/*<Option value="0">未超标</Option>*/}
                                    {/*<Option value="1">超标</Option>*/}
                                {/*</Select>*/}
                                {/*<FormError errorMsg={getFieldError('exdeeds')}/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}

                        {/*<Col md={6} xs={12} sm={10} className={`${btnFlag < 2 && 'hide' || ''}`}>*/}
                            {/*<FormItem className="time">*/}
                                {/*<Label className="datepicker">申请时间</Label>*/}
                                {/*<DatePicker className='form-item' format={format} disabled={btnFlag === 2}*/}
                                            {/*{...getFieldProps('applyTime', {*/}
                                                {/*initialValue: applyTime ? moment(applyTime) : moment(),*/}
                                                {/*validateTrigger: 'onBlur',*/}
                                                {/*rules: [{required: true, message: '请选择申请时间'}],*/}
                                            {/*})}*/}
                                {/*/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}


                        {/*<Col md={6} xs={12} sm={10}>*/}
                            {/*<FormItem>*/}
                                {/*<Label className="mast">领取方式</Label>*/}
                                {/*<Select disabled={btnFlag === 2}*/}
                                        {/*{...getFieldProps('pickType', {*/}
                                            {/*initialValue: pickType ? pickType.toString() : '1',*/}
                                            {/*rules: [{required: true, message: '请选择领取方式'}],*/}
                                        {/*})}*/}
                                {/*>*/}
                                    {/*<Option value="1">转账</Option>*/}
                                    {/*<Option value="2">现金</Option>*/}
                                {/*</Select>*/}
                                {/*<FormError errorMsg={getFieldError('pickType')}/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}

                        {/*<Col md={6} xs={12} sm={10} className={`${btnFlag < 2 && 'hide' || ''}`}>*/}
                            {/*<FormItem className="time">*/}
                                {/*<Label className="datepicker">领取时间</Label>*/}
                                {/*<DatePicker className='form-item' format={format} disabled={btnFlag === 2}*/}
                                            {/*{...getFieldProps('pickTime', {*/}
                                                {/*initialValue: pickTime && moment(pickTime) || '',*/}
                                                {/*validateTrigger: 'onBlur',*/}
                                                {/*rules: [{required: false, message: '请选择领取时间',}],*/}
                                            {/*})}*/}
                                {/*/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}

                        {/*<Col md={6} xs={12} sm={10}>*/}
                            {/*<FormItem>*/}
                                {/*<Label>备注</Label>*/}
                                {/*<FormControl disabled={btnFlag === 2}*/}
                                             {/*{...getFieldProps('remark', {*/}
                                                     {/*initialValue: remark || ''*/}
                                                 {/*}*/}
                                             {/*)}*/}
                                {/*/>*/}
                            {/*</FormItem>*/}
                        {/*</Col>*/}
                    {/*</Row>*/}
                {/*</Form>*/}
            </PopDialog>
        )
    }
}

export default FormList.createForm()(PopupModal);
