/**
 * InputNumber (数值选择框)
 */

//React导入
import React, { Component } from 'react';
//类型校验
import PropTypes from 'prop-types';
//验证组件 https://www.npmjs.com/package/async-validator
import schema from 'async-validator';
//Tinper-bee
import { Icon } from 'tinper-bee';
//提示类组件
import Tooltip from 'bee-tooltip';
//数值组件
import InputNumber from 'bee-input-number';

//样式导入
import 'bee-input-number/build/InputNumber.css';
//自定义样式
import './style.less';

//类型校验
const propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
    className: PropTypes.string,
    field: PropTypes.string,
    index: PropTypes.number,
    message: PropTypes.string,
    data: PropTypes.array,
    required: PropTypes.bool,
    onValidate: PropTypes.func,
    isFlag: PropTypes.bool,
    validate: PropTypes.bool,
    iconStyle: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number
};

//默认参数值
const defaultProps = {
    field: '',
    index: '',
    message: '请输入此字段',
    data: [],
    required: false,
    isFlag: false,
    validate: false
}

class NumberField extends Component {
    /**
     * Creates an instance of NumberField.
     * @param {*} props
     * @memberof NumberField
     */
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,//组件的值
            flag: false,//是否编辑过
            error: false//校验是否有错误
        }
    }

    /**
     *  参数发生变化回调
     *
     * @param {object} nextProps 即将更新Props
     * @param {object} nextState 即将更新State
     * @memberof NumberField
     */
    componentWillReceiveProps(nextProps) {
        //当校验外部发生变化，主动校验函数
        if (nextProps.validate == true) {
            this.validate();
        }
    }

    /**
     * 有输入值改变的回调
     *
     * @param {string} value
     */
    handlerChange = (value) => {
        let { onChange, field, index, status } = this.props;
        //处理是否有修改状态改变、状态同步之后校验输入是否正确
        this.setState({ value, flag: status == 'edit' }, () => {
            this.validate();
        });
        //回调外部函数
        onChange && onChange(field, value, index);
    }
    /**
     * 校验方法
     *
     */
    validate = () => {
        let { required, field, index, onValidate } = this.props;
        let { value } = this.state;
        //设置校验规则
        let descriptor = {
            [field]: { type: "number", required }
        }
        let validator = new schema(descriptor);
        validator.validate({ [field]: value }, (errors, fields) => {
            if (errors) {
                this.setState({
                    error: true
                });
            } else {
                this.setState({
                    error: false
                });
            }
            onValidate && onValidate(field, fields, index);
        });
    }
    render() {
        let { value, error, flag } = this.state;

        let { className, message, required, iconStyle, max, min, step, precision } = this.props;

        return (<div className="triangle-flag">
            {required && <div className="triangle-redline"></div>}
            <InputNumber
                className={className}
                value={value}
                onChange={this.handlerChange}
                iconStyle={iconStyle}
                max={max}
                min={min}
                step={step}
                precision={precision}
            />
            {error && <div className="triangle-icon">
                <Tooltip
                    className="inline-edit-tooltip"
                    placement="bottom"
                    overlay={<div><Icon type="uf-exc-t-o" />{message}</div>}
                >
                    <Icon type="uf-exc-t-o" />
                </Tooltip>
            </div>}
            {flag && <div className="triangle_border_nw_number" style={{ "left": required ? "6px" : "2px" }}></div>}
        </div>);
    }
}

NumberField.propTypes = propTypes;
NumberField.defaultProps = defaultProps;
export default NumberField;