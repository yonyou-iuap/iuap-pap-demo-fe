/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import PapReferOrg from 'pap-refer/lib/pap-ref-org';
import 'pap-refer/lib/pap-ref-org.css';
import PapReferDeptUnderOrg from 'pap-refer/lib/pap-ref-deptUnderOrg';
import 'pap-refer/lib/pap-ref-deptUnderOrg.css';
import {Button,Form} from 'tinper-bee';
import Card from '../Card'
let code =
`
import React, { Component } from 'react';
import PapReferOrg from 'pap-refer/lib/pap-ref-org';
import 'pap-refer/lib/pap-ref-org.css';
import PapReferDeptUnderOrg from 'pap-refer/lib/pap-ref-deptUnderOrg';
import 'pap-refer/lib/pap-ref-deptUnderOrg.css';
import {Button,Form} from 'tinper-bee';
import Card from '../Card'
class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      multiClientParam: {},
    }

  }

  multiSave = (result) => {
    let arr = [];
    result.forEach(item => {
      item && arr.push(item.refpk);
    })
    this.setState({
      multiClientParam: arr.length === 0 ? {} : { 'organization_id': arr.toString() }
    })

  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    let { multiClientParam } = this.state;
    const clientParam = { "isUseDataPower": "true" };
    multiClientParam = Object.assign({}, clientParam, multiClientParam)
    return (
      <Card
        title={this.props.intl.formatMessage({id:"js.Ref.Ref15.0001", defaultMessage:"多选级联参照：组织-部门"})}
        codeText={code}
        intl={this.props.intl}
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
                alert(this.props.intl.formatMessage({id:"js.Ref.Ref15.0002", defaultMessage:"您选择的是"})+JSON.stringify(values))
              });
            }}
          >
            <FormattedMessage id="js.Ref.Ref15.0003" defaultMessage="提交" />
          </Button>
        }
      >
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref15.0004" defaultMessage="多选（组织）：" /></span>
          <PapReferOrg
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref15.0005" defaultMessage="提示：请选择组织" />,
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            onSave={this.multiSave}
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
          <span ><FormattedMessage id="js.Ref.Ref15.0006" defaultMessage="级联（部门）：" /></span>
          <PapReferDeptUnderOrg
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            param={{
              "refCode": "newdeptUnderOrg_treem",
              "clientParam": Object.keys(multiClientParam).length === 0 ? '' : multiClientParam
            }}
           lang={this.props.lang}
            theme={this.props.theme}
            {...getFieldProps('code1', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref15.0007" defaultMessage="提示：请选择部门" />,
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

export default Form.createForm()(Demo1);

`
class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      multiClientParam: {},
    }

  }

  multiSave = (result) => {
    let arr = [];
    result.forEach(item => {
      item && arr.push(item.refpk);
    })
    this.setState({
      multiClientParam: arr.length === 0 ? {} : { 'organization_id': arr.toString() }
    })

  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    let { multiClientParam } = this.state;
    const clientParam = { "isUseDataPower": "true" };
    multiClientParam = Object.assign({}, clientParam, multiClientParam)
    return (
      <Card
        title={this.props.intl.formatMessage({id:"js.Ref.Ref15.0001", defaultMessage:"多选级联参照：组织-部门"})}
        codeText={code}
        intl={this.props.intl}
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
                alert(this.props.intl.formatMessage({id:"js.Ref.Ref15.0002", defaultMessage:"您选择的是"})+JSON.stringify(values))
              });
            }}
          >
            <FormattedMessage id="js.Ref.Ref15.0003" defaultMessage="提交" />
          </Button>
        }
      >
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref15.0004" defaultMessage="多选（组织）：" /></span>
          <PapReferOrg
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref15.0005" defaultMessage="提示：请选择组织" />,
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            onSave={this.multiSave}
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
          <span ><FormattedMessage id="js.Ref.Ref15.0006" defaultMessage="级联（部门）：" /></span>
          <PapReferDeptUnderOrg
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            param={{
              "refCode": "newdeptUnderOrg_treem",
              "clientParam": Object.keys(multiClientParam).length === 0 ? '' : multiClientParam
            }}
           lang={this.props.lang}
            theme={this.props.theme}
            {...getFieldProps('code1', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref15.0007" defaultMessage="提示：请选择部门" />,
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

export default Form.createForm()(Demo1);