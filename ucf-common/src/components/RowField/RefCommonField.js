/**
 * RefCommonField (部门选择框)
 */

//React导入
import React, { Component } from 'react';
//类型校验
import PropTypes from 'prop-types';
//验证组件 https://www.npmjs.com/package/async-validator
import schema from 'async-validator';
import FieldWrap from './FieldWrap'
//部门参照组件
import RefCommon from 'components/RefCommon';

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
    validate: PropTypes.bool
};
//默认参数值
const defaultProps = {
    field: '',
    index: '',
    message: '请选择参照',
    data: [],
    required: false,
    isFlag: false,
    validate: false
}

class RefCommonField extends Component {
    /**
     * Creates an instance of RefCommonField.
     * @param {*} props
     * @memberof RefCommonField
     */
    constructor(props) {
        super(props);

        let refNameKey = props.refName,
            refPkKey = props.refPk;

        this.state = {
            value: props.record[refNameKey] ? JSON.stringify({
                refpk: props.record[refPkKey],
                refname: props.record[refNameKey]
            }) : '',//处理兼容的参照数据
            flag: false,//是否编辑过
            error: false//校验是否有错误
        }
    }

    /**
     *  参数发生变化回调
     *
     * @param {object} nextProps 即将更新Props
     * @param {object} nextState 即将更新State
     * @memberof RefDept
     */
    componentWillReceiveProps(nextProps) {
        //当校验外部发生变化，主动校验函数
        if (nextProps.validate == true) {
            this.validate();
        }
    }

    onSave = result =>{
        let { onChange, field, index, status } = this.props;
        //处理是否有修改状态改变、状态同步之后校验输入是否正确
        //处理参照不兼容字段
        let value  = result[0];
        let str = JSON.stringify(value);
        let _value = value.refpk;
        this.setState({ value:str, flag: status == 'edit' }, () => {
            this.validate();
        });
        //回调外部函数
        onChange && onChange(field, _value, index, {
            refNameKey: this.props.refName,
            refNameValue: value.refname
        });
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
            [field]: { type: "string", required, pattern: /[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/ }
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
        let { onChange, ...otherProps } = this.props;

        return (
            <FieldWrap
                required={required}
                error={error}
                message={message}
                flag={flag}
            >
                <RefCommon
                    {...otherProps}
                    refPath={this.props.refPath}
                    style={{ "width": "100%" }}
                    className={className}
                    value={value}
                    onSave={this.onSave}
                />
            </FieldWrap>
        );

    }
}

RefCommonField.propTypes = propTypes;
RefCommonField.defaultProps = defaultProps;

export default RefCommonField;