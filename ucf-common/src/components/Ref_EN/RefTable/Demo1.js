/**
 *
 * @title ref-tree 参照_en-树形_en
 * @description 具有单选多选的树形参照_en
 *
 */

import React, { Component } from 'react';
import RefMultipleTableWithInput from 'ref-multiple-table';
import "ref-multiple-table/dist/index.css"
// import { Button, Panel } from 'tinper-bee';
// import Form from 'bee-form';
import {Button,Form} from 'tinper-bee';
import Card from '../Card'
let code = 
`
<div>
    <div className="demo-label">
        <span >单选（用户）：_en</span>
        <RefMultipleTableWithInput
            title={'用户_en'}

            param={{
                "refCode": "neworganizition_grid"
            }}
            refModelUrl={{
                tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',//表体请求
                refInfo: '/pap_basedoc/common-ref/refInfo',//表头请求
            }}
            matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
            filterUrl='/pap_basedoc/common-ref/filterRefJSON'
            multiple={false}
            searchable={true}
            checkStrictly= {true}
            strictMode = {true}
            displayField='{refname}'
            valueField='refpk'

            {...getFieldProps('code', {
                initialValue: '{"refname":"","refpk":""}',
                rules: [{
                    message: '提示：请选择_en',
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
        <span >多选（人员）：_en</span>
        <RefMultipleTableWithInput
            title={'人员_en'}

            param={{
                "refCode": "new_bd_staff"
            }}
            refModelUrl={{
                tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',//表体请求
                refInfo: '/pap_basedoc/common-ref/refInfo',//表头请求
            }}
            matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
            filterUrl='/pap_basedoc/common-ref/filterRefJSON'
            multiple={true}
            searchable={true}
            checkStrictly= {true}
            strictMode = {true}
            displayField='{refname}'
            valueField='refpk'

            {...getFieldProps('code1', {
                initialValue: '{"refname":"","refpk":""}',
                rules: [{
                    message: '提示：请选择_en',
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
                        title="基础示例_en"
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
                                        alert(`您选择的是_en${JSON.stringify(values)}`)
                                    });
                                }}
                            >
                                提交_en
                            </Button>
                        }
                    >
                        <div className="demo-label">
                            <span >单选（用户）：_en</span>
                            <RefMultipleTableWithInput
                                title={'用户_en'}
                                param={{
                                    "refCode": "neworganizition_grid"
                                }}
                                refModelUrl={{
                                    tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',//表体请求
                                    refInfo: '/pap_basedoc/common-ref/refInfo',//表头请求
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
                                {...getFieldProps('code', {
                                    initialValue: '{"refname":"","refpk":""}',
                                    rules: [{
                                        message: '提示：请选择_en',
                                        pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                                    }]
                                })}
                                emptyBut={true}                                                                                            

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
                            <span >多选（人员）：_en</span>
                            <RefMultipleTableWithInput
                                title={'人员_en'}

                                param={{
                                    "refCode": "new_bd_staff"
                                }}
                                refModelUrl={{
                                    tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',//表体请求
                                    refInfo: '/pap_basedoc/common-ref/refInfo',//表头请求
                                 }}
                                matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
                                filterUrl='/pap_basedoc/common-ref/filterRefJSON'
                                multiple={true}
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
                                        message: '提示：请选择_en',
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


