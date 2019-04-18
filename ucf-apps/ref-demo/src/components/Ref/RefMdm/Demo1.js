/**
 *
 * @title refmdm参照组件
 * @description 应用组件描述
 *
 */

import { FormattedMessage, } from 'react-intl';
import React, { Component } from 'react';
import RefMdmComp from "components/RefMdmComp"
import { Button, Form, FormControl} from 'tinper-bee';
import Card from '../Card'
let code = `
import React, { Component } from 'react';
import RefMdmComp from "components/RefMdmComp"
import { Button, Form, FormControl} from 'tinper-bee';
import Card from '../Card'
class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      entityItemCode: '',
      entityCode: '',
      refEntityItemCode: '',
      refEntityCode: ''
    }
  }

  onEntityItemCodeChange = (value) => {
    this.setState({entityItemCode: value});
  }
  onEntityCodeChange = (value) => {
    this.setState({entityCode: value});
  }

  render() {
    const { getFieldError, getFieldProps } = this.props.form;
    let {
      entityItemCode,
      entityCode,
      refEntityItemCode,
      refEntityCode
    } = this.state;
    return (
      <Card
        title={this.props.intl.formatMessage({id:"js.Ref.Ref7.0001", defaultMessage:"基础示例"})}
        codeText={code}
        intl={this.props.intl}
        footer={
          <div>
          <Button colors="primary"
            style={{
              margin: 'auto 5px',
              height: '30px',
              padding: '0px'
            }}
            onClick={() => {
              this.setState({
                refEntityItemCode:entityItemCode,
                refEntityCode:entityCode
              })
              this.forceUpdate()
            }}
          >
            <FormattedMessage id="js.com.Eme.0005" defaultMessage="确定" />
                            </Button>
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
            <FormattedMessage id="js.Ref.Ref24.0002" defaultMessage="提交" />
          </Button>
          </div>
        }
      >
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref224.0005" defaultMessage="实体编码：" /></span>
          <FormControl
            style={{
              width: 200
            }}
            onChange={this.onEntityCodeChange}
          />
        </div>
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref224.0006" defaultMessage="字段编码：" /></span>
          <FormControl
            style={{
              width: 200
            }}
            onChange={this.onEntityItemCodeChange}
          />
        </div>

        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref224.0007" defaultMessage="自定义参照：" /></span>
          <div style={{
              width: 200,
              display: 'inline-block'
            }}>
            <RefMdmComp
              // pk_entityitem='4b72c5cd-c301-48cc-9f77-2d44c36d9651'
              // pk_gd='39d7075c-4a45-489d-b309-a1a1a35dea8d'
              entityItemCode={refEntityItemCode}
              entityCode={refEntityCode}
              {...getFieldProps('refmdm', {
                rules: [{
                  message: <FormattedMessage id="js.Ref.Ref20.0008" defaultMessage="提示：请选择" />,
                  pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                }]
              })}
            />
          </div>
          <span style={{ color: 'red' }}>
            {getFieldError('refmdm')}
          </span>
        </div>
      </Card>
    )
  }
}
`
class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      entityItemCode: '',
      entityCode: '',
      refEntityItemCode: '',
      refEntityCode: ''
    }
  }

  onEntityItemCodeChange = (value) => {
    this.setState({entityItemCode: value});
  }
  onEntityCodeChange = (value) => {
    this.setState({entityCode: value});
  }

  render() {
    const { getFieldError, getFieldProps } = this.props.form;
    let {
      entityItemCode,
      entityCode,
      refEntityItemCode,
      refEntityCode
    } = this.state;
    return (
      <Card
        title={this.props.intl.formatMessage({id:"js.Ref.Ref7.0001", defaultMessage:"基础示例"})}
        codeText={code}
        intl={this.props.intl}
        footer={
          <div>
          <Button colors="primary"
            style={{
              margin: 'auto 5px',
              height: '30px',
              padding: '0px'
            }}
            onClick={() => {
              this.props.form.validateFields(async (err, values) => {
                if(err) {
                  return
                }
                this.setState({
                  refEntityItemCode:values.entityItemCode,
                  refEntityCode:values.entityCode
                })
                this.forceUpdate()
              });
            }}
          >
            <FormattedMessage id="js.com.Eme.0005" defaultMessage="确定" />
                            </Button>
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
            <FormattedMessage id="js.Ref.Ref24.0002" defaultMessage="提交" />
          </Button>
          </div>
        }
      >
        <div className="demo-label-require">
          <div className="labelDiv">
      <span className='label' title={this.props.intl.formatMessage({id: 'js.Ref.Ref224.0005',defaultMessage:"实体编码："})}><FormattedMessage id="js.Ref.Ref224.0005" defaultMessage="实体编码：" /></span>
            <span className='mast'>*</span>
          </div>
          <FormControl
            style={{
              width: 200
            }}
            onChange={this.onEntityCodeChange}
            {...getFieldProps('entityCode', {
              validateTrigger: 'onBlur',
              rules: [{
                  required: true,
                  message: <FormattedMessage id="js.Ref.Cus.0001" defaultMessage="请输入实体编码"/>,
              }],
          }) }
          />
          <span className='error'>
            {getFieldError('entityCode')}
          </span>
        </div>
        <div className="demo-label-require">
          <div className="labelDiv">
            <span className='label' title={this.props.intl.formatMessage({id: 'js.Ref.Ref224.0006',defaultMessage:"字段编码："})}><FormattedMessage id="js.Ref.Ref224.0006" defaultMessage="字段编码：" /></span>
            <span className='mast'>*</span>
          </div>
          <FormControl
            style={{
              width: 200
            }}
            onChange={this.onEntityItemCodeChange}
            {...getFieldProps('entityItemCode', {
              validateTrigger: 'onBlur',
              rules: [{
                  required: true,
                  message: <FormattedMessage id="js.Ref.Cus.0002" defaultMessage="请输入字段编码"/>,
              }],
          }) }
          />
          <span className='error'>
            {getFieldError('entityItemCode')}
          </span>
        </div>

        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref224.0007" defaultMessage="自定义参照：" /></span>
          <div style={{
              width: 200,
              display: 'inline-block'
            }}>
            <RefMdmComp
              // pk_entityitem='4b72c5cd-c301-48cc-9f77-2d44c36d9651'
              // pk_gd='39d7075c-4a45-489d-b309-a1a1a35dea8d'
              entityItemCode={refEntityItemCode}
              entityCode={refEntityCode}
              {...getFieldProps('refmdm', {
                rules: [{
                  message: <FormattedMessage id="js.Ref.Ref20.0008" defaultMessage="提示：请选择" />,
                  pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                }]
              })}
            />
          </div>
          <span style={{ color: 'red' }}>
            {getFieldError('refmdm')}
          </span>
        </div>
      </Card>
    )
  }
}


export default Form.createForm()(Demo1);
