/**
 * 整个应用的入口，包含路由，数据管理加载
 */

import React from "react";
import 'core-js/es6/map';
import 'core-js/es6/set';
import  { render } from "mirrorx";
import AppContainer from './container'

import 'tinper-bee/assets/tinper-bee.css'
import "./app.less";


render(<AppContainer/>, document.querySelector("#app"));
