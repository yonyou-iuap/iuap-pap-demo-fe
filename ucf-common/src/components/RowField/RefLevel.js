/**
 * RefLevel (职级选择框)
 */

//React导入
import React, { Component } from 'react';
//类型校验
import PropTypes from 'prop-types';
//验证组件 https://www.npmjs.com/package/async-validator
import schema from 'async-validator';
import FieldWrap from './FieldWrap'
//参照组件职级
import { RefWalsinLevel } from 'components/RefViews';

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
    message: '请选择职级参照',
    data: [],
    required: false,
    isFlag: false,
    validate: false
}

class RefLevel extends Component {
    /**
     * Creates an instance of RefLevel.
     * @param {*} props
     * @memberof RefLevel
     */
    constructor(props) {
        super(props);
        this.state = {
            value: props.record.postLevelName ? JSON.stringify({
                refpk: props.record.postLevel,
                refname: props.record.postLevelName
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
    // handlerChange = (value) => {
    //     let { onChange, field, index, status } = this.props;
    //     //处理不兼容数据
    //     let _value = JSON.parse(value).refpk;
    //     this.setState({ value, flag: status == 'edit' }, () => {
    //         this.validate();
    //     });
    //     //回调外部函数
    //     onChange && onChange(field, _value, index);
    // }

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
        onChange && onChange(field, _value, index, value.refname);
        // onChange && onChange(field, value, index);
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

        return (
            <FieldWrap
                required={required}
                error={error}
                message={message}
                flag={flag}
            >
                <RefWalsinLevel
                    style={{ "width": "100%" }}
                    className={className}
                    value={value}
                    onSave={this.onSave}
                />
            </FieldWrap>
        );
    }
}

RefLevel.propTypes = propTypes;
RefLevel.defaultProps = defaultProps;
export default RefLevel;