/**
 *
 * @title 表格参照带有input
 * @description 表格参照带有input
 *
 */
import { FormattedMessage, defineMessages, injectIntl, intlShape } from 'react-intl';
import React, { Component } from 'react';
// import RefWithInput from 'ref-core/lib/refs/refcorewithinput';
// import RefTreeBaseUI from 'ref-tree';
import {RefTreeWithInput} from 'ref-tree';
import request from 'utils/request.js'
// import RefMultipleTableBaseUI from 'ref-multiple-table';
import {RefMultipleTableWithInput} from 'ref-multiple-table';
import 'ref-multiple-table/lib/index.css'
// import RefTreeTableBaseUI from 'ref-tree-table';
import {RefTreeTableWithInput} from 'ref-tree-table';
import Message from 'bee-message';

import 'ref-tree-table/dist/index.css';
class MdmRefComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            fullclassname: '',
            pk_gd: '',
            type: '',
            pk_entityitem: '',
            refPkGd: '',
            pkField: '',
            queryParams: {},
            writeField: '',
            columnsData: [],
            tableData: [],
            treeData: [],
            showLoading: true,
            treeNodePk: '',
            tableKey: ''
        };
        this.pageCount = 0;
        this.totalElements = 0;
        this.pageSize = 10;
        this.currPageIndex = 1;
        this.dataNumSelect = this.dataNumSelect.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
        this.loadTableData = this.loadTableData.bind(this);
    }
    componentWillMount() {
        this.initComponent();
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.pk_entityitem && nextProps.pk_gd){
            if(nextProps.pk_entityitem === this.props.pk_entityitem && nextProps.pk_gd === this.props.pk_gd){
                return false;
            }
            this.initComponent(nextProps)
            return true;
        }
        if(nextProps.entityItemCode && nextProps.entityCode){
            if(nextProps.entityItemCode === this.props.entityItemCode && nextProps.entityCode === this.props.entityCode){
                return false;
            }
            this.initComponent(nextProps)
            return true;
        }
        return false;
    }

    initComponent = (nextProps) => {
        let propsObj = nextProps || this.props;
        let requestFun = ( resp ) =>{
            let data = resp.data;
            if(data.flag){
                let fullclassname = data.fullclassname || '';
                let pk_entityitem = data.params.pk_entityitem || '';
                let pk_gd = data.params.pk_gd || '';
                let refPkGd = data.params.refPkGd || '';
                let type = data.type;
                let title = data.title || <FormattedMessage id="js.com.Ref2.0001" defaultMessage="参照" />;
                let queryParams = {
                    fullclassname: fullclassname,
                    type: type,
                    pk_gd: pk_gd,
                    pk_entityitem: pk_entityitem,
                    refPkGd: refPkGd,
                    '_': new Date().getTime()
                }
                this.setState({
                    title: title,
                    fullclassname: fullclassname,
                    pk_gd: pk_gd,
                    type: type,
                    pk_entityitem: pk_entityitem,
                    refPkGd: refPkGd,
                    queryParams: queryParams
                })
                this.forceUpdate();
            }else{
                Message.create({ content: data.msg, color : 'danger'});
            }
            
        }
        if(propsObj.pk_entityitem && propsObj.pk_gd){
            request(`/iuapmdm/modeling/mdmshow/card/reference`,{
                method: "GET",
                param: {
                    pk_entityitem: propsObj.pk_entityitem,
                    pk_gd: propsObj.pk_gd,
                    rid: new Date().getTime()
                }
            }).then(( resp ) =>{
                requestFun(resp);
            }).catch(() =>{
            });
        }else if(propsObj.entityItemCode && propsObj.entityCode){
            request(`/iuapmdm/modeling/mdmshow/card/reference/archives`,{
                method: "GET",
                param: {
                    entityItemCode: propsObj.entityItemCode,
                    entityCode: propsObj.entityCode,
                    rid: new Date().getTime()
                }
            }).then(( resp ) =>{
                requestFun(resp);
            }).catch(() =>{
            });
        }
        
    }

    getData = (key, treeNodePk) => {
        let params = Object.assign({},this.state.queryParams);
        let type = this.state.type || 'grid';
        if(key)
            params.key = key;
        if(treeNodePk)
            params.treeNodePk = treeNodePk;
        let url = '/iuapmdm/reference/mdmref/'
        if(type === 'grid'){
            url += '/grid';
            params.pageSize = this.pageSize
            params.pageIndex = this.currPageIndex
        }else if(type === 'tree'){
            url += '/tree';
        }else if(type === 'treegrid'){
            url += '/treegrid';
            params.pageSize = this.pageSize
            params.pageIndex = this.currPageIndex
        }
        request(url,{
            method: "GET",
            param: params
        }).then(( resp ) =>{
            let columnsData= [];
            let tableData = [];
            let treeData = [];
            let gridDataObj,treeDataObj,pkField,writeField;
            if(type === 'grid'){
                this.pageCount = resp.data.pageCount;
                this.totalElements = resp.data.total;
            }else if(type === 'treegrid'){
                this.pageCount = resp.data.gridData.pageCount;
                this.totalElements = resp.data.gridData.total;
            }
            if(type === 'grid' || type === 'treegrid'){
                gridDataObj = resp.data;
                if(type === 'treegrid'){
                    gridDataObj = resp.data.gridData;
                }
                pkField = gridDataObj.pkField;
                writeField = gridDataObj.writeField;
            }
            if(type === 'tree'  || type === 'treegrid'){
                treeDataObj = resp.data;
                if(type === 'treegrid'){
                    treeDataObj = resp.data.treeData;
                }
                pkField = treeDataObj.pkField;
                writeField = treeDataObj.writeField;
            }

            function transData(data) {    
                var newdata = [];
                var idField = treeDataObj.pkField;
                var pidField = treeDataObj.parentField;
          
                function group(nodes) {
                  var groups = {}
                  for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i][pidField]) {
                      if (groups[nodes[i][pidField]]) {
                        groups[nodes[i][pidField]].push(nodes[i]);
                      } else {
                        groups[nodes[i][pidField]] = [];
                        groups[nodes[i][pidField]].push(nodes[i]);
                      }
                    } else {
                      groups['root$#@_'] = groups['root$#@_'] || [];
                      groups['root$#@_'].push(nodes[i]);
                    }
                  }
                  return groups;
                }
                var groups = group(data);
                function getChildren(groups, id) {
                  var nowGroup = groups[id];
                  var children = [];
                  if (nowGroup) {
                    for (var i = 0; i < nowGroup.length; i++) {
                      var nowNode = nowGroup[i];
                      var nowId = nowNode[idField];
                      var child = nowNode;
                      child.children = getChildren(groups, nowId);
                      children.push(nowNode);
                    }
                  }
                  delete groups[id];
                  return children;
                }
                newdata = getChildren(groups, 'root$#@_');
                data = newdata;
              return data;
            }
            if(type === 'grid' || type === 'treegrid'){
                tableData = gridDataObj.data;
                let header = gridDataObj.header;
                for(let i = 0; i < header.length; i++){
                    if(header[i].visible){
                        let column = {
                            title: header[i].text,
                            key: header[i].fieldId,
                            dataIndex: header[i].fieldId
                        }
                        columnsData.push(column)
                    }
                }
            }
            if(type === 'tree'  || type === 'treegrid'){
                treeData = treeDataObj.data;
                treeData = transData(treeData);
            }
            
            this.setState({
                pkField: pkField,
                writeField: writeField,
                columnsData: columnsData,
                tableData: tableData,
                treeData: treeData,
                showLoading: false
            })
            this.forceUpdate()
        }).catch(() =>{
            this.setState({
                columnsData: [],
                tableData: [],
                treeData: [],
                showLoading: false
            });
        });
    }

    getRender(props,refProps){
        let type = this.state.type;
        // console.log(refProps.treeData);
        if(type === 'grid'){
            return <RefMultipleTableWithInput
                theme="blue" 
                {...props}
                {...refProps}
                >   
            </RefMultipleTableWithInput>
            // return <RefWithInput 
            // {...props}
            // {...refProps}
            // >   
            //     <RefMultipleTableBaseUI/>
            // </RefWithInput>
        }else if(type === 'tree'){
            return <RefTreeWithInput 
                {...props}
                {...refProps}
                >   
            </RefTreeWithInput>
            // return <RefWithInput 
            // {...props}
            // {...refProps}
            // >   
            //     <RefTreeBaseUI/>
            // </RefWithInput>

        }else if(type === 'treegrid'){
            return <RefTreeTableWithInput 
                {...props}
                {...refProps}
                >   
            </RefTreeTableWithInput>
            // return <RefWithInput 
            // {...props}
            // {...refProps}
            // >   
            //     <RefTreeTableBaseUI/>
            // </RefWithInput>
        }else{
            return <div></div>
        }
    }
    handlePagination(index) {
        this.currPageIndex = index;
        this.getData(this.state.tableKey)
    }
    dataNumSelect(index, pageSize){
        this.currPageIndex = index;
        this.pageSize = pageSize;
        this.getData(this.state.tableKey)
    }
    loadTableData(params){
        this.currPageIndex = params['refClientPageInfo.currPageIndex'] + 1;
        this.pageSize = params['refClientPageInfo.pageSize'];
        this.getData(this.state.tableKey, this.state.treeNodePk)
    }
    render() {
        const {title,pkField,writeField,showLoading,columnsData,tableData,treeData} = this.state;
        let type = this.state.type;
        let value = this.props.value;
        let disabled = this.props.disabled;
        let placeholder = this.props.placeholder; 
        const props = {
            title: title,
            valueField: pkField,
            displayField: "{"+writeField+"}",
            className: 'mdm-ref',
            value:value,
            disabled:disabled,
            placeholder: placeholder,
            canClickGoOn:()=>{
                this.getData();
                return true
            }
        }
        if(this.props.onChange)
            props.onChange = this.props.onChange;
        let refProps;
        if(type === 'grid'){
            refProps = Object.assign({},{
                showLoading: showLoading,
                columnsData: columnsData,
                tableData: tableData,
                pageCount: this.pageCount,
                totalElements: this.totalElements,
                pageSize: this.pageSize,
                currPageIndex: this.currPageIndex,
                dataNumSelect: this.dataNumSelect,
                handlePagination: this.handlePagination,
                miniSearchFunc: (key) =>{
                    this.setState({
                        tableKey: key
                    })
                    this.getData(key)
                }
            });
        }else if(type === 'tree'){
            refProps = Object.assign({},{
                showLoading: showLoading,
                nodeDisplay: "{" + writeField + "}",
                treeData: treeData
            });
        }else if(type === 'treegrid'){
            refProps = Object.assign({},{
                showLoading: showLoading,
                nodeDisplay: "{" + writeField + "}",
                treeData: treeData,
                columnsData: columnsData,
                tableData: tableData,
                page:{
                    pageCount: this.pageCount,
                    totalElements: this.totalElements,
                    pageSize: this.pageSize,
                    currPageIndex: (this.currPageIndex -1)
                },
                loadTableData: this.loadTableData,
                onTableSearch: (key) =>{
                    this.setState({
                        tableKey: key
                    })
                    this.getData(key, this.state.treeNodePk)
                },
                condition: new Date().getTime(),
                searchable: false,
                onTreeChange:(treeNodes) =>{
                    let key = treeNodes[0].refpk;
                    this.setState({
                        treeNodePk: key
                    })
                    this.getData(this.state.tableKey,key)
                }
            });
        }
        
        return (
          <div>
              { 
                this.getRender(props,refProps)
              }
          </div>
            
        )
    }
}
export default MdmRefComp;