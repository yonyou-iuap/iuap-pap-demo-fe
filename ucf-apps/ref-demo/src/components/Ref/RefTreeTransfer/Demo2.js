/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import React, { Component } from 'react';

import RefTreeTransferWithInput from 'pap-refer/lib/pap-common-treeTransfer/src/index.js';
import { Button, Form, Panel } from 'tinper-bee';
import Card from '../Card'
let code =
  `
import React, { Component } from 'react';

import RefTreeTransferWithInput from 'pap-refer/lib/pap-common-treeTransfer/src/index.js';
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
          title="穿梭框不带任何标题"
          codeText={code}
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
                  alert("您选择的是"+JSON.stringify(values))
                });
              }}
            >
              提交
                              </Button>
          }
        >
          <div className="demo-label">
            <span >穿梭框：：</span>
            <RefTreeTransferWithInput
              title='组织部门人员穿梭'
              textOption={{
                leftTitle: '组织部门树',
                rightTitle: '人员穿梭框'
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
                //initialValue: '{"refname":"","refpk":""}',
                rules: [{
                  message: '提示：请选择',
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
        title="穿梭框不带任何标题"
        codeText={code}
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
                alert(`您选择的是${JSON.stringify(values)}`)
              });
            }}
          >
            提交
                            </Button>
        }
      >
        <div className="demo-label">
          <span >穿梭框：：</span>
          <RefTreeTransferWithInput
            title='组织部门人员穿梭'
            textOption={{
              leftTitle: '组织部门树',
              rightTitle: '人员穿梭框'
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
              //initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择',
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


