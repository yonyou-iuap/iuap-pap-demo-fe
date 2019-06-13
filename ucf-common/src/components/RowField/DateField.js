/**
 * DateField (日期选择框)
 */

//React导入
import React, { Component } from 'react';
//类型校验
import PropTypes from 'prop-types';
//日期处理
import moment from 'moment';
//验证组件 https://www.npmjs.com/package/async-validator
import schema from 'async-validator';

//日期组件
import DatePicker from "bee-datepicker";
//本地化日期
import zhCN from "rc-calendar/lib/locale/zh_CN";

import FieldWrap from './FieldWrap'


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
    validate: false
}

class DateField extends Component {
    /**
     * Creates an instance of YearField.
     * @param {*} props
     * @memberof YearField
     */
    constructor(props) {
        super(props);
        this.state = {
            value: moment(props.value),//组件的值
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
     * 校验
     *
     */
    validate = () => {
        let { required, field, index, onValidate } = this.props;
        let { value } = this.state;
        //设置校验规则
        let descriptor = {
            [field]: { type: "object", required }
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

        return (
            <FieldWrap
                required={required}
                error={error}
                message={message}
                flag={flag}
            >
                <DatePicker
                    className={className}
                    value={value}
                    onChange={this.handlerChange}
                    format={'YYYY-MM-DD'}
                    locale={zhCN}
                    placeholder={"选择年"}
                />
            </FieldWrap>
        );
    }
}

DateField.propTypes = propTypes;
DateField.defaultProps = defaultProps;
export default DateField;