export default (options) => {
    /**
     * title:参照标题 
     * refType:参照类型 1:树形 2.单表 3.树卡型
     * isRadio：是否单选
     * hasPage：是否分页
     * refCode：参照编码（后台注册对应编码）
     * callback:回调函数
     * fieldName：主页面参照对应字段名
     * pk_org:组织pk（用于需要通过orgid过滤参照数据的情况）
     * queryparams：查询需要的其它参数，common参照需要传入表名 格式{tablename:表名,condition:查询条件}
     */
    let {title,refType,isRadio,hasPage,refCode,callback,fieldName,pk_org,queryparams} = options;
    
    let refModelUrl ={};
    if(refType == 1){
        refModelUrl.TreeUrl ='/newref/rest/iref_ctr/blobRefTree';//树请求
    }else if(refType ==2){
        refModelUrl.TableBodyUrl= '/newref/rest/iref_ctr/commonRefsearch';//表体请求
        refModelUrl.TableBarUrl ='/newref/rest/iref_ctr/refInfo';//表头请求
    }else if(refType == 3){
        refModelUrl.TableBodyUrl= '/newref/rest/iref_ctr/commonRefsearch';//表体请求
        refModelUrl.TableBarUrl ='/newref/rest/iref_ctr/refInfo';//表头请求
        refModelUrl.TreeUrl ='/newref/rest/iref_ctr/blobRefTree';//树请求
    }
return{

        title:title,//参照标题  
        refType:refType,//类型
        isRadio:isRadio,//是否单选
        hasPage:hasPage,//是否分页
        tabData:[
            // {"title":"常用","key":"commonUse"},
            {"title":"全部","key":"total"}
        ],
        param:{
            refCode:refCode,//参照编码(需在应用平台数据库ref_refinfo添加数据)
            // refModelUrl:'http://workbench.yyuap.com/ref/testref_ctr/'
            pk_org:pk_org,
            transmitParam:{queryparams}
        },
        refModelUrl:refModelUrl,//根据类型选择不同url请求
        checkedArray:[],//已选中项
        onCancel:function(p){
            console.log(p);
        },
        onSave:function(sels){
            callback(sels,fieldName);
        },
}
}