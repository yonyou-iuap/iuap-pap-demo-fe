/**
 * 面板组件
 */

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
    resetName: PropTypes.string,//重置的文字
    searchName: PropTypes.string,//查询的文字
    title: PropTypes.string
};

const defaultProps = {
    searchOpen: true,
    search: () => { },
    reset: () => { },
    title: "默认筛选",
    resetName: "清空",
    searchName: "查询",
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
    render() {
        const { children, onCallback, bgColor, search, reset, ...otherProps  } = this.props;
        return (
            <BeeSearchPanel
                className="ucf-exam-search-panel"
                expanded={this.state.searchOpen}
                onSearch={this.search}
                onReset={this.reset}
                onChange={this.open}
                onPanelChangeEnd={status => {
                    const open = status === "visible";
                    onCallback && onCallback(open);
                }}
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
