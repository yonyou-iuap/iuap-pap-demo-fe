
import React from 'react';
// import ReactDOM from 'react-dom';
// import RefWithInput from './RefCoreWithInput';

// import {RefTree} from 'ref-tree/';

import {RefMultipleTable,RefWithInput } from 'ref-multiple-table';

import 'ref-multiple-table/dist/index.css'; //职级样式
import 'ref-tree/dist/index.css'; // 部门样式

import {RefTree} from 'ref-tree';

import RefComboBox, {ComboStore} from 'ref-combobox';
import 'ref-combobox/dist/index.css';

import { Icon } from 'tinper-bee'
// import {RefMultipleTable} from './ref-multiple-table';

// import './ref-multiple-table/index.css'; //职级样式
// import './ref-tree/index.css'; // 部门样式


function RefIuapDept(props){
    return (
        <RefWithInput
            style={{
            }}
            title={'部门'}
            searchable= {true}
            param= {
                {"refCode":"newdept"}
            }
            multiple={false}
            checkStrictly={true}
            disabled={false}
            displayField='{refname}'
            valueField='refpk'
            refModelUrl= {{
                treeUrl: '/newref/rest/iref_ctr/blobRefTree', //树请求
            }}
            matchUrl='/newref/rest/iref_ctr/matchPKRefJSON'
            filterUrl='/newref/rest/iref_ctr/filterRefJSON'
            {...props}
        >
            <RefTree />
        </RefWithInput>
    )
}
function RefWalsinLevel(props){
    return (
        <RefWithInput
            title= '职级'
            backdrop = {false}
            param = {{//url请求参数
                    refCode:'post_level',//test_common||test_grid||test_tree||test_treeTable
                }}
            refModelUrl = {{
                tableBodyUrl:'/iuap_walsin_demo/common-ref/blobRefTreeGrid',//表体请求
                refInfo:'/iuap_walsin_demo/common-ref/refInfo',//表头请求
            }}
            matchUrl='/iuap_walsin_demo/common-ref/matchPKRefJSON'
            filterUrl='/iuap_walsin_demo/common-ref/filterRefJSON'
            valueField="refpk"
            displayField="{refcode}"
            {...props}
        >
            <RefMultipleTable />
        </RefWithInput>
    )
}

function RefWalsinComboLevel(props){
    return (
        <RefComboBox 
            displayField={'{refname}-{refcode}'}
            valueField={'refpk'}
            onClickItem={(record) =>{
                console.log(record)
            }}
            matchUrl = '/iuap_walsin_demo/common-ref/matchPKRefJSON'
            filterUrl = '/iuap_walsin_demo/common-ref/filterRefJSON'
            { ...props }
        >
            <ComboStore 
                ajax = {{
                    url: '/iuap_walsin_demo/common-ref/blobRefTreeGrid',
                    params: {
                        refCode: 'post_level'
                    },
                    
                }}
                strictMode = {true}
                displayField={(record)=>{
                    return <div > <Icon type="uf-personin-o" style={{color: 'red'}}/> {record.refname}-{record.refcode}-{record.type}</div>
                }}
            />
        </RefComboBox>
    )
}

export {RefIuapDept, RefWalsinLevel, RefWalsinComboLevel};

