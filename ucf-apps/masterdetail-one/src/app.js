/**
 * 整个应用的入口，包含路由，数据管理加载
 */

import React from "react";
import 'core-js/es6/map';
import 'core-js/es6/set';
import mirror, {render, Router} from "mirrorx";
import Routes from './routes'

import 'tinper-bee/assets/tinper-bee.css'
import "styles/app.less"


const MiddlewareConfig = [];


mirror.defaults({
    historyMode: "hash",
    middlewares: MiddlewareConfig
});


render(<Router>
    <Routes/>
</Router>, document.querySelector("#app"));
