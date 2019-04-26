
import { FormattedMessage } from 'react-intl';
import React from 'react';
import RefMultipleTableWithInput, { RefMultipleTable } from 'pap-refer/lib/ref-multiple-table/src/index';

import RefTreeWithInput, { RefTree } from 'pap-refer/lib/ref-tree/src/index';

// import RefComboBox, {ComboStore} from 'ref-combobox';
import {getCookie} from "utils";
const uLocale = getCookie('u_locale');

import './index.less'



export function RefIuapDept(props){
    return (
        <RefTreeWithInput
            style={{
            }}
            title={<FormattedMessage id="js.com.Ref2.0001" defaultMessage="部门"/>}
            searchable= {true}
            strictMode={true}
            lang={uLocale}
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
            emptyBut
        >
            <RefTree />
        </RefTreeWithInput>
    )
}
export function RefWalsinLevel(props){
    return (
        <RefMultipleTableWithInput
            title={<FormattedMessage id="js.com.Ref2.0002" defaultMessage="职级" />}
            strictMode={true}
            backdrop = {false}
            lang={uLocale}
            param = {{//url请求参数
                refCode:'post_level',//test_common||test_grid||test_tree||test_treeTable
            }}
            refModelUrl = {{
                tableBodyUrl:`${GROBAL_HTTP_CTX}/common-ref/blobRefTreeGrid`,//表体请求
                refInfo:`${GROBAL_HTTP_CTX}/common-ref/refInfo`,//表头请求
            }}
            matchUrl={`${GROBAL_HTTP_CTX}/common-ref/matchPKRefJSON`}
            filterUrl={`${GROBAL_HTTP_CTX}/common-ref/filterRefJSON`}
            valueField="refpk"
            displayField="{refcode}"
            {...props}
            emptyBut
        >
            <RefMultipleTable />
        </RefMultipleTableWithInput>
    )
}

// function RefWalsinComboLevel(props){
//     return (
//         <RefComboBox
//             displayField={'{refname}-{refcode}'}
//             valueField={'refpk'}
//             onClickItem={(record) =>{
//                 console.log(record)
//             }}
//             matchUrl = '/iuap_walsin_demo/common-ref/matchPKRefJSON'
//             filterUrl = '/iuap_walsin_demo/common-ref/filterRefJSON'
//             { ...props }
//         >
//             <ComboStore
//                 ajax = {{
//                     url: '/iuap_walsin_demo/common-ref/blobRefTreeGrid',
//                     params: {
//                         refCode: 'post_level'
//                     },
//
//                 }}
//                 strictMode = {true}
//                 displayField={(record)=>{
//                     return <div > <Icon type="uf-personin-o" style={{color: 'red'}}/> {record.refname}-{record.refcode}-{record.type}</div>
//                 }}
//             />
//         </RefComboBox>
//     )
// }


