/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';

import { RefTreeTransferWithInput } from 'pap-refer/dist/index.js';
import "pap-refer/dist/index.css"
import { Button, Form, Panel } from 'tinper-bee';
import Card from '../Card'
let code =
`
import React, { Component } from 'react';

import { RefTreeTransferWithInput } from 'pap-refer/dist/index.js';
import "pap-refer/dist/index.css"
import { Button, Form, Panel } from 'tinper-bee';
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
        title={this.props.intl.formatMessage({id:"js.Ref.Ref23.0001", defaultMessage:"基础示例"})}
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
                alert(this.props.intl.formatMessage({id:"js.Ref.Ref23.0009", defaultMessage:"您选择的是"})+JSON.stringify(values))
              });
            }}
          >
            <FormattedMessage id="js.Ref.Ref23.0003" defaultMessage="提交" />
                          </Button>
        }
      >
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref23.0004" defaultMessage="穿梭框：：" /></span>
          <RefTreeTransferWithInput
            title={this.props.intl.formatMessage({id:"js.Ref.Ref23.0005", defaultMessage:"组织部门人员穿梭"})}
            textOption={{
              leftTitle: this.props.intl.formatMessage({id:"js.Ref.Ref23.0006", defaultMessage:"组织部门树" }),
              rightTitle: this.props.intl.formatMessage({id:"js.Ref.Ref23.0007", defaultMessage:"人员穿梭框"})
            }}
            param={{//url请求参数
              refCode: 'neworgdeptstaff_treegrid',
            }}
            refModelUrl={{
              treeUrl: '/pap_basedoc/common-ref/blobRefTree',
              tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',
              tableBodyUrlSearch: ''
            }}
            displayField='{refname}-{refcode}'
            valueField='refpk'
           lang={this.props.lang}
            theme={this.props.theme}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref23.0008" defaultMessage="提示：请选择" />,
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            emptyBut={false}
          />
          <span style={{
            color: 'red'
          }}>
            {
              getFieldError('code')
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
        value: ''
      }

    }
    render() {

      const { getFieldProps, getFieldError } = this.props.form;
      return (
        <Card
          title={this.props.intl.formatMessage({id:"js.Ref.Ref23.0001", defaultMessage:"基础示例"})}
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
                  alert(this.props.intl.formatMessage({id:"js.Ref.Ref23.0009", defaultMessage:"您选择的是"})+JSON.stringify(values))
                });
              }}
            >
              <FormattedMessage id="js.Ref.Ref23.0003" defaultMessage="提交" />
                            </Button>
          }
        >
          <div className="demo-label">
            <span ><FormattedMessage id="js.Ref.Ref23.0004" defaultMessage="穿梭框：：" /></span>
            <RefTreeTransferWithInput
              title={this.props.intl.formatMessage({id:"js.Ref.Ref23.0005", defaultMessage:"组织部门人员穿梭"})}
              textOption={{
                leftTitle: this.props.intl.formatMessage({id:"js.Ref.Ref23.0006", defaultMessage:"组织部门树" }),
                rightTitle: this.props.intl.formatMessage({id:"js.Ref.Ref23.0007", defaultMessage:"人员穿梭框"})
              }}
              param={{//url请求参数
                refCode: 'neworgdeptstaff_treegrid',
              }}
              refModelUrl={{
                treeUrl: '/pap_basedoc/common-ref/blobRefTree',
                tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',
                tableBodyUrlSearch: ''
              }}
              displayField='{refname}-{refcode}'
              valueField='refpk'
             lang={this.props.lang}
            theme={this.props.theme}
              {...getFieldProps('code', {
                initialValue: '{"refname":"","refpk":""}',
                rules: [{
                  message: <FormattedMessage id="js.Ref.Ref23.0008" defaultMessage="提示：请选择" />,
                  pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                }]
              })}
              emptyBut={false}
            />
            <span style={{
              color: 'red'
            }}>
              {
                getFieldError('code')
              }
            </span>
          </div>
        </Card>
      )
    }
  };

export default Form.createForm()(Demo1);


