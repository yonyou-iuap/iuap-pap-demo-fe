/**
 *
 * @title ref-tree 参照-树形
 * @description 具有单选多选的树形参照
 *
 */

import React, { Component } from 'react';


import {  Panel, Icon } from 'tinper-bee';
import Drawer from 'ac-drawer';
import 'ac-drawer/dist/ac-drawer.css'

import './index.less'
class Card extends Component{
    constructor(props){
        super(props);
        this.state={
            showDrawer: false
        }
    }
    showCode = () => {
        this.setState({
            showDrawer: true
        },()=>{
            document.body.style.overflow = 'hidden'
        })
    }
    fCloseDrawer = () => {
        this.setState({
            showDrawer: false
        },()=>{
            document.body.style.overflow = 'auto'
        })
    }
    render(){
        const { title = '', codeText = '', footer = '' } = this.props;
        let opt = {}
        if(footer){
            opt.footer = footer;
        }
        return (
            <Panel
                className="card"//<Icon type="uf-pencil-s" />
                header={<div><span className="card-title">{title} </span><span onClick={this.showCode} className="card-check-code">查看源码</span></div>}
                {...opt}
            >
            {
                this.props.children
            }
                <Drawer title={'示例源码'} show={this.state.showDrawer} placement={'right'} onClose={this.fCloseDrawer}>
                    <pre>
                        <code className="hljs javascript">
                            {codeText}     
                        </code>
                    </pre>                                          
                </Drawer>
            </Panel>
        )
    }
}

export default Card;

