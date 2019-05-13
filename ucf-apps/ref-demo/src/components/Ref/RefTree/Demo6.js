/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import { FormattedMessage } from 'react-intl';
import React, { Component } from 'react';
import PapRefOrgDept from 'pap-refer/lib/pap-ref-orgDept/src/index';
// import 'pap-refer/lib/pap-ref-orgDept.css'
import {Button,Form,Panel} from 'tinper-bee';
import Card from '../Card'
let code =
`
import React, { Component } from 'react';
import PapRefOrgDept from 'pap-refer/lib/pap-ref-orgDept';
import 'pap-refer/lib/pap-ref-orgDept.css'
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
        title={this.props.intl.formatMessage({id:"js.Ref.Ref3.0001", defaultMessage:"初始值和自定义icon"})}
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
                alert(this.props.intl.formatMessage({id:"js.Ref.Ref3.0002", defaultMessage:"您选择的是"})+JSON.stringify(values))
              });
            }}
          >
            <FormattedMessage id="js.Ref.Ref3.0003" defaultMessage="提交" />
                    </Button>
        }
      >
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref3.0004" defaultMessage="组织部门单选：" /></span>
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
              refname: this.props.intl.formatMessage({id:"js.Ref.Ref3.0005", defaultMessage:"财务处"}),
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
              initialValue: '{"refname":"","refpk":""}',
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
        title={this.props.intl.formatMessage({id:"js.Ref.Ref3.0001", defaultMessage:"初始值和自定义icon"})}
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
                alert(this.props.intl.formatMessage({id:"js.Ref.Ref3.0002", defaultMessage:"您选择的是"})+JSON.stringify(values))
              });
            }}
          >
            <FormattedMessage id="js.Ref.Ref3.0003" defaultMessage="提交" />
                    </Button>
        }
      >
        <div className="demo-label">
          <span ><FormattedMessage id="js.Ref.Ref3.0004" defaultMessage="组织部门单选：" /></span>
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
              refname: this.props.intl.formatMessage({id:"js.Ref.Ref3.0005", defaultMessage:"财务处"}),
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
              initialValue: '{"refname":"","refpk":""}',
              rules: [{
                message: <FormattedMessage id="js.Ref.Ref3.0006" defaultMessage="提示：请选择" />,
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

