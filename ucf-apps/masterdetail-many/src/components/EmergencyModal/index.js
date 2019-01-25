import React, {Component} from "react";
import {actions} from "mirrorx";
import {Col, Row, FormControl, Label} from "tinper-bee";
import Form from 'bee-form';
import PopDialog from 'components/Pop';
import FormError from 'components/FormError';
import FormControlPhone from 'components/FormControlPhone';

import 'bee-datepicker/build/DatePicker.css';
import './index.less'

const {FormItem} = Form;
let titleArr = ["新增", "修改", "详情"];

class AddEditEmergency extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rowData: {},
            btnFlag: 0,
        }
    }

    async componentWillReceiveProps(nextProps) {
        const {btnFlag, currentIndex} = this.props;
        const {btnFlag: nextBtnFlag, currentIndex: nextCurrentIndex, emergencyObj, checkTable, modalVisible} = nextProps;
        if (btnFlag !== nextBtnFlag || currentIndex !== nextCurrentIndex) {
            // 防止网络阻塞造成btnFlag显示不正常
            this.setState({btnFlag: nextBtnFlag});
            let rowData = {};
            try {
                // 判断是否从后端获取新数据
                if (nextBtnFlag !== 0 && checkTable === "emergency" && modalVisible) {
                    this.props.form.resetFields();
                    const {list} = emergencyObj;
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
     * button关闭Modal 同时清空state
     * @param {Boolean} isSave 判断是否添加或者更新
     */
    onCloseEdit = (isSave) => {
        this.setState({rowData: {}, btnFlag: 0});
        this.props.form.resetFields();
        this.props.onCloseModal(isSave);
    }

    /**
     * 提交信息
     * @returns {Promise<void>}
     */
    onSubmitEdit = async () => {
        const _this = this;
        const {btnFlag}=_this.state;
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const {passengerIndex, passengerObj} = this.props;
                const {list} = passengerObj;
                const {id: passengerId} = list[passengerIndex]; //获取父亲节点的id
                let {rowData} = _this.state;
                if (rowData && rowData.id) { // 如果是编辑，带上节点 id
                    values.id = rowData.id;
                    values.ts = rowData.ts;
                }
                values.passengerId = passengerId;
                values.btnFlag=btnFlag;
                _this.onCloseEdit(true); // 关闭弹框 无论成功失败
                this.props.resetIndex('emergencyIndex'); //重置state， 默认选中第一条
                actions.masterDetailMany.saveEmergency(values); //保存主表数据
            }

        });
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
                label: '确定',
                fun: _this.onSubmitEdit,
                icon: 'uf-correct'
            },

            {
                label: '取消',
                fun: this.onCloseEdit,
                icon: 'uf-back'
            }
        ];

        if (btnFlag == 2) {
            btns = [];
        }
        return btns;
    }

    // 通过search_id查询数据
    render() {
        let _this = this;
        const {form, modalVisible} = _this.props;
        const {getFieldProps, getFieldError} = form;
        const {rowData, btnFlag} = _this.state;
        const {contactRelation, contactName, contactPhone, remark} = rowData;
        let btns = _this.onHandleBtns(btnFlag);

        return (
            <PopDialog
                show={modalVisible}
                size='lg'
                close={this.onCloseEdit}
                title={titleArr[btnFlag]}
                btns={btns}
                className='emergency-modal'
            >
                <Form>
                    <Row className='detail-body form-panel'>
                        <Col md={6} xs={12} sm={10}>
                            <FormItem>
                                <Label className="mast">联系人姓名</Label>
                                <FormControl disabled={btnFlag > 0}
                                             {...getFieldProps('contactName', {
                                                 validateTrigger: 'onBlur',
                                                 initialValue: contactName || '',
                                                 rules: [{
                                                     type: 'string',
                                                     required: true,
                                                     pattern: /\S+/ig,
                                                     message: '请输入联系人姓名',
                                                 }],
                                             })}
                                />
                                <FormError errorMsg={getFieldError('contactName')}/>
                            </FormItem>
                        </Col>
                        <Col md={6} xs={12} sm={10}>
                            <FormItem>
                                <Label className="mast">联系人电话</Label>
                                <FormControlPhone disabled={btnFlag === 2}
                                             {...getFieldProps('contactPhone', {
                                                 validateTrigger: 'onBlur',
                                                 initialValue: contactPhone || '',
                                                 rules: [{
                                                     type: 'string',
                                                     required: true,
                                                     pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
                                                     message: '请输入联系人电话',
                                                 }],
                                             })}
                                />
                                <FormError errorMsg={getFieldError('contactPhone')}/>
                            </FormItem>
                        </Col>
                        <Col md={6} xs={12} sm={10}>
                            <FormItem>
                                <Label className="mast">与乘客关系</Label>
                                <FormControl disabled={btnFlag === 2}
                                             {...getFieldProps('contactRelation', {
                                                 validateTrigger: 'onBlur',
                                                 initialValue: contactRelation || '',
                                                 rules: [{
                                                     type: 'string',
                                                     required: true,
                                                     pattern: /\S+/ig,
                                                     message: '请输入与乘客关系',
                                                 }],
                                             })}
                                />
                                <FormError errorMsg={getFieldError('contactRelation')}/>
                            </FormItem>
                        </Col>
                        <Col md={6} xs={12} sm={10}>
                            <FormItem>
                                <Label>备注</Label>
                                <FormControl disabled={btnFlag === 2}
                                             {...getFieldProps('remark', {
                                                 initialValue: remark || '',
                                             })}
                                />
                                <FormError errorMsg={getFieldError('remark')}/>
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </PopDialog>
        )
    }
}

export default Form.createForm()(AddEditEmergency);
