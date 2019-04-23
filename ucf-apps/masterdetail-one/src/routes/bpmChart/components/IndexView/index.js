import { injectIntl } from 'react-intl';
import React, { Component } from 'react';
import queryString from 'query-string';
import { BpmWrap } from 'yyuap-bpm';
import {actions} from 'mirrorx';
import Header from 'components/Header';
import { getCookie } from 'utils'
const U_LOCALE = getCookie('u_locale');
import './index.less';

class IndexView extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    onBack = ()=>{
        // let { id } = queryString.parse(this.props.location.search);
        // actions.routing.push(
        //     {
        //         pathname: '/order',
        //         editFlag: false,
        //         search: `?id=${id}&btnFlag=${2}`
        //     }
        // )
        actions.routing.goBack()
    }
    render() {
        let { id, processDefinitionId, processInstanceId } = queryString.parse(this.props.location.search);
        return (
            <div className="bpm-chart">
                <Header title={this.props.intl.formatMessage({id:"js.com.Ind5.0001", defaultMessage:"流程图"})} back={true}/>
                <BpmWrap
                    locale={U_LOCALE}
                    id={id}
                    processDefinitionId={processDefinitionId}
                    processInstanceId={processInstanceId}
                />
            </div>
        );
    }
}

export default injectIntl(IndexView);
