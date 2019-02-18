import React, {Component} from "react";
import {FormControl, InputNumber} from "tinper-bee";
import {actions} from "mirrorx";

import Select from 'bee-select';
import PopDialog from 'components/Pop';
import FormError from 'components/FormError';

import FormList from 'components/FormList'

import './index.less'

const FormItem = FormList.Item;
let titleArr = ["新增", "修改", "详情"];

class AddEditBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rowData: {},
            btnFlag: 0,
        }
    }

    async componentWillReceiveProps(nextProps) {
        const {btnFlag, currentIndex} = this.props;
        const {btnFlag: nextBtnFlag, currentIndex: nextCurrentIndex, checkTable, modalVisible} = nextProps;
        if (btnFlag !== nextBtnFlag || currentIndex !== nextCurrentIndex) {
            // 防止网络阻塞造成btnFlag显示不正常
            this.setState({btnFlag: nextBtnFlag});
            let rowData = {};
            try {
                if (nextBtnFlag !== 0 && checkTable === "traveling" && modalVisible) {
                    this.props.form.resetFields();
                    const {list} = this.props.travelingObj;
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
     * 提交表单信息
     */
    onSubmitEdit = () => {
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
                this.props.resetIndex('travelingIndex'); //重置state， 默认选中第一条
                actions.masterDetailMany.saveTraveling(values); //保存主表数据
            }
        });
    }


    /**
     *
     * @description 底部按钮是否显示处理函数
     * @param {*} btnFlag 为页面标识
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
        const {form, modalVisible} = _this.props;
        const {getFieldProps, getFieldError} = form;
        const {rowData, btnFlag} = _this.state;
        const {line, stationBegin, stationEnd, cost, remark, payStatus = ""} = rowData;
        let btns = _this.onHandleBtns(btnFlag);

        return (
            <PopDialog
                show={modalVisible}
                size='lg'
                close={this.onCloseEdit}
                title={titleArr[btnFlag]}
                btns={btns}
                className='book-modal'
            >
                <FormList>
                    <FormItem required label="乘车路线">
                        <FormControl disabled={btnFlag === 2}
                                     {...getFieldProps('line', {
                                         validateTrigger: 'onBlur',
                                         initialValue: line || '',
                                         rules: [{
                                             type: 'string',
                                             required: true,
                                             pattern: /\S+/ig,
                                             message: '请输入乘车路线',
                                         }],
                                     })}
                        />
                        <FormError errorMsg={getFieldError('line')}/>
                    </FormItem>

                    <FormItem required label="上车站点">
                        <FormControl disabled={btnFlag === 2}
                                     {...getFieldProps('stationBegin', {
                                         validateTrigger: 'onBlur',
                                         initialValue: stationBegin || '',
                                         rules: [{
                                             type: 'string',
                                             required: true,
                                             pattern: /\S+/ig,
                                             message: '请输入上车站点',
                                         }],
                                     })}
                        />
                        <FormError errorMsg={getFieldError('stationBegin')}/>
                    </FormItem>

                    <FormItem required label="下车站点">
                        <FormControl disabled={btnFlag === 2}
                                     {...getFieldProps('stationEnd', {
                                         validateTrigger: 'onBlur',
                                         initialValue: stationEnd || '',
                                         rules: [{
                                             type: 'string',
                                             required: true,
                                             pattern: /\S+/ig,
                                             message: '请输入下车站点',
                                         }],
                                     })}
                        />
                        <FormError errorMsg={getFieldError('stationEnd')}/>
                    </FormItem>

                    <FormItem required label="费用">
                        <InputNumber iconStyle="one" min={0} step={1} disabled={btnFlag === 2} max={999999}
                                     {...getFieldProps('cost', {
                                         initialValue: cost !== undefined ? cost : 1,
                                         rules: [{pattern: /^[0-9]+$/, required: true}],
                                     })}
                        />
                    </FormItem>

                    <FormItem required label="支付状态">
                        <Select disabled={btnFlag === 2}
                                {...getFieldProps('payStatus', {
                                    initialValue: payStatus || 1,
                                    rules: [{
                                        required: true, message: '请选择支付状态',
                                    }],
                                })}
                        >
                            <Select.Option value={1}>未支付</Select.Option>
                            <Select.Option value={2}>已支付</Select.Option>
                        </Select>
                        <FormError errorMsg={getFieldError('payStatus')}/>
                    </FormItem>

                    <FormItem label="备注">
                        <FormControl disabled={btnFlag === 2}
                                     {...getFieldProps('remark', {
                                         initialValue: remark || '',
                                     })}
                        />
                    </FormItem>
                </FormList>

            </PopDialog>
        )
    }
}

export default FormList.createForm()(AddEditBook);
