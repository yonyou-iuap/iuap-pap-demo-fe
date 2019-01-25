import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button as BeeButton, Icon } from 'tinper-bee';

const propTypes = {
    iconType: PropTypes.string,//图标的className，必填
};

const defaultProps = {

};


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() { }

    render() {
        let { className,
            style,
            iconType,
            disabled,
            authority,
            ...other
        } = this.props;
        // let classname = className||'';
        let classname = (disabled && authority) && `${className || ''} btn-authority-disabled` || `${className || ''}`;
        return (
            <BeeButton
                className={'demo-button ' + classname}
                size="sm"
                style={{ ...style }}
                disabled={disabled}
                {...other} >
                {iconType ? (
                    <Icon className={iconType} />
                ) : null}
                {this.props.children}
            </BeeButton>
        )
    }
}
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
