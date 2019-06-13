/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import React, { Component } from 'react';
import PapRefStaff from 'pap-refer/lib/pap-ref-staff/src/index';
import { Button, Form, FormControl } from 'tinper-bee';
import Card from '../Card'
let code =
 `
import React, { Component } from 'react';
import PapRefStaff from 'pap-refer/lib/pap-ref-staff/src/index';
import { Button, Form, FormControl } from 'tinper-bee';
import Card from '../Card'
 class Demo3 extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      name: '',
      email: '',
      mobile: ''
    }

  }
  render() {

    const { getFieldProps, getFieldError } = this.props.form;
    const { style } = this.props;
    let {
      name,
      email,
      mobile,
    } = this.state;
    return (
      <Card
        style={style}
        title="提取参照详细数据"
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
          <span >人员参照：</span>
          <PapRefStaff
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme}
            emptyBut={true}
            searchPanelLocale={{'title': '条件筛选','resetName': '重置','searchName': '查询','down':'打开','up':'关闭',}}

            {...getFieldProps('code1', {
              //initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            onSave={(record) => {
              console.log(record)
              let item = record[0]
              if (!item) return;
              this.setState({
                name: item.name,
                email: item.email,
                mobile: item.mobile
              })
            }}
          />

          <span style={{
            color: 'red'
          }}>
            {
              getFieldError('code1')
            }
          </span>
        </div>
        <div className="demo-label">
          <span >人员名称：</span>
          <FormControl
            style={{
              width: 200
            }}
            value={name}
          />
        </div>
        <div className="demo-label">
          <span >人员邮箱：</span>
          <FormControl
            style={{
              width: 200
            }}
            value={email}
          />
        </div>
        <div className="demo-label">
          <span >人员电话：</span>
          <FormControl
            style={{
              width: 200
            }}
            value={mobile}
          />
        </div>
      </Card>
    )
  }
};
 `
class Demo3 extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      name: '',
      email: '',
      mobile: ''
    }

  }
  render() {

    const { getFieldProps, getFieldError } = this.props.form;
    const { style } = this.props;
    let {
      name,
      email,
      mobile,
    } = this.state;
    return (
      <Card
        style={style}
        title="提取参照详细数据"
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
          <span >人员参照：</span>
          <PapRefStaff
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme}
            emptyBut={true}
            searchPanelLocale={{'title': '条件筛选','resetName': '重置','searchName': '查询','down':'打开','up':'关闭',}}

            {...getFieldProps('code1', {
              //initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            onSave={(record) => {
              console.log(record)
              let item = record[0]
              if (!item) return;
              this.setState({
                name: item.name,
                email: item.email,
                mobile: item.mobile
              })
            }}
          />

          <span style={{
            color: 'red'
          }}>
            {
              getFieldError('code1')
            }
          </span>
        </div>
        <div className="demo-label">
          <span >人员名称：</span>
          <FormControl
            style={{
              width: 200
            }}
            value={name}
          />
        </div>
        <div className="demo-label">
          <span >人员邮箱：</span>
          <FormControl
            style={{
              width: 200
            }}
            value={email}
          />
        </div>
        <div className="demo-label">
          <span >人员电话：</span>
          <FormControl
            style={{
              width: 200
            }}
            value={mobile}
          />
        </div>
      </Card>
    )
  }
};

export default Form.createForm()(Demo3);


