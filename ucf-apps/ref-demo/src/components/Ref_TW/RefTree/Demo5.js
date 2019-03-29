/**
 *
 * @title ref-tree 参照_tw-树形_tw
 * @description 具有单选多选的树形参照_tw
 *
 */

import React, { Component } from 'react';
import PapRefOrgDept from 'pap-refer/lib/pap-ref-orgDept';
import 'pap-refer/lib/pap-ref-orgDept.css'
import {Button,Form,Panel} from 'tinper-bee';
import Card from '../Card'
let code =
`
import React, { Component } from 'react';
import PapRefOrgDept from 'pap-refer/lib/pap-ref-orgDept';
import 'pap-refer/lib/pap-ref-orgDept.css'
import {Button,Form,Panel} from 'tinper-bee';
import Card from '../Card'
class Demo5 extends Component {
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
        title="数据权限_tw"
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
                alert("您选择的是_tw"+JSON.stringify(values))
                console.log(values)
              });
            }}
          >
            提交_tw
          </Button>
        }
      >
        <div className="demo-label">
          <span >组织部门：_tw</span>
          <PapRefOrgDept
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            lang={this.props.lang} 
            emptyBut={true}
            nodeDisplay={(record) => {
              if (record.entityType === "mainEntity") {
                return (<span><i className="uf uf-group-2" /> {record.refname} </span>);
              } else if (record.entityType === "subEntity") {
                return (<span><i className="uf uf-users" /> {record.refname} </span>);
              }
            }}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择_tw',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
          />
        </div>
      </Card>
    )
  }
};

export default Form.createForm()(Demo5);
`
class Demo5 extends Component {
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
        title="数据权限_tw"
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
                alert("您选择的是_tw"+JSON.stringify(values))
                console.log(values)
              });
            }}
          >
            提交_tw
          </Button>
        }
      >
        <div className="demo-label">
          <span >组织部门：_tw</span>
          <PapRefOrgDept
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            lang={this.props.lang} 
            emptyBut={true}
            nodeDisplay={(record) => {
              if (record.entityType === "mainEntity") {
                return (<span><i className="uf uf-group-2" /> {record.refname} </span>);
              } else if (record.entityType === "subEntity") {
                return (<span><i className="uf uf-users" /> {record.refname} </span>);
              }
            }}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择_tw',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
          />
        </div>
      </Card>
    )
  }
};

export default Form.createForm()(Demo5);

