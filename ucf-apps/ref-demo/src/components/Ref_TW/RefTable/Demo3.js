/**
 *
 * @title ref-tree 参照_tw-树形_tw
 * @description 具有单选多选的树形参照_tw
 *
 */

import React, { Component } from 'react';
import PapRefStaff from 'pap-refer/lib/pap-ref-staff';
import 'pap-refer/lib/pap-ref-staff.css';
import { Button, Form, FormControl } from 'tinper-bee';
import Card from '../Card'
let code =
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
        title="提取参照详细数据_tw"
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
              });
            }}
          >
            提交_tw
                            </Button>
        }
      >
        <div className="demo-label">
          <span >人员参照：_tw</span>
          <PapRefStaff
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
          <span >人员名称：_tw</span>
          <FormControl
            style={{
              width: 200
            }}
            value={name}
          />
        </div>
        <div className="demo-label">
          <span >人员邮箱：_tw</span>
          <FormControl
            style={{
              width: 200
            }}
            value={email}
          />
        </div>
        <div className="demo-label">
          <span >人员电话：_tw</span>
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
        title="提取参照详细数据_tw"
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
              });
            }}
          >
            提交_tw
                            </Button>
        }
      >
        <div className="demo-label">
          <span >人员参照：_tw</span>
          <PapRefStaff
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
          <span >人员名称：_tw</span>
          <FormControl
            style={{
              width: 200
            }}
            value={name}
          />
        </div>
        <div className="demo-label">
          <span >人员邮箱：_tw</span>
          <FormControl
            style={{
              width: 200
            }}
            value={email}
          />
        </div>
        <div className="demo-label">
          <span >人员电话：_tw</span>
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


