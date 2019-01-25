/**
 * 按钮权限组件
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from 'utils/request';

const propTypes = {
    url: PropTypes.string,
    funcCode: PropTypes.string,
    className: PropTypes.string,
    onComplete: PropTypes.func,
    onError: PropTypes.func
};
/**
 * 按钮权限组件
 *
 * @class ButtonRoleGroup
 * @extends {Component}
 */
class ButtonRoleGroup extends Component {
    /**
     *Creates an instance of ButtonRoleGroup.
     * @param {*} props
     * @memberof ButtonRoleGroup
     */
    constructor(props) {
        super(props);
        this.state = {
            role: []
        }
    }
    /**
     * 可配置的权限参数
     */
    options = {
        method: 'get',
        param: { funcCode: this.props.funcCode, r: Math.random() }
    }
    /**
     * 生命周期
     *
     * @memberof ButtonRoleGroup
     */
    async componentWillMount() {
        let { onComplete, onError } = this.props;
        let { data } = await request(this.props.url, this.options);
        if (Array.isArray(data)) {
            this.setState({
                // role: ['check', 'delete']
                role: data
            }, () => {
                onComplete && onComplete();
            });
        } else {
            onError && onError();
        }

    }
    /**
     * 判断组件是否为权限内
     *
     * @param {JSX} comp 传入的按钮组件，通过props.role获得
     * @returns boolean
     */
    hasRoleComp = (comp) => {
        let { role } = this.state;
        let _flag = 'no';
        if (comp.props.role == undefined) {
            _flag = 'normal';
        } else {
                
            for (let i = 0; i < role.length; i++) {
                if (role[i] == comp.props.role || comp.props.role == undefined) {
                    _flag = 'normal';
                    break;
                } 
            }
        }

        return _flag;
    }
    render() {
        let { children, className } = this.props;
        return (
            <span className={className}>
                {
                    children.map((Comp, key) => {
                        let attr = {
                            authority: true,
                            disabled: false
                        }
                        let attrNormal = {
                            authority: false,
                            disabled: false
                        }
                        switch (this.hasRoleComp(Comp)) {
                            case 'yes':
                                attr.disabled = Comp.props.disabled
                                return <Comp.type key={key} {...Comp.props} {...attr} />
                            case 'no':
                                attr.disabled = true;
                                return <Comp.type key={key} {...Comp.props} {...attr} />
                            case 'normal':
                                attrNormal.disabled = Comp.props.disabled
                                return <Comp.type key={key} {...Comp.props} {...attrNormal} />
                            default:
                                return <div>error</div>
                        }
                    })
                }
            </span>
        );
    }
}
ButtonRoleGroup.propTypes = propTypes;
ButtonRoleGroup.defaultProps = {
        url: "/wbalone/security/auth",
    funcCode: "",
    className: ""
}
export default ButtonRoleGroup;