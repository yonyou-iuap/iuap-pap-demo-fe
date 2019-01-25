/**
 * 面板组件
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'tinper-bee';
import Button from 'components/Button';
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
    title: "查询与筛选",
    resetName: "清除查询",
    searchName: "查询"
};


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchOpen: this.props.searchOpen
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
        let self = this;
        this.props.form.validateFields((err, values) => {
            self.props.search(err, values);
        });
    }
    reset = () => {
        this.props.form.resetFields();
        this.props.reset();
    }
    render() {
        const { children, className, resetName, searchName, onCallback } = this.props;
        let classes = 'search-panel form-panel';
        if (className) {
            classes += ' ' + className
        }
        let header = () => {
            return (
                <div className="panel-title clearfix" onClick={this.open}>
                    <span  className={'search-panel-title'}>
                        {this.props.title}
                    </span>

                    <span className={'search-panel-icon'}>
                        {this.state.searchOpen ? '收起' : '展开'}
                        <i className={classnames({
                            'uf': true,
                            'uf-arrow-down': this.state.searchOpen,
                            'uf-arrow-right': !this.state.searchOpen
                        })} />
                    </span>
                </div>
            )
        };
        return (
            <Panel
                className={classes}
                header={header()}
                collapsible
                expanded={this.state.searchOpen}
                onExited={() => onCallback && onCallback(false)}//隐藏完成回调
                onEntered={() => onCallback && onCallback(true)}//显示后回调
            >
                {children}
                <div className='search-panel-btn'>
                    <Button
                        className='reset-btn'
                        shape='border'
                        onClick={this.reset}>{resetName}</Button>
                    <Button
                        className='submit-btn'
                        colors="primary"
                        onClick={this.search}
                    >{searchName}</Button>
                </div>
            </Panel>

        )
    }
}
SearchPanel.propTypes = propTypes;
SearchPanel.defaultProps = defaultProps;
export default SearchPanel;
