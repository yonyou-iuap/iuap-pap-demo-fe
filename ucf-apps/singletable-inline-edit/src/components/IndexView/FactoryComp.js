/**
 * 业务组件工厂函数
 */


//React所需导入
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
            key: "请选择",
            value: '',
            disabled: true
        }, {
            key: "男",
            value: 1
        }, {
            key: "女",
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
            key: "请选择",
            value: "",
            disabled: true
        }, {
            key: "一月",
            value: 1
        }, {
            key: "二月",
            value: 2
        }, {
            key: "三月",
            value: 3
        }, {
            key: "四月",
            value: 4
        }, {
            key: "五月",
            value: 5
        }, {
            key: "六月",
            value: 6
        }, {
            key: "七月",
            value: 7
        }, {
            key: "八月",
            value: 8
        }, {
            key: "九月",
            value: 9
        }, {
            key: "十月",
            value: 10
        }, {
            key: "十一月",
            value: 11
        }, {
            key: "十二月",
            value: 12
        }],
        type: 'select'
    },
    allowanceType: {//补助类别
        component: SelectField,
        selectList: [{
            key: "请选择",
            value: "",
            disabled: true
        }, {
            key: "电脑补助",
            value: 1
        }, {
            key: "住宿补助",
            value: 2
        }, {
            key: "交通补助",
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
            key: "请选择",
            value: "",
            disabled: true
        }, {
            key: "未超标",
            value: 0
        }, {
            key: "超标",
            value: 1
        }],
        type: 'select'
    },
    pickType: {//领取类别
        component: SelectField,
        selectList: [{
            key: "请选择",
            value: "",
            disabled: true
        }, {
            key: "转账",
            value: 1
        }, {
            key: "现金",
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
        valueKey: 'deptName',
        key:'dept'
    },
    level: {//职级
        component: RefLevel,
        type : 'ref',
        valueKey: 'levelName',
        key:'level'
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
        let { type, value, record } = this.props;
        let renderMap = renderComponentMap[type];
        if (renderMap) {
            let { component: Com, type: comType, props } = renderMap;
            let _props = props || {};
            let { _edit, _status, _validate } = record;
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
                    let { selectList } = renderMap;
                    let selected = selectList.find(item => item.value === value);
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
            return (<div>组件类型错误</div>)
        }


    }
    render() {
        return (<div>
            {this.renderComp()}
        </div>);
    }
}

export default FactoryComp;