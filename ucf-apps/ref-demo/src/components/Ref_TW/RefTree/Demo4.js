/**
 *
 * @title ref-tree 参照_tw-树形_tw
 * @description 具有单选多选的树形参照_tw
 *
 */

import React, { Component } from 'react';
import PapReferOrg from 'pap-refer/lib/pap-ref-org';
import 'pap-refer/lib/pap-ref-org.css';
import PapReferDept from 'pap-refer/lib/pap-ref-dept';
import 'pap-refer/lib/pap-ref-dept.css';
import { Button, Form, Panel } from 'tinper-bee';
import Card from '../Card'
let code =
`
import React, { Component } from 'react';
import PapReferOrg from 'pap-refer/lib/pap-ref-org';
import 'pap-refer/lib/pap-ref-org.css';
import PapReferDept from 'pap-refer/lib/pap-ref-dept';
import 'pap-refer/lib/pap-ref-dept.css';
import { Button, Form, Panel } from 'tinper-bee';
import Card from '../Card'
class Demo4 extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      singleClientParam: {},
    }

  }
  singleSave = (result) => {
    //组织单选的保存，级联参照
    this.setState({
      singleClientParam: result.length === 0 ? {} : { 'organization_id': result[0].refpk },
    })

  }
  render() {

    const { getFieldProps, getFieldError } = this.props.form;

    let { singleClientParam } = this.state;
    return (
      <Card
        title="参照级联_tw"
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
                alert("您选择的是_tw$"+JSON.stringify(values))
              });
            }}
          >
            提交_tw
           </Button>
        }
      >
        <div className="demo-label">
          <span >组织：_tw</span>
          <PapReferOrg
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            onSave={this.singleSave}
            lang={this.props.lang}
            emptyBut={true}
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
        <div className="demo-label">
          <span >部门：_tw</span>
          <PapReferDept
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            lang={this.props.lang}
            emptyBut={true}
            {...getFieldProps('code1', {
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
              getFieldError('code1')
            }
          </span>
        </div>
      </Card>
    )
  }
};

`
class Demo4 extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      singleClientParam: {},
    }

  }
  singleSave = (result) => {
    //组织单选的保存，级联参照
    this.setState({
      singleClientParam: result.length === 0 ? {} : { 'organization_id': result[0].refpk },
    })

  }
  render() {

    const { getFieldProps, getFieldError } = this.props.form;

    let { singleClientParam } = this.state;
    return (
      <Card
        title="参照级联_tw"
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
                alert("您选择的是_tw$"+JSON.stringify(values))
              });
            }}
          >
            提交_tw
           </Button>
        }
      >
        <div className="demo-label">
          <span >组织：_tw</span>
          <PapReferOrg
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            onSave={this.singleSave}
            lang={this.props.lang}
            emptyBut={true}
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
        <div className="demo-label">
          <span >部门：_tw</span>
          <PapReferDept
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            lang={this.props.lang}
            emptyBut={true}
            {...getFieldProps('code1', {
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
              getFieldError('code1')
            }
          </span>
        </div>
      </Card>
    )
  }
};

export default Form.createForm()(Demo4);

