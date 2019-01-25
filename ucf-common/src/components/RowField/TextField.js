/**
 * Text (文本输入框)
 */

//React导入
import React, { Component } from 'react';
//类型校验
import PropTypes from 'prop-types';
//验证组件 https://www.npmjs.com/package/async-validator
import schema from 'async-validator';
//Tinper-bee
import { FormControl, Icon } from 'tinper-bee';
//提示类组件
import Tooltip from 'bee-tooltip';

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
};

//默认参数值
const defaultProps = {
    field: '',
    index: '',
    message: '请输入此字段',
    data: [],
    required: false,
    isFlag: false,
    validate: false,
    className: ''
}

class TextField extends Component {
    /**
     * Creates an instance of TextField.
     * @param {*} props
     * @memberof TextField
     */
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            flag: false,
            error: false
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
            [field]: { type: "string", required }
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

        let { className, message, required } = this.props;

        return (<div className="triangle-flag">
            {required && <div className="triangle-redline"></div>}
            <FormControl
                className={`${className} triangle-element`}
                value={value}
                onChange={this.handlerChange}
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
            {flag && <div className="triangle_border_nw" style={{ "left": required ? "4px" : "0px" }}></div>}
        </div>);
    }
}

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;
export default TextField;