/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import React, { Component } from 'react';
import PapRefOrgDept from 'pap-refer/lib/pap-ref-orgDept/src/index';
import {Button,Form,Panel} from 'tinper-bee';
import Card from '../Card'
let code =
`
import React, { Component } from 'react';
import PapRefOrgDept from 'pap-refer/lib/pap-ref-orgDept/src/index';
import {Button,Form,Panel} from 'tinper-bee';
import Card from '../Card'
class Demo6 extends Component {
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
        title="初始值和自定义icon"
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
          <span >组织部门单选：</span>
          <PapRefOrgDept
            multiple={false}
            searchable={true}
            checkStrictly={true} 
            disabled={false} 
            strictMode={true} 
            displayField={'{refname}'} //显示内容的键
            valueField={'refpk'} //真实 value 的键
           lang={this.props.lang}
            theme={this.props.theme} emptyBut={true}            
            value={JSON.stringify({
              refname: "财务处",
              refpk: "95b60f35-ed0b-454e-b948-fb45ae30b911",
            })}
            nodeDisplay={(record) => {
              if (record.entityType === "mainEntity") {
                return (<span><i className="uf uf-group-2" /> {record.refname} </span>);
              } else if (record.entityType === "subEntity") {
                return (<span><i className="uf uf-users" /> {record.refname} </span>);
              }
            }}
            param={{
              "refCode": "neworgdept_tree",
            }}
            refModelUrl={{
              treeUrl: '/pap_basedoc/common-ref/blobRefTree',
            }}
            {...getFieldProps('code1', {
              //initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择',
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

export default Form.createForm()(Demo6);
`
class Demo6 extends Component {
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
        title="初始值和自定义icon"
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
          <span >组织部门单选：</span>
          <PapRefOrgDept
            multiple={false}
            searchable={true}
            checkStrictly={true} 
            disabled={false} 
            strictMode={true} 
            displayField={'{refname}'} //显示内容的键
            valueField={'refpk'} //真实 value 的键
           lang={this.props.lang}
            theme={this.props.theme} emptyBut={true}            
            nodeDisplay={(record) => {
              if (record.entityType === "mainEntity") {
                return (<span><i className="uf uf-group-2" /> {record.refname} </span>);
              } else if (record.entityType === "subEntity") {
                return (<span><i className="uf uf-users" /> {record.refname} </span>);
              }
            }}
            param={{
              "refCode": "neworgdept_tree",
            }}
            refModelUrl={{
              treeUrl: '/pap_basedoc/common-ref/blobRefTree',
            }}
            {...getFieldProps('code1', {
              //initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: '提示：请选择',
                pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
              }]
            })}
            // value={JSON.stringify({
            //   refname: "财务处",
            //   refpk: "95b60f35-ed0b-454e-b948-fb45ae30b911",
            // })}
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

export default Form.createForm()(Demo6);

