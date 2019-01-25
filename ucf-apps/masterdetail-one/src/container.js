import React from 'react';
import mirror, {connect} from 'mirrorx';

// 组件引入
import One from './components/Ones/index';
import Order from "./components/Order/index";
import BpmChart from './components/BpmChart/index';

// 数据模型引入
import model from './model'

mirror.model(model);

// 数据和组件UI关联、绑定
export const ConnectedOne = connect(state => state.masterDetailOne, null)(One);
export const ConnectedOrder = connect( state => state.masterDetailOne, null )(Order);
export const ConnectedChart = connect(state => state.masterDetailOne, null)(BpmChart);
