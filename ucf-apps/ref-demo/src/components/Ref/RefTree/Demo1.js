/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import React, { Component } from 'react';
import PapReferOrg from 'pap-refer/lib/pap-ref-org/src/index';
import { Button, Form } from 'tinper-bee';
import Card from '../Card'
let code =
  `

import React, { Component } from 'react';
import PapReferOrg from 'pap-refer/lib/pap-ref-org/src/index';
import { Button, Form } from 'tinper-bee';
import Card from '../Card'
class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
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
                if (err) return;
                alert("您选择的是"+JSON.stringify(values))
              });
            }}
          >
            提交
          </Button>
        }
      >
        <div className="demo-label">
          <span >单选（组织）：</span>
          <PapReferOrg
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            nodeDisplay='{refname}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme}
            emptyBut={true}
            {...getFieldProps('code', {
              //initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择组织',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
          />
        </div>
        <div className="demo-label">
          <span >多选（组织）：</span>
          <PapReferOrg
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            nodeDisplay='{refname}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme} emptyBut={true}
            {...getFieldProps('code2', {
              //initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择组织',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
          />
        </div>
      </Card>
    )
  }
};
`
class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
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
                if (err) return;
                alert("您选择的是"+JSON.stringify(values))
              });
            }}
          >
            提交
          </Button>
        }
      >
        <div className="demo-label">
          <span >单选（组织）：</span>
          <PapReferOrg
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            nodeDisplay='{refname}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme}
            emptyBut={true}
            {...getFieldProps('code', {
              //initialValue: '{"refname":"","refpk":""}',
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
          <PapReferOrg
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            nodeDisplay='{refname}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme} 
            emptyBut={true}
            {...getFieldProps('code2', {
              //initialValue: '{"refname":"","refpk":""}',
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
              getFieldError('code2')
            }
          </span>
        </div>
      </Card>
    )
  }
};

export default Form.createForm()(Demo1);