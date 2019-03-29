/**
 *
 * @title ref-tree 参照_tw-树形_tw
 * @description 具有单选多选的树形参照_tw
 *
 */

import React, { Component } from 'react';
import PapReferOrg from 'pap-refer/lib/pap-ref-org';
import 'pap-refer/lib/pap-ref-org.css';
import PapReferDeptUnderOrg from 'pap-refer/lib/pap-ref-deptUnderOrg';
import 'pap-refer/lib/pap-ref-deptUnderOrg.css';
import { Button, Form, Message } from 'tinper-bee';
import Card from '../Card'
let code =
`

import React, { Component } from 'react';
import PapReferOrg from 'pap-refer/lib/pap-ref-org';
import 'pap-refer/lib/pap-ref-org.css';
import PapReferDeptUnderOrg from 'pap-refer/lib/pap-ref-deptUnderOrg';
import 'pap-refer/lib/pap-ref-deptUnderOrg.css';
import { Button, Form, Message } from 'tinper-bee';
import Card from '../Card'
class Demo3 extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      sum: 1,
      singleClientParam: {},
      messageShow: false,
      jiLianValue: {
        refname: "",
        refpk: "",
      },
    }

  }

  singleSaveOrgParam = (result) => {
    //组织单选的保存，级联参照
    this.setState({
      jiLianValue: Object.assign({}, { "refname": "", "refpk": this.state.sum+'' }),//更换完清空级联的数据
      sum: ++this.state.sum,
      singleClientParam: result.length === 0 ? {} : { 'organization_id': result[0].refpk },
    });

  }
  canGetData = () => {
    if (Object.keys(this.state.singleClientParam).length === 0) {
      // alert('请先选择部门')
      Message.create({ content: '请先选择部门_tw', color: 'danger', duration: 0.5 });
      return false;
    }
    return true;
  }
  render() {

    const { getFieldProps, getFieldError } = this.props.form;
    let { singleClientParam, jiLianValue } = this.state;
    const clientParam = { "isUseDataPower": "true" };
    singleClientParam = Object.assign({}, clientParam, singleClientParam)
    return (
      <Card
        title="级联参照：组织不选，部门不可选，有提示_tw"
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
                alert("您选择的是_tw" + JSON.stringify(values));
              });
            }}
          >
            提交_tw
          </Button>
        }
      >
        <div className="demo-label">
          <span >单选（组织）：_tw</span>
          <PapReferOrg
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            lang={this.props.lang}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择组织_tw',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            onSave={this.singleSaveOrgParam}
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
          <span >级联（部门）：_tw</span>
          <PapReferDeptUnderOrg
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            param={{
              "refCode": "newdeptUnderOrg_trees",
              "clientParam": Object.keys(singleClientParam).length === 0 ? '' : singleClientParam

            }}
            lang={this.props.lang}
            {...getFieldProps('code1', {
              initialValue: JSON.stringify(jiLianValue),
              rules: [{
                message: '提示：请选择部门_tw',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            canInputGoOn={this.canGetData}
            canClickGoOn={this.canGetData}
            value={JSON.stringify(jiLianValue)}
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
class Demo3 extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      sum: 1,
      singleClientParam: {},
      messageShow: false,
      jiLianValue: {
        refname: "",
        refpk: "",
      },
    }

  }

  singleSaveOrgParam = (result) => {
    //组织单选的保存，级联参照
    this.setState({
      jiLianValue: Object.assign({}, { "refname": "", "refpk": this.state.sum+'' }),//更换完清空级联的数据
      sum: ++this.state.sum,
      singleClientParam: result.length === 0 ? {} : { 'organization_id': result[0].refpk },
    });

  }
  canGetData = () => {
    if (Object.keys(this.state.singleClientParam).length === 0) {
      // alert('请先选择部门')
      Message.create({ content: '请先选择部门_tw', color: 'danger', duration: 0.5 });
      return false;
    }
    return true;
  }
  render() {

    const { getFieldProps, getFieldError } = this.props.form;
    let { singleClientParam, jiLianValue } = this.state;
    const clientParam = { "isUseDataPower": "true" };
    singleClientParam = Object.assign({}, clientParam, singleClientParam)
    return (
      <Card
        title="级联参照：组织不选，部门不可选，有提示_tw"
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
                alert("您选择的是_tw" + JSON.stringify(values));
              });
            }}
          >
            提交_tw
          </Button>
        }
      >
        <div className="demo-label">
          <span >单选（组织）：_tw</span>
          <PapReferOrg
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            lang={this.props.lang}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择组织_tw',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            onSave={this.singleSaveOrgParam}
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
          <span >级联（部门）：_tw</span>
          <PapReferDeptUnderOrg
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            param={{
              "refCode": "newdeptUnderOrg_trees",
              "clientParam": Object.keys(singleClientParam).length === 0 ? '' : singleClientParam

            }}
            lang={this.props.lang}
            {...getFieldProps('code1', {
              initialValue: JSON.stringify(jiLianValue),
              rules: [{
                message: '提示：请选择部门_tw',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            canInputGoOn={this.canGetData}
            canClickGoOn={this.canGetData}
            value={JSON.stringify(jiLianValue)}
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
