
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {RefMultipleTableWithInput, RefTreeWithInput} from 'pap-refer/dist/index';
import "pap-refer/dist/index.css"
import {formatRefPath} from 'utils/tools';

//1:树形 2:单表 3:树卡型 4:多选 5:穿梭框 6:多过滤项
const RefEnum = {
    tree: 1, 
    single: 2,
    treeTable: 3,
    multiple: 4,
    transfer: 5,
    multipleTable: 6
}

const propTypes = {
    type: PropTypes.number,
    title: PropTypes.string,
    rowData: PropTypes.object,
    btnFlag: PropTypes.number,
    refCode: PropTypes.string,
    refPath: PropTypes.string,
    param: PropTypes.object
};

//默认参数值
const defaultProps = {
    rowData: {},
    param: {},
    refPath: `${GROBAL_HTTP_CTX}/common-ref`
}

class RefCommon extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.renderTree = this.renderTree.bind(this);
        this.renderMutipleTable = this.renderMutipleTable.bind(this);
    }
    get refPath(){
        return formatRefPath(this.props.refPath);
    }
    componentWillReceiveProps(nextProps) {

    }
    renderTree(rowData,btnFlag){
        let {title,param} = this.props;
        let refPath = this.refPath;

        return (
            <RefTreeWithInput
                strictMode={true}
                modalProps={{animation:false}}
                disabled={btnFlag === 2}
                placeholder={`请选择${title}`}
                backdrop={false}
                title={title}
                param= {param}
                searchable= {true}
                multiple={false}
                checkStrictly={true}
                displayField='{refname}'
                valueField='refpk'
                refModelUrl= {{
                    treeUrl: `/${refPath}/blobRefTree`, //树请求
                }}
                matchUrl={`/${refPath}/matchPKRefJSON`}
                filterUrl={`/${refPath}/filterRefJSON`}
                {...this.props}
            >
            </RefTreeWithInput>
        )
    }
    renderMutipleTable(rowData,btnFlag){
        const {title,param} = this.props;
        let refPath = this.refPath;

        return (
            <RefMultipleTableWithInput
                strictMode={true}
                modalProps={{animation:false}}
                disabled={btnFlag === 2}
                placeholder = {`请选择${title}`}
                title = {title}
                backdrop = {false}
                param = {param}
                displayField="{refcode}"
                valueField="refpk"
                refModelUrl = {{
                    tableBodyUrl:`/${refPath}/blobRefTreeGrid`,//表体请求
                    refInfo:`/${refPath}/refInfo`,//表头请求
                }}
                matchUrl={`/${refPath}/matchPKRefJSON`}
                filterUrl={`/${refPath}/filterRefJSON`}
                {...this.props}
            >
            </RefMultipleTableWithInput>
        )
    }
    render() {
        const {rowData,btnFlag,type} = this.props;

        const map = {
            [RefEnum.tree]: this.renderTree,
            [RefEnum.multipleTable]: this.renderMutipleTable
        }

        const renderRef = map[type] || this.renderMutipleTable;

        return (
            renderRef(rowData,btnFlag)
        )
    }
}

RefCommon.propTypes = propTypes;
RefCommon.defaultProps = defaultProps;

export default RefCommon;