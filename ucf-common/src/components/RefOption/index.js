const deepClone=(obj)=>{
    var proto=Object.getPrototypeOf(obj);
    return Object.assign({},Object.create(proto),obj);
}

let option = {
    title: '',
    refType: 2,//1:树形 2.单表 3.树卡型 4.多选 5.default
    className: '',
    hasPage: true,
    param: {//url请求参数
        refCode: 'bd_common_user',
        tenantId: '',
        sysId: '',
        transmitParam: 'EXAMPLE_CONTACTS,EXAMPLE_ORGANIZATION',
    },
    refModelUrl:{
        GridUrl:'/newref/rest/iref_ctr/commonRefsearch',//单选多选请求
        TreeUrl:'/newref/rest/iref_ctr/blobRefTree', //树请求
        TableBodyUrl:'/newref/rest/iref_ctr/blobRefTreeGrid',//表体请求//ref/rest/iref_ctr/blobRefTreeGrid
        TableBarUrl:'/newref/rest/iref_ctr/refInfo',//表头请求ref/rest/iref_ctr/refInfo
    },
    filterRefUrl:'/newref/rest/iref_ctr/matchPKRefJSON',//get
    buttonText:{ok:<FormattedMessage id="js.com.Ref2.0001" defaultMessage="确定" />,cancel:<FormattedMessage id="js.com.Ref2.0002" defaultMessage="取消" />},
    // keyList:['123'],//选中的key

    // checkedArray: [],
    onCancel: function (p) {
        console.log(p)
    },
    // filterKey: [{ title: '人员名称人员名称人员名称', key: 'peoname' }, { title: '人员名称', key: 'peoname' }, { title: '人员名称', key: 'peoname' }, { title: '人员名称', key: 'peoname' }, { title: '人员名称', key: 'peoname' }, { title: '人员名称', key: 'peoname' }, { title: '人员名称', key: 'peoname' }, { title: '人员名称', key: 'peoname' }, { title: '人员名称', key: 'peoname' }, { title: '人员名称', key: 'peoname' }, { title: '人员名称', key: 'peoname' }],
    textOption: {
        modalTitle: <FormattedMessage id="js.com.Ref2.0003" defaultMessage="选择品类" />,
        leftTitle: <FormattedMessage id="js.com.Ref2.0004" defaultMessage="分类" />,
        rightTitle: <FormattedMessage id="js.com.Ref2.0005" defaultMessage="列表" />,
        leftTransferText: <FormattedMessage id="js.com.Ref2.0006" defaultMessage="待选" />,
        rightTransferText: <FormattedMessage id="js.com.Ref2.0007" defaultMessage="已选" />,
        // leftInfo: [{ text: '流水号', key: 'peoname' }, { text: '品类编码', key: 'institid' }, { text: '品类描述', key: 'refname' }],
        // rightInfo: [{ text: '流水号', key: 'id' }, { text: '品类编码', key: 'id' }, { text: '品类描述', key: 'peocode' }],
    }
}



export default function (p) {
    return Object.assign(deepClone(option),p)
}
