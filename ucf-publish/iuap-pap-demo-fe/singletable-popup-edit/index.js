/*! build:ucf hash:8eff8bf105e9b7fcd312, chunkhash:84a2b5572f144e1c3e45, name:singletable-popup-edit/index, filebase:index.js, query:, file:singletable-popup-edit/index.js */!function(i){function e(e){for(var a,t,n=e[0],l=e[1],r=e[2],s=0,o=[];s<n.length;s++)t=n[s],d[t]&&o.push(d[t][0]),d[t]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(i[a]=l[a]);for(u&&u(e);o.length;)o.shift()();return m.push.apply(m,r||[]),c()}function c(){for(var e,a=0;a<m.length;a++){for(var t=m[a],n=!0,l=1;l<t.length;l++){var r=t[l];0!==d[r]&&(n=!1)}n&&(m.splice(a--,1),e=s(s.s=t[0]))}return e}var t={},d={5:0},m=[];function s(e){if(t[e])return t[e].exports;var a=t[e]={i:e,l:!1,exports:{}};return i[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=i,s.c=t,s.d=function(e,a,t){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(a,e){if(1&e&&(a=s(a)),8&e)return a;if(4&e&&"object"==typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)s.d(t,n,function(e){return a[e]}.bind(null,n));return t},s.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="";var a=window.webpackJsonp=window.webpackJsonp||[],n=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=n;m.push([1850,0]),c()}({1831:function(e,a,t){},1832:function(e,a,t){},1833:function(e,a,t){},1834:function(e,a,t){},1850:function(e,a,t){"use strict";t.r(a);t(151);var n,l,r,s=t(0),I=t.n(s),g=t(3),o=t.n(g),C=t(2),i=t(6),V=t.n(i),c=t(12),d=t.n(c),m=t(13),u=t.n(m),p=t(14),E=t.n(p),f=t(15),h=t.n(f),b=t(16),v=t.n(b),M=t(4),O=t.n(M),N=t(5),j=t(66),y=t(61),w=t(20),S=t(67),P=t(88),k=t(70),x=t.n(k),T=t(75),Y=t.n(T),D=t(119),F=t(148),q=t(65),L=t(29),H=t(8),R=t(60),_=t.n(R),A=(t(1831),L.a.Item),B=N.Select.Option,z=Y.a.YearPicker,G=function(e){function l(){var e,f;d()(this,l);for(var a=arguments.length,t=new Array(a),n=0;n<a;n++)t[n]=arguments[n];return(f=E()(this,(e=h()(l)).call.apply(e,[this].concat(t)))).search=function(){f.props.form.validateFields(function(e,a){a.year&&(a.year=a.year.format("YYYY"));var t=a.dept;if(t){var n=JSON.parse(t).refpk;a.dept=n}f.getQuery(a,0)})},f.reset=function(){f.props.form.resetFields()},f.getQuery=function(e,a){var t=Object(H.f)(f.props.queryParam),n=t.pageParams,l=t.whereParams;for(var r in l=Object(H.f)(l),n.pageIndex=0,e){var s=!0,o=!1,i=void 0;try{for(var c,d=l.entries()[Symbol.iterator]();!(s=(c=d.next()).done);s=!0){var m=x()(c.value,2),u=m[0];if(r===m[1].key){l.splice(u,1);break}}}catch(e){o=!0,i=e}finally{try{s||null==d.return||d.return()}finally{if(o)throw i}}if((e[r]||0===e[r])&&0===a){var p="LIKE";["code","month"].includes(r)&&(p="EQ"),l.push({key:r,value:e[r],condition:p})}}t.whereParams=l,g.actions.popupEdit.updateState(t),0===a&&g.actions.popupEdit.loadList(t),f.props.onCloseEdit()},f}return v()(l,e),u()(l,[{key:"render",value:function(){var e=this.props,a=e.form,t=e.onCallback,n=a.getFieldProps;return I.a.createElement(D.a,{form:a,reset:this.reset,onCallback:t,search:this.search,intl:this.props.intl},I.a.createElement(L.a,{size:"sm"},I.a.createElement(A,{label:I.a.createElement(C.a,{id:"js.com.Sea3.0001",defaultMessage:"员工编号"})},I.a.createElement(N.FormControl,V()({placeholder:this.props.intl.formatMessage({id:"js.com.Sea3.0002",defaultMessage:"精确查询"})},n("code",{initialValue:""})))),I.a.createElement(A,{label:I.a.createElement(C.a,{id:"js.com.Sea3.0003",defaultMessage:"员工姓名"})},I.a.createElement(N.FormControl,V()({placeholder:this.props.intl.formatMessage({id:"js.com.Sea3.0004",defaultMessage:"模糊查询"})},n("name",{initialValue:""})))),I.a.createElement(A,{label:I.a.createElement(C.a,{id:"js.com.Sea3.0005",defaultMessage:"部门"})},I.a.createElement(q.a,n("dept",{initialValue:""}))),I.a.createElement(A,{label:I.a.createElement(C.a,{id:"js.com.Sea3.0006",defaultMessage:"年份"})},I.a.createElement(z,V()({},n("year",{initialValue:null}),{format:"YYYY",locale:_.a,placeholder:this.props.intl.formatMessage({id:"js.com.Sea3.0007",defaultMessage:"选择年"})}))),I.a.createElement(A,{label:I.a.createElement(C.a,{id:"js.com.Sea3.0008",defaultMessage:"月份"})},I.a.createElement(F.a,n("month",{initialValue:""}))),I.a.createElement(A,{label:I.a.createElement(C.a,{id:"js.com.Sea3.0009",defaultMessage:"是否超标"})},I.a.createElement(N.Select,n("exdeeds",{initialValue:""}),I.a.createElement(B,{value:""},I.a.createElement(C.a,{id:"js.com.Sea3.0010",defaultMessage:"请选择"})),I.a.createElement(B,{value:"0"},I.a.createElement(C.a,{id:"js.com.Sea3.0011",defaultMessage:"未超标"})),I.a.createElement(B,{value:"1"},I.a.createElement(C.a,{id:"js.com.Sea3.0012",defaultMessage:"超标"}))))))}}]),l}(s.Component),J=L.a.createForm()(Object(C.d)(G)),Q=t(10),K=t.n(Q),U=t(19),W=t.n(U),$=t(38),X=t.n($),Z=t(79),ee=t(39),ae=(t(1832),L.a.Item),te=N.Select.Option,ne=(Y.a.YearPicker,"YYYY-MM-DD HH:mm:ss"),le=[I.a.createElement(C.a,{id:"js.com.Pop.0001",defaultMessage:"新增"}),I.a.createElement(C.a,{id:"js.com.Pop.0002",defaultMessage:"修改"}),I.a.createElement(C.a,{id:"js.com.Pop.0003",defaultMessage:"详情"})],re=function(e){function a(e){var l;return d()(this,a),(l=E()(this,h()(a).call(this,e))).onCloseEdit=function(){l.setState({rowData:{},btnFlag:0}),l.props.onCloseEdit()},l.onSubmitEdit=function(){var t=X()(l),n=t.state.btnFlag;t.props.form.validateFields(function(e,a){e||(a=t.onHandleSaveData(a),l.onCloseEdit(),a.btnFlag=n,g.actions.popupEdit.saveOrder(a))})},l.onHandleSaveData=function(e){var a=X()(l),t=l.state.rowData,n={};return t&&(n=Object.assign({},t,e)),n.year=n.year.format("YYYY"),n.applyTime&&(n.applyTime=n.applyTime.format(ne)),a.onHandleRef(n),n},l.onHandleRef=function(e){for(var a=["dept","postLevel"],t=0,n=a.length;t<n;t++){var l=JSON.parse(e[a[t]]);e[a[t]]=l.refpk}},l.onHandleBtns=function(e){var a=X()(l),t=[{label:I.a.createElement(C.a,{id:"js.com.Pop.0004",defaultMessage:"取消"}),fun:l.onCloseEdit,shape:"border"},{label:I.a.createElement(C.a,{id:"js.com.Pop.0005",defaultMessage:"确定"}),fun:a.onSubmitEdit,colors:"primary"}];return 2==e&&(t=[]),t},l.state={rowData:{},btnFlag:0,cancelFlag:!1},l}var t;return v()(a,e),u()(a,[{key:"componentWillReceiveProps",value:(t=W()(K.a.mark(function e(a){var t,n,l,r,s,o,i,c,d;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(t=this).props,l=n.btnFlag,r=n.currentIndex,s=a.btnFlag,o=a.currentIndex,i=a.editModelVisible,l!==s||r!==o){t.props.form.resetFields(),this.setState({btnFlag:s}),c={};try{0!==s&&i&&(d=this.props.list,c=d[o]||{})}catch(e){console.log(e)}finally{this.setState({rowData:c})}}case 4:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,a=e.form,t=e.editModelVisible,n=this.state,l=n.rowData,r=n.btnFlag,s=a.getFieldProps,o=a.getFieldError,i=l.code,c=l.serviceYearsCompany,d=l.pickTime,m=l.postLevel,u=l.levelName,p=l.year,f=l.sex,g=l.allowanceStandard,E=l.remark,h=l.deptName,b=l.dept,v=l.exdeeds,M=l.allowanceActual,j=l.allowanceType,y=l.month,w=l.pickType,S=l.name,P=l.serviceYears,k=l.applyTime;console.log("rowData",g);var x=this.onHandleBtns(r);return I.a.createElement(Z.a,{show:t,title:le[r],size:"lg",btns:x,autoFocus:!1,enforceFocus:!1,close:this.onCloseEdit,className:"single-table-pop-model"},I.a.createElement(L.a,null,I.a.createElement(ae,{label:I.a.createElement(C.a,{id:"js.com.Pop.0006",defaultMessage:"员工编号"})},I.a.createElement(N.FormControl,V()({disabled:!0},s("code",{initialValue:i||""})))),I.a.createElement(ae,{required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0007",defaultMessage:"员工姓名"})},I.a.createElement(N.FormControl,V()({disabled:2===r},s("name",{validateTrigger:"onBlur",initialValue:S||"",rules:[{type:"string",required:!0,pattern:/\S+/gi,message:I.a.createElement(C.a,{id:"js.com.Pop.0008",defaultMessage:"请输入员工姓名"})}]}))),I.a.createElement(ee.a,{errorMsg:o("name")})),I.a.createElement(ae,{required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0009",defaultMessage:"员工性别"})},I.a.createElement(N.Select,V()({disabled:2===r},s("sex",{initialValue:void 0!==f?f:0,rules:[{required:!0,message:I.a.createElement(C.a,{id:"js.com.Pop.0010",defaultMessage:"请选择员工性别"})}]})),I.a.createElement(te,{value:0},I.a.createElement(C.a,{id:"js.com.Pop.0011",defaultMessage:"女"})),I.a.createElement(te,{value:1},I.a.createElement(C.a,{id:"js.com.Pop.0012",defaultMessage:"男"}))),I.a.createElement(ee.a,{errorMsg:o("sex")})),I.a.createElement(ae,{required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0013",defaultMessage:"部门"})},I.a.createElement(q.a,V()({disabled:2===r,placeholder:this.props.intl.formatMessage({id:"js.com.Pop.0014",defaultMessage:"请选择部门"})},s("dept",{initialValue:JSON.stringify({refname:h||"",refpk:b||""}),rules:[{message:I.a.createElement(C.a,{id:"js.com.Pop.0015",defaultMessage:"请选择部门"}),pattern:/[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/}]}),{backdrop:!1})),I.a.createElement(ee.a,{errorMsg:o("dept")})),I.a.createElement(ae,{required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0016",defaultMessage:"职级"})},I.a.createElement(q.b,V()({disabled:2===r,placeholder:this.props.intl.formatMessage({id:"js.com.Pop.0017",defaultMessage:"请选择职级"})},s("postLevel",{initialValue:JSON.stringify({refpk:m?m.toString():"",refname:u?u.toString():""}),rules:[{message:I.a.createElement(C.a,{id:"js.com.Pop.0018",defaultMessage:"请选择职级"}),pattern:/[^({"refname":"","refpk":""}|{"refpk":"","refname":""})]/}]}))),I.a.createElement(ee.a,{errorMsg:o("postLevel")})),I.a.createElement(ae,{className:"time",required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0019",defaultMessage:"工龄"})},I.a.createElement(N.InputNumber,V()({iconStyle:"one",min:0,step:1,disabled:2===r,max:99},s("serviceYears",{initialValue:"number"==typeof P?P:1,rules:[{pattern:/^[0-9]+$/,required:!0}]})))),I.a.createElement(ae,{className:"time",required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0020",defaultMessage:"司龄"})},I.a.createElement(N.InputNumber,V()({iconStyle:"one",min:0,step:1,disabled:2===r,max:99},s("serviceYearsCompany",{initialValue:"number"==typeof c?c:1,rules:[{pattern:/^[0-9]+$/,required:!0}]})))),I.a.createElement(ae,{className:"time",required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0021",defaultMessage:"年份"})},I.a.createElement(Y.a,V()({disabled:2==r},s("year",{initialValue:p?O()(p):O()(),validateTrigger:"onBlur",rules:[{required:!0,message:I.a.createElement(C.a,{id:"js.com.Pop.0022",defaultMessage:"请选择申请时间"})}]}),{getCalendarContainer:function(){return document.querySelector(".single-table-pop-model")},format:"YYYY",locale:_.a,placeholder:this.props.intl.formatMessage({id:"js.com.Pop.0023",defaultMessage:"选择年"})}))),I.a.createElement(ae,{required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0024",defaultMessage:"月份"})},I.a.createElement(F.a,V()({disabled:2===r},s("month",{initialValue:y||1,rules:[{required:!0,message:I.a.createElement(C.a,{id:"js.com.Pop.0025",defaultMessage:"请选择月份"})}]}))),I.a.createElement(ee.a,{errorMsg:o("month")})),I.a.createElement(ae,{required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0026",defaultMessage:"补贴类别"})},I.a.createElement(N.Select,V()({disabled:2===r},s("allowanceType",{initialValue:j?j.toString():"1",rules:[{required:!0,message:I.a.createElement(C.a,{id:"js.com.Pop.0027",defaultMessage:"请选择补贴类别"})}]})),I.a.createElement(te,{value:"1"},I.a.createElement(C.a,{id:"js.com.Pop.0028",defaultMessage:"电脑补助"})),I.a.createElement(te,{value:"2"},I.a.createElement(C.a,{id:"js.com.Pop.0029",defaultMessage:"住宿补助"})),I.a.createElement(te,{value:"3"},I.a.createElement(C.a,{id:"js.com.Pop.0030",defaultMessage:"交通补助"}))),I.a.createElement(ee.a,{errorMsg:o("allowanceType")})),I.a.createElement(ae,{className:"time",required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0031",defaultMessage:"补贴标准"})},I.a.createElement(N.InputNumber,V()({iconStyle:"one",precision:2,min:0,max:9999,disabled:2===r},s("allowanceStandard",{initialValue:g?Number(g):100})))),I.a.createElement(ae,{className:"time",required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0032",defaultMessage:"实际补贴"})},I.a.createElement(N.InputNumber,V()({iconStyle:"one",precision:2,min:0,max:9999,disabled:2===r},s("allowanceActual",{initialValue:M?Number(M):100})))),I.a.createElement(ae,{required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0033",defaultMessage:"是否超标"})},I.a.createElement(N.Select,V()({disabled:2===r},s("exdeeds",{initialValue:v?v.toString():"0",rules:[{required:!0,message:I.a.createElement(C.a,{id:"js.com.Pop.0034",defaultMessage:"请选择是否超标"})}]})),I.a.createElement(te,{value:"0"},I.a.createElement(C.a,{id:"js.com.Pop.0035",defaultMessage:"未超标"})),I.a.createElement(te,{value:"1"},I.a.createElement(C.a,{id:"js.com.Pop.0036",defaultMessage:"超标"}))),I.a.createElement(ee.a,{errorMsg:o("exdeeds")})),2<=r?I.a.createElement(ae,{className:"time",required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0037",defaultMessage:"申请时间"})},I.a.createElement(Y.a,V()({className:"form-item",format:ne,disabled:2===r},s("applyTime",{initialValue:k?O()(k):O()(),validateTrigger:"onBlur",rules:[{required:!0,message:I.a.createElement(C.a,{id:"js.com.Pop.0022",defaultMessage:"请选择申请时间"})}]})))):null,I.a.createElement(ae,{required:!0,label:I.a.createElement(C.a,{id:"js.com.Pop.0038",defaultMessage:"领取方式"})},I.a.createElement(N.Select,V()({disabled:2===r},s("pickType",{initialValue:w?w.toString():"1",rules:[{required:!0,message:I.a.createElement(C.a,{id:"js.com.Pop.0039",defaultMessage:"请选择领取方式"})}]})),I.a.createElement(te,{value:"1"},I.a.createElement(C.a,{id:"js.com.Pop.0040",defaultMessage:"转账"})),I.a.createElement(te,{value:"2"},I.a.createElement(C.a,{id:"js.com.Pop.0041",defaultMessage:"现金"}))),I.a.createElement(ee.a,{errorMsg:o("pickType")})),2<=r?I.a.createElement(ae,{className:"time",label:I.a.createElement(C.a,{id:"js.com.Pop.0042",defaultMessage:"领取时间"})},I.a.createElement(Y.a,V()({className:"form-item",format:ne,disabled:2===r},s("pickTime",{initialValue:d&&O()(d)||"",validateTrigger:"onBlur",rules:[{required:!1,message:I.a.createElement(C.a,{id:"js.com.Pop.0043",defaultMessage:"请选择领取时间"})}]})))):null,I.a.createElement(ae,{label:I.a.createElement(C.a,{id:"js.com.Pop.0044",defaultMessage:"备注"})},I.a.createElement(N.FormControl,V()({disabled:2===r},s("remark",{initialValue:E||""}))))))}}]),a}(s.Component),se=L.a.createForm()(Object(C.d)(re)),oe=(t(1833),"YYYY-MM-DD HH:mm:ss"),ie=function(e){function a(e){var s;return d()(this,a),(s=E()(this,h()(a).call(this,e))).onRefreshList=function(){g.actions.popupEdit.loadList(s.props.queryParam)},s.freshData=function(e){s.onPageSelect(e,0)},s.onDataNumSelect=function(e,a){s.onPageSelect(a,1)},s.onPageSelect=function(e,a){var t=Object(H.f)(s.props.queryParam),n=Object(H.k)(e,a,t.pageParams),l=n.pageIndex,r=n.pageSize;t.pageParams={pageIndex:l,pageSize:r},s.setState({selectedIndex:0}),g.actions.popupEdit.loadList(t)},s.onClickShowModel=function(e){s.setState({editModelVisible:!0,btnFlag:e})},s.onCloseEdit=function(){s.setState({editModelVisible:!1,btnFlag:-1})},s.onClickDel=function(){0<s.props.list.length?s.setState({delModalVisible:!0,showHoverContent:!1}):Object(H.b)(s.props.intl.formatMessage({id:"js.com.Ind4.0001",defaultMessage:"数据为空，不能删除"}))},s.column=[{title:I.a.createElement(C.a,{id:"js.com.Ind4.0002",defaultMessage:"员工编号"}),dataIndex:"code",key:"code",width:150},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0003",defaultMessage:"员工姓名"}),dataIndex:"name",key:"name",width:120,filterType:"text",filterDropdown:"show",render:function(e,a,t){return I.a.createElement(N.Tooltip,{inverse:!0,overlay:e},I.a.createElement("span",{tootip:e,className:"popTip"},e))}},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0004",defaultMessage:"员工性别"}),dataIndex:"sexEnumValue",key:"sexEnumValue",width:150},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0005",defaultMessage:"所属部门"}),dataIndex:"deptName",key:"deptName",width:120},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0006",defaultMessage:"职级"}),dataIndex:"levelName",key:"levelName",width:140},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0007",defaultMessage:"工龄"}),dataIndex:"serviceYears",key:"serviceYears",width:130,className:"column-number-right "},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0008",defaultMessage:"司龄"}),dataIndex:"serviceYearsCompany",key:"serviceYearsCompany",width:130,className:"column-number-right "},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0009",defaultMessage:"年份"}),dataIndex:"year",key:"year",width:100,render:function(e,a,t){return I.a.createElement("div",null,e?O()(e).format("YYYY"):"")}},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0010",defaultMessage:"月份"}),dataIndex:"monthEnumValue",key:"monthEnumValue",width:100},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0011",defaultMessage:"补贴类别"}),dataIndex:"allowanceTypeEnumValue",key:"allowanceTypeEnumValue",width:120},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0012",defaultMessage:"补贴标准"}),dataIndex:"allowanceStandard",key:"allowanceStandard",width:120,className:"column-number-right ",render:function(e,a,t){return I.a.createElement("span",null,"number"==typeof e?e.toFixed(2):"")}},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0013",defaultMessage:"实际补贴"}),dataIndex:"allowanceActual",key:"allowanceActual",width:120,className:"column-number-right ",render:function(e,a,t){return I.a.createElement("span",null,"number"==typeof e?e.toFixed(2):"")}},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0014",defaultMessage:"是否超标"}),dataIndex:"exdeedsEnumValue",key:"exdeedsEnumValue",width:120},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0015",defaultMessage:"申请时间"}),dataIndex:"applyTime",key:"applyTime",width:150,render:function(e,a,t){return I.a.createElement("div",null,e?O()(e).format(oe):"")}},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0016",defaultMessage:"领取方式"}),dataIndex:"pickTypeEnumValue",key:"pickTypeEnumValue",width:120},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0017",defaultMessage:"领取时间"}),dataIndex:"pickTime",key:"pickTime",width:150,render:function(e,a,t){return I.a.createElement("div",null,e?O()(e).format(oe):"")}},{title:I.a.createElement(C.a,{id:"js.com.Ind4.0018",defaultMessage:"备注"}),dataIndex:"remark",key:"remark",width:100}],s.export=function(){s.grid.exportExcel()},s.resetTableHeight=function(e){var a=0;a=e?Object(H.j)()-420:Object(H.j)()-270,s.setState({tableHeight:a})},s.state={tableHeight:0,selectedIndex:0,editModelVisible:!1,btnFlag:0,delModalVisible:!1,showHoverContent:!1},s}return v()(a,e),u()(a,[{key:"componentWillMount",value:function(){this.resetTableHeight(!0)}},{key:"componentDidMount",value:function(){this.onRefreshList()}},{key:"confirmGoBack",value:function(e){if(this.setState({delModalVisible:!1}),1===e){var a=this.props.list[this.state.selectedIndex];g.actions.popupEdit.removeList(a)}}},{key:"render",value:function(){var a=this,t=this,e=t.props,n=e.list,l=e.showLoading,r=e.pageIndex,s=e.totalPages,o=e.total,i=t.state,c=i.editModelVisible,d=i.selectedIndex,m=i.btnFlag,u=i.delModalVisible,p=i.tableHeight,f=i.showHoverContent,g={activePage:r,total:o,items:s,freshData:t.freshData,onDataNumSelect:t.onDataNumSelect},E=!(0<n.length);return I.a.createElement("div",{className:"single-table-popup"},I.a.createElement(y.a,{title:this.props.intl.formatMessage({id:"js.com.Ind4.0019",defaultMessage:"A3 单表弹框编辑示例"})}),I.a.createElement(J,V()({},this.props,{onCloseEdit:this.onCloseEdit,onCallback:this.resetTableHeight})),I.a.createElement("div",{className:"table-header"},I.a.createElement(P.a,{funcCode:"singletable-popupedit"},I.a.createElement(w.a,{role:"add",colors:"primary",className:"ml8",onClick:function(){t.onClickShowModel(0)}},I.a.createElement(C.a,{id:"js.com.Ind4.0020",defaultMessage:"新增"})),I.a.createElement(w.a,{shape:"border",className:"ml8",onClick:t.export},I.a.createElement(C.a,{id:"js.com.Ind4.0021",defaultMessage:"导出"}))),I.a.createElement(S.a,{show:u,context:I.a.createElement(C.a,{id:"js.com.Ind4.0022",defaultMessage:"是否要删除 ?"}),confirmFn:function(){t.confirmGoBack(1)},cancelFn:function(){t.confirmGoBack(2)}})),I.a.createElement("div",{className:"gird-parent"},I.a.createElement(j.a,{ref:function(e){return a.grid=e},data:n,rowKey:function(e,a){return a},columns:this.column,paginationObj:g,selectedRow:this.selectedRow,multiSelect:!1,hoverContent:function(){return f?I.a.createElement(P.a,{funcCode:"singletable-popupedit"},I.a.createElement(w.a,{isAction:!0,role:"update",className:"ml8",disabled:E,onClick:function(){a.setState({showHoverContent:!1}),t.onClickShowModel(1)}},I.a.createElement(C.a,{id:"js.com.Ind4.0023",defaultMessage:"修改"})),I.a.createElement(w.a,{isAction:!0,className:"ml8",disabled:E,onClick:function(){a.setState({showHoverContent:!1}),t.onClickShowModel(2)}},I.a.createElement(C.a,{id:"js.com.Ind4.0024",defaultMessage:"详情"})),I.a.createElement(w.a,{isAction:!0,role:"delete",className:"ml8",disabled:E,onClick:t.onClickDel},I.a.createElement(C.a,{id:"js.com.Ind4.0025",defaultMessage:"删除"}))):null},onRowHover:function(e){t.setState({selectedIndex:e,showHoverContent:!0})},showHeaderMenu:!0,sort:{mode:"multiple",backSource:!0},loading:{show:l},scroll:{y:p},sheetHeader:{height:30,ifshow:!1}})),I.a.createElement(se,{editModelVisible:c,onCloseEdit:this.onCloseEdit,currentIndex:d,btnFlag:m,list:n}))}}]),a}(s.Component),ce=Object(C.d)(ie),de=t(34),me=t.n(de),ue=t(23),pe={GET_DETAIL:"".concat("/iuap-pap-demo-be","/popup_allowances/list"),SAVE_ORDER:"".concat("/iuap-pap-demo-be","/popup_allowances/insertSelective"),UPDATE_ORDER:"".concat("/iuap-pap-demo-be","/popup_allowances/updateSelective"),DEL_ORDER:"".concat("/iuap-pap-demo-be","/popup_allowances/deleteBatch"),GET_LIST:"".concat("/iuap-pap-demo-be","/popup_allowances/list")},fe={name:"popupEdit",initialState:{rowPopData:{},showLoading:!1,list:[],pageIndex:0,pageSize:25,totalPages:1,total:0,queryParam:{pageParams:{pageIndex:0,pageSize:25},whereParams:[]}},reducers:{updateState:function(e,a){return me()({},e,a)}},effects:{loadList:(r=W()(K.a.mark(function e(l,r){var s,o,i,c,d;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g.actions.popupEdit.updateState({showLoading:!0}),s=l||r().popupEdit.queryParam,e.t0=H.o,e.next=5,a=s,t=void 0,t=Object.assign({},a),n=Object(H.f)(t.pageParams),delete t.pageParams,Object(ue.a)(pe.GET_LIST,{method:"post",data:t,param:n});case 5:e.t1=e.sent,o=(0,e.t0)(e.t1),i=o.result,c=i.data,d={showLoading:!1,queryParam:s},c&&(d=Object.assign({},d,{list:c.content,pageIndex:c.number+1,totalPages:c.totalPages,total:c.totalElements,pageSize:c.size,rowPopData:0<c.content.length?c.content[0]:{}})),g.actions.popupEdit.updateState(d);case 12:case"end":return e.stop()}var a,t,n},e)})),function(e,a){return r.apply(this,arguments)}),removeList:(l=W()(K.a.mark(function e(t,n){var l,r,s,o,i,c,d,m,u,p;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return g.actions.popupEdit.updateState({showLoading:!0}),l=t.id,r=n(),s=r.intl.localeData,o=s["js.sin.src5.0001"]||"删除成功",e.t0=H.o,e.next=8,a=[{id:l}],Object(ue.a)(pe.DEL_ORDER,{method:"post",data:a});case 8:e.t1=e.sent,e.t2=o,i=(0,e.t0)(e.t1,e.t2),"success"===i.result.status?(c=n().popupEdit,d=c.queryParam,m=c.list,u=c.totalPages,0<(p=d.pageParams.pageIndex)&&p+1===u&&1===m.length&&(d.pageParams.pageIndex=p-1),g.actions.popupEdit.loadList(d)):g.actions.popupEdit.updateState({showLoading:!1});case 13:case"end":return e.stop()}var a},e)})),function(e,a){return l.apply(this,arguments)}),saveOrder:(n=W()(K.a.mark(function e(n,l){var r,s,o,i,c,d,m,u,p,f;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(g.actions.popupEdit.updateState({showLoading:!0}),r=null,s=n.btnFlag,delete n.btnFlag,o=l(),i=o.intl.localeData,0===s)return c=i["js.sin.src5.0002"]||"保存成功",e.t0=H.o,e.next=11,t=n,Object(ue.a)(pe.SAVE_ORDER,{method:"post",data:t});e.next=16;break;case 11:e.t1=e.sent,e.t2=c,d=(0,e.t0)(e.t1,e.t2),m=d.result,r=m.status;case 16:if(1===s)return u=i["js.sin.src5.0003"]||"修改成功",e.t3=H.o,e.next=21,a=n,Object(ue.a)(pe.UPDATE_ORDER,{method:"post",data:a});e.next=26;break;case 21:e.t4=e.sent,e.t5=u,p=(0,e.t3)(e.t4,e.t5),f=p.result,r=f.status;case 26:"success"===r?g.actions.popupEdit.loadList():g.actions.popupEdit.updateState({showLoading:!1});case 27:case"end":return e.stop()}var a,t},e)})),function(e,a){return n.apply(this,arguments)})}};o.a.model(fe);var ge=Object(g.connect)(function(e){return e.popupEdit},null)(ce),Ee=t(80);t(1834);Object(g.render)(I.a.createElement(Ee.a,null,I.a.createElement(ge,null)),document.querySelector("#app"))}});
//# sourceMappingURL=index.js.map