/**
 * 整个应用的入口，包含路由，数据管理加载
 */
import  "babel-polyfill"
import React  from "react";
import { render } from "mirrorx";
import AppContainer from './container'
import Intl from 'components/Intl'
import "./app.less";

render(
  <Intl>
    <AppContainer/>
  </Intl>
  , document.querySelector("#app"));
