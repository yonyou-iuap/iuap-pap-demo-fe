import React from 'react';
import mirror, { connect } from 'mirrorx';

// 组件引入
import MultiFuncTree  from './components/MultiFuncTree';

// 数据模型引入
import model from './model'
mirror.model(model);

// 数据和组件UI关联、绑定
export const ConnectedMultiFuncTree = connect( state => state.walsinTree, null )(MultiFuncTree);