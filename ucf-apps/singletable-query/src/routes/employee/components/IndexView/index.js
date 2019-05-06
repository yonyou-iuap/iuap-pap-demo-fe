import React, {Component} from 'react'
import {actions} from 'mirrorx';
import queryString from "query-string";
import Header from 'components/Header';
// import Button from 'components/Button';

import './index.less';

export default class IndexView extends Component {


    onBack = () => {
        // 通过routing 返回上一页
        actions.routing.goBack();
    }

    render() {

        let searchObj = queryString.parse(this.props.location.search);
        let {code, name, sexEnumValue, levelName} = searchObj;
        return (
            <div className="employee">
                <Header title='A1单表查询示例' back={true}>
                    {/*<div className='head-btn'>*/}
                        {/*<Button shape="border" className="ml8" onClick={_this.onBack}>取消</Button>*/}
                    {/*</div>*/}
                </Header>
                <div className="content">
                    <div className="item">
                        <span>员工编号：</span>
                        <span>{code}</span>
                    </div>
                    <div className="item">
                        <span>员工姓名：</span>
                        <span>{name}</span>
                    </div>
                    <div className="item">
                        <span>员工性别：</span>
                        <span>{sexEnumValue}</span>
                    </div>
                    <div className="item">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;职级：</span>
                        <span>{levelName}</span>
                    </div>
                </div>
            </div>

        )

    }
}
