/*! build:ucf hash:936b680b4d635d3ce626, chunkhash:28ebc6a27759253a5d1a, name:singletable-inline-edit/index, filebase:index.js, query:, file:singletable-inline-edit/index.js */!function(e){function a(a){for(var n,i,s=a[0],o=a[1],c=a[2],u=0,m=[];u<s.length;u++)i=s[u],r[i]&&m.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(a);m.length;)m.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var e,a=0;a<l.length;a++){for(var t=l[a],n=!0,s=1;s<t.length;s++){var o=t[s];0!==r[o]&&(n=!1)}n&&(l.splice(a--,1),e=i(i.s=t[0]))}return e}var n={},r={4:0},l=[];function i(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=n,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)i.d(t,n,function(a){return e[a]}.bind(null,n));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var d=o;l.push([2012,0]),t()}({1995:function(e,a,t){},1996:function(e,a,t){},2012:function(e,a,t){"use strict";t.r(a);t(164);var n=t(0),r=t.n(n),l=t(3),i=t.n(l),s=t(10),o=t.n(s),c=t(19),d=t.n(c),u=t(36),m=t.n(u),p=t(12),f=t.n(p),g=t(13),h=t.n(g),v=t(14),E=t.n(v),y=t(15),b=t.n(y),k=t(16),w=t.n(k),j=t(2),x=t(5),S=t(4),M=t.n(S),C=t(7),I=t(71),D=t(65),P=t(24),V=t(72),O=t(96),N=t(9),_=t.n(N),L=t(76),T=t.n(L),q=t(32),Y=t(64),A=t.n(Y),F=t(44),G=t(70),R=t(125),U=t(161),H=q.a.Item,J=x.Select.Option,K=A.a.YearPicker,z=function(e){function a(e){var t;return f()(this,a),(t=E()(this,b()(a).call(this,e))).search=function(){var e=t.props,a=e.status;(0,e.form.validateFields)(function(e,n){n.year&&(n.year=n.year.format("YYYY")),n.dept&&(n.dept=JSON.parse(n.dept).refpk),"view"!=a?t.setState({show:!0,values:n}):t.getQuery(n,0)})},t.reset=function(){t.props.form.resetFields()},t.onClickGo=function(){t.getQuery(t.state.values,0),t.setState({show:!1}),l.actions.inlineEdit.updateState({status:"view",rowEditStatus:!0})},t.onClickCancel=function(){t.setState({show:!1})},t.getQuery=function(e,a){var n=Object(C.e)(t.props.queryParam),r=n.pageParams,i=n.whereParams;for(var s in i=Object(C.e)(i),r.pageIndex=0,e){var o=!0,c=!1,d=void 0;try{for(var u,m=i.entries()[Symbol.iterator]();!(o=(u=m.next()).done);o=!0){var p=T()(u.value,2),f=p[0];if(s===p[1].key){i.splice(f,1);break}}}catch(e){c=!0,d=e}finally{try{o||null==m.return||m.return()}finally{if(c)throw d}}if((e[s]||0===e[s])&&0===a){var g="LIKE";["code","month"].includes(s)&&(g="EQ"),["serviceYearsCompany"].includes(s)&&(g="GTEQ"),i.push({key:s,value:e[s],condition:g})}}n.whereParams=i,0===a&&l.actions.inlineEdit.loadList(n)},t.state={show:!1},t}return w()(a,e),h()(a,[{key:"render",value:function(){var e=this.props,a=e.form.getFieldProps,t=e.searchOpen,n=e.onCallback;return r.a.createElement(R.a,{searchOpen:t,reset:this.reset,onCallback:n,search:this.search,intl:this.props.intl},r.a.createElement(q.a,{size:"sm"},r.a.createElement(H,{label:r.a.createElement(j.a,{id:"js.com.Sea2.0001",defaultMessage:"员工编号"})},r.a.createElement(x.FormControl,_()({placeholder:this.props.intl.formatMessage({id:"js.com.Sea2.0002",defaultMessage:"精确查询"})},a("code",{initialValue:""})))),r.a.createElement(H,{label:r.a.createElement(j.a,{id:"js.com.Sea2.0003",defaultMessage:"员工姓名"})},r.a.createElement(x.FormControl,_()({placeholder:this.props.intl.formatMessage({id:"js.com.Sea2.0004",defaultMessage:"模糊查询"})},a("name",{initialValue:""})))),r.a.createElement(H,{label:r.a.createElement(j.a,{id:"js.com.Sea2.0005",defaultMessage:"部门"})},r.a.createElement(G.a,a("dept",{initialValue:""}))),r.a.createElement(H,{label:r.a.createElement(j.a,{id:"js.com.Sea2.0006",defaultMessage:"年份"})},r.a.createElement(K,_()({},a("year",{initialValue:null}),{format:"YYYY",locale:F.a,placeholder:this.props.intl.formatMessage({id:"js.com.Sea2.0007",defaultMessage:"选择年"})}))),r.a.createElement(H,{label:r.a.createElement(j.a,{id:"js.com.Sea2.0008",defaultMessage:"月份"})},r.a.createElement(U.a,a("month",{initialValue:""}))),r.a.createElement(H,{label:r.a.createElement(j.a,{id:"js.com.Sea2.0009",defaultMessage:"是否超标"})},r.a.createElement(x.Select,a("exdeeds",{initialValue:""}),r.a.createElement(J,{value:""},r.a.createElement(j.a,{id:"js.com.Sea2.0010",defaultMessage:"请选择"})),r.a.createElement(J,{value:"0"},r.a.createElement(j.a,{id:"js.com.Sea2.0011",defaultMessage:"未超标"})),r.a.createElement(J,{value:"1"},r.a.createElement(j.a,{id:"js.com.Sea2.0012",defaultMessage:"超标"}))))),r.a.createElement(V.a,{show:this.state.show,context:"数据未保存，确定查询 ?",confirmFn:this.onClickGo,cancelFn:this.onClickCancel}))}}]),a}(n.Component),Q=q.a.createForm()(Object(j.d)(z)),W=t(226),B=t(31),X=t.n(B),Z=t(1),$=t.n(Z),ee=t(82),ae=t(89),te=(t(187),{value:$.a.any,onChange:$.a.func,className:$.a.string,field:$.a.string,index:$.a.number,message:$.a.string,data:$.a.array,required:$.a.bool,onValidate:$.a.func,isFlag:$.a.bool,validate:$.a.bool}),ne={field:"",index:"",message:r.a.createElement(j.a,{id:"js.com.Row2.0001",defaultMessage:"请选择此字段"}),data:[],required:!1,isFlag:!1,validate:!1,className:""},re=function(e){function a(e){var t;return f()(this,a),(t=E()(this,b()(a).call(this,e))).handlerChange=function(e){var a=t.props,n=a.onChange,r=a.field,l=a.index,i=a.status;t.setState({value:e,flag:"edit"==i},function(){t.validate()}),n&&n(r,e,l)},t.validate=function(){var e=t.props,a=e.required,n=e.field,r=e.index,l=e.onValidate,i=t.state.value,s=X()({},n,{type:"number",required:a});new ee.a(s).validate(X()({},n,i),function(e,a){e?t.setState({error:!0}):t.setState({error:!1}),l&&l(n,a,r)})},t.state={value:e.value,flag:!1,error:!1},t}return w()(a,e),h()(a,[{key:"componentWillReceiveProps",value:function(e,a){1==e.validate&&this.validate()}},{key:"render",value:function(){var e=this.state,a=e.value,t=e.error,n=e.flag,l=this.props,i=l.className,s=l.message,o=l.required,c=l.data;return r.a.createElement(ae.a,{required:o,error:t,message:s,flag:n},r.a.createElement(x.Select,{className:i,value:a,onChange:this.handlerChange,data:c}))}}]),a}(n.Component);re.propTypes=te,re.defaultProps=ne;var le=re,ie=t(191),se=t(105),oe=t.n(se),ce=A.a.YearPicker,de={value:$.a.any,onChange:$.a.func,className:$.a.string,field:$.a.string,index:$.a.number,message:$.a.string,data:$.a.array,required:$.a.bool,onValidate:$.a.func,isFlag:$.a.bool,validate:$.a.bool},ue={field:"",index:"",message:r.a.createElement(j.a,{id:"js.com.Row1.0001",defaultMessage:"请输入此字段"}),data:[],required:!1,isFlag:!1,validate:!1},me=function(e){function a(e){var t;return f()(this,a),(t=E()(this,b()(a).call(this,e))).handlerChange=function(e){var a=t.props,n=a.onChange,r=a.field,l=a.index,i=a.status;t.setState({value:e,flag:"edit"==i},function(){t.validate()}),n&&n(r,M()(e).format("YYYY"),l)},t.validate=function(){var e=t.props,a=e.required,n=e.field,r=e.index,l=e.onValidate,i=t.state.value,s=X()({},n,{type:"object",required:a});new ee.a(s).validate(X()({},n,i),function(e,a){e?t.setState({error:!0}):t.setState({error:!1}),l&&l(n,a,r)})},t.state={value:M()(e.value),flag:!1,error:!1},t}return w()(a,e),h()(a,[{key:"componentWillReceiveProps",value:function(e){1==e.validate&&this.validate()}},{key:"render",value:function(){var e=this.state,a=e.value,t=e.error,n=e.flag,l=this.props,i=l.className,s=l.message,o=l.required;return r.a.createElement(ae.a,{required:o,error:t,message:s,flag:n},r.a.createElement(ce,{className:i,value:a,onChange:this.handlerChange,format:"YYYY",locale:oe.a,placeholder:this.props.intl.formatMessage({id:"js.com.Row1.0002",defaultMessage:"选择年"})}))}}]),a}(n.Component);me.propTypes=de,me.defaultProps=ue;var pe=me,fe={value:$.a.any,onChange:$.a.func,className:$.a.string,field:$.a.string,index:$.a.number,message:$.a.string,data:$.a.array,required:$.a.bool,onValidate:$.a.func,isFlag:$.a.bool,validate:$.a.bool},ge={field:"",index:"",message:r.a.createElement(j.a,{id:"js.com.Row3.0001",defaultMessage:"请选择部门参照"}),data:[],required:!1,isFlag:!1,validate:!1},he=function(e){function a(e){var t;return f()(this,a),(t=E()(this,b()(a).call(this,e))).onSave=function(e){var a=t.props,n=a.onChange,r=a.field,l=a.index,i=a.status,s=e[0],o=JSON.stringify(s),c=s.refpk;t.setState({value:o,flag:"edit"==i},function(){t.validate()}),n&&n(r,c,l,s.refname)},t.validate=function(){var e=t.props,a=e.required,n=e.field,r=e.index,l=e.onValidate,i=t.state.value,s=X()({},n,{type:"string",required:a,pattern:/[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/});new ee.a(s).validate(X()({},n,i),function(e,a){e?t.setState({error:!0}):t.setState({error:!1}),l&&l(n,a,r)})},t.state={value:e.record.deptName?JSON.stringify({refpk:e.record.dept,refname:e.record.deptName}):"",flag:!1,error:!1},t}return w()(a,e),h()(a,[{key:"componentWillReceiveProps",value:function(e){1==e.validate&&this.validate()}},{key:"render",value:function(){var e=this.state,a=e.value,t=e.error,n=e.flag,l=this.props,i=l.className,s=l.message,o=l.required;return r.a.createElement(ae.a,{required:o,error:t,message:s,flag:n},r.a.createElement(G.a,{style:{width:"100%"},className:i,value:a,onSave:this.onSave}))}}]),a}(n.Component);he.propTypes=fe,he.defaultProps=ge;var ve=he,Ee={value:$.a.any,onChange:$.a.func,className:$.a.string,field:$.a.string,index:$.a.number,message:$.a.string,data:$.a.array,required:$.a.bool,onValidate:$.a.func,isFlag:$.a.bool,validate:$.a.bool},ye={field:"",index:"",message:r.a.createElement(j.a,{id:"js.com.Row6.0001",defaultMessage:"请选择职级参照"}),data:[],required:!1,isFlag:!1,validate:!1},be=function(e){function a(e){var t;return f()(this,a),(t=E()(this,b()(a).call(this,e))).onSave=function(e){var a=t.props,n=a.onChange,r=a.field,l=a.index,i=a.status,s=e[0],o=JSON.stringify(s),c=s.refpk;t.setState({value:o,flag:"edit"==i},function(){t.validate()}),n&&n(r,c,l,s.refname)},t.validate=function(){var e=t.props,a=e.required,n=e.field,r=e.index,l=e.onValidate,i=t.state.value,s=X()({},n,{type:"string",required:a,pattern:/[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/});new ee.a(s).validate(X()({},n,i),function(e,a){e?t.setState({error:!0}):t.setState({error:!1}),l&&l(n,a,r)})},t.state={value:e.record.postLevelName?JSON.stringify({refpk:e.record.postLevel,refname:e.record.postLevelName}):"",flag:!1,error:!1},t}return w()(a,e),h()(a,[{key:"componentWillReceiveProps",value:function(e){1==e.validate&&this.validate()}},{key:"render",value:function(){var e=this.state,a=e.value,t=e.error,n=e.flag,l=this.props,i=l.className,s=l.message,o=l.required;return r.a.createElement(ae.a,{required:o,error:t,message:s,flag:n},r.a.createElement(G.b,{style:{width:"100%"},className:i,value:a,onSave:this.onSave}))}}]),a}(n.Component);be.propTypes=Ee,be.defaultProps=ye;var ke=be,we=t(339),je={name:{component:W.a,type:"text"},sex:{component:le,selectList:[{key:r.a.createElement(j.a,{id:"js.com.Ind2.0001",defaultMessage:"请选择"}),value:"",disabled:!0},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0002",defaultMessage:"男"}),value:1},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0003",defaultMessage:"女"}),value:0}],type:"select"},serviceYears:{component:ie.a,props:{iconStyle:"one",max:99,min:0,step:1},type:"number"},serviceYearsCompany:{component:ie.a,props:{iconStyle:"one",max:99,min:0,step:1},type:"number"},month:{component:le,selectList:[{key:r.a.createElement(j.a,{id:"js.com.Ind2.0001",defaultMessage:"请选择"}),value:"",disabled:!0},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0004",defaultMessage:"一月"}),value:1},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0005",defaultMessage:"二月"}),value:2},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0006",defaultMessage:"三月"}),value:3},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0007",defaultMessage:"四月"}),value:4},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0008",defaultMessage:"五月"}),value:5},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0009",defaultMessage:"六月"}),value:6},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0010",defaultMessage:"七月"}),value:7},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0011",defaultMessage:"八月"}),value:8},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0012",defaultMessage:"九月"}),value:9},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0013",defaultMessage:"十月"}),value:10},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0014",defaultMessage:"十一月"}),value:11},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0015",defaultMessage:"十二月"}),value:12}],type:"select"},allowanceType:{component:le,selectList:[{key:r.a.createElement(j.a,{id:"js.com.Ind2.0001",defaultMessage:"请选择"}),value:"",disabled:!0},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0016",defaultMessage:"电脑补助"}),value:1},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0017",defaultMessage:"住宿补助"}),value:2},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0018",defaultMessage:"交通补助"}),value:3}],type:"select"},allowanceStandard:{component:ie.a,props:{max:999999,min:0,step:1,precision:2},type:"number"},allowanceActual:{component:ie.a,props:{max:999999,min:0,step:1,precision:2},type:"number"},exdeeds:{component:le,selectList:[{key:r.a.createElement(j.a,{id:"js.com.Ind2.0001",defaultMessage:"请选择"}),value:"",disabled:!0},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0019",defaultMessage:"未超标"}),value:0},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0020",defaultMessage:"超标"}),value:1}],type:"select"},pickType:{component:le,selectList:[{key:r.a.createElement(j.a,{id:"js.com.Ind2.0001",defaultMessage:"请选择"}),value:"",disabled:!0},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0021",defaultMessage:"转账"}),value:1},{key:r.a.createElement(j.a,{id:"js.com.Ind2.0022",defaultMessage:"现金"}),value:2}],type:"select"},remark:{component:W.a,type:"text"},year:{component:pe,type:"dateYear"},date:{component:we.a,type:"date"},dept:{component:ve,type:"ref",valueKey:"deptName",key:"dept"},level:{component:ke,type:"ref",valueKey:"levelName",key:"level"}},xe=function(e){function a(e){var t;return f()(this,a),(t=E()(this,b()(a).call(this,e))).renderComp=function(){var e=t.props,a=e.type,n=e.value,l=e.record,i=je[a];if(i){var s,o=i.component,c=i.type,d=i.props,u=d||{},m=l._edit,p=l._status,f=l._validate;switch(c){case"dateYear":case"date":case"text":s=n;break;case"number":s=d.precision&&d.precision>0?"number"==typeof n?n.toFixed(d.precision):"":n;break;case"select":var g=i.selectList.find(function(e){return e.value===n});s=g?g.key:"";break;case"ref":s=l[i.valueKey];break;default:s=""}return m?r.a.createElement(o,_()({status:p,validate:f},u,t.props,{data:i.selectList})):r.a.createElement("div",null,s)}return r.a.createElement("div",null,r.a.createElement(j.a,{id:"js.com.Ind2.0023",defaultMessage:"组件类型错误"}))},t}return w()(a,e),h()(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.renderComp())}}]),a}(n.Component),Se=Object(j.d)(xe),Me=(t(1995),function(e){function a(e){var t;return f()(this,a),(t=E()(this,b()(a).call(this,e))).formatMessage=t.props.intl.formatMessage,t.oldData=[],t.column=[{title:t.formatMessage({id:"js.com.Ind1.0001",defaultMessage:"员工编号"}),dataIndex:"code",key:"code",width:150},{title:t.formatMessage({id:"js.com.Ind1.0002",defaultMessage:"员工姓名"}),dataIndex:"name",key:"name",width:120,render:function(e,a,n){return r.a.createElement(Se,{type:"name",value:e,field:"name",index:n,required:!0,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}},{title:t.formatMessage({id:"js.com.Ind1.0003",defaultMessage:"员工性别"}),dataIndex:"sexEnumValue",key:"sexEnumValue",width:120,render:function(e,a,n){return r.a.createElement(Se,{type:"sex",value:a.sex,field:"sex",index:n,required:!0,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}},{title:t.formatMessage({id:"js.com.Ind1.0004",defaultMessage:"所属部门"}),dataIndex:"deptName",key:"deptName",width:120,render:function(e,a,n){return r.a.createElement(Se,{type:"dept",field:"dept",index:n,required:!0,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}},{title:t.formatMessage({id:"js.com.Ind1.0005",defaultMessage:"职级"}),dataIndex:"levelName",key:"levelName",width:120,render:function(e,a,n){return r.a.createElement(Se,{type:"level",field:"postLevel",index:n,required:!0,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}},{title:t.formatMessage({id:"js.com.Ind1.0006",defaultMessage:"工龄"}),dataIndex:"serviceYears",key:"serviceYears",width:130,className:"column-number-right ",render:function(e,a,n){return r.a.createElement(Se,{type:"serviceYears",value:e,field:"serviceYears",index:n,required:!0,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}},{title:t.formatMessage({id:"js.com.Ind1.0007",defaultMessage:"司龄"}),dataIndex:"serviceYearsCompany",key:"serviceYearsCompany",width:130,className:"column-number-right ",render:function(e,a,n){return r.a.createElement(Se,{type:"serviceYearsCompany",value:e,field:"serviceYearsCompany",index:n,required:!0,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}},{title:t.formatMessage({id:"js.com.Ind1.0008",defaultMessage:"年份"}),dataIndex:"year",key:"year",width:100,render:function(e,a,n){return r.a.createElement(Se,{type:"year",value:e,field:"year",index:n,required:!0,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}},{title:t.formatMessage({id:"js.com.Ind1.0009",defaultMessage:"月份"}),dataIndex:"monthEnumValue",key:"monthEnumValue",width:120,render:function(e,a,n){return r.a.createElement(Se,{type:"month",value:a.month,field:"month",index:n,required:!0,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}},{title:t.formatMessage({id:"js.com.Ind1.0010",defaultMessage:"补贴类别"}),dataIndex:"allowanceTypeEnumValue",key:"allowanceTypeEnumValue",width:120,render:function(e,a,n){return r.a.createElement(Se,{type:"allowanceType",value:a.allowanceType,field:"allowanceType",index:n,required:!0,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}},{title:t.formatMessage({id:"js.com.Ind1.0011",defaultMessage:"补贴标准"}),dataIndex:"allowanceStandard",key:"allowanceStandard",width:120,className:"column-number-right ",render:function(e,a,n){return r.a.createElement(Se,{type:"allowanceStandard",value:e,field:"allowanceStandard",index:n,required:!0,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}},{title:t.formatMessage({id:"js.com.Ind1.0012",defaultMessage:"实际补贴"}),dataIndex:"allowanceActual",key:"allowanceActual",width:120,className:"column-number-right ",render:function(e,a,n){return r.a.createElement(Se,{type:"allowanceActual",value:e,field:"allowanceActual",index:n,required:!0,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}},{title:t.formatMessage({id:"js.com.Ind1.0013",defaultMessage:"是否超标"}),dataIndex:"exdeedsEnumValue",key:"exdeedsEnumValue",width:120,render:function(e,a,n){return r.a.createElement(Se,{type:"exdeeds",value:a.exdeeds,field:"exdeeds",index:n,required:!0,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}},{title:t.formatMessage({id:"js.com.Ind1.0015",defaultMessage:"领取方式"}),dataIndex:"pickTypeEnumValue",key:"pickTypeEnumValue",width:120,render:function(e,a,n){return r.a.createElement(Se,{type:"pickType",value:a.pickType,field:"pickType",index:n,required:!0,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}},{title:t.formatMessage({id:"js.com.Ind1.0017",defaultMessage:"备注"}),dataIndex:"remark",key:"remark",width:100,render:function(e,a,n){return r.a.createElement(Se,{type:"remark",value:e,field:"remark",index:n,required:!1,record:a,onChange:t.changeAllData,onValidate:t.onValidate})}}],t.changeAllData=function(e,a,n,r){var i=t.oldData,s=Object(C.e)(t.props.list);i[n][e]=a,r&&(i[n][e+"Name"]=r),s[n]._checked||(s[n]._checked=!0,l.actions.inlineEdit.updateState({list:s})),i[n]._checked=!0,t.oldData=i},t.onValidate=function(e,a,n){t.oldData.length>0&&(t.oldData[n]["_".concat(e,"Validate")]=null==a)},t.getSelectedDataFunc=function(e,a,n){var r=t.props.list,i=Object(C.e)(r);null!=n?i[n]._checked=!i[n]._checked:e.length>0?i.map(function(e){e._disabled||(e._checked=!0)}):i.map(function(e){e._disabled||(e._checked=!1)}),l.actions.inlineEdit.updateState({selectData:e,list:i})},t.freshData=function(e){t.onPageSelect(e,0)},t.onDataNumSelect=function(e,a){t.onPageSelect(a,1)},t.onPageSelect=function(e,a){var n=Object(C.e)(t.props.queryParam),r=Object(C.j)(e,a,n.pageParams),i=r.pageIndex,s=r.pageSize;n.pageParams={pageIndex:i,pageSize:s},l.actions.inlineEdit.updateState(n),l.actions.inlineEdit.loadList(n)},t.filterArrayNull=function(e){return e.filter(function(e){return null!=e})},t.hasCheck=function(){var e=t.props,a=e.selectData,n=e.list,r=!1;return a.forEach(function(e){1==e._checked&&(r=!0)}),n.forEach(function(e){1==e._checked&&(r=!0)}),r},t.newDataTmp={_edit:!0,_isNew:!0,_checked:!1,_disabled:!1,_flag:!1,code:"",name:"",sex:"",sexEnumValue:"",deptName:"",levelName:"",serviceYears:0,serviceYearsCompany:0,year:M()().format("YYYY"),month:"",monthEnumValue:"",allowanceType:"",allowanceTypeEnumValue:"",allowanceStandard:0,allowanceActual:0,exdeeds:"",exdeedsEnumValue:"",pickType:"",pickTypeEnumValue:"",remark:""},t.handlerNew=function(){var e=Object(C.e)(t.props.list),a=m()({key:Object(C.r)()},t.newDataTmp);if(t.oldData.length<=0&&(e.forEach(function(e){e._disabled=!0,e._checked=!1}),t.grid.resetColumns(t.column)),t.oldData.unshift(a),e.unshift(a),0!=t.oldData.length)for(var n=0;n<t.oldData.length;n++)for(var r=t.oldData[n],i=0;i<e.length;i++)if(r.key===e[i].key){e[i]=m()({},r);break}l.actions.inlineEdit.updateState({list:e,status:"new",rowEditStatus:!1,selectData:[]})},t.onClickUpdate=function(){var e=t.props.list.map(function(e){return e._edit=!0,e._checked=!1,e._status="edit",e});t.grid.resetColumns(t.column),t.oldData=Object(C.e)(e),l.actions.inlineEdit.updateState({list:e,status:"edit",rowEditStatus:!1})},t.onClickDownloadTemplate=function(){window.open("".concat("/iuap-pap-demo-be","/inline_allowances/excelTemplateDownload"))},t.filterList=function(e,a,t){var n=a.slice(),r=[];return e.forEach(function(e){n.forEach(function(a,n){e[t]===a[t]&&a._checked&&(a._validate=!0,r.push(e))})}),{newList:n,selectList:r}},t.isVerifyData=function(e){var a=!0,t=/Validate\b/;return e.forEach(function(n,r){var l=Object.keys(n);if(a)for(var i=0;i<l.length;i++)if(t.test(l[i])){if(!e[r][l[i]]){a=!1;break}a=!0}}),a},t.onClickSave=d()(o.a.mark(function e(){var a,n,r,i,s,c,d;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.props,n=a.status,r=a.list,i=a.intl,s=null,c=null,d=i.formatMessage({id:"js.com.Ind1.0018",defaultMessage:"请勾选数据后再新增"}),e.t0=n,e.next="new"===e.t0?7:"edit"===e.t0?10:14;break;case 7:return s=t.filterList(t.oldData,r,"key"),c=l.actions.inlineEdit.adds,e.abrupt("break",15);case 10:return s=t.filterList(t.oldData,r,"id"),c=l.actions.inlineEdit.updates,d=i.formatMessage({id:"js.com.Ind1.0019",defaultMessage:"请勾选数据后再更新"}),e.abrupt("break",15);case 14:return e.abrupt("break",15);case 15:if(!(s.selectList.length>0)){e.next=28;break}return e.next=18,l.actions.inlineEdit.updateState({list:s.newList});case 18:if(!t.isVerifyData(s.selectList)){e.next=25;break}return e.next=21,c(s.selectList);case 21:e.sent&&(t.oldData=[]),e.next=26;break;case 25:Object(C.b)(i.formatMessage({id:"js.com.Ind1.0020",defaultMessage:"数据填写不完整"}));case 26:e.next=29;break;case 28:Object(C.b)(d);case 29:case"end":return e.stop()}},e)})),t.onClickDelConfirm=function(){var e=t.props,a=e.selectData,n=e.intl;a.length>0?t.setState({showPop:!0}):Object(C.b)(n.formatMessage({id:"js.com.Ind1.0021",defaultMessage:"请勾选数据后再删除"}))},t.onClickDel=d()(o.a.mark(function e(){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props.selectData,e.next=3,l.actions.inlineEdit.removes(a);case 3:e.sent&&(t.oldData=[]),t.setState({showPop:!1});case 6:case"end":return e.stop()}},e)})),t.onClickPopCancel=function(){t.setState({showPop:!1})},t.onClickCancel=function(){t.hasCheck()?t.setState({showPopCancel:!0}):(t.oldData=[],l.actions.inlineEdit.resetData(!0),l.actions.inlineEdit.updateState({selectData:[],rowEditStatus:!0}))},t.onClickPopUnSaveOK=function(){l.actions.inlineEdit.resetData(!0),l.actions.inlineEdit.updateState({selectData:[],rowEditStatus:!0}),t.setState({showPopCancel:!1}),t.oldData=[]},t.onClickPopUnSaveCancel=function(){t.setState({showPopCancel:!1})},t.onClickExport=function(){t.grid.exportExcel()},t.resetTableHeight=function(e){var a=0;a=e?Object(C.i)()-420:Object(C.i)()-270,t.setState({tableHeight:a})},t.state={tableHeight:0,showPop:!1,showPopCancel:!1,validate:!1},t}return w()(a,e),h()(a,[{key:"componentWillMount",value:function(){this.resetTableHeight(!0)}},{key:"componentDidMount",value:function(){l.actions.inlineEdit.loadList(this.props.queryParam)}},{key:"render",value:function(){var e=this,a=this.state,t=a.showPop,n=a.showPopCancel,l=a.tableHeight,i=this.props,s=i.list,o=i.showLoading,c=i.pageIndex,d=i.pageSize,u=i.totalPages,m=i.total,p=i.status,f=i.rowEditStatus,g=i.queryParam,h={activePage:c,total:m,items:u,freshData:this.freshData,onDataNumSelect:this.onDataNumSelect,disabled:"view"!==p};return r.a.createElement("div",{className:"inline-edit"},r.a.createElement(D.a,{title:this.props.intl.formatMessage({id:"js.com.Ind1.0022",defaultMessage:"A2单表行内编辑"})}),r.a.createElement(Q,{queryParam:g,status:p,pageSize:d,searchOpen:!0,onCallback:this.resetTableHeight}),r.a.createElement("div",{className:"table-header"},r.a.createElement(O.a,{funcCode:"singletable-inlineEdit"},r.a.createElement(P.a,{role:"add",disabled:Object(C.g)("add",p),className:"ml8",colors:"primary",onClick:this.handlerNew},r.a.createElement(j.a,{id:"js.com.Ind1.0024",defaultMessage:"新增"})),r.a.createElement(P.a,{role:"update",shape:"border",disabled:Object(C.g)("edit",p),className:"ml8",onClick:this.onClickUpdate},r.a.createElement(j.a,{id:"js.com.Ind1.0025",defaultMessage:"修改"})),r.a.createElement(P.a,{role:"delete",shape:"border",disabled:Object(C.g)("del",p),className:"ml8",onClick:this.onClickDelConfirm},r.a.createElement(j.a,{id:"js.com.Ind1.0026",defaultMessage:"删除"})),r.a.createElement(P.a,{shape:"border",disabled:Object(C.g)("export",p),className:"ml8",onClick:this.onClickExport},r.a.createElement(j.a,{id:"js.com.Ind1.0027",defaultMessage:"导出"})),r.a.createElement(P.a,{shape:"border",disabled:Object(C.g)("save",p),className:"ml8",onClick:this.onClickSave},r.a.createElement(j.a,{id:"js.com.Ind1.0028",defaultMessage:"保存"})),r.a.createElement(P.a,{shape:"border",disabled:Object(C.g)("cancel",p),className:"ml8",onClick:this.onClickCancel},r.a.createElement(j.a,{id:"js.com.Ind1.0029",defaultMessage:"取消"})),r.a.createElement(V.a,{show:n,context:r.a.createElement(j.a,{id:"js.com.Ind1.0030",defaultMessage:"数据未保存，确定离开 ?"}),confirmFn:this.onClickPopUnSaveOK,cancelFn:this.onClickPopUnSaveCancel}))),r.a.createElement("div",{className:"grid-parent"},r.a.createElement(I.a,{ref:function(a){return e.grid=a},data:s,rowKey:function(e){return e.id?e.id:e.key},columns:this.column,paginationObj:h,columnFilterAble:f,showHeaderMenu:f,dragborder:f,draggable:f,syncHover:f,getSelectedDataFunc:this.getSelectedDataFunc,scroll:{y:l}})),r.a.createElement(V.a,{show:t,context:r.a.createElement(j.a,{id:"js.com.Ind1.0031",defaultMessage:"是否要删除?"}),confirmFn:this.onClickDel,cancelFn:this.onClickPopCancel}),r.a.createElement(x.Loading,{fullScreen:!0,show:o}))}}]),a}(n.Component)),Ce=Object(j.d)(Me),Ie=t(25),De=(t(63),{GET_LIST:"".concat("/iuap-pap-demo-be","/inline_allowances/list"),GET_ADD:"".concat("/iuap-pap-demo-be","/inline_allowances/saveMultiple"),GET_UPDATE:"".concat("/iuap-pap-demo-be","/inline_allowances/updateMultiple"),GET_DELETE:"".concat("/iuap-pap-demo-be","/inline_allowances/deleteBatch"),GET_LIST_BY_COL:"".concat("/iuap-pap-demo-be","/inline_allowances/listByColumn"),GET_TOEXPORTEXCEL:"".concat("/iuap-pap-demo-be","/inline_allowances/toExportExcel")}),Pe=function(e){var a=Object.assign({},e),t=Object(C.e)(a.pageParams);return delete a.pageParams,Object(Ie.a)(De.GET_LIST,{method:"post",data:a,param:t})},Ve=(window[window.webkitURL?"webkitURL":"URL"],{name:"inlineEdit",initialState:{cacheData:[],tableData:[],selectData:[],status:"view",rowEditStatus:!0,showLoading:!1,list:[],totalPages:1,total:0,queryParam:{pageParams:{pageIndex:0,pageSize:25},whereParams:[]}},reducers:{updateState:function(e,a){return m()({},e,Object(C.e)(a))}},effects:{loadList:function(){var e=d()(o.a.mark(function e(a,t){var n,r,i,s,c,d,u,m,p,f,g,h;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.actions.inlineEdit.updateState({showLoading:!0,status:"view",rowEditStatus:!0,selectData:[]}),n=t().inlineEdit,r=a||n.queryParam,e.t0=C.o,e.next=6,Pe(r);case 6:e.t1=e.sent,i=(0,e.t0)(e.t1),s=i.result,c=s?s.data:null,d={showLoading:!1},u=null,c?(m=c.content,p=c.number,f=c.totalPages,g=c.totalElements,m.forEach(function(e){e.postLevelName=e.levelName}),h=p+1,u=Object.assign({},d,{list:m,pageIndex:h,totalPages:f,total:g,queryParam:r,cacheData:m})):u=d,l.actions.inlineEdit.updateState(u);case 14:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}(),adds:function(){var e=d()(o.a.mark(function e(a,t){var n,r,i,s,c,d;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.actions.inlineEdit.updateState({showLoading:!0}),n=t(),r=n.intl.localeData,i=r["js.sin.src.0001"]||"保存成功",e.t0=C.o,e.next=7,o=a,Object(Ie.a)(De.GET_ADD,{method:"post",data:o});case 7:if(e.t1=e.sent,e.t2=i,s=(0,e.t0)(e.t1,e.t2),c=s.result,d=c.status,l.actions.inlineEdit.updateState({showLoading:!1}),"success"!==d){e.next=18;break}return l.actions.inlineEdit.loadList(),e.abrupt("return",!0);case 18:return e.abrupt("return",!1);case 19:case"end":return e.stop()}var o},e)}));return function(a,t){return e.apply(this,arguments)}}(),removes:function(){var e=d()(o.a.mark(function e(a,t){var n,r,i,s,c,d,u,m,p,f,g;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.actions.inlineEdit.updateState({showLoading:!0}),n=t(),r=n.intl.localeData,i=r["js.sin.src.0002"]||"删除成功",e.t0=C.o,e.next=7,o=a,Object(Ie.a)(De.GET_DELETE,{method:"post",data:o});case 7:if(e.t1=e.sent,e.t2=i,s=(0,e.t0)(e.t1,e.t2),c=s.result,d=c.status,l.actions.inlineEdit.updateState({showLoading:!1}),"success"!==d){e.next=22;break}return u=t().inlineEdit,m=u.queryParam,p=u.list,f=u.totalPages,(g=m.pageParams.pageIndex)>0&&g+1===f&&a.length===p.length&&(m.pageParams.pageIndex=g-1),l.actions.inlineEdit.loadList(m),e.abrupt("return",!0);case 22:return e.abrupt("return",!1);case 23:case"end":return e.stop()}var o},e)}));return function(a,t){return e.apply(this,arguments)}}(),updates:function(){var e=d()(o.a.mark(function e(a,t){var n,r,i,s,c,d;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l.actions.inlineEdit.updateState({showLoading:!0}),n=t(),r=n.intl.localeData,i=r["js.sin.src.0003"]||"更新成功",e.t0=C.o,e.next=7,o=a,Object(Ie.a)(De.GET_UPDATE,{method:"post",data:o});case 7:if(e.t1=e.sent,e.t2=i,s=(0,e.t0)(e.t1,e.t2),c=s.result,d=c.status,l.actions.inlineEdit.updateState({showLoading:!1}),"success"!==d){e.next=18;break}return l.actions.inlineEdit.loadList(),e.abrupt("return",!0);case 18:return e.abrupt("return",!1);case 19:case"end":return e.stop()}var o},e)}));return function(a,t){return e.apply(this,arguments)}}(),resetData:function(e,a){var t=a().inlineEdit.cacheData.slice();t.forEach(function(e){delete e._edit});var n={list:t};e&&(n.status="view"),l.actions.inlineEdit.updateState(n)}}});i.a.model(Ve);var Oe=Object(l.connect)(function(e){return e.inlineEdit},null)(Ce);t(1996);Object(l.render)(r.a.createElement(F.b,null,r.a.createElement(Oe,null)),document.querySelector("#app"))}});