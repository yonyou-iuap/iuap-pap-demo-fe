/**
 *
 * @title refmdm参照组件
 * @description 应用组件描述
 *
 */

import React, { Component } from 'react';
import RefMdmComp from "components/RefMdmComp"
// import Button from 'bee-button';
// import Icon from 'bee-icon';
// import Form from "bee-form";
import { Button, Form } from 'tinper-bee';
import Card from '../Card'
let code = `
<div className="demoPadding">
  <div style={{ display: 'inline-block' }}>
    <RefMdmComp
      pk_entityitem='69a6c7f6-1247-474b-b361-2f100dc5fa98'
      pk_gd='a6affd99-191a-452f-91ad-bf2d5755e731'
      {...getFieldProps('refmdm', {
        rules: [{
          message: '提示：请选择',
          pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
        }]
      })}
    />
  </div>
  <span style={{ color: 'red' }}>
    {getFieldError('refmdm')}
  </span>
  <Button
    colors="primary"
    onClick={() => {
      this.props.form.validateFields((err, values) => {
        console.log(err, values)
      });
    }}>
    提交
        </Button>
</div>        
`
class Demo1 extends Component {
  render() {

    const { getFieldError, getFieldProps } = this.props.form;
    return (
      <Card
        title="基础示例"
        codeText={code}
      >
        <div className="demoPadding">
          <div style={{ display: 'inline-block' }}>
            <RefMdmComp
              pk_entityitem='69a6c7f6-1247-474b-b361-2f100dc5fa98'
              pk_gd='a6affd99-191a-452f-91ad-bf2d5755e731'
              {...getFieldProps('refmdm', {
                rules: [{
                  message: '提示：请选择',
                  pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                }]
              })}
            />
          </div>
          <span style={{ color: 'red' }}>
            {getFieldError('refmdm')}
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
                console.log(err, values)
              });
            }}>
            提交
                </Button>
        </div>

      </Card>
    )
  }
}


export default Form.createForm()(Demo1);
