export default type => {
  switch (type) {
    case "factory": //工厂
      return {
        tablename: "org_factory",
        idfield: "pk_factory",
        codefield: "code",
        namefield: "name"
      };
      break;
    case "dept": //部门
      return {
        tablename: "org_dept",
        idfield: "pk_dept",
        pidfield:"pk_fatherorg",
        codefield: "code",
        namefield: "name"
      };
      break;
    case "person": //人员
      return {
        tablename: "bd_psndoc",
        idfield: "pk_psndoc",
        codefield: "code",
        namefield: "name"
      };
      break;
    case "post": //岗位
      return {
        tablename: "om_post",
        idfield: "pk_post",
        codefield: "postcode",
        namefield: "postname"
      };
      break;
    case "user": //用户
      return {
        tablename: "sm_user",
        idfield: "cuserid",
        codefield: "user_name",
        namefield: "user_code"
      };
      break;
    case "workcenter": //工作中心
      return {
        tablename: "bd_wk",
        idfield: "cwkid",
        codefield: "vwkcode",
        namefield: "vwkname"
      };
      break;
    case "process": //工段
      return {
        tablename: "pbd_process_118",
        idfield: "pk_process",
        codefield: "vcode",
        namefield: "vname"
      };
      break;  
    case "team": //班组
      return {
        tablename: "bd_team",
        idfield: "cteamid",
        codefield: "vteamcode",
        namefield: "vteamname"
      };
      break;
    case "shift": //班次
      return {
        tablename: "bd_shift",
        idfield: "pk_shift",
        codefield: "code",
        namefield: "name"
      };
      break;
      case "pk_shifttype": //班次类型
      return {
        tablename: "bd_shifttype",
        idfield: "pk_shifttype",
        codefield: "code",
        namefield: "name"
      };
      break;
    case "device": //装置(即生产单元)
      return {
        tablename: "pbd_prores_118",
        idfield: "pk_prores",
        codefield: "vcode",
        namefield: "vname"
      };
      break;
    case "material": //物料
      return {
        tablename: "bd_material",
        idfield: "pk_material",
        codefield: "code",
        namefield: "name"
      };
      break;
    case "measdoc": //计量单位
      return {
        tablename: "bd_measdoc",
        idfield: "pk_measdoc",
        codefield: "code",
        namefield: "name"
      };
      break;
    default:
      break;
  }
};
