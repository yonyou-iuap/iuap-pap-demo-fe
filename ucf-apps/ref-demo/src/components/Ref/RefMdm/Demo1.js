/**
 *
 * @title refmdm参照组件
 * @description 应用组件描述
 *
 */

import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import RefMdmComp from "components/RefMdmComp"
import { Button, Form, FormControl} from 'tinper-bee';
import Card from '../Card'
let code = `
import React, { Component } from 'react';
import RefMdmComp from "components/RefMdmComp"
import { Button, Form, FormControl} from 'tinper-bee';
import Card from '../Card'
>>>>>>> master
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
        title={this.props.intl.formatMessage({id:"js.Ref.Ref24.0003", defaultMessage:"基础示例"})}
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
            确定
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
            提交
                            </Button>
          </div>
        }
      >
        <div className="demo-label">
          <span >字段编码：</span>
          <FormControl
            style={{
              width: 200
            }}
            onChange={this.onEntityItemCodeChange}
          />
        </div>
        <div className="demo-label">
          <span >实体编码：</span>
          <FormControl
            style={{
              width: 200
            }}
            onChange={this.onEntityCodeChange}
          />
        </div>

        <div className="demo-label">
          <span >自定义参照：</span>
          <div style={{
              width: 200,
              display: 'inline-block'
            }}>
            <RefMdmComp
              entityItemCode={refEntityItemCode}
              entityCode={refEntityCode}
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
        title="基础示例"
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
            确定
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
          <span >实体编码：</span>
          <FormControl
            style={{
              width: 200
            }}
            onChange={this.onEntityCodeChange}
          />
        </div>
        <div className="demo-label">
          <span >字段编码：</span>
          <FormControl
            style={{
              width: 200
            }}
            onChange={this.onEntityItemCodeChange}
          />
        </div>

        <div className="demo-label">
          <span >自定义参照：</span>
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
                  message: '提示：请选择',
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
