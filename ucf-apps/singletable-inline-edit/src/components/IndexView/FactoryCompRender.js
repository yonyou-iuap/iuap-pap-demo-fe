
import React, { Component } from 'react';
import TextField from 'components/RowField/TextField';
import NumberField from 'components/RowField/NumberField';
import DateField from 'components/RowField/DateField';
import moment from "moment";

class FactoryCompRender extends Component {
    /**
     * 渲染组件函数
     * @returns JSX
     */
    renderComp = () => {
        let { type, value, record } = this.props;
        switch (type) {
            case 'detailName'://物料名称
                return (<div>
                    {record._edit ?//编辑态
                        <TextField {...this.props}
                            status={record['_status']}//是否修改过标记
                            validate={record['_validate']}//启用验证
                        /> : <div>{value}</div>}
                </div>);
            case 'detailModel'://物料型号
                return (<div>
                    {record._edit ?//编辑态
                        <TextField {...this.props}
                                   status={record['_status']}//是否修改过标记
                                   validate={record['_validate']}//启用验证
                        /> : <div>{value}</div>}
                </div>);
            case 'detailCount'://物料数量
                return (<div>
                    {record._edit ?
                        <NumberField {...this.props}
                            status={record['_status']}//是否修改过标记
                            validate={record['_validate']}//启用验证
                            iconStyle="one"
                            max={99999}
                            min={0}
                            step={1}
                        /> : <div>{value}</div>}
                </div>);

            case 'detailDate'://年份
                return (<div>
                    {record._edit ?
                        <DateField {...this.props}
                            status={record['_status']}//是否修改过标记
                            validate={record['_validate']}//启用验证
                        /> : <div>{value ? moment(value).format("YYYY-MM-DD") : ""}</div>}
                </div>);
            default:
                return (<div>组件类型错误</div>)
        }
    }
    render() {
        return (<div>
            {this.renderComp()}
        </div>);
    }
}

export default FactoryCompRender;
