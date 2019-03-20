/**
 *
 * @title ref-tree 参照_en-树形_en
 * @description 具有单选多选的树形参照_en
 *
 */

import React, { Component } from 'react';
import { RefTreeWithInput }  from 'pap-refer/dist/index.js';
import "pap-refer/dist/index.css";
// import { Button} from 'tinper-bee';
// import Form from 'bee-form';
import {Button,Form} from 'tinper-bee';
import Card from '../Card'
let code =
`
  <div className="demo-label">
    <span >单选（组织）：_en</span>
    <RefTreeWithInput
      title={'组织_en'}
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
          message: '提示：请选择组织_en',
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
    <span >级联（部门）：_en</span>
    <RefTreeWithInput
      title={'部门_en'}
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
        initialValue: JSON.stringify(jiLianValue),
        rules: [{
          message: '提示：请选择部门_en',
          pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
        }]
      })}
      canInputGoOn={this.canGetData}
      canClickGoOn={this.canGetData}
      value={JSON.stringify(jiLianValue)}
    />

    <span style={{
      color: 'red'
    }}>
      {
        getFieldError('code1')
      }
    </span>
  </div>
      
`
class Demo3 extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      sum:1,
      singleClientParam:{},
      jiLianValue:{
        refname: "",
        refpk: "",
      },
    }

  }
  
  singleSaveOrgParam = (result) =>{
    //组织单选的保存，级联参照
    this.setState({
        jiLianValue:Object.assign({},{"refname":"","refpk":`${this.state.sum}`}),//更换完清空级联的数据
        sum:++this.state.sum,
        singleClientParam:result.length === 0?{}:{'organization_id':result[0].refpk},
    });
    
  }
  canGetData = () =>{
      if(Object.keys(this.state.singleClientParam).length===0){
          alert('请先选择部门_en')
          return false;
      }
      return true;
  }
  render() {

    const { getFieldProps, getFieldError } = this.props.form;
    let {singleClientParam,jiLianValue} = this.state;
    const clientParam = {"isUseDataPower":"true"};
    singleClientParam = Object.assign({},clientParam,singleClientParam)
    return (
      <Card
        title="级联参照：组织不选，部门不可选，有提示_en"
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
                alert(`您选择的是_en${JSON.stringify(values)}`)
              });
            }}
          >
            提交_en
          </Button>
        }
      >
        <div className="demo-label">
          <span >单选（组织）：_en</span>
          <RefTreeWithInput
            title={'组织_en'}
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
                message: '提示：请选择组织_en',
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
          <span >级联（部门）：_en</span>
          <RefTreeWithInput
            title={'部门_en'}
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
              initialValue: JSON.stringify(jiLianValue),
              rules: [{
                message: '提示：请选择部门_en',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            canInputGoOn={this.canGetData}
            canClickGoOn={this.canGetData}
            value={JSON.stringify(jiLianValue)}
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

export default Form.createForm()(Demo3);
