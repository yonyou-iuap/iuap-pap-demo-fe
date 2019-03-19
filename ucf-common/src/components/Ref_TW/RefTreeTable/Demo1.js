/**
 *
 * @title ref-tree 参照_tw-树形_tw
 * @description 具有单选多选的树形参照_tw
 *
 */

import React, { Component } from 'react';

import RefTreeTableWithInput from 'ref-tree-table';
import "ref-tree-table/dist/index.css"
import {Button,Form,Panel} from 'tinper-bee';
import Card from '../Card'
let code = 
`
<div className="demo-label">
        <span >组织人员：_tw</span>
        <RefTreeTableWithInput
            title = '组织部门人员_tw'
            textOption= {{
                menuTitle: '组织_tw',
                tableTitle: '人员_tw',
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
                    message: '提示：请选择_tw',
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
                        title="基础示例_tw"
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
                                        alert(`您选择的是_tw${JSON.stringify(values)}`)
                                    });
                                }}
                            >
                                提交_tw
                            </Button>
                        }
                    >
                        <div className="demo-label">
                            <span >组织人员：_tw</span>
                            <RefTreeTableWithInput
                                title = '组织部门人员_tw'
                                textOption= {{
                                    menuTitle: '组织_tw',
	                                tableTitle: '人员_tw',
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
                                        message: '提示：请选择_tw',
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


