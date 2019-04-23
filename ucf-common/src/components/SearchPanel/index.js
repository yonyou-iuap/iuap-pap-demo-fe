/**
 * 面板组件
 */

import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BeeSearchPanel from 'bee-search-panel'
import 'bee-search-panel/build/SearchPanel.css';
import "./index.less"

const AdvancedContainer = BeeSearchPanel.AdvancedContainer;

/**
 * 部分不能通过this.props.form.resetFields()清空的组件，需要传reset方法，在reset方法中自行清空
 */
const propTypes = {
    searchOpen: PropTypes.bool,//是否默认展开，false默认关闭
    search: PropTypes.func,//查询的回调
    reset: PropTypes.func,//重置的回调
    resetName: PropTypes.node,//重置的文字
    searchName: PropTypes.node,//查询的文字
    title: PropTypes.node
};

const defaultProps = {
    searchOpen: true,
    search: () => { },
    reset: () => { },
    bgColor: "#F7F9FB"
};


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOpen: props.searchOpen
        };
    }

    open = () => {
        this.setState({
            searchOpen: !this.state.searchOpen
        })
    }

    search = () => {
        const { search } = this.props;
        search && search();
    }
    reset = () => {
        const { reset } = this.props;
        reset && reset();
    }

    _locale = {
        down: this.props.intl.formatMessage({id: 'js.com.defSea1.0004', defaultMessage: '展开'}),
        up: this.props.intl.formatMessage({id: 'js.com.defSea1.0005', defaultMessage: '收起'})
    }
    render() {
        const {
            children,
            onCallback,
            bgColor,
            search,
            reset,
            intl,
            title,
            resetName,
            searchName,
            ...otherProps
        } = this.props;
        const _title = title || intl.formatMessage({id:"js.com.defSea1.0001", defaultMessage:"默认筛选"});
        const _resetName = resetName || intl.formatMessage({id:"js.com.defSea1.0002", defaultMessage:"清空"});
        const _searchName = searchName || intl.formatMessage({id:"js.com.defSea1.0003", defaultMessage:"查询" });

        return (
            <BeeSearchPanel
                className="ucf-exam-search-panel"
                expanded={this.state.searchOpen}
                onSearch={this.search}
                onReset={this.reset}
                onChange={this.open}
                title={_title}
                resetName={_resetName}
                searchName={_searchName}
                onPanelChangeEnd={status => {
                    const open = status === "visible";
                    onCallback && onCallback(open);
                }}
                locale={this._locale}
                bgColor={bgColor}
                {...otherProps}
            >
                <AdvancedContainer>
                    {children}
                </AdvancedContainer>
            </BeeSearchPanel>

        )
    }
}
SearchPanel.propTypes = propTypes;
SearchPanel.defaultProps = defaultProps;
export default SearchPanel;
