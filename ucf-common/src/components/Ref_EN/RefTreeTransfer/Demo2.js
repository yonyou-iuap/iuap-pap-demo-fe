/**
 *
 * @title ref-tree 参照_en-树形_en
 * @description 具有单选多选的树形参照_en
 *
 */

import React, { Component } from 'react';

import RefTreeTransferWithInput from 'ref-tree-transfer';
import "ref-tree-transfer/dist/index.css"
import {Button,Form,Panel} from 'tinper-bee';
import Card from '../Card'
let code = 
`
<div className="demo-label">
    <span >穿梭框：：_en</span>
    <RefTreeTransferWithInput
        title = '组织部门人员穿梭_en'
        textOption= {{
            leftTitle:'组织部门树_en',
                rightTitle:'人员穿梭框_en'
        }}
        textOption= {
            {
                leftTitle:'',
                rightTitle:'',
                leftTransferText:'',
                rightTransferText:'',
            }
        }
        param = {{//url请求参数
            refCode:'neworgdeptstaff_treegrid',
        }}
        refModelUrl = {{
            treeUrl: '/pap_basedoc/common-ref/blobRefTree',
            tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',
            tableBodyUrlSearch: ''
        }}
        displayField='{refname}-{refcode}'
        valueField='refcode'
        lang={this.props.lang}
        {...getFieldProps('code', {
            initialValue: '{"refname":"","refpk":""}',
            rules: [{
                message: '提示：请选择_en',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
            }]
        })}
        size='lg'
        emptyBut={false}
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
class Demo2 extends Component {
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
                        title="穿梭框不带任何标题_en"
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
                            <span >穿梭框：：_en</span>
                            <RefTreeTransferWithInput
                                title = '组织部门人员穿梭_en'
                                textOption= {{
                                    leftTitle:'组织部门树_en',
                                        rightTitle:'人员穿梭框_en'
                                }}
                                textOption= {
                                    {
                                        leftTitle:'',
                                        rightTitle:'',
                                        leftTransferText:'',
                                        rightTransferText:'',
                                    }
                                }
                                param = {{//url请求参数
                                    refCode:'neworgdeptstaff_treegrid',
                                }}
                                refModelUrl = {{
                                    treeUrl: '/pap_basedoc/common-ref/blobRefTree',
                                    tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',
                                    tableBodyUrlSearch: ''
                                }}
                                displayField='{refname}-{refcode}'
                                valueField='refcode'
                                lang={this.props.lang}
                                {...getFieldProps('code', {
                                    initialValue: '{"refname":"","refpk":""}',
                                    rules: [{
                                        message: '提示：请选择_en',
                                        pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                                    }]
                                })}
                                size='lg'
                                emptyBut={false}
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

export default Form.createForm()(Demo2);


