/**
 *
 * @title ref-tree 参照_en-树形_en
 * @description 具有单选多选的树形参照_en
 *
 */

import React, { Component } from 'react';

import {RefTreeTableWithInput} from 'pap-refer/dist/index';
import "pap-refer/dist/index.css"
import {Button,Form,Panel} from 'tinper-bee';
import Card from '../Card'
let code = 
`
<div className="demo-label">
        <span >组织人员：_en</span>
        <RefTreeTableWithInput
            title = '组织部门人员_en'
            textOption= {{
                menuTitle: '组织_en',
                tableTitle: '人员_en',
            }}
            param = {{//url请求参数
                refCode:'neworgdeptstaff_treegrid',
            }}
            multiple = {true}
            refModelUrl = {{
                treeUrl: '/pap_basedoc/common-ref/blobRefTree',
                refInfo: '/pap_basedoc/common-ref/refInfo',//表头请求
                tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',//表体请求
            }}
            matchUrl= '/pap_basedoc/common-ref/matchPKRefJSON'
            filterUrl= '/pap_basedoc/common-ref/filterRefJSON'
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
        />
        <span style={{
            color: 'red'
        }}>
            {
                getFieldError('code')
            }
        </span>
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
                            <span >组织人员：_en</span>
                            <RefTreeTableWithInput
                                title = '组织部门人员_en'
                                textOption= {{
                                    menuTitle: '组织_en',
	                                tableTitle: '人员_en',
                                }}
                                param = {{//url请求参数
                                    refCode:'neworgdeptstaff_treegrid',
                                }}
                                multiple = {true}
                                refModelUrl = {{
                                    treeUrl: '/pap_basedoc/common-ref/blobRefTree',
                                    refInfo: '/pap_basedoc/common-ref/refInfo',//表头请求
                                    tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',//表体请求
                                }}
                                matchUrl= '/pap_basedoc/common-ref/matchPKRefJSON'
                                filterUrl= '/pap_basedoc/common-ref/filterRefJSON'
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
                            />
                            <span style={{
                                color: 'red'
                            }}>
                                {
                                    getFieldError('code')
                                }
                            </span>
                        </div>
                    </Card>
        )
    }
};

export default Form.createForm()(Demo1);


