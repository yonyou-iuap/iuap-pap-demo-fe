/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import React, { Component } from 'react';
import { Button, Form } from 'tinper-bee';
import PapRefStaff from 'pap-refer/lib/pap-ref-staff/src/index';
import Card from '../Card'
let code =
`
import React, { Component } from 'react';
import { Button, Form } from 'tinper-bee';
import PapRefStaff from 'pap-refer/lib/pap-ref-staff/src/index';
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
        title="多字段查询"
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
          <span >多选（人员）：</span>
          <PapRefStaff
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
           lang={this.props.lang}
            theme={this.props.theme}
            emptyBut={true}
            miniSearch={false}
            displayField='{refname}'
            valueField='refpk'
            searchPanelLocale={{'title': '条件筛选','resetName': '重置','searchName': '查询','down':'打开','up':'关闭',}}

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
        title="多字段查询"
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
          <span >多选（人员）：</span>
          <PapRefStaff
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
           lang={this.props.lang}
            theme={this.props.theme}
            emptyBut={true}
            miniSearch={false}
            displayField='{refname}'
            valueField='refpk'
            searchPanelLocale={{'title': '条件筛选','resetName': '重置','searchName': '查询','down':'打开','up':'关闭',}}

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

export default Form.createForm()(Demo2);


