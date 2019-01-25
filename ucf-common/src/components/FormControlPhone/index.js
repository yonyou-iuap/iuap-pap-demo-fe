import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'tinper-bee'

const propTypes = {
    className:PropTypes.string,
    onChange:PropTypes.func
};

const defaultProps = {
    className:'',
    onChange:()=>{}
};


class FormControlPhone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:''
        };
    }
    componentWillMount(){
        let value = '';
        if(this.props.value!=undefined){
            value = this.props.value;
        }else if(this.props.defaultValue!=undefined){
            value=this.props.defaultProps
        }
        this.setState({
            value
        })
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.value!=this.state.value){
            this.setState({
                value:nextProps.value
            })
        }
    }


    handChange=(value)=>{
        if(!isNaN(value)){
            this.setState({
                value
            })
            this.props.onChange(value);
        }
    }

    render() {
        return (
            <FormControl {...this.props} value={this.state.value} onChange={this.handChange} 
            onKeyDown={this.keyDown} />
        )
    }
}
FormControlPhone.propTypes = propTypes;
FormControlPhone.defaultProps = defaultProps;
export default FormControlPhone;
