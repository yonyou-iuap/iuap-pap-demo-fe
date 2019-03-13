/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import React, { Component } from 'react';
import RefTreeWithInput from 'ref-tree';
import "ref-tree/dist/index.css"
import {Button,Form,Panel} from 'tinper-bee';
import Card from '../Card'
let code = 
`
<div>
    <div className="demo-label">
        <span >组织：</span>
        <RefTreeWithInput
            title={'组织'}
        
            param={{
                "refCode": "neworganizition_tree"
            }}
            refModelUrl={{
                treeUrl: '/pap_basedoc/common-ref/blobRefTree',
            }}
            matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
            filterUrl='/pap_basedoc/common-ref/filterRefJSON'
            multiple={false}
            searchable={true}
            checkStrictly= {true}
            strictMode = {true}
            displayField='{refname}'
            valueField='refpk'
            onSave={this.singleSave}
            {...getFieldProps('code', {
                initialValue: '{"refname":"","refpk":""}',
                rules: [{
                    message: '提示：请选择',
                    pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                }]
            })}
        />
        <span style={{
            color: 'red'
        }}>
            {
                getFieldError('code')
            }
        </span>
    </div>
    <div className="demo-label">
        <span >部门：</span>
        <RefTreeWithInput
            title={'组织部门'}
        
            param={{
                "refCode": "neworganizition_tree",
                "clientParam":Object.keys(singleClientParam).length===0?'':singleClientParam
            }}
            refModelUrl={{
                treeUrl: '/pap_basedoc/common-ref/blobRefTree',
            }}
            matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
            filterUrl='/pap_basedoc/common-ref/filterRefJSON'
            multiple={false}
            searchable={true}
            checkStrictly= {true}
            strictMode = {true}
            displayField='{refname}'
            valueField='refpk'
            
            {...getFieldProps('code1', {
                initialValue: '{"refname":"","refpk":""}',
                rules: [{
                    message: '提示：请选择',
                    pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                }]
            })}
        />
        <span style={{
            color: 'red'
        }}>
            {
                getFieldError('code1')
            }
        </span>
    </div>
</div>
`
class Demo4 extends Component {
    constructor() {
        super();
        this.state = {
            value:'',
            singleClientParam:{},
        }

    }
    singleSave = (result) =>{
        //组织单选的保存，级联参照
        this.setState({
            singleClientParam:result.length === 0?{}:{'pk_org':result[0].refpk},
        })
        
    }
    render() {
        
        const { getFieldProps, getFieldError } = this.props.form;
        
        let {  singleClientParam } = this.state;
        return (
                    <Card
                        title="参照级联"
                        codeText={code}
                        footer={
                            <Button colors="primary"
                                style={{
                                    margin: 'auto 5px',
                                    height: '30px',
                                    padding: '0px'
                                }}
                                onClick={() => {
                                    this.props.form.validateFields((err, values) => {
                                        if(err) return;
                                        alert(`您选择的是${JSON.stringify(values)}`)
                                    });
                                }}
                            >
                                提交
                            </Button>
                        }
                    >
                        <div className="demo-label">
                            <span >组织：</span>
                            <RefTreeWithInput
                                title={'组织'}
                            
                                param={{
                                    "refCode": "neworganizition_tree"
                                }}
                                refModelUrl={{
                                    treeUrl: '/pap_basedoc/common-ref/blobRefTree',
                                }}
                                matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
                                filterUrl='/pap_basedoc/common-ref/filterRefJSON'
                                multiple={false}
                                searchable={true}
                                checkStrictly= {true}
                                strictMode = {true}
                                displayField='{refname}'
                                valueField='refpk'
                                onSave={this.singleSave}
                                lang={this.props.lang} emptyBut={true}
                                emptyBut={true}

                                {...getFieldProps('code', {
                                    initialValue: '{"refname":"","refpk":""}',
                                    rules: [{
                                        message: '提示：请选择',
                                        pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                                    }]
                                })}
                            />
                            <span style={{
                                color: 'red'
                            }}>
                                {
                                    getFieldError('code')
                                }
                            </span>
                        </div>
                        <div className="demo-label">
                            <span >部门：</span>
                            <RefTreeWithInput
                                title={'组织部门'}
                            
                                param={{
                                    "refCode": "neworganizition_tree",
                                    "clientParam":Object.keys(singleClientParam).length===0?'':singleClientParam
                                }}
                                refModelUrl={{
                                    treeUrl: '/pap_basedoc/common-ref/blobRefTree',
                                }}
                                matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
                                filterUrl='/pap_basedoc/common-ref/filterRefJSON'
                                multiple={false}
                                searchable={true}
                                checkStrictly= {true}
                                strictMode = {true}
                                displayField='{refname}'
                                valueField='refpk'
                                lang={this.props.lang}
                                emptyBut={true}
                                {...getFieldProps('code1', {
                                    initialValue: '{"refname":"","refpk":""}',
                                    rules: [{
                                        message: '提示：请选择',
                                        pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                                    }]
                                })}
                            />
                            <span style={{
                                color: 'red'
                            }}>
                                {
                                    getFieldError('code1')
                                }
                            </span>
                        </div>
                    </Card>
        )
    }
};

export default Form.createForm()(Demo4);

