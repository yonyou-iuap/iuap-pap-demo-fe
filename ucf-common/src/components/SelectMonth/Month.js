import React, { Component } from 'react';
import Select from "bee-select";

const { Option } = Select;

class Month extends Component {
    render() {
        return (
            <Select {...this.props}>
                <Option value={1}>一月</Option>
                <Option value={2}>二月</Option>
                <Option value={3}>三月</Option>
                <Option value={4}>四月</Option>
                <Option value={5}>五月</Option>
                <Option value={6}>六月</Option>
                <Option value={7}>七月</Option>
                <Option value={8}>八月</Option>
                <Option value={9}>九月</Option>
                <Option value={10}>十月</Option>
                <Option value={11}>十一月</Option>
                <Option value={12}>十二月</Option>
            </Select>
        )
    }
}

export default Month;
