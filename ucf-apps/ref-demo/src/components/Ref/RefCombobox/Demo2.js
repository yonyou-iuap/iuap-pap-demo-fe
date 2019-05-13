/**
 *
 * @title combobox参照组件
 * @description 应用组件描述
 *
 */

import React, { Component } from 'react';
import RefComboBox,{ComboStore } from 'pap-refer/lib/pap-common-combobox/src/index';
// import 'pap-refer/lib/ref-combobox.css';
// import Button from 'bee-button';
// import Icon from 'bee-icon';
// import Form from "bee-form";
import { Button, Icon, Form } from 'tinper-bee';
import Card from '../Card'
let code = 
`
import React, { Component } from 'react';
import RefComboBox,{ComboStore } from 'pap-refer/lib/ref-combobox/src/index';
// import 'pap-refer/lib/ref-combobox.css';
// import Button from 'bee-button';
// import Icon from 'bee-icon';
// import Form from "bee-form";
import { Button, Icon, Form } from 'tinper-bee';
import Card from '../Card'
class Demo2 extends Component {
  render() {

    const { getFieldError, getFieldProps } = this.props.form;
    return (
      <Card
        title="特殊样式示例"
        codeText={code}
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
            className="ref-walsin-modal"
            {...getFieldProps('combobox', {
              // initialValue:'{"refpk":"level1","refname":"初级"}',  //M0000000000002
              rules: [{
                message: '提示：请选择',
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
              topPagination={true}
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
            提交
                </Button>
        </div>

      </Card>
    )
  }
}


export default Form.createForm()(Demo2);
`
class Demo2 extends Component {
  render() {

    const { getFieldError, getFieldProps } = this.props.form;
    return (
      <Card
        title="特殊样式示例"
        codeText={code}
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
            className="ref-walsin-modal"
            {...getFieldProps('combobox', {
              // initialValue:'{"refpk":"level1","refname":"初级"}',  //M0000000000002
              rules: [{
                message: '提示：请选择',
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
              topPagination={true}
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
            提交
                </Button>
        </div>

      </Card>
    )
  }
}


export default Form.createForm()(Demo2);
