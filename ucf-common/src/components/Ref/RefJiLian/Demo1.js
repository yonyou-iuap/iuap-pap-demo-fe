/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import React, { Component } from 'react';
import RefTreeWithInput from 'ref-tree';
import "ref-tree/dist/index.css";
// import { Button} from 'tinper-bee';
// import Form from 'bee-form';
import {Button,Form} from 'tinper-bee';
import Card from '../Card'
let code =
`

`
class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      singleClientParam:{},
    }

  }
  
  singleSaveOrgParam = (result) =>{
    //组织单选的保存，级联参照
    this.setState({
        singleClientParam:result.length === 0?{}:{'organization_id':result[0].refpk},
    })
    
  }
  render() {

    const { getFieldProps, getFieldError } = this.props.form;
    let {singleClientParam} = this.state;
    const clientParam = {"isUseDataPower":"true"};
    singleClientParam = Object.assign({},clientParam,singleClientParam)
    return (
      <Card
        title="单选级联参照：组织-部门"
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
          <span >单选（组织）：</span>
          <RefTreeWithInput
            title={'组织'}
            param={{
              "refCode": "neworganizition_tree"
            }}
            refModelUrl={{
              treeUrl: '/pap_basedoc/common-ref/blobRefTree',
            }}
            matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
            filterUrl='/pap_basedoc/common-ref/filterRefJSON'
            multiple={false}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            lang={this.props.lang}
            {...getFieldProps('code', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择组织',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            onSave={this.singleSaveOrgParam}
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
          <span >级联（部门）：</span>
          <RefTreeWithInput
            title={'部门'}
            refModelUrl={{
              treeUrl: '/pap_basedoc/common-ref/blobRefTree',
            }}
            matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
            filterUrl='/pap_basedoc/common-ref/filterRefJSON'
            multiple={true}
            searchable={true}
            checkStrictly={true}
            strictMode={true}
            displayField='{refname}'
            valueField='refpk'
            param={{
                "refCode": "newdeptUnderOrg_trees",
                "clientParam":Object.keys(singleClientParam).length===0?'':singleClientParam
                
            }}
            lang={this.props.lang}
            {...getFieldProps('code1', {
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择部门',
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