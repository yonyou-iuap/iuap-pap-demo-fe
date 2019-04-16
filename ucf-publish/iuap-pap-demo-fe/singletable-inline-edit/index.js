/*! build:ucf hash:7e0f114faa48f5f88be3, chunkhash:d777ea5cfd21f6e32680, name:singletable-inline-edit/index, filebase:index.js, query:, file:singletable-inline-edit/index.js */!function(s){function e(e){for(var a,t,n=e[0],r=e[1],i=e[2],l=0,o=[];l<n.length;l++)t=n[l],d[t]&&o.push(d[t][0]),d[t]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(s[a]=r[a]);for(p&&p(e);o.length;)o.shift()();return u.push.apply(u,i||[]),c()}function c(){for(var e,a=0;a<u.length;a++){for(var t=u[a],n=!0,r=1;r<t.length;r++){var i=t[r];0!==d[i]&&(n=!1)}n&&(u.splice(a--,1),e=l(l.s=t[0]))}return e}var t={},d={4:0},u=[];function l(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return s[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=s,l.c=t,l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(a,e){if(1&e&&(a=l(a)),8&e)return a;if(4&e&&"object"==typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)l.d(t,n,function(e){return a[e]}.bind(null,n));return t},l.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],n=a.push.bind(a);a.push=e,a=a.slice();for(var r=0;r<a.length;r++)e(a[r]);var p=n;u.push([1792,0]),c()}({1775:function(e,a,t){},1776:function(e,a,t){},1792:function(e,a,t){"use strict";t.r(a);t(146);var n=t(0),v=t.n(n),g=t(2),r=t.n(g),i=t(9),k=t.n(i),l=t(18),s=t.n(l),o=t(31),c=t.n(o),d=t(11),u=t.n(d),p=t(12),m=t.n(p),f=t(13),h=t.n(f),y=t(14),b=t.n(y),E=t(15),w=t.n(E),x=t(4),C=t(3),S=t.n(C),D=t(7),P=t(65),V=t(60),O=t(19),T=t(66),_=t(88),N=t(8),q=t.n(N),L=t(69),Y=t.n(L),j=t(27),I=t(73),A=t.n(I),F=t(58),G=t.n(F),M=t(64),U=t(117),H=t(144),R=j.a.Item,J=x.Select.Option,K=A.a.YearPicker,z=function(e){function a(e){var f;return u()(this,a),(f=h()(this,b()(a).call(this,e))).search=function(){var e=f.props,t=e.status;(0,e.form.validateFields)(function(e,a){a.year&&(a.year=a.year.format("YYYY")),a.dept&&(a.dept=JSON.parse(a.dept).refpk),"view"!=t?f.setState({show:!0,values:a}):f.getQuery(a,0)})},f.reset=function(){f.props.form.resetFields()},f.onClickGo=function(){f.getQuery(f.state.values,0),f.setState({show:!1}),g.actions.inlineEdit.updateState({status:"view",rowEditStatus:!0})},f.onClickCancel=function(){f.setState({show:!1})},f.getQuery=function(e,a){var t=Object(D.f)(f.props.queryParam),n=t.pageParams,r=t.whereParams;for(var i in r=Object(D.f)(r),n.pageIndex=0,e){var l=!0,o=!1,s=void 0;try{for(var c,d=r.entries()[Symbol.iterator]();!(l=(c=d.next()).done);l=!0){var u=Y()(c.value,2),p=u[0];if(i===u[1].key){r.splice(p,1);break}}}catch(e){o=!0,s=e}finally{try{l||null==d.return||d.return()}finally{if(o)throw s}}if((e[i]||0===e[i])&&0===a){var m="LIKE";["code","month"].includes(i)&&(m="EQ"),["serviceYearsCompany"].includes(i)&&(m="GTEQ"),r.push({key:i,value:e[i],condition:m})}}t.whereParams=r,0===a&&g.actions.inlineEdit.loadList(t)},f.state={show:!1},f}return w()(a,e),m()(a,[{key:"render",value:function(){var e=this.props,a=e.form.getFieldProps,t=e.searchOpen,n=e.onCallback;return v.a.createElement(U.a,{searchOpen:t,reset:this.reset,onCallback:n,search:this.search},v.a.createElement(j.a,{size:"sm"},v.a.createElement(R,{label:"员工编号"},v.a.createElement(x.FormControl,q()({placeholder:"精确查询"},a("code",{initialValue:""})))),v.a.createElement(R,{label:"员工姓名"},v.a.createElement(x.FormControl,q()({placeholder:"模糊查询"},a("name",{initialValue:""})))),v.a.createElement(R,{label:"部门"},v.a.createElement(M.a,a("dept",{initialValue:""}))),v.a.createElement(R,{label:"年份"},v.a.createElement(K,q()({},a("year",{initialValue:null}),{format:"YYYY",locale:G.a,placeholder:"选择年"}))),v.a.createElement(R,{label:"月份"},v.a.createElement(H.a,a("month",{initialValue:""}))),v.a.createElement(R,{label:"是否超标"},v.a.createElement(x.Select,a("exdeeds",{initialValue:""}),v.a.createElement(J,{value:""},"请选择"),v.a.createElement(J,{value:"0"},"未超标"),v.a.createElement(J,{value:"1"},"超标")))),v.a.createElement(T.a,{show:this.state.show,context:"数据未保存，确定查询 ?",confirmFn:this.onClickGo,cancelFn:this.onClickCancel}))}}]),a}(n.Component),Q=j.a.createForm()(z),W=t(204),B=t(28),X=t.n(B),Z=t(1),$=t.n(Z),ee=t(82),ae=t(81),te=(t(173),{value:$.a.any,onChange:$.a.func,className:$.a.string,field:$.a.string,index:$.a.number,message:$.a.string,data:$.a.array,required:$.a.bool,onValidate:$.a.func,isFlag:$.a.bool,validate:$.a.bool}),ne=function(e){function a(e){var o;return u()(this,a),(o=h()(this,b()(a).call(this,e))).handlerChange=function(e){var a=o.props,t=a.onChange,n=a.field,r=a.index,i=a.status;o.setState({value:e,flag:"edit"==i},function(){o.validate()}),t&&t(n,e,r)},o.validate=function(){var e=o.props,a=e.required,t=e.field,n=e.index,r=e.onValidate,i=o.state.value,l=X()({},t,{type:"number",required:a});new ee.a(l).validate(X()({},t,i),function(e,a){e?o.setState({error:!0}):o.setState({error:!1}),r&&r(t,a,n)})},o.state={value:e.value,flag:!1,error:!1},o}return w()(a,e),m()(a,[{key:"componentWillReceiveProps",value:function(e,a){1==e.validate&&this.validate()}},{key:"render",value:function(){var e=this.state,a=e.value,t=e.error,n=e.flag,r=this.props,i=r.className,l=r.message,o=r.required,s=r.data;return v.a.createElement(ae.a,{required:o,error:t,message:l,flag:n},v.a.createElement(x.Select,{className:i,value:a,onChange:this.handlerChange,data:s}))}}]),a}(n.Component);ne.propTypes=te,ne.defaultProps={field:"",index:"",message:"请选择此字段",data:[],required:!1,isFlag:!1,validate:!1,className:""};var re=ne,ie=t(179),le=t(200),oe=t.n(le).a.YearPicker,se={value:$.a.any,onChange:$.a.func,className:$.a.string,field:$.a.string,index:$.a.number,message:$.a.string,data:$.a.array,required:$.a.bool,onValidate:$.a.func,isFlag:$.a.bool,validate:$.a.bool},ce=function(e){function a(e){var o;return u()(this,a),(o=h()(this,b()(a).call(this,e))).handlerChange=function(e){var a=o.props,t=a.onChange,n=a.field,r=a.index,i=a.status;o.setState({value:e,flag:"edit"==i},function(){o.validate()}),t&&t(n,S()(e).format("YYYY"),r)},o.validate=function(){var e=o.props,a=e.required,t=e.field,n=e.index,r=e.onValidate,i=o.state.value,l=X()({},t,{type:"object",required:a});new ee.a(l).validate(X()({},t,i),function(e,a){e?o.setState({error:!0}):o.setState({error:!1}),r&&r(t,a,n)})},o.state={value:S()(e.value),flag:!1,error:!1},o}return w()(a,e),m()(a,[{key:"componentWillReceiveProps",value:function(e){1==e.validate&&this.validate()}},{key:"render",value:function(){var e=this.state,a=e.value,t=e.error,n=e.flag,r=this.props,i=r.className,l=r.message,o=r.required;return v.a.createElement(ae.a,{required:o,error:t,message:l,flag:n},v.a.createElement(oe,{className:i,value:a,onChange:this.handlerChange,format:"YYYY",locale:G.a,placeholder:"选择年"}))}}]),a}(n.Component);ce.propTypes=se,ce.defaultProps={field:"",index:"",message:"请输入此字段",data:[],required:!1,isFlag:!1,validate:!1};var de=ce,ue={value:$.a.any,onChange:$.a.func,className:$.a.string,field:$.a.string,index:$.a.number,message:$.a.string,data:$.a.array,required:$.a.bool,onValidate:$.a.func,isFlag:$.a.bool,validate:$.a.bool},pe=function(e){function a(e){var o;return u()(this,a),(o=h()(this,b()(a).call(this,e))).handlerChange=function(e){var a=o.props,t=a.onChange,n=a.field,r=a.index,i=a.status,l=JSON.parse(e).refpk;o.setState({value:e,flag:"edit"==i},function(){o.validate()}),t&&t(n,l,r)},o.validate=function(){var e=o.props,a=e.required,t=e.field,n=e.index,r=e.onValidate,i=o.state.value,l=X()({},t,{type:"string",required:a,pattern:/[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/});new ee.a(l).validate(X()({},t,i),function(e,a){e?o.setState({error:!0}):o.setState({error:!1}),r&&r(t,a,n)})},o.state={value:e.record.deptName?JSON.stringify({refpk:e.record.dept,refname:e.record.deptName}):"",flag:!1,error:!1},o}return w()(a,e),m()(a,[{key:"componentWillReceiveProps",value:function(e){1==e.validate&&this.validate()}},{key:"render",value:function(){var e=this.state,a=e.value,t=e.error,n=e.flag,r=this.props,i=r.className,l=r.message,o=r.required;return v.a.createElement(ae.a,{required:o,error:t,message:l,flag:n},v.a.createElement(M.a,{style:{width:"100%"},className:i,value:a,onChange:this.handlerChange}))}}]),a}(n.Component);pe.propTypes=ue,pe.defaultProps={field:"",index:"",message:"请选择部门参照",data:[],required:!1,isFlag:!1,validate:!1};var me=pe,fe={value:$.a.any,onChange:$.a.func,className:$.a.string,field:$.a.string,index:$.a.number,message:$.a.string,data:$.a.array,required:$.a.bool,onValidate:$.a.func,isFlag:$.a.bool,validate:$.a.bool},he=function(e){function a(e){var o;return u()(this,a),(o=h()(this,b()(a).call(this,e))).handlerChange=function(e){var a=o.props,t=a.onChange,n=a.field,r=a.index,i=a.status,l=JSON.parse(e).refpk;o.setState({value:e,flag:"edit"==i},function(){o.validate()}),t&&t(n,l,r)},o.validate=function(){var e=o.props,a=e.required,t=e.field,n=e.index,r=e.onValidate,i=o.state.value,l=X()({},t,{type:"string",required:a,pattern:/[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/});new ee.a(l).validate(X()({},t,i),function(e,a){e?o.setState({error:!0}):o.setState({error:!1}),r&&r(t,a,n)})},o.state={value:e.record.levelName?JSON.stringify({refpk:e.record.postLevel,refname:e.record.levelName}):"",flag:!1,error:!1},o}return w()(a,e),m()(a,[{key:"componentWillReceiveProps",value:function(e){1==e.validate&&this.validate()}},{key:"render",value:function(){var e=this.state,a=e.value,t=e.error,n=e.flag,r=this.props,i=r.className,l=r.message,o=r.required;return v.a.createElement(ae.a,{required:o,error:t,message:l,flag:n},v.a.createElement(M.b,{style:{width:"100%"},className:i,value:a,onChange:this.handlerChange}))}}]),a}(n.Component);he.propTypes=fe,he.defaultProps={field:"",index:"",message:"请选择职级参照",data:[],required:!1,isFlag:!1,validate:!1};var ve,ye,ge,ke,be=he,Ee=t(308),we={name:{component:W.a,type:"text"},sex:{component:re,selectList:[{key:"请选择",value:"",disabled:!0},{key:"男",value:1},{key:"女",value:0}],type:"select"},serviceYears:{component:ie.a,props:{iconStyle:"one",max:99,min:0,step:1},type:"number"},serviceYearsCompany:{component:ie.a,props:{iconStyle:"one",max:99,min:0,step:1},type:"number"},month:{component:re,selectList:[{key:"请选择",value:"",disabled:!0},{key:"一月",value:1},{key:"二月",value:2},{key:"三月",value:3},{key:"四月",value:4},{key:"五月",value:5},{key:"六月",value:6},{key:"七月",value:7},{key:"八月",value:8},{key:"九月",value:9},{key:"十月",value:10},{key:"十一月",value:11},{key:"十二月",value:12}],type:"select"},allowanceType:{component:re,selectList:[{key:"请选择",value:"",disabled:!0},{key:"电脑补助",value:1},{key:"住宿补助",value:2},{key:"交通补助",value:3}],type:"select"},allowanceStandard:{component:ie.a,props:{max:999999,min:0,step:1,precision:2},type:"number"},allowanceActual:{component:ie.a,props:{max:999999,min:0,step:1,precision:2},type:"number"},exdeeds:{component:re,selectList:[{key:"请选择",value:"",disabled:!0},{key:"未超标",value:0},{key:"超标",value:1}],type:"select"},pickType:{component:re,selectList:[{key:"请选择",value:"",disabled:!0},{key:"转账",value:1},{key:"现金",value:2}],type:"select"},remark:{component:W.a,type:"text"},year:{component:de,type:"dateYear"},date:{component:Ee.a,type:"date"},dept:{component:me,type:"ref",valueKey:"deptName"},level:{component:be,type:"ref",valueKey:"levelName"}},xe=function(e){function a(e){var f;return u()(this,a),(f=h()(this,b()(a).call(this,e))).renderComp=function(){var e=f.props,a=e.type,t=e.value,n=e.record,r=we[a];if(r){var i,l=r.component,o=r.type,s=r.props,c=s||{},d=n._edit,u=n._status,p=n._validate;switch(o){case"dateYear":case"date":case"text":i=t;break;case"number":i=s.precision&&0<s.precision?"number"==typeof t?t.toFixed(s.precision):"":t;break;case"select":var m=r.selectList.find(function(e){return e.value===t});i=m?m.key:"";break;case"ref":i=n[r.valueKey];break;default:i=""}return d?v.a.createElement(l,q()({status:u,validate:p},c,f.props,{data:r.selectList})):v.a.createElement("div",null,i)}return v.a.createElement("div",null,"组件类型错误")},f}return w()(a,e),m()(a,[{key:"render",value:function(){return v.a.createElement("div",null,this.renderComp())}}]),a}(n.Component),Ce=(t(1775),function(e){function a(e){var o;return u()(this,a),(o=h()(this,b()(a).call(this,e))).oldData=[],o.column=[{title:"员工编号",dataIndex:"code",key:"code",width:150},{title:"员工姓名",dataIndex:"name",key:"name",width:120,render:function(e,a,t){return v.a.createElement(xe,{type:"name",value:e,field:"name",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:"员工性别",dataIndex:"sexEnumValue",key:"sexEnumValue",width:120,render:function(e,a,t){return v.a.createElement(xe,{type:"sex",value:a.sex,field:"sex",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:"所属部门",dataIndex:"deptName",key:"deptName",width:120,render:function(e,a,t){return v.a.createElement(xe,{type:"dept",field:"dept",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:"职级",dataIndex:"levelName",key:"levelName",width:120,render:function(e,a,t){return v.a.createElement(xe,{type:"level",field:"postLevel",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:"工龄",dataIndex:"serviceYears",key:"serviceYears",width:130,className:"column-number-right ",render:function(e,a,t){return v.a.createElement(xe,{type:"serviceYears",value:e,field:"serviceYears",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:"司龄",dataIndex:"serviceYearsCompany",key:"serviceYearsCompany",width:130,className:"column-number-right ",render:function(e,a,t){return v.a.createElement(xe,{type:"serviceYearsCompany",value:e,field:"serviceYearsCompany",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:"年份",dataIndex:"year",key:"year",width:100,render:function(e,a,t){return v.a.createElement(xe,{type:"year",value:e,field:"year",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:"月份",dataIndex:"monthEnumValue",key:"monthEnumValue",width:120,render:function(e,a,t){return v.a.createElement(xe,{type:"month",value:a.month,field:"month",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:"补贴类别",dataIndex:"allowanceTypeEnumValue",key:"allowanceTypeEnumValue",width:120,render:function(e,a,t){return v.a.createElement(xe,{type:"allowanceType",value:a.allowanceType,field:"allowanceType",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:"补贴标准",dataIndex:"allowanceStandard",key:"allowanceStandard",width:120,className:"column-number-right ",render:function(e,a,t){return v.a.createElement(xe,{type:"allowanceStandard",value:e,field:"allowanceStandard",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:"实际补贴",dataIndex:"allowanceActual",key:"allowanceActual",width:120,className:"column-number-right ",render:function(e,a,t){return v.a.createElement(xe,{type:"allowanceActual",value:e,field:"allowanceActual",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:"是否超标",dataIndex:"exdeedsEnumValue",key:"exdeedsEnumValue",width:120,render:function(e,a,t){return v.a.createElement(xe,{type:"exdeeds",value:a.exdeeds,field:"exdeeds",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:"申请时间",dataIndex:"applyTime",key:"applyTime",width:200,render:function(e,a,t){return""!==e&&void 0!==e?v.a.createElement("div",null,S()(e).format("YYYY-MM-DD hh:mm:ss")):v.a.createElement("div",null)}},{title:"领取方式",dataIndex:"pickTypeEnumValue",key:"pickTypeEnumValue",width:120,render:function(e,a,t){return v.a.createElement(xe,{type:"pickType",value:a.pickType,field:"pickType",index:t,required:!0,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}},{title:"领取时间",dataIndex:"pickTime",key:"pickTime",width:200,render:function(e,a,t){return""!==e&&void 0!==e?v.a.createElement("div",null,S()(e).format("YYYY-MM-DD hh:mm:ss")):v.a.createElement("div",null)}},{title:"备注",dataIndex:"remark",key:"remark",width:100,render:function(e,a,t){return v.a.createElement(xe,{type:"remark",value:e,field:"remark",index:t,required:!1,record:a,onChange:o.changeAllData,onValidate:o.onValidate})}}],o.changeAllData=function(e,a,t){var n=o.oldData,r=Object(D.f)(o.props.list);n[t][e]=a,r[t]._checked||(r[t]._checked=!0,g.actions.inlineEdit.updateState({list:r})),n[t]._checked=!0,o.oldData=n},o.onValidate=function(e,a,t){0<o.oldData.length&&(o.oldData[t]["_".concat(e,"Validate")]=null==a)},o.getSelectedDataFunc=function(e,a,t){var n=o.props.list,r=Object(D.f)(n);null!=t?r[t]._checked=!r[t]._checked:0<e.length?r.map(function(e){e._disabled||(e._checked=!0)}):r.map(function(e){e._disabled||(e._checked=!1)}),g.actions.inlineEdit.updateState({selectData:e,list:r})},o.freshData=function(e){o.onPageSelect(e,0)},o.onDataNumSelect=function(e,a){o.onPageSelect(a,1)},o.onPageSelect=function(e,a){var t=Object(D.f)(o.props.queryParam),n=Object(D.k)(e,a,t.pageParams),r=n.pageIndex,i=n.pageSize;t.pageParams={pageIndex:r,pageSize:i},g.actions.inlineEdit.updateState(t),g.actions.inlineEdit.loadList(t)},o.filterArrayNull=function(e){return e.filter(function(e){return null!=e})},o.hasCheck=function(){var e=o.props,a=e.selectData,t=e.list,n=!1;return a.forEach(function(e){1==e._checked&&(n=!0)}),t.forEach(function(e){1==e._checked&&(n=!0)}),n},o.newDataTmp={_edit:!0,_isNew:!0,_checked:!1,_disabled:!1,_flag:!1,code:"",name:"",sex:"",sexEnumValue:"",deptName:"",levelName:"",serviceYears:0,serviceYearsCompany:0,year:S()().format("YYYY"),month:"",monthEnumValue:"",allowanceType:"",allowanceTypeEnumValue:"",allowanceStandard:0,allowanceActual:0,exdeeds:"",exdeedsEnumValue:"",pickType:"",pickTypeEnumValue:"",remark:""},o.handlerNew=function(){var e=Object(D.f)(o.props.list),a=c()({key:Object(D.r)()},o.newDataTmp);o.oldData.length<=0&&(e.forEach(function(e){e._disabled=!0,e._checked=!1}),o.grid.resetColumns(o.column)),o.oldData.unshift(a),e.unshift(a),g.actions.inlineEdit.updateState({list:e,status:"new",rowEditStatus:!1,selectData:[]})},o.onClickUpdate=function(){var e=o.props.list.map(function(e){return e._edit=!0,e._checked=!1,e._status="edit",e});o.grid.resetColumns(o.column),o.oldData=Object(D.f)(e),g.actions.inlineEdit.updateState({list:e,status:"edit",rowEditStatus:!1})},o.onClickDownloadTemplate=function(){window.open("".concat("/iuap-pap-demo-be","/inline_allowances/excelTemplateDownload"))},o.filterList=function(e,a,n){var r=a.slice(),i=[];return e.forEach(function(t){r.forEach(function(e,a){t[n]===e[n]&&e._checked&&(e._validate=!0,i.push(t))})}),{newList:r,selectList:i}},o.isVerifyData=function(r){var i=!0,l=/Validate\b/;return r.forEach(function(e,a){var t=Object.keys(e);if(i)for(var n=0;n<t.length;n++)if(l.test(t[n])){if(!r[a][t[n]]){i=!1;break}i=!0}}),i},o.onClickSave=s()(k.a.mark(function e(){var a,t,n,r,i,l;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=o.props,t=a.status,n=a.list,i=r=null,l="请勾选数据后再新增",e.t0=t,e.next="new"===e.t0?7:"edit"===e.t0?10:14;break;case 7:return r=o.filterList(o.oldData,n,"key"),i=g.actions.inlineEdit.adds,e.abrupt("break",15);case 10:return r=o.filterList(o.oldData,n,"id"),i=g.actions.inlineEdit.updates,l="请勾选数据后再更新",e.abrupt("break",15);case 14:return e.abrupt("break",15);case 15:if(0<r.selectList.length)return e.next=18,g.actions.inlineEdit.updateState({list:r.newList});e.next=28;break;case 18:if(o.isVerifyData(r.selectList))return e.next=21,i(r.selectList);e.next=25;break;case 21:e.sent&&(o.oldData=[]),e.next=26;break;case 25:Object(D.b)("数据填写不完整");case 26:e.next=29;break;case 28:Object(D.b)(l);case 29:case"end":return e.stop()}},e)})),o.onClickDelConfirm=function(){0<o.props.selectData.length?o.setState({showPop:!0}):Object(D.b)("请勾选数据后再删除")},o.onClickDel=s()(k.a.mark(function e(){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.props.selectData,e.next=3,g.actions.inlineEdit.removes(a);case 3:e.sent&&(o.oldData=[]),o.setState({showPop:!1});case 6:case"end":return e.stop()}},e)})),o.onClickPopCancel=function(){o.setState({showPop:!1})},o.onClickCancel=function(){o.hasCheck()?o.setState({showPopCancel:!0}):(o.oldData=[],g.actions.inlineEdit.resetData(!0),g.actions.inlineEdit.updateState({selectData:[],rowEditStatus:!0}))},o.onClickPopUnSaveOK=function(){g.actions.inlineEdit.resetData(!0),g.actions.inlineEdit.updateState({selectData:[],rowEditStatus:!0}),o.setState({showPopCancel:!1}),o.oldData=[]},o.onClickPopUnSaveCancel=function(){o.setState({showPopCancel:!1})},o.onClickExport=function(){o.grid.exportExcel()},o.resetTableHeight=function(e){var a=0;a=e?Object(D.j)()-420:Object(D.j)()-270,o.setState({tableHeight:a})},o.state={tableHeight:0,showPop:!1,showPopCancel:!1,validate:!1},o}return w()(a,e),m()(a,[{key:"componentWillMount",value:function(){this.resetTableHeight(!0)}},{key:"componentDidMount",value:function(){g.actions.inlineEdit.loadList(this.props.queryParam)}},{key:"render",value:function(){var a=this,e=this.state,t=e.showPop,n=e.showPopCancel,r=e.tableHeight,i=this.props,l=i.list,o=i.showLoading,s=i.pageIndex,c=i.pageSize,d=i.totalPages,u=i.total,p=i.status,m=i.rowEditStatus,f=i.queryParam,h={activePage:s,total:u,items:d,freshData:this.freshData,onDataNumSelect:this.onDataNumSelect,disabled:"view"!==p};return v.a.createElement("div",{className:"inline-edit"},v.a.createElement(V.a,{title:"A2单表行内编辑示例"}),v.a.createElement(Q,{queryParam:f,status:p,pageSize:c,searchOpen:!0,onCallback:this.resetTableHeight}),v.a.createElement("div",{className:"table-header"},v.a.createElement(_.a,{funcCode:"singletable-inlineEdit",onComplete:function(){return console.log("按钮权限加载完成")}},v.a.createElement(O.a,{role:"add",disabled:Object(D.h)("add",p),className:"ml8",colors:"primary",onClick:this.handlerNew},"新增"),v.a.createElement(O.a,{role:"update",shape:"border",disabled:Object(D.h)("edit",p),className:"ml8",onClick:this.onClickUpdate},"修改"),v.a.createElement(O.a,{role:"delete",shape:"border",disabled:Object(D.h)("del",p),className:"ml8",onClick:this.onClickDelConfirm},"删除"),v.a.createElement(O.a,{shape:"border",disabled:Object(D.h)("export",p),className:"ml8",onClick:this.onClickExport},"导出"),v.a.createElement(O.a,{shape:"border",disabled:Object(D.h)("save",p),className:"ml8",onClick:this.onClickSave},"保存"),v.a.createElement(O.a,{shape:"border",disabled:Object(D.h)("cancel",p),className:"ml8",onClick:this.onClickCancel},"取消"),v.a.createElement(T.a,{show:n,context:"数据未保存，确定离开 ?",confirmFn:this.onClickPopUnSaveOK,cancelFn:this.onClickPopUnSaveCancel}))),v.a.createElement("div",{className:"grid-parent"},v.a.createElement(P.a,{ref:function(e){return a.grid=e},data:l,rowKey:function(e){return e.id?e.id:e.key},columns:this.column,paginationObj:h,columnFilterAble:m,showHeaderMenu:m,dragborder:m,draggable:m,syncHover:m,getSelectedDataFunc:this.getSelectedDataFunc,scroll:{y:r}})),v.a.createElement(T.a,{show:t,context:"是否要删除 ?",confirmFn:this.onClickDel,cancelFn:this.onClickPopCancel}),v.a.createElement(x.Loading,{fullScreen:!0,show:o}))}}]),a}(n.Component)),Se=t(22),De=(t(68),{GET_LIST:"".concat("/iuap-pap-demo-be","/inline_allowances/list"),GET_ADD:"".concat("/iuap-pap-demo-be","/inline_allowances/saveMultiple"),GET_UPDATE:"".concat("/iuap-pap-demo-be","/inline_allowances/updateMultiple"),GET_DELETE:"".concat("/iuap-pap-demo-be","/inline_allowances/deleteBatch"),GET_LIST_BY_COL:"".concat("/iuap-pap-demo-be","/inline_allowances/listByColumn"),GET_TOEXPORTEXCEL:"".concat("/iuap-pap-demo-be","/inline_allowances/toExportExcel")}),Pe=(window[window.webkitURL?"webkitURL":"URL"],{name:"inlineEdit",initialState:{cacheData:[],tableData:[],selectData:[],status:"view",rowEditStatus:!0,showLoading:!1,list:[],totalPages:1,total:0,queryParam:{pageParams:{pageIndex:0,pageSize:25},whereParams:[]}},reducers:{updateState:function(e,a){return c()({},e,a)}},effects:{loadList:(ke=s()(k.a.mark(function e(r,i){var l,o,s,c,d,u,p,m,f,h,v,y;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g.actions.inlineEdit.updateState({showLoading:!0,status:"view",rowEditStatus:!0,selectData:[]}),l=i().inlineEdit,o=r||l.queryParam,e.t0=D.o,e.next=6,a=o,t=void 0,t=Object.assign({},a),n=Object(D.f)(t.pageParams),delete t.pageParams,Object(Se.a)(De.GET_LIST,{method:"post",data:t,param:n});case 6:e.t1=e.sent,s=(0,e.t0)(e.t1),c=s.result,d=c.data,u={showLoading:!1},p=null,p=d?(m=d.content,f=d.number,h=d.totalPages,v=d.totalElements,y=f+1,Object.assign({},u,{list:m,pageIndex:y,totalPages:h,total:v,queryParam:o,cacheData:m})):u,g.actions.inlineEdit.updateState(p);case 14:case"end":return e.stop()}var a,t,n},e)})),function(e,a){return ke.apply(this,arguments)}),adds:(ge=s()(k.a.mark(function e(t){var n,r,i;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g.actions.inlineEdit.updateState({showLoading:!0}),e.t0=D.o,e.next=4,a=t,Object(Se.a)(De.GET_ADD,{method:"post",data:a});case 4:if(e.t1=e.sent,n=(0,e.t0)(e.t1,"保存成功"),r=n.result,i=r.status,g.actions.inlineEdit.updateState({showLoading:!1}),"success"===i)return g.actions.inlineEdit.loadList(),e.abrupt("return",!0);e.next=14;break;case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}var a},e)})),function(e){return ge.apply(this,arguments)}),removes:(ye=s()(k.a.mark(function e(t,n){var r,i,l,o,s,c,d,u;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g.actions.inlineEdit.updateState({showLoading:!0}),e.t0=D.o,e.next=4,a=t,Object(Se.a)(De.GET_DELETE,{method:"post",data:a});case 4:if(e.t1=e.sent,r=(0,e.t0)(e.t1,"删除成功"),i=r.result,l=i.status,g.actions.inlineEdit.updateState({showLoading:!1}),"success"===l)return o=n().inlineEdit,s=o.queryParam,c=o.list,d=o.totalPages,0<(u=s.pageParams.pageIndex)&&u+1===d&&t.length===c.length&&(s.pageParams.pageIndex=u-1),g.actions.inlineEdit.loadList(s),e.abrupt("return",!0);e.next=18;break;case 18:return e.abrupt("return",!1);case 19:case"end":return e.stop()}var a},e)})),function(e,a){return ye.apply(this,arguments)}),updates:(ve=s()(k.a.mark(function e(t){var n,r,i;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g.actions.inlineEdit.updateState({showLoading:!0}),e.t0=D.o,e.next=4,a=t,Object(Se.a)(De.GET_UPDATE,{method:"post",data:a});case 4:if(e.t1=e.sent,n=(0,e.t0)(e.t1,"更新成功"),r=n.result,i=r.status,g.actions.inlineEdit.updateState({showLoading:!1}),"success"===i)return g.actions.inlineEdit.loadList(),e.abrupt("return",!0);e.next=14;break;case 14:return e.abrupt("return",!1);case 15:case"end":return e.stop()}var a},e)})),function(e){return ve.apply(this,arguments)}),resetData:function(e,a){var t=a().inlineEdit.cacheData.slice();t.forEach(function(e){delete e._edit});var n={list:t};e&&(n.status="view"),g.actions.inlineEdit.updateState(n)}}});r.a.model(Pe);var Ve=Object(g.connect)(function(e){return e.inlineEdit},null)(Ce);t(1776);Object(g.render)(v.a.createElement(Ve,null),document.querySelector("#app"))}});
//# sourceMappingURL=index.js.map