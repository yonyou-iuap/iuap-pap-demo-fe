/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import React, { Component } from 'react';
import RefTreeWithInput   from 'pap-refer/lib/ref-tree.js'; import "pap-refer/lib/ref-tree.css";
import {Button,Form} from 'tinper-bee';
import Card from '../Card'
let code = 
`
<div>
    <div className="demo-label">
        <span >单选（组织）：</span>
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
            displayField='{code}' nodeDisplay='{code}'
            valueField='refpk'

            {...getFieldProps('code', {
                initialValue: '{"refname":"","refpk":""}',
                rules: [{
                    message: '提示：请选择组织',
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
        <span >多选（组织）：</span>
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
            multiple={true}
            searchable={true}
            checkStrictly= {true}
            strictMode = {true}
            displayField='{code}' nodeDisplay='{code}'
            valueField='refpk'

            {...getFieldProps('code1', {
                initialValue: '{"refname":"","refpk":""}',
                rules: [{
                    message: '提示：请选择组织',
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
class Demo1 extends Component {
    constructor() {
        super();
        this.state = {
            value:''
        }

    }
    render() {
        
        const { getFieldProps, getFieldError } = this.props.form;
        return (
                    <Card
                        title="基础示例"
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
                            <span >单选（组织）：</span>
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
                                displayField='{code}' nodeDisplay='{code}'
                                valueField='refpk'
                                lang={this.props.lang} emptyBut={true}
                                emptyBut={true}
                                {...getFieldProps('code', {
                                    initialValue: '{"refname":"","refpk":""}',
                                    rules: [{
                                        message: '提示：请选择组织',
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
                            <span >多选（组织）：</span>
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
                                multiple={true}
                                searchable={true}
                                checkStrictly= {true}
                                strictMode = {true}
                                displayField='{code}' nodeDisplay='{code}'
                                valueField='refpk'
                                lang={this.props.lang} 
                                emptyBut={true}
                                {...getFieldProps('code1', {
                                    initialValue: '{"refname":"","refpk":""}',
                                    rules: [{
                                        message: '提示：请选择组织',
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

export default Form.createForm()(Demo1);