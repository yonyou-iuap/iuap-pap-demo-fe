/**
 * 整个应用的入口，包含路由，数据管理加载
 */

import  "babel-polyfill"
import React from "react";
import mirror, {render, Router} from "mirrorx";
import Routes from './routes'

import "./app.less"

const MiddlewareConfig = [];


mirror.defaults({
    historyMode: "hash",
    middlewares: MiddlewareConfig
});


render(<Router>
    <Routes/>
</Router>, document.querySelector("#app"));
