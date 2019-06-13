/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import React, { Component } from 'react';
import PapRefOrgDept from 'pap-refer/lib/pap-ref-orgDept/src/index';
import {Button,Form} from 'tinper-bee';
import Card from '../Card'
let code = 
`
import React, { Component } from 'react';
import PapRefOrgDept from 'pap-refer/lib/pap-ref-orgDept/src/index';
import {Button,Form} from 'tinper-bee';
import Card from '../Card'
class Demo3 extends Component {
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
                        title="组合树"
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
                                        alert("您选择的是"+JSON.stringify(values))
                                        console.log(values);
                                    });
                                }}
                            >
                                提交
                            </Button>
                        }
                    >
                        <div className="demo-label">
                            <span >组织部门：</span>
                            <PapRefOrgDept
                                multiple={false}
                                searchable={true}
                                checkStrictly= {true}
                                strictMode = {true}
                                displayField='{refname}'
                                valueField='refpk'
                                lazyParam = {['entityType', 'type']}
                               lang={this.props.lang}
            theme={this.props.theme} emptyBut={true}
                                emptyBut={true}

                                nodeDisplay = {(record) => {
                                    if(record.entityType === "mainEntity"){
                                        return (<span><i className="uf uf-group-2" /> {record.refname} </span>);
                                    }else if(record.entityType === "subEntity"){
                                        return (<span><i className="uf uf-users" /> {record.refname} </span>);
                                    }
                                }}
                                {...getFieldProps('code', {
                                    //initialValue: '{"refname":"","refpk":""}',
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
                            <span >组织部门懒加载：</span>
                            <PapRefOrgDept
                                multiple={false}
                                searchable={true}
                                checkStrictly= {true}
                                strictMode = {true}
                                displayField='{refname}'
                                valueField='refpk'
                                
                                lazyModal={true}
                                lazyParam = {['entityType', 'type']}
                                nodeDisplay = {(record) => {
                                    if(record.entityType === "mainEntity"){
                                        return (<span><i className="uf uf-group-2" /> {record.refname} </span>);
                                    }else if(record.entityType === "subEntity"){
                                        return (<span><i className="uf uf-users" /> {record.refname} </span>);
                                    }
                                }}
                               lang={this.props.lang}
            theme={this.props.theme} 
                                emptyBut={true}
                                {...getFieldProps('code1', {
                                    //initialValue: '{"refname":"","refpk":""}',
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

export default Form.createForm()(Demo3);
`
class Demo3 extends Component {
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
                        title="组合树"
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
                                        console.log(values);
                                    });
                                }}
                            >
                                提交
                            </Button>
                        }
                    >
                        <div className="demo-label">
                            <span >组织部门：</span>
                            <PapRefOrgDept
                                multiple={false}
                                searchable={true}
                                checkStrictly= {true}
                                strictMode = {true}
                                displayField='{refname}'
                                valueField='refpk'
                                lazyParam = {['entityType', 'type']}
                               lang={this.props.lang}
            theme={this.props.theme} emptyBut={true}
                                emptyBut={true}

                                nodeDisplay = {(record) => {
                                    if(record.entityType === "mainEntity"){
                                        return (<span><i className="uf uf-group-2" /> {record.refname} </span>);
                                    }else if(record.entityType === "subEntity"){
                                        return (<span><i className="uf uf-users" /> {record.refname} </span>);
                                    }
                                }}
                                {...getFieldProps('code', {
                                    //initialValue: '{"refname":"","refpk":""}',
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
                            <span >组织部门懒加载：</span>
                            <PapRefOrgDept
                                multiple={false}
                                searchable={true}
                                checkStrictly= {true}
                                strictMode = {true}
                                displayField='{refname}'
                                valueField='refpk'
                                
                                lazyModal={true}
                                lazyParam = {['entityType', 'type']}
                                nodeDisplay = {(record) => {
                                    if(record.entityType === "mainEntity"){
                                        return (<span><i className="uf uf-group-2" /> {record.refname} </span>);
                                    }else if(record.entityType === "subEntity"){
                                        return (<span><i className="uf uf-users" /> {record.refname} </span>);
                                    }
                                }}
                               lang={this.props.lang}
            theme={this.props.theme} 
                                emptyBut={true}
                                {...getFieldProps('code1', {
                                    //initialValue: '{"refname":"","refpk":""}',
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

export default Form.createForm()(Demo3);

