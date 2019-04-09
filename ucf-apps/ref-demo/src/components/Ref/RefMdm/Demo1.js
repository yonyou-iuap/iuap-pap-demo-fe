/**
 *
 * @title refmdm参照组件
 * @description 应用组件描述
 *
 */

import { FormattedMessage } from 'react-intl';
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
      pk_entityitem='4b72c5cd-c301-48cc-9f77-2d44c36d9651'
      pk_gd='39d7075c-4a45-489d-b309-a1a1a35dea8d'
      {...getFieldProps('refmdm', {
        rules: [{
          message: <FormattedMessage id="js.Ref.Ref24.0001" defaultMessage="提示：请选择" />,
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
    <FormattedMessage id="js.Ref.Ref24.0002" defaultMessage="提交" />
        </Button>
</div>        
`
class Demo1 extends Component {
  render() {

    const { getFieldError, getFieldProps } = this.props.form;
    return (
      <Card
        title={this.props.intl.formatMessage({id:"js.Ref.Ref24.0003", defaultMessage:"基础示例"})}
        codeText={code}
        intl={this.props.intl}
      >
        <div className="demoPadding">
          <div style={{ display: 'inline-block' }}>
            <RefMdmComp
              pk_entityitem='4b72c5cd-c301-48cc-9f77-2d44c36d9651'
              pk_gd='39d7075c-4a45-489d-b309-a1a1a35dea8d'
              {...getFieldProps('refmdm', {
                rules: [{
                  message: <FormattedMessage id="js.Ref.Ref24.0001" defaultMessage="提示：请选择" />,
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
            <FormattedMessage id="js.Ref.Ref24.0002" defaultMessage="提交" />
                </Button>
        </div>

      </Card>
    )
  }
}


export default Form.createForm()(Demo1);
