/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';

import RefTreeTransferWithInput from 'pap-refer/lib/pap-common-treeTransfer/src/index.js';
// import "pap-refer/dist/index.css"
import { Button, Form, Panel } from 'tinper-bee';
import Card from '../Card'
let code =
  `
  import React, { Component } from 'react';

  import RefTreeTransferWithInput from 'pap-refer/lib/pap-common-treeTransfer/src/index.js';
  // import "pap-refer/dist/index.css"
import { Button, Form, Panel } from 'tinper-bee';
import Card from '../Card'
  class Demo2 extends Component {
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
          title={this.props.intl.formatMessage({id:"js.Ref.Ref22.0001", defaultMessage:"穿梭框不带任何标题"})}
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
                  alert(this.props.intl.formatMessage({id:"js.Ref.Ref22.0009", defaultMessage:"您选择的是"})+JSON.stringify(values))
                });
              }}
            >
              <FormattedMessage id="js.Ref.Ref22.0003" defaultMessage="提交" />
                              </Button>
          }
        >
          <div className="demo-label">
            <span ><FormattedMessage id="js.Ref.Ref22.0004" defaultMessage="穿梭框：：" /></span>
            <RefTreeTransferWithInput
              title={this.props.intl.formatMessage({id:"js.Ref.Ref22.0005", defaultMessage:"组织部门人员穿梭"})}
              textOption={{
                leftTitle: this.props.intl.formatMessage({id:"js.Ref.Ref22.0006", defaultMessage:"组织部门树" }),
                rightTitle: this.props.intl.formatMessage({id:"js.Ref.Ref22.0007", defaultMessage:"人员穿梭框"})
              }}
              textOption={
                {
                  leftTitle: '',
                  rightTitle: '',
                  leftTransferText: '',
                  rightTransferText: '',
                }
              }
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
            searchPlaceholder={'搜索'}
              notFoundContent={'暂无数据'}
              {...getFieldProps('code', {
                initialValue: '{"refname":"","refpk":""}',
                rules: [{
                  message: <FormattedMessage id="js.Ref.Ref22.0008" defaultMessage="提示：请选择" />,
                  pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                }]
              })}
              size='lg'
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
  
  export default Form.createForm()(Demo2);
  
                    
`
class Demo2 extends Component {
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
        title={this.props.intl.formatMessage({id:"js.Ref.Ref22.0001", defaultMessage:"穿梭框不带任何标题"})}
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
                alert(this.props.intl.formatMessage({id:"js.Ref.Ref22.0009", defaultMessage:"您选择的是"})+JSON.stringify(values))
              });
            }}
          >
            <FormattedMessage id="js.Ref.Ref22.0003" defaultMessage="提交" />
                            </Button>
        }
      >
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref22.0004" defaultMessage="穿梭框：：" /></span>
          <RefTreeTransferWithInput
            title={this.props.intl.formatMessage({id:"js.Ref.Ref22.0005", defaultMessage:"组织部门人员穿梭"})}
            textOption={{
              leftTitle: this.props.intl.formatMessage({id:"js.Ref.Ref22.0006", defaultMessage:"组织部门树" }),
              rightTitle: this.props.intl.formatMessage({id:"js.Ref.Ref22.0007", defaultMessage:"人员穿梭框"})
            }}
            textOption={
              {
                leftTitle: '',
                rightTitle: '',
                leftTransferText: '',
                rightTransferText: '',
              }
            }
            param={{//url请求参数
              refCode: 'neworgdeptstaff_treegrid',
            }}
            refModelUrl={{
              treeUrl: '/pap_basedoc/common-ref/blobRefTree',
              tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',
              tableBodyUrlSearch: ''
            }}
            filterUrl={'/pap_basedoc/common-ref/filterRefJSON'}
            displayField='{refname}-{refcode}'
            valueField='refpk'
            lang={this.props.lang}
            theme={this.props.theme}
            searchPlaceholder={this.props.intl.formatMessage({id:"js.Ref.Ref224.0013", defaultMessage:"搜索"})}
            notFoundContent={this.props.intl.formatMessage({id:"js.Ref.Ref224.0014", defaultMessage:"暂无数据"})}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref22.0008" defaultMessage="提示：请选择" />,
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            size='lg'
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

export default Form.createForm()(Demo2);


