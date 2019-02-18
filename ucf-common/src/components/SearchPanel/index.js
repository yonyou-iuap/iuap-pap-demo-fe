/**
 * 面板组件
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, Icon } from 'tinper-bee';

import classnames from 'classnames';
import './index.less';


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
    resetName: "清除查询",
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
    componentDidMount() {

    }

    open = () => {
        this.setState({
            searchOpen: !this.state.searchOpen
        })
    }

    search = () => {
        // let self = this;
        // this.props.form.validateFields((err, values) => {
        //     self.props.search(err, values);
        // });
        const { search } = this.props;
        search && search();
    }
    reset = () => {
        // this.props.form.resetFields();
        const { reset } = this.props;
        reset && reset();
    }
    render() {
        const { children, className, resetName, searchName, onCallback, bgColor } = this.props;
        let classes = 'search-panel form-panel';
        if (className) {
            classes += ' ' + className
        }
        let PanelHeader = (
            <div className="search-panel-header">
                <div className="search-panel-header-title">
                    <span>{this.props.title}</span>
                    {/*<Icon type="uf-arrow-c-o-down"/>*/}
                </div>

                <div className="search-panel-header-oper">
                    <a
                        className="header-oper-btn"
                        role="button"
                        onClick={this.open}
                    >
                        {this.state.searchOpen ? '收起' : '展开'}
                        <i className={classnames({
                            'uf': true,
                            'uf-arrow-down': !this.state.searchOpen,
                            'uf-arrow-up': this.state.searchOpen
                        })} />
                    </a>
                    <a className="header-oper-btn" role="button" onClick={this.reset}>清空</a>
                    <a className="header-oper-btn primary" role="button" onClick={this.search}>查询</a>
                </div>
            </div>
        );
        return (
            <Panel
                className={classes}
                header={PanelHeader}
                collapsible
                expanded={this.state.searchOpen}
                onExited={() => onCallback && onCallback(false)}//隐藏完成回调
                onEntered={() => onCallback && onCallback(true)}//显示后回调
                style={{
                    backgroundColor: bgColor
                }}
            >
                {children}
                {/*<div className='search-panel-btn'>*/}
                    {/*<Button*/}
                        {/*className='reset-btn'*/}
                        {/*shape='border'*/}
                        {/*onClick={this.reset}>{resetName}</Button>*/}
                    {/*<Button*/}
                        {/*className='submit-btn'*/}
                        {/*colors="primary"*/}
                        {/*onClick={this.search}*/}
                    {/*>{searchName}</Button>*/}
                {/*</div>*/}
            </Panel>

        )
    }
}
SearchPanel.propTypes = propTypes;
SearchPanel.defaultProps = defaultProps;
export default SearchPanel;
