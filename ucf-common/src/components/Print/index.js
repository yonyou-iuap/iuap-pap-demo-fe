import {processData} from 'utils';
import request from 'utils/request';


const URL = {
    "GET_QUERYPRINTTEMPLATEALLOCATE": `/eiap-plus/appResAllocate/queryPrintTemplateAllocate`,  // 查询打印模板
    "PRINTSERVER": '/print_service/print/preview',                                              // 打印
    "GET_TENANT":`/eiap-plus/remote/getTenantId`,       //获取租户id
}
    

const print = {
    /**
     * @description 该方法为页面打印调用方法,打印功能需要先查询打印模板，再调打印接口
     *
     */
    onPrint: function(params,config){
        let rowIndex = params.selectIndex;
        if (rowIndex < 0 || typeof(rowIndex) !== 'number') {
            alert('请选择需打印的数据');
            return;
        }

        this.printDocument({
            queryParams: {
                funccode: config.funCode,
                nodekey: config.modelName
            },
            printParams: {id: params.id}
        },config);
    },
    printDocument: async function(param,config){
        let {result} = processData(await this.queryPrintTemplateAllocate(param.queryParams), '');
        let tenRes =  await this.getTenant();
        let tenantid = '';
        if(tenRes.status == 200){
            tenantid = tenRes.data;
        }
        if(!tenantid){
            alert('租户id获取失败');

        }

        let {data:res} = result;
        if (!res || !res.res_code) {
            return false;
        }

        let serverUrl = config.serverUrl;
        if(!serverUrl){
            let modelNameLower = (config.modelName || '').toLowerCase();
            let funcCodeLower = (config.funCode || '').toLowerCase();
            serverUrl = `${GROBAL_HTTP_CTX}/${funcCodeLower}/${modelNameLower}/dataForPrint`;
        }

        await this.printDocumentService({
            tenantId: tenantid,
            printcode: res['res_code'],
            serverUrl: serverUrl,
            params: encodeURIComponent(JSON.stringify(param.printParams)),
            sendType: 'post'
        })
    },
    /**
     *
     * 查询打印模板
     * @param {*} params
     * @returns
     */
    queryPrintTemplateAllocate: function(params){
        return request(URL.GET_QUERYPRINTTEMPLATEALLOCATE, {
            method: "get",
            param: params
        });
    },
    printDocumentService: function(params){
        let search = [];
        for (let key in params) {
            search.push(`${key}=${params[key]}`)
        }
        let exportUrl = `${URL.PRINTSERVER}?${search.join('&')}`;

        window.open(exportUrl);
    },
    /**
     * 获取打印租户ID
     * @param {*} params
     */
    getTenant : (param) => {
        return request(URL.GET_TENANT, {
            method: "get",
            param
        });
    }
}

export default print;