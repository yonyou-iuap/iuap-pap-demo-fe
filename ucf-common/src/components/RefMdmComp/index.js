/**
 *
 * @title 表格参照带有input
 * @description 表格参照带有input
 *
 */
import React, { Component } from 'react';
// import RefWithInput from 'ref-core/lib/refs/refcorewithinput';
// import RefTreeBaseUI from 'ref-tree';
import {RefTreeWithInput} from 'ref-tree';
import request from 'utils/request.js'
// import RefMultipleTableBaseUI from 'ref-multiple-table';
import {RefMultipleTableWithInput} from 'ref-multiple-table';
// import RefTreeTableBaseUI from 'ref-tree-table';
import {RefTreeTableWithInput} from 'ref-tree-table';
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
    }
    componentWillMount() {
        this.initComponent();
    }

    initComponent = () => {
        request(`/iuapmdm/modeling/mdmshow/card/reference`,{
            method: "GET",
            param: {
                pk_entityitem: this.props.pk_entityitem,
                pk_gd: this.props.pk_gd,
                rid: new Date().getTime()
            }
        }).then(( resp ) =>{
            let data = resp.data;
            let fullclassname = data.fullclassname || '';
            let pk_entityitem = data.params.pk_entityitem || '';
            let pk_gd = data.params.pk_gd || '';
            let refPkGd = data.params.refPkGd || '';
            let type = data.type;
            let title = data.title || '参照';
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
        }).catch(() =>{
        });
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
        }else if(type === 'tree'){
            url += '/tree';
        }else if(type === 'treegrid'){
            url += '/treegrid';
        }
        request(url,{
            method: "GET",
            param: params
        }).then(( resp ) =>{
            let columnsData= [];
            let tableData = [];
            let treeData = [];
            let gridDataObj,treeDataObj,pkField,writeField;
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
    render() {
        const {title,pkField,writeField,showLoading,columnsData,tableData,treeData} = this.state;
        let type = this.state.type;
        let value = this.props.value;
        let disabled = this.props.disabled;
        const props = {
            title: title,
            valueField: pkField,
            displayField: "{"+writeField+"}",
            className: 'mdm-ref',
            value:value,
            disabled:disabled,
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
                pageCount: 0,
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
                    pageCount: 0
                },
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