import React, { Component } from 'react';
import classnames from 'classnames';
import Icon from 'bee-icon';
import PropTypes from 'prop-types';

const propTypes = {
    componentClass: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ]),
    type: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    onSearch: PropTypes.func,
    onChange: PropTypes.func
};

const defaultProps = {
    componentClass: 'input',
    clsPrefix: 'u-form-control',
    type: 'text',
    size: 'md'
};


class FormControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value == null ? "" : props.value
        }
        this.input = {};
    }

    componentWillReceiveProps(nextProp) {
        if (nextProp.value !== this.state.value) {
            this.setState({ value: nextProp.value });
        }
    }

    handleSearchChange = (e) => {
        const { value } = this.props;
        //const value = this.input.value;
        this.input.value = value;
    }

    handleInputClick = (e) => {
        const { onSearch } = this.props;
        if (onSearch) {
            onSearch();
        }
    }

    handleSearchClick = (e) => {
        const { onSearch } = this.props;
        if (onSearch) {
            onSearch();
        }
    }

    renderSearch = () => {
        const {
            componentClass: Component,
            type,
            className,
            size,
            clsPrefix,
            value,
            iconDisabled,
            ...others
        } = this.props;
        // input[type="file"] 不应该有类名 .form-control.
        let classes = {};
        if (size) {
            classes[`${size}`] = true;
        }

        classes[`${clsPrefix}-search`] = true;
        return (
            <div className={classnames(`${clsPrefix}-search`, `${clsPrefix}-affix-wrapper`, className)}>
                <Component
                    {...others}
                    type={type}
                    ref={(el) => this.input = el}
                    onChange={this.handleSearchChange}
                    onClick={this.handleInputClick}
                    value={value}
                    className={classnames(className, clsPrefix, classes)}
                />
                <div className={`${clsPrefix}-suffix`}>
                    <Icon style={{ padding: 0, color: '#bdbdbd', cursor: 'pointer' }} type="iconfont icon-canzhao" onClick={iconDisabled?()=>{}:this.handleSearchClick} />
                </div>
            </div>
        );
    }

    render() {
        return this.renderSearch()
    }
}

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;

export default FormControl;