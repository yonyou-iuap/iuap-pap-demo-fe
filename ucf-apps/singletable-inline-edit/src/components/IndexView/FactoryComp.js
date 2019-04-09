/**
 * 业务组件工厂函数
 */


//React所需导入
import { FormattedMessage, injectIntl } from 'react-intl';
import React, { Component } from 'react';

//文本输入组件
import TextField from 'components/RowField/TextField';
//下拉选择组件
import SelectField from 'components/RowField/SelectField';
//数值选择组件
import NumberField from 'components/RowField/NumberField';
//年份选择组件
import YearField from 'components/RowField/YearField';
//参照部门
import RefDept from 'components/RowField/RefDept';
//参照职级
import RefLevel from 'components/RowField/RefLevel';
//日期组件
import DateField from 'components/RowField/DateField';

const renderComponentMap = {
    name: {//姓名
        component: TextField,
        type: 'text'
    },
    sex: {//性别
        component: SelectField,
        selectList: [{
            key: <FormattedMessage id="js.com.Ind2.0001" defaultMessage="请选择" />,
            value: '',
            disabled: true
        }, {
            key: <FormattedMessage id="js.com.Ind2.0002" defaultMessage="男" />,
            value: 1
        }, {
            key: <FormattedMessage id="js.com.Ind2.0003" defaultMessage="女" />,
            value: 0
        }],
        type: 'select'
    },
    serviceYears: {//工龄
        component: NumberField,
        props: {
            iconStyle: 'one',
            max: 99,
            min: 0,
            step: 1
        },
        type: 'number'
    },
    serviceYearsCompany: {//司龄
        component: NumberField,
        props: {
            iconStyle: 'one',
            max: 99,
            min: 0,
            step: 1
        },
        type: 'number'
    },
    month: {
        component: SelectField,
        selectList: [{//月份
            key: <FormattedMessage id="js.com.Ind2.0001" defaultMessage="请选择" />,
            value: "",
            disabled: true
        }, {
            key: <FormattedMessage id="js.com.Ind2.0004" defaultMessage="一月" />,
            value: 1
        }, {
            key: <FormattedMessage id="js.com.Ind2.0005" defaultMessage="二月" />,
            value: 2
        }, {
            key: <FormattedMessage id="js.com.Ind2.0006" defaultMessage="三月" />,
            value: 3
        }, {
            key: <FormattedMessage id="js.com.Ind2.0007" defaultMessage="四月" />,
            value: 4
        }, {
            key: <FormattedMessage id="js.com.Ind2.0008" defaultMessage="五月" />,
            value: 5
        }, {
            key: <FormattedMessage id="js.com.Ind2.0009" defaultMessage="六月" />,
            value: 6
        }, {
            key: <FormattedMessage id="js.com.Ind2.0010" defaultMessage="七月" />,
            value: 7
        }, {
            key: <FormattedMessage id="js.com.Ind2.0011" defaultMessage="八月" />,
            value: 8
        }, {
            key: <FormattedMessage id="js.com.Ind2.0012" defaultMessage="九月" />,
            value: 9
        }, {
            key: <FormattedMessage id="js.com.Ind2.0013" defaultMessage="十月" />,
            value: 10
        }, {
            key: <FormattedMessage id="js.com.Ind2.0014" defaultMessage="十一月" />,
            value: 11
        }, {
            key: <FormattedMessage id="js.com.Ind2.0015" defaultMessage="十二月" />,
            value: 12
        }],
        type: 'select'
    },
    allowanceType: {//补助类别
        component: SelectField,
        selectList: [{
            key: <FormattedMessage id="js.com.Ind2.0001" defaultMessage="请选择" />,
            value: "",
            disabled: true
        }, {
            key: <FormattedMessage id="js.com.Ind2.0016" defaultMessage="电脑补助" />,
            value: 1
        }, {
            key: <FormattedMessage id="js.com.Ind2.0017" defaultMessage="住宿补助" />,
            value: 2
        }, {
            key: <FormattedMessage id="js.com.Ind2.0018" defaultMessage="交通补助" />,
            value: 3
        }],
        type: 'select'
    },
    allowanceStandard: { //补贴标准
        component: NumberField,
        props: {
            max: 999999,
            min: 0,
            step: 1,
            precision: 2
        },
        type: 'number'
    },
    allowanceActual: {//实际补贴
        component: NumberField,
        props: {
            max: 999999,
            min: 0,
            step: 1,
            precision: 2
        },
        type: 'number'
    },
    exdeeds: {//是否超标
        component: SelectField,
        selectList: [{
            key: <FormattedMessage id="js.com.Ind2.0001" defaultMessage="请选择" />,
            value: "",
            disabled: true
        }, {
            key: <FormattedMessage id="js.com.Ind2.0019" defaultMessage="未超标" />,
            value: 0
        }, {
            key: <FormattedMessage id="js.com.Ind2.0020" defaultMessage="超标" />,
            value: 1
        }],
        type: 'select'
    },
    pickType: {//领取类别
        component: SelectField,
        selectList: [{
            key: <FormattedMessage id="js.com.Ind2.0001" defaultMessage="请选择" />,
            value: "",
            disabled: true
        }, {
            key: <FormattedMessage id="js.com.Ind2.0021" defaultMessage="转账" />,
            value: 1
        }, {
            key: <FormattedMessage id="js.com.Ind2.0022" defaultMessage="现金" />,
            value: 2
        }],
        type: 'select'
    },
    remark: {//备注
        component: TextField,
        type: 'text'
    },
    year: {//年份
        component: YearField,
        type: 'dateYear'
    },
    date: {
        component: DateField,
        type: 'date'
    },
    dept: {//部门
        component: RefDept,
        type: 'ref',
        valueKey: 'deptName'
    },
    level: {//职级
        component: RefLevel,
        type : 'ref',
        valueKey: 'levelName'
    }
}

class FactoryComp extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * 渲染组件函数
     *
     * @returns JSX
     */
    renderComp = () => {
        const { type, value, record } = this.props;
        const renderMap = renderComponentMap[type];
        if (renderMap) {
            const { component: Com, type: comType, props } = renderMap;
            const _props = props || {};
            const { _edit, _status, _validate } = record;
            let _value;
            switch (comType) {
                case 'dateYear':
                case 'date':
                case 'text': _value = value; break;
                case 'number':
                    if (props.precision && props.precision > 0) {
                        _value = (typeof value) === 'number' ? value.toFixed(props.precision) : ""
                    } else {
                        _value = value
                    }
                    break;
                case 'select':
                    const { selectList } = renderMap;
                    const selected = selectList.find(item => item.value === value);
                    _value = selected ? selected.key : '';
                    break;
                case 'ref': _value = record[renderMap.valueKey]; break;
                default: _value = ''; break;
            }
            return (
                _edit ? (
                    <Com
                        status={_status}
                        validate={_validate}
                        {..._props}
                        {...this.props}
                        data={renderMap.selectList}
                    />
                ) : (
                    <div>{_value}</div>
                )
            )
        } else {
            return (<div><FormattedMessage id="js.com.Ind2.0023" defaultMessage="组件类型错误" /></div>)
        }


    }
    render() {
        return (<div>
            {this.renderComp()}
        </div>);
    }
}

export default injectIntl(FactoryComp);
