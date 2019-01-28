import React from 'react';
import mirror, {connect} from 'mirrorx';

// 组件引入
import IndexView from './components/IndexView';
import model from './model'
mirror.model(model);

// 数据和组件UI关联、绑定
export default connect(state => state.masterDetailOrder, null)(IndexView);

