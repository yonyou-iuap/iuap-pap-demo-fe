
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//参照部门
import RefDept from 'components/RowField/RefDept';
//参照职级
import RefLevel from 'components/RowField/RefLevel';
import RefCommonField from 'components/RowField/RefCommonField';

const propTypes = {
    refCode: PropTypes.string,
    refType: PropTypes.number
};

//默认参数值
const defaultProps = {
   
}

class RefBusiness extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    render() {
        const {refCode,refType} = this.props;
  
        if(refCode == "post_level"){
            return (
                <RefLevel {...this.props} /> 
            )
        }
        else if(refCode == "newdept"){
            return (
                <RefDept {...this.props} />
            )
        }
        else{
            return (
                <RefCommonField {...this.props}
                                type={refType}
                />
            )
        }
    }
}

RefBusiness.propTypes = propTypes;
RefBusiness.defaultProps = defaultProps;

export default RefBusiness;