import React, {Component} from 'react'
import {actions} from "mirrorx";
import {Col, Row, FormControl, Label} from "tinper-bee";
import Form from 'bee-form';
import SearchPanel from 'components/SearchPanel';
import FormControlPhone from 'components/FormControlPhone';

import './index.less'

const {FormItem} = Form;
const SearchItem = SearchPanel.Item;

class SearchArea extends Component {

    constructor(props) {
        super(props);
        this.state = {}

    }

    componentDidMount(){
        this.props.onRef(this)
    }

    /** 查询数据
     * @param {*} error 校验是否成功
     * @param {object} values 表单数据
     */
    search = () => {
        this.props.form.validateFields(async (err, values) => {
            const {passengerObj} = this.props;
            const {pageSize} = passengerObj;
            values.pageIndex = 0;  // 默认回到第一页
            values.pageSize = pageSize;
            await actions.masterDetailMany.loadList(values);
        });
    }

    /**
     * 清空 action里的搜索条件
     */
    reset = () => {
        this.props.form.resetFields();
        actions.masterDetailMany.updateState({searchParam: {}});
    }

    render() {
        const {form} = this.props;
        const {getFieldProps} = form;
        return (
            <SearchPanel
                className="small"
                form={form}
                reset={this.reset}
                search={this.search}>

                <SearchItem
                    label='乘客编号'
                >
                    <FormControl
                        placeholder="模糊查询"
                        {...getFieldProps('search_code', {initialValue: '',})}
                    />
                </SearchItem>

                <SearchItem
                    label='乘客姓名'
                >
                    <FormControl
                        placeholder="模糊查询"
                        {...getFieldProps('search_name', {initialValue: '',})}
                    />
                </SearchItem>

                <SearchItem
                    label='手机号'
                >
                    <FormControlPhone
                        placeholder="模糊查询"
                        {...getFieldProps('search_phone', {initialValue: "",})}
                    />
                </SearchItem>

                <SearchItem
                    label='联系人姓名'
                >
                    <FormControl
                        placeholder="精确查询"
                        {...getFieldProps('search_contactName', {initialValue: '',})}
                    />
                </SearchItem>

            </SearchPanel>
        )
    }
}

export default Form.createForm()(SearchArea)
