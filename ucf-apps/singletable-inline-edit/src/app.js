/**
 * 整个应用的入口，包含路由，数据管理加载
 */
import  "babel-polyfill"
import React  from "react";
import { render } from "mirrorx";
import AppContainer from './container'
import "./app.less";

render(<AppContainer/>, document.querySelector("#app"));
