/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import PapRefStaff from 'pap-refer/lib/pap-ref-staff/src/index';
// import 'pap-refer/lib/pap-ref-staff.css';
import { Button, Form, FormControl } from 'tinper-bee';
import Card from '../Card'
let code =
 `
import React, { Component } from 'react';
import PapRefStaff from 'pap-refer/lib/pap-ref-staff';
import 'pap-refer/lib/pap-ref-staff.css';
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
        title={this.props.intl.formatMessage({id:"js.Ref.Ref12.0001", defaultMessage:"提取参照详细数据"})}
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
                alert(this.props.intl.formatMessage({id:"js.Ref.Ref12.0002", defaultMessage:"您选择的是"})+JSON.stringify(values))
              });
            }}
          >
            <FormattedMessage id="js.Ref.Ref12.0003" defaultMessage="提交" />
                            </Button>
        }
      >
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref12.0004" defaultMessage="人员参照：" /></span>
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
            searchPanelLocale={{'title': this.props.intl.formatMessage({id:"js.Ref.Ref224.0008", defaultMessage:"条件筛选"}),
            'resetName': this.props.intl.formatMessage({id:"js.Ref.Ref224.0009", defaultMessage:"重置"}),
            'searchName': this.props.intl.formatMessage({id:"js.Ref.Ref224.0010", defaultMessage:"查询"}),
            'down':this.props.intl.formatMessage({id:"js.Ref.Ref224.0011", defaultMessage:"打开"}),
            'up':this.props.intl.formatMessage({id:"js.Ref.Ref224.0012", defaultMessage:"关闭"}),
          }}
            {...getFieldProps('code1', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref12.0005" defaultMessage="提示：请选择" />,
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
          <span ><FormattedMessage id="js.Ref.Ref12.0006" defaultMessage="人员名称：" /></span>
          <FormControl
            style={{
              width: 200
            }}
            value={name}
          />
        </div>
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref12.0007" defaultMessage="人员邮箱：" /></span>
          <FormControl
            style={{
              width: 200
            }}
            value={email}
          />
        </div>
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref12.0008" defaultMessage="人员电话：" /></span>
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
        title={this.props.intl.formatMessage({id:"js.Ref.Ref12.0001", defaultMessage:"提取参照详细数据"})}
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
                alert(this.props.intl.formatMessage({id:"js.Ref.Ref12.0002", defaultMessage:"您选择的是"})+JSON.stringify(values))
              });
            }}
          >
            <FormattedMessage id="js.Ref.Ref12.0003" defaultMessage="提交" />
                            </Button>
        }
      >
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref12.0004" defaultMessage="人员参照：" /></span>
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
            searchPanelLocale={{'title': this.props.intl.formatMessage({id:"js.Ref.Ref224.0008", defaultMessage:"条件筛选"}),
            'resetName': this.props.intl.formatMessage({id:"js.Ref.Ref224.0009", defaultMessage:"重置"}),
            'searchName': this.props.intl.formatMessage({id:"js.Ref.Ref224.0010", defaultMessage:"查询"}),
            'down':this.props.intl.formatMessage({id:"js.Ref.Ref224.0011", defaultMessage:"打开"}),
            'up':this.props.intl.formatMessage({id:"js.Ref.Ref224.0012", defaultMessage:"关闭"}),
          }}
            {...getFieldProps('code1', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref12.0005" defaultMessage="提示：请选择" />,
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
          <span ><FormattedMessage id="js.Ref.Ref12.0006" defaultMessage="人员名称：" /></span>
          <FormControl
            style={{
              width: 200
            }}
            value={name}
          />
        </div>
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref12.0007" defaultMessage="人员邮箱：" /></span>
          <FormControl
            style={{
              width: 200
            }}
            value={email}
          />
        </div>
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref12.0008" defaultMessage="人员电话：" /></span>
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


