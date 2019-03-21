/**
 * 入口、导入组件样式、渲染
 */
import React from "react";
import {render, Router} from "mirrorx";
import {getCookie} from './util';

let lang = getCookie('u_locale') || getCookie('i18next') || 'zh_CN';
import AppCN from './app_cn';
import AppTW from './app_tw';
import AppEN from './app_en';
let App;
// if(lang === 'zh_CN'){
//   App = AppCN;
// } else if(lang === 'zh_TW'){
//   App = AppTW;
// }else if(lang === 'en_US'){
//   App = AppEN;
// }
App = AppCN;
render(<App />, document.querySelector("#app"));