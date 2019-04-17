import { FormattedMessage, defineMessages, injectIntl, intlShape } from 'react-intl';
import React from 'react';
import mirror, {connect} from 'mirrorx';
// 组件引入
import IndexView from './components/IndexView';


// 数据和组件UI关联、绑定
export default connect(state => state.query,null)(IndexView);
