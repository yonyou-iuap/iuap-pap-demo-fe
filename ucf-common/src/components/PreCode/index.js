import React, {Component} from 'react';
import PropTypes from "prop-types";
import {FormControl,InputGroup,Icon} from "tinper-bee";
import request from "utils/request";
import { processDataPlatForm } from "utils";
import PreCode from "./PreCode";


class CodeRuleType extends Component {
    constructor(props) {
        super(props);
        let _value = props.value?props.value:"";
        this.state = {
            codeMode:"",//编码类型
            codeValue:_value
        }
        if(!_value){
            this.getCode();
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.props.value != nextProps.value && nextProps.value){
            if(this.state.codeMode != "preCode"){//前端编码
                this.setState({
                    codeValue:nextProps.value
                })
            }
        }
    }
  
    async getCode () {
        const props = this.props;
        const {onChange} = this.props;
        const URL = {
            "GET_PRE_CODE_TYPE":  `/iuap-saas-billcode-service/billcoderest/getBillCodeRuleVO`,
        }
        //获取编码类型
        const getPreCode = (param) => {
            return request(URL.GET_PRE_CODE_TYPE, {
                method: "post",
                data: param
            })
        };

        let res = await getPreCode({
            "pkAssign":"", //编码分配标志（传空串就可以）
            "billObjCode":props.billObjCode //编码对象PK（表pub_bcr_obj）
        });

        if(res && res.data){
            this.setState({
                codeMode: res.data.codeMode ? res.data.codeMode : "other",
                codeValue: res.data.billCode
            }); 
        }
    }

    render() {
        const props = this.props;
        const {codeMode,codeValue} = this.state;
        let code = props.value || codeValue;
        
        return <PreCode {...props} value={code} codeMode={codeMode}/>;
    }
}

CodeRuleType.props = {
    value: PropTypes.string,
    renderIcon: PropTypes.func,
    billObjCode: PropTypes.string,
    onChange: PropTypes.func
}

CodeRuleType.defaultProps = {
    value:'',
    renderIcon: () => <Icon type="uf-activate-2" />,
    billObjCode:''
};

export default CodeRuleType;