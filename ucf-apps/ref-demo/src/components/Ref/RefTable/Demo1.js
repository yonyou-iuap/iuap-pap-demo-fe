/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import PapRefUser from 'pap-refer/lib/pap-ref-user/src/index';
// import 'pap-refer/lib/pap-ref-user.css';
import PapRefStaff from 'pap-refer/lib/pap-ref-staff/src/index';
// import 'pap-refer/lib/pap-ref-staff.css';
import { Button, Form } from 'tinper-bee';
import Card from '../Card'
let code =
`
import React, { Component } from 'react';
import PapRefUser from 'pap-refer/lib/pap-ref-user';
import 'pap-refer/lib/pap-ref-user.css';
import PapRefStaff from 'pap-refer/lib/pap-ref-staff';
import 'pap-refer/lib/pap-ref-staff.css';
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
        title={this.props.intl.formatMessage({id:"js.Ref.Ref14.0001", defaultMessage:"基础示例"})}
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
                alert(this.props.intl.formatMessage({id:"js.Ref.Ref14.0002", defaultMessage:"您选择的是"}) + JSON.stringify(values))
              });
            }}
          >
            <FormattedMessage id="js.Ref.Ref14.0003" defaultMessage="提交" />
          </Button>
        }
      >
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref14.0004" defaultMessage="单选（用户）：" /></span>
          <PapRefUser
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            lang={this.props.lang}
            theme={this.props.theme}
            searchPanelLocale={{'title': this.props.intl.formatMessage({id:"js.Ref.Ref224.0008", defaultMessage:"条件筛选"}),
            'resetName': this.props.intl.formatMessage({id:"js.Ref.Ref224.0009", defaultMessage:"重置"}),
            'searchName': this.props.intl.formatMessage({id:"js.Ref.Ref224.0010", defaultMessage:"查询"}),
            'down':this.props.intl.formatMessage({id:"js.Ref.Ref224.0011", defaultMessage:"打开"}),
            'up':this.props.intl.formatMessage({id:"js.Ref.Ref224.0012", defaultMessage:"关闭"}),
          }}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref14.0005" defaultMessage="提示：请选择" />,
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            emptyBut={true}

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
          <span ><FormattedMessage id="js.Ref.Ref14.0006" defaultMessage="多选（人员）：" /></span>
          <PapRefStaff
            multiple={true}
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
          }}            {...getFieldProps('code1', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref14.0005" defaultMessage="提示：请选择" />,
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
        title={this.props.intl.formatMessage({id:"js.Ref.Ref14.0001", defaultMessage:"基础示例"})}
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
                alert(this.props.intl.formatMessage({id:"js.Ref.Ref14.0002", defaultMessage:"您选择的是"}) + JSON.stringify(values))
              });
            }}
          >
            <FormattedMessage id="js.Ref.Ref14.0003" defaultMessage="提交" />
          </Button>
        }
      >
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref14.0004" defaultMessage="单选（用户）：" /></span>
          <PapRefUser
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme}
            searchPanelLocale={{'title': this.props.intl.formatMessage({id:"js.Ref.Ref224.0008", defaultMessage:"条件筛选"}),
            'resetName': this.props.intl.formatMessage({id:"js.Ref.Ref224.0009", defaultMessage:"重置"}),
            'searchName': this.props.intl.formatMessage({id:"js.Ref.Ref224.0010", defaultMessage:"查询"}),
            'down':this.props.intl.formatMessage({id:"js.Ref.Ref224.0011", defaultMessage:"打开"}),
            'up':this.props.intl.formatMessage({id:"js.Ref.Ref224.0012", defaultMessage:"关闭"}),
          }}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref14.0005" defaultMessage="提示：请选择" />,
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            emptyBut={true}

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
          <span ><FormattedMessage id="js.Ref.Ref14.0006" defaultMessage="多选（人员）：" /></span>
          <PapRefStaff
            multiple={true}
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
          }}            {...getFieldProps('code1', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref14.0005" defaultMessage="提示：请选择" />,
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


