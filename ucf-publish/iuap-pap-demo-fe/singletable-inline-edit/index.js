/*! build:ucf hash:f673515a03526e41203f, chunkhash:46b5e4b6bc00ea4b2c61, name:singletable-inline-edit/index, filebase:index.js, query:, file:singletable-inline-edit/index.js */!function(o){function e(e){for(var a,t,n=e[0],r=e[1],l=e[2],i=0,s=[];i<n.length;i++)t=n[i],d[t]&&s.push(d[t][0]),d[t]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(o[a]=r[a]);for(m&&m(e);s.length;)s.shift()();return u.push.apply(u,l||[]),c()}function c(){for(var e,a=0;a<u.length;a++){for(var t=u[a],n=!0,r=1;r<t.length;r++){var l=t[r];0!==d[l]&&(n=!1)}n&&(u.splice(a--,1),e=i(i.s=t[0]))}return e}var t={},d={4:0},u=[];function i(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return o[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=o,i.c=t,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(a,e){if(1&e&&(a=i(a)),8&e)return a;if(4&e&&"object"==typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)i.d(t,n,function(e){return a[e]}.bind(null,n));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],n=a.push.bind(a);a.push=e,a=a.slice();for(var r=0;r<a.length;r++)e(a[r]);var m=n;u.push([1829,0]),c()}({1812:function(e,a,t){},1813:function(e,a,t){},1829:function(e,a,t){"use strict";t.r(a);t(149);var n=t(0),g=t.n(n),E=t(3),r=t.n(E),l=t(10),y=t.n(l),i=t(19),s=t.n(i),o=t(31),c=t.n(o),d=t(12),u=t.n(d),m=t(13),p=t.n(m),f=t(14),h=t.n(f),v=t(15),k=t.n(v),b=t(16),w=t.n(b),j=t(2),x=t(5),S=t(4),C=t.n(S),M=t(9),I=t(66),D=t(61),P=t(20),V=t(67),O=t(90),T=t(7),_=t.n(T),N=t(70),q=t.n(N),L=t(28),Y=t(74),A=t.n(Y),F=t(60),G=t.n(F),R=t(65),U=t(119),H=t(146),J=L.a.Item,K=x.Select.Option,z=A.a.YearPicker,Q=function(e){function a(e){var f;return u()(this,a),(f=h()(this,k()(a).call(this,e))).search=function(){var e=f.props,t=e.status;(0,e.form.validateFields)(function(e,a){a.year&&(a.year=a.year.format("YYYY")),a.dept&&(a.dept=JSON.parse(a.dept).refpk),"view"!=t?f.setState({show:!0,values:a}):f.getQuery(a,0)})},f.reset=function(){f.props.form.resetFields()},f.onClickGo=function(){f.getQuery(f.state.values,0),f.setState({show:!1}),E.actions.inlineEdit.updateState({status:"view",rowEditStatus:!0})},f.onClickCancel=function(){f.setState({show:!1})},f.getQuery=function(e,a){var t=Object(M.f)(f.props.queryParam),n=t.pageParams,r=t.whereParams;for(var l in r=Object(M.f)(r),n.pageIndex=0,e){var i=!0,s=!1,o=void 0;try{for(var c,d=r.entries()[Symbol.iterator]();!(i=(c=d.next()).done);i=!0){var u=q()(c.value,2),m=u[0];if(l===u[1].key){r.splice(m,1);break}}}catch(e){s=!0,o=e}finally{try{i||null==d.return||d.return()}finally{if(s)throw o}}if((e[l]||0===e[l])&&0===a){var p="LIKE";["code","month"].includes(l)&&(p="EQ"),["serviceYearsCompany"].includes(l)&&(p="GTEQ"),r.push({key:l,value:e[l],condition:p})}}t.whereParams=r,0===a&&E.actions.inlineEdit.loadList(t)},f.state={show:!1},f}return w()(a,e),p()(a,[{key:"render",value:function(){var e=this.props,a=e.form.getFieldProps,t=e.searchOpen,n=e.onCallback;return g.a.createElement(U.a,{searchOpen:t,reset:this.reset,onCallback:n,search:this.search,intl:this.props.intl},g.a.createElement(L.a,{size:"sm"},g.a.createElement(J,{label:g.a.createElement(j.a,{id:"js.com.Sea2.0001",defaultMessage:"员工编号"})},g.a.createElement(x.FormControl,_()({placeholder:this.props.intl.formatMessage({id:"js.com.Sea2.0002",defaultMessage:"精确查询"})},a("code",{initialValue:""})))),g.a.createElement(J,{label:g.a.createElement(j.a,{id:"js.com.Sea2.0003",defaultMessage:"员工姓名"})},g.a.createElement(x.FormControl,_()({placeholder:this.props.intl.formatMessage({id:"js.com.Sea2.0004",defaultMessage:"模糊查询"})},a("name",{initialValue:""})))),g.a.createElement(J,{label:g.a.createElement(j.a,{id:"js.com.Sea2.0005",defaultMessage:"部门"})},g.a.createElement(R.a,a("dept",{initialValue:""}))),g.a.createElement(J,{label:g.a.createElement(j.a,{id:"js.com.Sea2.0006",defaultMessage:"年份"})},g.a.createElement(z,_()({},a("year",{initialValue:null}),{format:"YYYY",locale:G.a,placeholder:this.props.intl.formatMessage({id:"js.com.Sea2.0007",defaultMessage:"选择年"})}))),g.a.createElement(J,{label:g.a.createElement(j.a,{id:"js.com.Sea2.0008",defaultMessage:"月份"})},g.a.createElement(H.a,a("month",{initialValue:""}))),g.a.createElement(J,{label:g.a.createElement(j.a,{id:"js.com.Sea2.0009",defaultMessage:"是否超标"})},g.a.createElement(x.Select,a("exdeeds",{initialValue:""}),g.a.createElement(K,{value:""},g.a.createElement(j.a,{id:"js.com.Sea2.0010",defaultMessage:"请选择"})),g.a.createElement(K,{value:"0"},g.a.createElement(j.a,{id:"js.com.Sea2.0011",defaultMessage:"未超标"})),g.a.createElement(K,{value:"1"},g.a.createElement(j.a,{id:"js.com.Sea2.0012",defaultMessage:"超标"}))))),g.a.createElement(V.a,{show:this.state.show,context:"数据未保存，确定查询 ?",confirmFn:this.onClickGo,cancelFn:this.onClickCancel}))}}]),a}(n.Component),W=L.a.createForm()(Object(j.d)(Q)),B=t(208),X=t(29),Z=t.n(X),$=t(1),ee=t.n($),ae=t(84),te=t(83),ne=(t(176),{value:ee.a.any,onChange:ee.a.func,className:ee.a.string,field:ee.a.string,index:ee.a.number,message:ee.a.string,data:ee.a.array,required:ee.a.bool,onValidate:ee.a.func,isFlag:ee.a.bool,validate:ee.a.bool}),re={field:"",index:"",message:g.a.createElement(j.a,{id:"js.com.Row2.0001",defaultMessage:"请选择此字段"}),data:[],required:!1,isFlag:!1,validate:!1,className:""},le=function(e){function a(e){var s;return u()(this,a),(s=h()(this,k()(a).call(this,e))).handlerChange=function(e){var a=s.props,t=a.onChange,n=a.field,r=a.index,l=a.status;s.setState({value:e,flag:"edit"==l},function(){s.validate()}),t&&t(n,e,r)},s.validate=function(){var e=s.props,a=e.required,t=e.field,n=e.index,r=e.onValidate,l=s.state.value,i=Z()({},t,{type:"number",required:a});new ae.a(i).validate(Z()({},t,l),function(e,a){e?s.setState({error:!0}):s.setState({error:!1}),r&&r(t,a,n)})},s.state={value:e.value,flag:!1,error:!1},s}return w()(a,e),p()(a,[{key:"componentWillReceiveProps",value:function(e,a){1==e.validate&&this.validate()}},{key:"render",value:function(){var e=this.state,a=e.value,t=e.error,n=e.flag,r=this.props,l=r.className,i=r.message,s=r.required,o=r.data;return g.a.createElement(te.a,{required:s,error:t,message:i,flag:n},g.a.createElement(x.Select,{className:l,value:a,onChange:this.handlerChange,data:o}))}}]),a}(n.Component);le.propTypes=ne,le.defaultProps=re;var ie=le,se=t(182),oe=t(204),ce=t.n(oe).a.YearPicker,de={value:ee.a.any,onChange:ee.a.func,className:ee.a.string,field:ee.a.string,index:ee.a.number,message:ee.a.string,data:ee.a.array,required:ee.a.bool,onValidate:ee.a.func,isFlag:ee.a.bool,validate:ee.a.bool},ue={field:"",index:"",message:g.a.createElement(j.a,{id:"js.com.Row1.0001",defaultMessage:"请输入此字段"}),data:[],required:!1,isFlag:!1,validate:!1},me=function(e){function a(e){var s;return u()(this,a),(s=h()(this,k()(a).call(this,e))).handlerChange=function(e){var a=s.props,t=a.onChange,n=a.field,r=a.index,l=a.status;s.setState({value:e,flag:"edit"==l},function(){s.validate()}),t&&t(n,C()(e).format("YYYY"),r)},s.validate=function(){var e=s.props,a=e.required,t=e.field,n=e.index,r=e.onValidate,l=s.state.value,i=Z()({},t,{type:"object",required:a});new ae.a(i).validate(Z()({},t,l),function(e,a){e?s.setState({error:!0}):s.setState({error:!1}),r&&r(t,a,n)})},s.state={value:C()(e.value),flag:!1,error:!1},s}return w()(a,e),p()(a,[{key:"componentWillReceiveProps",value:function(e){1==e.validate&&this.validate()}},{key:"render",value:function(){var e=this.state,a=e.value,t=e.error,n=e.flag,r=this.props,l=r.className,i=r.message,s=r.required;return g.a.createElement(te.a,{required:s,error:t,message:i,flag:n},g.a.createElement(ce,{className:l,value:a,onChange:this.handlerChange,format:"YYYY",locale:G.a,placeholder:this.props.intl.formatMessage({id:"js.com.Row1.0002",defaultMessage:"选择年"})}))}}]),a}(n.Component);me.propTypes=de,me.defaultProps=ue;var pe=me,fe={value:ee.a.any,onChange:ee.a.func,className:ee.a.string,field:ee.a.string,index:ee.a.number,message:ee.a.string,data:ee.a.array,required:ee.a.bool,onValidate:ee.a.func,isFlag:ee.a.bool,validate:ee.a.bool},he={field:"",index:"",message:g.a.createElement(j.a,{id:"js.com.Row3.0001",defaultMessage:"请选择部门参照"}),data:[],required:!1,isFlag:!1,validate:!1},ge=function(e){function a(e){var s;return u()(this,a),(s=h()(this,k()(a).call(this,e))).handlerChange=function(e){var a=s.props,t=a.onChange,n=a.field,r=a.index,l=a.status,i=JSON.parse(e).refpk;s.setState({value:e,flag:"edit"==l},function(){s.validate()}),t&&t(n,i,r)},s.validate=function(){var e=s.props,a=e.required,t=e.field,n=e.index,r=e.onValidate,l=s.state.value,i=Z()({},t,{type:"string",required:a,pattern:/[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/});new ae.a(i).validate(Z()({},t,l),function(e,a){e?s.setState({error:!0}):s.setState({error:!1}),r&&r(t,a,n)})},s.state={value:e.record.deptName?JSON.stringify({refpk:e.record.dept,refname:e.record.deptName}):"",flag:!1,error:!1},s}return w()(a,e),p()(a,[{key:"componentWillReceiveProps",value:function(e){1==e.validate&&this.validate()}},{key:"render",value:function(){var e=this.state,a=e.value,t=e.error,n=e.flag,r=this.props,l=r.className,i=r.message,s=r.required;return g.a.createElement(te.a,{required:s,error:t,message:i,flag:n},g.a.createElement(R.a,{style:{width:"100%"},className:l,value:a,onChange:this.handlerChange}))}}]),a}(n.Component);ge.propTypes=fe,ge.defaultProps=he;var ve=ge,Ee={value:ee.a.any,onChange:ee.a.func,className:ee.a.string,field:ee.a.string,index:ee.a.number,message:ee.a.string,data:ee.a.array,required:ee.a.bool,onValidate:ee.a.func,isFlag:ee.a.bool,validate:ee.a.bool},ye={field:"",index:"",message:g.a.createElement(j.a,{id:"js.com.Row6.0001",defaultMessage:"请选择职级参照"}),data:[],required:!1,isFlag:!1,validate:!1},ke=function(e){function a(e){var s;return u()(this,a),(s=h()(this,k()(a).call(this,e))).handlerChange=function(e){var a=s.props,t=a.onChange,n=a.field,r=a.index,l=a.status,i=JSON.parse(e).refpk;s.setState({value:e,flag:"edit"==l},function(){s.validate()}),t&&t(n,i,r)},s.validate=function(){var e=s.props,a=e.required,t=e.field,n=e.index,r=e.onValidate,l=s.state.value,i=Z()({},t,{type:"string",required:a,pattern:/[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/});new ae.a(i).validate(Z()({},t,l),function(e,a){e?s.setState({error:!0}):s.setState({error:!1}),r&&r(t,a,n)})},s.state={value:e.record.levelName?JSON.stringify({refpk:e.record.postLevel,refname:e.record.levelName}):"",flag:!1,error:!1},s}return w()(a,e),p()(a,[{key:"componentWillReceiveProps",value:function(e){1==e.validate&&this.validate()}},{key:"render",value:function(){var e=this.state,a=e.value,t=e.error,n=e.flag,r=this.props,l=r.className,i=r.message,s=r.required;return g.a.createElement(te.a,{required:s,error:t,message:i,flag:n},g.a.createElement(R.b,{style:{width:"100%"},className:l,value:a,onChange:this.handlerChange}))}}]),a}(n.Component);ke.propTypes=Ee,ke.defaultProps=ye;var be,we,je,xe,Se=ke,Ce=t(314),Me={name:{component:B.a,type:"text"},sex:{component:ie,selectList:[{key:g.a.createElement(j.a,{id:"js.com.Ind2.0001",defaultMessage:"请选择"}),value:"",disabled:!0},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0002",defaultMessage:"男"}),value:1},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0003",defaultMessage:"女"}),value:0}],type:"select"},serviceYears:{component:se.a,props:{iconStyle:"one",max:99,min:0,step:1},type:"number"},serviceYearsCompany:{component:se.a,props:{iconStyle:"one",max:99,min:0,step:1},type:"number"},month:{component:ie,selectList:[{key:g.a.createElement(j.a,{id:"js.com.Ind2.0001",defaultMessage:"请选择"}),value:"",disabled:!0},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0004",defaultMessage:"一月"}),value:1},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0005",defaultMessage:"二月"}),value:2},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0006",defaultMessage:"三月"}),value:3},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0007",defaultMessage:"四月"}),value:4},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0008",defaultMessage:"五月"}),value:5},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0009",defaultMessage:"六月"}),value:6},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0010",defaultMessage:"七月"}),value:7},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0011",defaultMessage:"八月"}),value:8},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0012",defaultMessage:"九月"}),value:9},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0013",defaultMessage:"十月"}),value:10},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0014",defaultMessage:"十一月"}),value:11},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0015",defaultMessage:"十二月"}),value:12}],type:"select"},allowanceType:{component:ie,selectList:[{key:g.a.createElement(j.a,{id:"js.com.Ind2.0001",defaultMessage:"请选择"}),value:"",disabled:!0},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0016",defaultMessage:"电脑补助"}),value:1},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0017",defaultMessage:"住宿补助"}),value:2},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0018",defaultMessage:"交通补助"}),value:3}],type:"select"},allowanceStandard:{component:se.a,props:{max:999999,min:0,step:1,precision:2},type:"number"},allowanceActual:{component:se.a,props:{max:999999,min:0,step:1,precision:2},type:"number"},exdeeds:{component:ie,selectList:[{key:g.a.createElement(j.a,{id:"js.com.Ind2.0001",defaultMessage:"请选择"}),value:"",disabled:!0},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0019",defaultMessage:"未超标"}),value:0},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0020",defaultMessage:"超标"}),value:1}],type:"select"},pickType:{component:ie,selectList:[{key:g.a.createElement(j.a,{id:"js.com.Ind2.0001",defaultMessage:"请选择"}),value:"",disabled:!0},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0021",defaultMessage:"转账"}),value:1},{key:g.a.createElement(j.a,{id:"js.com.Ind2.0022",defaultMessage:"现金"}),value:2}],type:"select"},remark:{component:B.a,type:"text"},year:{component:pe,type:"dateYear"},date:{component:Ce.a,type:"date"},dept:{component:ve,type:"ref",valueKey:"deptName"},level:{component:Se,type:"ref",valueKey:"levelName"}},Ie=function(e){function a(e){var f;return u()(this,a),(f=h()(this,k()(a).call(this,e))).renderComp=function(){var e=f.props,a=e.type,t=e.value,n=e.record,r=Me[a];if(r){var l,i=r.component,s=r.type,o=r.props,c=o||{},d=n._edit,u=n._status,m=n._validate;switch(s){case"dateYear":case"date":case"text":l=t;break;case"number":l=o.precision&&0<o.precision?"number"==typeof t?t.toFixed(o.precision):"":t;break;case"select":var p=r.selectList.find(function(e){return e.value===t});l=p?p.key:"";break;case"ref":l=n[r.valueKey];break;default:l=""}return d?g.a.createElement(i,_()({status:u,validate:m},c,f.props,{data:r.selectList})):g.a.createElement("div",null,l)}return g.a.createElement("div",null,g.a.createElement(j.a,{id:"js.com.Ind2.0023",defaultMessage:"组件类型错误"}))},f}return w()(a,e),p()(a,[{key:"render",value:function(){return g.a.createElement("div",null,this.renderComp())}}]),a}(n.Component),De=Object(j.d)(Ie),Pe=(t(1812),function(e){function a(e){var o;return u()(this,a),(o=h()(this,k()(a).call(this,e))).oldData=[],o.column=[{title:g.a.createElement(j.a,{id:"js.com.Ind1.0001",defaultMessage:"员工编号"}),dataIndex:"code",key:"code",width:150},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0002",defaultMessage:"员工姓名"}),dataIndex:"name",key:"name",width:120,render:function(e,a,t){return g.a.createElement(De,{type:"name",value:e,field:"name",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0003",defaultMessage:"员工性别"}),dataIndex:"sexEnumValue",key:"sexEnumValue",width:120,render:function(e,a,t){return g.a.createElement(De,{type:"sex",value:a.sex,field:"sex",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0004",defaultMessage:"所属部门"}),dataIndex:"deptName",key:"deptName",width:120,render:function(e,a,t){return g.a.createElement(De,{type:"dept",field:"dept",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0005",defaultMessage:"职级"}),dataIndex:"levelName",key:"levelName",width:120,render:function(e,a,t){return g.a.createElement(De,{type:"level",field:"postLevel",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0006",defaultMessage:"工龄"}),dataIndex:"serviceYears",key:"serviceYears",width:130,className:"column-number-right ",render:function(e,a,t){return g.a.createElement(De,{type:"serviceYears",value:e,field:"serviceYears",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0007",defaultMessage:"司龄"}),dataIndex:"serviceYearsCompany",key:"serviceYearsCompany",width:130,className:"column-number-right ",render:function(e,a,t){return g.a.createElement(De,{type:"serviceYearsCompany",value:e,field:"serviceYearsCompany",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0008",defaultMessage:"年份"}),dataIndex:"year",key:"year",width:100,render:function(e,a,t){return g.a.createElement(De,{type:"year",value:e,field:"year",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0009",defaultMessage:"月份"}),dataIndex:"monthEnumValue",key:"monthEnumValue",width:120,render:function(e,a,t){return g.a.createElement(De,{type:"month",value:a.month,field:"month",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0010",defaultMessage:"补贴类别"}),dataIndex:"allowanceTypeEnumValue",key:"allowanceTypeEnumValue",width:120,render:function(e,a,t){return g.a.createElement(De,{type:"allowanceType",value:a.allowanceType,field:"allowanceType",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0011",defaultMessage:"补贴标准"}),dataIndex:"allowanceStandard",key:"allowanceStandard",width:120,className:"column-number-right ",render:function(e,a,t){return g.a.createElement(De,{type:"allowanceStandard",value:e,field:"allowanceStandard",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0012",defaultMessage:"实际补贴"}),dataIndex:"allowanceActual",key:"allowanceActual",width:120,className:"column-number-right ",render:function(e,a,t){return g.a.createElement(De,{type:"allowanceActual",value:e,field:"allowanceActual",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0013",defaultMessage:"是否超标"}),dataIndex:"exdeedsEnumValue",key:"exdeedsEnumValue",width:120,render:function(e,a,t){return g.a.createElement(De,{type:"exdeeds",value:a.exdeeds,field:"exdeeds",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0014",defaultMessage:"申请时间"}),dataIndex:"applyTime",key:"applyTime",width:200,render:function(e,a,t){return""!==e&&void 0!==e?g.a.createElement("div",null,C()(e).format("YYYY-MM-DD hh:mm:ss")):g.a.createElement("div",null)}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0015",defaultMessage:"领取方式"}),dataIndex:"pickTypeEnumValue",key:"pickTypeEnumValue",width:120,render:function(e,a,t){return g.a.createElement(De,{type:"pickType",value:a.pickType,field:"pickType",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0016",defaultMessage:"领取时间"}),dataIndex:"pickTime",key:"pickTime",width:200,render:function(e,a,t){return""!==e&&void 0!==e?g.a.createElement("div",null,C()(e).format("YYYY-MM-DD hh:mm:ss")):g.a.createElement("div",null)}},{title:g.a.createElement(j.a,{id:"js.com.Ind1.0017",defaultMessage:"备注"}),dataIndex:"remark",key:"remark",width:100,render:function(e,a,t){return g.a.createElement(De,{type:"remark",value:e,field:"remark",index:t,required:!1,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}}],o.changeAllData=function(e,a,t){var n=o.oldData,r=Object(M.f)(o.props.list);n[t][e]=a,r[t]._checked||(r[t]._checked=!0,E.actions.inlineEdit.updateState({list:r})),n[t]._checked=!0,o.oldData=n},o.onValidate=function(e,a,t){0<o.oldData.length&&(o.oldData[t]["_".concat(e,"Validate")]=null==a)},o.getSelectedDataFunc=function(e,a,t){var n=o.props.list,r=Object(M.f)(n);null!=t?r[t]._checked=!r[t]._checked:0<e.length?r.map(function(e){e._disabled||(e._checked=!0)}):r.map(function(e){e._disabled||(e._checked=!1)}),E.actions.inlineEdit.updateState({selectData:e,list:r})},o.freshData=function(e){o.onPageSelect(e,0)},o.onDataNumSelect=function(e,a){o.onPageSelect(a,1)},o.onPageSelect=function(e,a){var t=Object(M.f)(o.props.queryParam),n=Object(M.k)(e,a,t.pageParams),r=n.pageIndex,l=n.pageSize;t.pageParams={pageIndex:r,pageSize:l},E.actions.inlineEdit.updateState(t),E.actions.inlineEdit.loadList(t)},o.filterArrayNull=function(e){return e.filter(function(e){return null!=e})},o.hasCheck=function(){var e=o.props,a=e.selectData,t=e.list,n=!1;return a.forEach(function(e){1==e._checked&&(n=!0)}),t.forEach(function(e){1==e._checked&&(n=!0)}),n},o.newDataTmp={_edit:!0,_isNew:!0,_checked:!1,_disabled:!1,_flag:!1,code:"",name:"",sex:"",sexEnumValue:"",deptName:"",levelName:"",serviceYears:0,serviceYearsCompany:0,year:C()().format("YYYY"),month:"",monthEnumValue:"",allowanceType:"",allowanceTypeEnumValue:"",allowanceStandard:0,allowanceActual:0,exdeeds:"",exdeedsEnumValue:"",pickType:"",pickTypeEnumValue:"",remark:""},o.handlerNew=function(){var e=Object(M.f)(o.props.list),a=c()({key:Object(M.r)()},o.newDataTmp);o.oldData.length<=0&&(e.forEach(function(e){e._disabled=!0,e._checked=!1}),o.grid.resetColumns(o.column)),o.oldData.unshift(a),e.unshift(a),E.actions.inlineEdit.updateState({list:e,status:"new",rowEditStatus:!1,selectData:[]})},o.onClickUpdate=function(){var e=o.props.list.map(function(e){return e._edit=!0,e._checked=!1,e._status="edit",e});o.grid.resetColumns(o.column),o.oldData=Object(M.f)(e),E.actions.inlineEdit.updateState({list:e,status:"edit",rowEditStatus:!1})},o.onClickDownloadTemplate=function(){window.open("".concat("/iuap-pap-demo-be","/inline_allowances/excelTemplateDownload"))},o.filterList=function(e,a,n){var r=a.slice(),l=[];return e.forEach(function(t){r.forEach(function(e,a){t[n]===e[n]&&e._checked&&(e._validate=!0,l.push(t))})}),{newList:r,selectList:l}},o.isVerifyData=function(r){var l=!0,i=/Validate\b/;return r.forEach(function(e,a){var t=Object.keys(e);if(l)for(var n=0;n<t.length;n++)if(i.test(t[n])){if(!r[a][t[n]]){l=!1;break}l=!0}}),l},o.onClickSave=s()(y.a.mark(function e(){var a,t,n,r,l,i,s;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=o.props,t=a.status,n=a.list,r=a.intl,i=l=null,s=r.formatMessage({id:"js.com.Ind1.0018",defaultMessage:"请勾选数据后再新增"}),e.t0=t,e.next="new"===e.t0?7:"edit"===e.t0?10:14;break;case 7:return l=o.filterList(o.oldData,n,"key"),i=E.actions.inlineEdit.adds,e.abrupt("break",15);case 10:return l=o.filterList(o.oldData,n,"id"),i=E.actions.inlineEdit.updates,s=r.formatMessage({id:"js.com.Ind1.0019",defaultMessage:"请勾选数据后再更新"}),e.abrupt("break",15);case 14:return e.abrupt("break",15);case 15:if(0<l.selectList.length)return e.next=18,E.actions.inlineEdit.updateState({list:l.newList});e.next=28;break;case 18:if(o.isVerifyData(l.selectList))return e.next=21,i(l.selectList);e.next=25;break;case 21:e.sent&&(o.oldData=[]),e.next=26;break;case 25:Object(M.b)(r.formatMessage({id:"js.com.Ind1.0020",defaultMessage:"数据填写不完整"}));case 26:e.next=29;break;case 28:Object(M.b)(s);case 29:case"end":return e.stop()}},e)})),o.onClickDelConfirm=function(){var e=o.props,a=e.selectData,t=e.intl;0<a.length?o.setState({showPop:!0}):Object(M.b)(t.formatMessage({id:"js.com.Ind1.0021",defaultMessage:"请勾选数据后再删除"}))},o.onClickDel=s()(y.a.mark(function e(){var a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.props.selectData,e.next=3,E.actions.inlineEdit.removes(a);case 3:e.sent&&(o.oldData=[]),o.setState({showPop:!1});case 6:case"end":return e.stop()}},e)})),o.onClickPopCancel=function(){o.setState({showPop:!1})},o.onClickCancel=function(){o.hasCheck()?o.setState({showPopCancel:!0}):(o.oldData=[],E.actions.inlineEdit.resetData(!0),E.actions.inlineEdit.updateState({selectData:[],rowEditStatus:!0}))},o.onClickPopUnSaveOK=function(){E.actions.inlineEdit.resetData(!0),E.actions.inlineEdit.updateState({selectData:[],rowEditStatus:!0}),o.setState({showPopCancel:!1}),o.oldData=[]},o.onClickPopUnSaveCancel=function(){o.setState({showPopCancel:!1})},o.onClickExport=function(){o.grid.exportExcel()},o.resetTableHeight=function(e){var a=0;a=e?Object(M.j)()-420:Object(M.j)()-270,o.setState({tableHeight:a})},o.state={tableHeight:0,showPop:!1,showPopCancel:!1,validate:!1},o}return w()(a,e),p()(a,[{key:"componentWillMount",value:function(){this.resetTableHeight(!0)}},{key:"componentDidMount",value:function(){E.actions.inlineEdit.loadList(this.props.queryParam)}},{key:"render",value:function(){var a=this,e=this.state,t=e.showPop,n=e.showPopCancel,r=e.tableHeight,l=this.props,i=l.list,s=l.showLoading,o=l.pageIndex,c=l.pageSize,d=l.totalPages,u=l.total,m=l.status,p=l.rowEditStatus,f=l.queryParam,h={activePage:o,total:u,items:d,freshData:this.freshData,onDataNumSelect:this.onDataNumSelect,disabled:"view"!==m};return g.a.createElement("div",{className:"inline-edit"},g.a.createElement(D.a,{title:this.props.intl.formatMessage({id:"js.com.Ind1.0022",defaultMessage:"A2单表行内编辑示例"})}),g.a.createElement(W,{queryParam:f,status:m,pageSize:c,searchOpen:!0,onCallback:this.resetTableHeight}),g.a.createElement("div",{className:"table-header"},g.a.createElement(O.a,{funcCode:"singletable-inlineEdit"},g.a.createElement(P.a,{role:"add",disabled:Object(M.h)("add",m),className:"ml8",colors:"primary",onClick:this.handlerNew},g.a.createElement(j.a,{id:"js.com.Ind1.0024",defaultMessage:"新增"})),g.a.createElement(P.a,{role:"update",shape:"border",disabled:Object(M.h)("edit",m),className:"ml8",onClick:this.onClickUpdate},g.a.createElement(j.a,{id:"js.com.Ind1.0025",defaultMessage:"修改"})),g.a.createElement(P.a,{role:"delete",shape:"border",disabled:Object(M.h)("del",m),className:"ml8",onClick:this.onClickDelConfirm},g.a.createElement(j.a,{id:"js.com.Ind1.0026",defaultMessage:"删除"})),g.a.createElement(P.a,{shape:"border",disabled:Object(M.h)("export",m),className:"ml8",onClick:this.onClickExport},g.a.createElement(j.a,{id:"js.com.Ind1.0027",defaultMessage:"导出"})),g.a.createElement(P.a,{shape:"border",disabled:Object(M.h)("save",m),className:"ml8",onClick:this.onClickSave},g.a.createElement(j.a,{id:"js.com.Ind1.0028",defaultMessage:"保存"})),g.a.createElement(P.a,{shape:"border",disabled:Object(M.h)("cancel",m),className:"ml8",onClick:this.onClickCancel},g.a.createElement(j.a,{id:"js.com.Ind1.0029",defaultMessage:"取消"})),g.a.createElement(V.a,{show:n,context:g.a.createElement(j.a,{id:"js.com.Ind1.0030",defaultMessage:"数据未保存，确定离开 ?"}),confirmFn:this.onClickPopUnSaveOK,cancelFn:this.onClickPopUnSaveCancel}))),g.a.createElement("div",{className:"grid-parent"},g.a.createElement(I.a,{ref:function(e){return a.grid=e},data:i,rowKey:function(e){return e.id?e.id:e.key},columns:this.column,paginationObj:h,columnFilterAble:p,showHeaderMenu:p,dragborder:p,draggable:p,syncHover:p,getSelectedDataFunc:this.getSelectedDataFunc,scroll:{y:r}})),g.a.createElement(V.a,{show:t,context:g.a.createElement(j.a,{id:"js.com.Ind1.0031",defaultMessage:"是否要删除?"}),confirmFn:this.onClickDel,cancelFn:this.onClickPopCancel}),g.a.createElement(x.Loading,{fullScreen:!0,show:s}))}}]),a}(n.Component)),Ve=Object(j.d)(Pe),Oe=t(23),Te=(t(69),{GET_LIST:"".concat("/iuap-pap-demo-be","/inline_allowances/list"),GET_ADD:"".concat("/iuap-pap-demo-be","/inline_allowances/saveMultiple"),GET_UPDATE:"".concat("/iuap-pap-demo-be","/inline_allowances/updateMultiple"),GET_DELETE:"".concat("/iuap-pap-demo-be","/inline_allowances/deleteBatch"),GET_LIST_BY_COL:"".concat("/iuap-pap-demo-be","/inline_allowances/listByColumn"),GET_TOEXPORTEXCEL:"".concat("/iuap-pap-demo-be","/inline_allowances/toExportExcel")}),_e=(window[window.webkitURL?"webkitURL":"URL"],{name:"inlineEdit",initialState:{cacheData:[],tableData:[],selectData:[],status:"view",rowEditStatus:!0,showLoading:!1,list:[],totalPages:1,total:0,queryParam:{pageParams:{pageIndex:0,pageSize:25},whereParams:[]}},reducers:{updateState:function(e,a){return c()({},e,a)}},effects:{loadList:(xe=s()(y.a.mark(function e(r,l){var i,s,o,c,d,u,m,p,f,h,g,v;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return E.actions.inlineEdit.updateState({showLoading:!0,status:"view",rowEditStatus:!0,selectData:[]}),i=l().inlineEdit,s=r||i.queryParam,e.t0=M.o,e.next=6,a=s,t=void 0,t=Object.assign({},a),n=Object(M.f)(t.pageParams),delete t.pageParams,Object(Oe.a)(Te.GET_LIST,{method:"post",data:t,param:n});case 6:e.t1=e.sent,o=(0,e.t0)(e.t1),c=o.result,d=c.data,u={showLoading:!1},m=null,m=d?(p=d.content,f=d.number,h=d.totalPages,g=d.totalElements,v=f+1,Object.assign({},u,{list:p,pageIndex:v,totalPages:h,total:g,queryParam:s,cacheData:p})):u,E.actions.inlineEdit.updateState(m);case 14:case"end":return e.stop()}var a,t,n},e)})),function(e,a){return xe.apply(this,arguments)}),adds:(je=s()(y.a.mark(function e(t,n){var r,l,i,s,o,c;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return E.actions.inlineEdit.updateState({showLoading:!0}),r=n(),l=r.intl.localeData,i=l["js.sin.src.0001"]||"保存成功",e.t0=M.o,e.next=7,a=t,Object(Oe.a)(Te.GET_ADD,{method:"post",data:a});case 7:if(e.t1=e.sent,e.t2=i,s=(0,e.t0)(e.t1,e.t2),o=s.result,c=o.status,E.actions.inlineEdit.updateState({showLoading:!1}),"success"===c)return E.actions.inlineEdit.loadList(),e.abrupt("return",!0);e.next=18;break;case 18:return e.abrupt("return",!1);case 19:case"end":return e.stop()}var a},e)})),function(e,a){return je.apply(this,arguments)}),removes:(we=s()(y.a.mark(function e(t,n){var r,l,i,s,o,c,d,u,m,p,f;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return E.actions.inlineEdit.updateState({showLoading:!0}),r=n(),l=r.intl.localeData,i=l["js.sin.src.0002"]||"删除成功",e.t0=M.o,e.next=7,a=t,Object(Oe.a)(Te.GET_DELETE,{method:"post",data:a});case 7:if(e.t1=e.sent,e.t2=i,s=(0,e.t0)(e.t1,e.t2),o=s.result,c=o.status,E.actions.inlineEdit.updateState({showLoading:!1}),"success"===c)return d=n().inlineEdit,u=d.queryParam,m=d.list,p=d.totalPages,0<(f=u.pageParams.pageIndex)&&f+1===p&&t.length===m.length&&(u.pageParams.pageIndex=f-1),E.actions.inlineEdit.loadList(u),e.abrupt("return",!0);e.next=22;break;case 22:return e.abrupt("return",!1);case 23:case"end":return e.stop()}var a},e)})),function(e,a){return we.apply(this,arguments)}),updates:(be=s()(y.a.mark(function e(t,n){var r,l,i,s,o,c;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return E.actions.inlineEdit.updateState({showLoading:!0}),r=n(),l=r.intl.localeData,i=l["js.sin.src.0003"]||"更新成功",e.t0=M.o,e.next=7,a=t,Object(Oe.a)(Te.GET_UPDATE,{method:"post",data:a});case 7:if(e.t1=e.sent,e.t2=i,s=(0,e.t0)(e.t1,e.t2),o=s.result,c=o.status,E.actions.inlineEdit.updateState({showLoading:!1}),"success"===c)return E.actions.inlineEdit.loadList(),e.abrupt("return",!0);e.next=18;break;case 18:return e.abrupt("return",!1);case 19:case"end":return e.stop()}var a},e)})),function(e,a){return be.apply(this,arguments)}),resetData:function(e,a){var t=a().inlineEdit.cacheData.slice();t.forEach(function(e){delete e._edit});var n={list:t};e&&(n.status="view"),E.actions.inlineEdit.updateState(n)}}});r.a.model(_e);var Ne=Object(E.connect)(function(e){return e.inlineEdit},null)(Ve),qe=t(82);t(1813);Object(E.render)(g.a.createElement(qe.a,null,g.a.createElement(Ne,null)),document.querySelector("#app"))}});
//# sourceMappingURL=index.js.map