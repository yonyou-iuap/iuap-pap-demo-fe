import React, {Component} from 'react';
import PropTypes from "prop-types";
import {FormControl,InputGroup,Icon} from "tinper-bee";
import request from "utils/request";
import { processDataPlatForm } from "utils";


class PreCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:props.value //前编码的值
        }
    }
    componentWillReceiveProps(nextProps){
        if(this.props.value != nextProps.value && nextProps.value){
            this.setState({
                value: nextProps.value
            },() => {
                this.onChange(nextProps.value);
            })
        }
        else{
            if(this.state.value == '' && nextProps.codeMode === "preCode"){
                this.getCode();
            }
        }
    }
    
    async getCode () {
        const props = this.props;

        const URL = {
            "GET_PRE_CODE":  `/iuap-saas-billcode-service/billcoderest/getPreBillCode`,
        }
        //获取前编码请求
        const getPreCode = (param) => {
            return request(URL.GET_PRE_CODE, {
                method: "post",
                data: param
            })
        };

        let res = processDataPlatForm(await getPreCode({
            "pkAssign":"", //编码分配标志（传空串就可以）
            "billObjCode":props.billObjCode //编码对象PK（表pub_bcr_obj）
        }));

        if(res.data && res.data.billcode){
            this.setState({
                value:res.data.billcode
            },() => {
                this.onChange(res.data.billcode);
            })
        }
    }
    onChange = (code) => {
        const {onChange,field,index} = this.props;
        if(onChange){
            if(field && String(index)){
                onChange(field, code, index);
            }
            else{
                onChange(code);
            }
        }
    }
    render() {
        const props = this.props;

        return (
            <InputGroup simple style={{display:'block'}}>
                <FormControl
                    disabled={true}
                    value = {this.state.value}
                />
                {(!props.value)?<InputGroup.Button shape="border" onClick={()=>{ 
                   if(this.state.value == '' && props.codeMode === "preCode"){
                        this.getCode()
                    }}}>

                    {
                        props.codeMode === "preCode"?props.renderIcon():""
                    }
                </InputGroup.Button>:null}
            </InputGroup>
        );
    }
}

PreCode.props = {
    value: PropTypes.string,
    renderIcon: PropTypes.func,
    billObjCode: PropTypes.string,
    onChange: PropTypes.func
}

PreCode.defaultProps = {
    value:'',
    renderIcon: () => <Icon type="uf-activate-2" title="reload" />,
    billObjCode:''
};

export default PreCode;