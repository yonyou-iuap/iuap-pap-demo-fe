import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import { Select } from 'tinper-bee'

const { Option } = Select;

class Month extends Component {
    render() {
        return (
            <Select {...this.props}>
                <Option value={1}><FormattedMessage id="js.com.Sel1.0001" defaultMessage="一月" /></Option>
                <Option value={2}><FormattedMessage id="js.com.Sel1.0002" defaultMessage="二月" /></Option>
                <Option value={3}><FormattedMessage id="js.com.Sel1.0003" defaultMessage="三月" /></Option>
                <Option value={4}><FormattedMessage id="js.com.Sel1.0004" defaultMessage="四月" /></Option>
                <Option value={5}><FormattedMessage id="js.com.Sel1.0005" defaultMessage="五月" /></Option>
                <Option value={6}><FormattedMessage id="js.com.Sel1.0006" defaultMessage="六月" /></Option>
                <Option value={7}><FormattedMessage id="js.com.Sel1.0007" defaultMessage="七月" /></Option>
                <Option value={8}><FormattedMessage id="js.com.Sel1.0008" defaultMessage="八月" /></Option>
                <Option value={9}><FormattedMessage id="js.com.Sel1.0009" defaultMessage="九月" /></Option>
                <Option value={10}><FormattedMessage id="js.com.Sel1.0010" defaultMessage="十月" /></Option>
                <Option value={11}><FormattedMessage id="js.com.Sel1.0011" defaultMessage="十一月" /></Option>
                <Option value={12}><FormattedMessage id="js.com.Sel1.0012" defaultMessage="十二月" /></Option>
            </Select>
        )
    }
}

export default Month;
