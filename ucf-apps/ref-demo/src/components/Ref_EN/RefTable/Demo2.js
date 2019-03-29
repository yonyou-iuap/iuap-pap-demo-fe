/**
 *
 * @title ref-tree 参照_en-树形_en
 * @description 具有单选多选的树形参照_en
 *
 */

import React, { Component } from 'react';
import { Button, Form } from 'tinper-bee';
import PapRefStaff from 'pap-refer/lib/pap-ref-staff';
import 'pap-refer/lib/pap-ref-staff.css';
import Card from '../Card'
let code =
`
import React, { Component } from 'react';
import { Button, Form } from 'tinper-bee';
import PapRefStaff from 'pap-refer/lib/pap-ref-staff';
import 'pap-refer/lib/pap-ref-staff.css';
import Card from '../Card'
class Demo2 extends Component {
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
        title="多字段查询_en"
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
                alert("您选择的是_en"+JSON.stringify(values))
              });
            }}
          >
            提交_en
          </Button>
        }
      >
        <div className="demo-label">
          <span >多选（人员）：_en</span>
          <PapRefStaff
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            lang={this.props.lang}
            emptyBut={true}
            miniSearch={false}
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
      </Card>
    )
  }
};

`
class Demo2 extends Component {
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
        title="多字段查询_en"
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
                alert("您选择的是_en"+JSON.stringify(values))
              });
            }}
          >
            提交_en
          </Button>
        }
      >
        <div className="demo-label">
          <span >多选（人员）：_en</span>
          <PapRefStaff
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            lang={this.props.lang}
            emptyBut={true}
            miniSearch={false}
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
      </Card>
    )
  }
};

export default Form.createForm()(Demo2);


