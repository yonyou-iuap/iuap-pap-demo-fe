import React, { Component } from 'react';
import queryString from 'query-string';
import { BpmWrap } from 'yyuap-bpm';
import {actions} from 'mirrorx';
import Header from 'components/Header';

import './index.less';

class BpmChart extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    onBack = ()=>{
        let { id } = queryString.parse(this.props.location.search);
        actions.routing.push(
            {
                pathname: '/order',
                editFlag: false,
                search: `?id=${id}&btnFlag=${2}`
            }
        )
    }
    render() {
        let { id, processDefinitionId, processInstanceId } = queryString.parse(this.props.location.search);
        return (
            <div className="bpm-chart">
                <Header title='流程图' back={true}/>
                <BpmWrap

                    id={id}
                    processDefinitionId={processDefinitionId}
                    processInstanceId={processInstanceId}
                />
            </div>
        );
    }
}

export default BpmChart;
