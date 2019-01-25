import React, {Component} from "react";
import {
    Col, Row, FormControl, Label
} from "tinper-bee";
import Form from 'bee-form';
import Select from 'bee-select';
import InputNumber from "bee-input-number";
import PopDialog from 'components/Pop';

import {success, Error} from "utils";
import {actions, connect} from "mirrorx";

import './index.less';


const {FormItem} = Form;
const {Option} = Select;

const titleArr = ["新增", "修改", "详情"];

class CommonPop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
	 * @description 关闭modal回调函数
	 * @param {Boolean} showModal 是否展示模态狂，true为展示、false为不展示
	 * @param {Number} btnFlag 重置为默认状态，默认状态为新增
	 * @returns {*} null
	 */
	onCloseEdit = () => {
        let {comModalParam} = this.props,
            resultObj = {};
        resultObj = Object.assign({}, comModalParam, {
			showModal : false,
			btnFlag : 0
		});

        actions.walsinTree.updateState({
            comModalParam : resultObj
        })
    }

    /**
	 * @description 此方法为点击确定按钮后的执行方法，新增、编辑、查看详情公用此页面
	 * 				新增时，需要通过search_treeId判断是否已经选择子节点
	 * @param {string} search_treeId 树节点ID值
	 * @param {Boolean} showLoading 为true显示加载进度条，false则取消显示
	 * @returns {*} null
	 */
	onSubmitEdit = async () => { // 提交modal信息
        let _this = this;
        _this.props.form.validateFields( async (err, values) => {

            if (err) {
                return ;
            } else {
                await actions.walsinTree.updateState({
                    showLoading : true
                });

                let {comModalParam , paginationParam} = _this.props || {},
                    {initEditValue, btnFlag} = comModalParam || {},
                    {search_treeId} = paginationParam.reqParam || { },
                    resultObj = {};
                console.log("onsave oldData", initEditValue);
                // 新增时需指明树节点
                if( !btnFlag && !search_treeId) {
                    _this.onCloseEdit();
                    actions.walsinTree.updateState({
                        showLoading : false,
                    });
                    Error('请选择树节点');
                    return ;
                }

                // 处理整型数据
                _this.handleIntData(values);

                // 添加树节点id
                resultObj = Object.assign({}, {
                    treeId : search_treeId
                },initEditValue, values);

				if(btnFlag) {
					await actions.walsinTree.addEditData(resultObj);
				} else {
					await actions.walsinTree.addTableData(resultObj);
				}
				await actions.walsinTree.updateState({
					showLoading : false
				});
				_this.onCloseEdit();



            }

        });
    }

    handleIntData = (values) => {
        // inputnumber组件,获取的值为字符串，需要将字符串类型转换为数值型数据
		let numArray = ['age'];

		for(let item of numArray) {
			if(typeof values[item] !== 'undefined') {
            	values[item] = Number(values[item]);
			}
		}
    }

    onHideEdit = () => {
		//点击右上角icon关闭Modal
        this.onCloseEdit();
	}

	/**
	 *
	 * @description 弹出框按钮显示状态调整，详情状态不显示确认、取消按钮
	 * @param {Number} btnFlag 页面标识为0表示新增、1表示修改、2表示查看详情
	 * @returns {Array} btns 底部按钮数组
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


    render() {
        let _this = this;

        const {form, comModalParam} = _this.props;
        let {showModal = false, initEditValue = {}, btnFlag = 0} = comModalParam || {}
        const {getFieldProps, getFieldError} = form;
		const {name, sex, age} = initEditValue || {};
		let btns = _this.onHandleBtns(btnFlag);
        return (
			<PopDialog
				show={showModal}
				title={titleArr[btnFlag]}
				size='lg'
				btns={btns}
				close={_this.onCloseEdit}
				>
				<Form>
					<Row className='form-panel'>
						<Col md={6} xs={12} sm={10}>
							<FormItem>
								<Label className="mast">员工姓名</Label>
								<FormControl
									disabled = {btnFlag == 2}
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
								<span className='error'>{getFieldError('name')}</span>
							</FormItem>
						</Col>
						<Col md={6} xs={12} sm={10}>
							<FormItem>
								<Label className="mast">员工性别</Label>
								<Select
									disabled = {btnFlag == 2}
									{...getFieldProps('sex', {
										initialValue: sex || 1,
										rules: [{
											required: true, message: '请选择员工性别',
										}],
									})}
								>
									<Option value={1}>女</Option>
									<Option value={2}>男</Option>
								</Select>
								<span className='error'>{getFieldError('sex')}</span>
							</FormItem>
						</Col>
						<Col md={6} xs={12} sm={10} >
							<FormItem className='time'>
								<Label className="mast">年龄</Label>
								<InputNumber iconStyle="one" min={0} step={1}  max={99}
									disabled = {btnFlag == 2}
									{...getFieldProps('age', {
										initialValue: age ? age : 0,
										rules: [{pattern: /^[0-9]+$/, required: true}],
									})}
								/>
								<span className='error'>{getFieldError('age')}</span>
							</FormItem>
						</Col>
					</Row>
				</Form>
			</PopDialog>
        )
    }
}

export default connect(state => state.walsinTree, null )(Form.createForm()(CommonPop));
