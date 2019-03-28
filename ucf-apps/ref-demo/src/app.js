/**
 * 入口、导入组件样式、渲染
 */

import React,{Component} from 'react';
import { render } from 'mirrorx';
import 'ucf-common/styles/tinper-bee.css';
import 'ucf-common/styles/public.less';
import './app.less';
import {getCookie} from './util';
let lang = getCookie('u_locale') || getCookie('i18next') || 'zh_CN';
let dir = lang.toLocaleLowerCase()==='en_us'?'Ref_EN':(lang.toLocaleLowerCase()==='zh_tw'?'Ref_TW':'Ref');
let {  
  RefTreeDemo1,
  RefTreeDemo2,
  RefTreeDemo3,
  RefTreeDemo4,
  RefTreeDemo5,
  RefTreeDemo6,} =  require(`./components/${dir}/RefTree`)

  let {
    RefTableDemo1,
    RefTableDemo2,
    RefTableDemo3,
    RefTableDemo4,
  } =  require(`./components/${dir}/RefTable`)
  
  let {
    RefTreeTransferDemo1,
    RefTreeTransferDemo2
  } =  require(`./components/${dir}/RefTreeTransfer`)
  let {
    RefTreeTableDemo1,
  } =  require(`./components/${dir}/RefTreeTable`)
  
  let {
    RefJiLianDemo1,
    RefJiLianDemo2,
    RefJiLianDemo3,
  } =  require(`./components/${dir}/RefJiLian`)

  
  let {RefComboboxDemo1,RefComboboxDemo2} =  require(`./components/${dir}/RefCombobox`)
  let {RefMdmDemo1}  = require(`./components/${dir}/RefMdm`)
  class App extends Component {
    constructor() {
      super();
      this.state = {
        checkedArray: [],
        value: '',
        count: [],
        refpk: '',
        refname: '',
        strictMode: false
      }
  
      setTimeout(() => {
        this.setState({
          strictMode: true
        });
      })
    }
  
  
    render() {
      let { strictMode } = this.state;
      return (
        <div>
          <h2>树参照</h2>
          <div className="demo-row">
            <div className="demo-col">
              <RefTreeDemo1 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefTreeDemo2 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefTreeDemo3 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefTreeDemo4 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefTreeDemo5 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefTreeDemo6 lang={lang}/>
            </div>
          </div>
          <h2>表格参照</h2>
          <div className="demo-row">
            <div className="demo-col">
              <RefTableDemo1 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefTableDemo2 lang={lang}/>
            </div>
          </div>
          <div className="demo-row">
            <div className="demo-col">
              <RefTableDemo3 lang={lang}
              />
            </div>
          </div>
          <div className="demo-row">
            <div className="demo-col">
              <RefTableDemo4 lang={lang}
              />
            </div>
          </div>
          <h2>级联参照</h2>
          <div className="demo-row">
            <div className="demo-col">
              <RefJiLianDemo1 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefJiLianDemo2 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefJiLianDemo3 lang={lang}/>
            </div>
          </div>
          
          <h2>穿梭参照</h2>
          <div className="demo-row">
            <div className="demo-col">
              <RefTreeTransferDemo1 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefTreeTransferDemo2 lang={lang}/>
            </div>
          </div>
          <h2>树表参照</h2>
          <div className="demo-row">
            <div className="demo-col">
              <RefTreeTableDemo1 lang={lang}
              />
            </div>
          </div>
          <h2>combobox参照</h2>
          <div className="demo-row">
            <div className="demo-col">
              <RefComboboxDemo1 lang={lang}/>
            </div>
            <div className="demo-col">
              <RefComboboxDemo2 lang={lang}/>
            </div>
          </div>
          <h2>自定义参照</h2>
          <div className="demo-row">
            <div className="demo-col">
              <RefMdmDemo1 lang={lang}/>
            </div>
          </div>
        </div>
      )
    }
  };
  
render(<App/>, document.querySelector("#app"));