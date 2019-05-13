/**
 *
 * @title combobox参照组件
 * @description 应用组件描述
 *
 */

import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import RefComboBox,{ ComboStore } from 'pap-refer/lib/pap-common-combobox/src/index';
// import 'pap-refer/lib/ref-combobox.css';
// import Button from 'bee-button';
// import Icon from 'bee-icon';
// import Form from "bee-form";
import { Button, Icon, Form } from 'tinper-bee';
import Card from '../Card'
let code = 
`
import React, { Component } from 'react';
import RefComboBox,{ ComboStore } from 'pap-refer/lib/pap-common-combobox/src/index';
// import 'pap-refer/lib/ref-combobox.css';
// import Button from 'bee-button';
// import Icon from 'bee-icon';
// import Form from "bee-form";
import { Button, Icon, Form } from 'tinper-bee';
import Card from '../Card'
class Demo1 extends Component {
  render() {

    const { getFieldError, getFieldProps } = this.props.form;
    return (
      <Card
        title={this.props.intl.formatMessage({id:"js.Ref.Ref7.0001", defaultMessage:"基础示例"})}
        codeText={code}
        intl={this.props.intl}
      >
        <div className="demoPadding">
          <RefComboBox
            displayField={'{refname}-{refcode}'}
            valueField={'refcode'}
            onClickItem={(record) => {
              console.log(record)
            }}

            matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
            filterUrl='/pap_basedoc/common-ref/filterRefJSON'
            {...getFieldProps('combobox', {
              // initialValue:'{"refpk":"level1","refname":"初级"}',  //M0000000000002
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref7.0002" defaultMessage="提示：请选择" />,
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
          >
            <ComboStore
              ajax={{
                url: '/pap_basedoc/common-ref/blobRefTreeGrid',
                params: {
                  refCode: 'neworganizition_grid'
                },

              }}
              strictMode={true}
              displayField={(record) => {
                return <div > <Icon type="uf-personin-o" style={{ color: 'red' }} /> {record.refname}-{record.refcode}-{record.type}</div>
              }}
             lang={this.props.lang}
            theme={this.props.theme}
            />
          </RefComboBox>
          <span style={{ color: 'red' }}>
            {getFieldError('combobox')}
          </span>
          <Button
            colors="primary"
            onClick={() => {
              this.props.form.validateFields((err, values) => {
                if(err){
                  alert(""+JSON.stringify(err));
                  return false;
                }
                alert(""+JSON.stringify(values))
              });
            }}>
            <FormattedMessage id="js.Ref.Ref7.0003" defaultMessage="提交" />
          </Button>
        </div>

      </Card>
    )
  }
}


export default Form.createForm()(Demo1);

`
class Demo1 extends Component {
  render() {
    const { getFieldError, getFieldProps } = this.props.form;
    return (
      <Card
        title={this.props.intl.formatMessage({id:"js.Ref.Ref7.0001", defaultMessage:"基础示例"})}
        codeText={code}
        intl={this.props.intl}
      >
        <div className="demoPadding">
          <RefComboBox
            displayField={'{refname}-{refcode}'}
            valueField={'refcode'}
            onClickItem={(record) => {
              console.log(record)
            }}

            matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
            filterUrl='/pap_basedoc/common-ref/filterRefJSON'
            {...getFieldProps('combobox', {
              // initialValue:'{"refpk":"level1","refname":"初级"}',  //M0000000000002
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref7.0002" defaultMessage="提示：请选择" />,
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
          >
            <ComboStore
              ajax={{
                url: '/pap_basedoc/common-ref/blobRefTreeGrid',
                params: {
                  refCode: 'neworganizition_grid'
                },

              }}
              strictMode={true}
              displayField={(record) => {
                return <div > <Icon type="uf-personin-o" style={{ color: 'red' }} /> {record.refname}-{record.refcode}-{record.type}</div>
              }}
             lang={this.props.lang}
            theme={this.props.theme}
            />
          </RefComboBox>
          <span style={{ color: 'red' }}>
            {getFieldError('combobox')}
          </span>
          <Button
            colors="primary"
            onClick={() => {
              this.props.form.validateFields((err, values) => {
                if(err){
                  alert(""+JSON.stringify(err));
                  return false;
                }
                alert(""+JSON.stringify(values))
              });
            }}>
            <FormattedMessage id="js.Ref.Ref7.0003" defaultMessage="提交" />
          </Button>
        </div>

      </Card>
    )
  }
}


export default Form.createForm()(Demo1);
