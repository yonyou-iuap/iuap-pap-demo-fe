import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    errorMsg: PropTypes.string,
    className:PropTypes.string
};

const defaultProps = {
    errorMsg: '',
    className:''
};


class FormError extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    renderError = () => {
        let classes = 'error';
        if(this.props.className){
            classes += ' '+this.props.className;
        }
        return this.props.errorMsg ? (
            <span className={classes} >
                <i className='uf uf-exc-t-o' />
                {this.props.errorMsg}
            </span>
        ) : ''
    }
    render() {
        return this.renderError()
    }
}
FormError.propTypes = propTypes;
FormError.defaultProps = defaultProps;
export default FormError;
