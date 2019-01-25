import React, { Component } from "react";
import { actions } from "mirrorx";
import classNames from "classnames";
//UI组件
import { FormControl, Label, Loading, Tooltip, Icon} from "tinper-bee";
import Select from 'bee-select';
import Form from "bee-form";
import Grid from 'components/Grid';
import Header from "components/Header";
import Button from "components/Button";
import Alert from "components/Alert";
import PopDialog from "components/Pop";
import SearchArea from "./SearchArea";

//工具类

import {deepClone,getSortMap,getPageParam} from "utils";

//样式文件
import "bee-complex-grid/build/Grid.css";
import "bee-pagination/build/Pagination.css";
import 'bee-table/build/Table.css'
import "./index.less";

const Option = Select.Option;
/**
 * 默认的columns
 */
const defaultColumns = [
  {
    title: "序号",
    dataIndex: "index",
    key: "index",
    width: 100,
    render(record, text, index) {
      return index + 1;
    }
  },
  {
    title: "员工编号",
    dataIndex: "code",
    key: "code",
    width: 120
  },
  {
    title: "员工姓名",
    dataIndex: "name",
    key: "name",
    width: 120,
    filterType: "text",
    filterDropdown: "show",
    render: (text, record, index) => {
      return (
        <Tooltip inverse overlay={text}>
          <span tootip={text} className="popTip">
            {text}
          </span>
        </Tooltip>
      );
    }
  },
  {
    title: "员工性别",
    dataIndex: "sexEnumValue",
    key: "sexEnumValue",
    width: 120
  },
  {
    title: "所属部门",
    dataIndex: "deptName",
    key: "deptName",
    width: 120
  },
  {
    title: "职级",
    dataIndex: "levelName",
    key: "levelName",
    width: 140
  },
  {
    title: "工龄",
    dataIndex: "serviceYears",
    key: "serviceYears",
    width: 130,
    sorter: (a, b) => a.serviceYears - b.serviceYears //添加sorter属性代表当前列可以排序
  },
  {
    title: "司龄",
    dataIndex: "serviceYearsCompany",
    key: "serviceYearsCompany",
    width: 130,
    sorter: (a, b) => a.serviceYearsCompany - b.serviceYearsCompany //添加sorter属性代表当前列可以排序
  },
  {
    title: "年份",
    dataIndex: "year",
    key: "year",
    width: 100
  },
  {
    title: "月份",
    dataIndex: "monthEnumValue",
    key: "monthEnumValue",
    width: 100,
    sorter: (a, b) => a.month - b.month ////添加sorter属性代表当前列可以排序
  }
];

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectValue: 0,
      modelName: "",
      showDeleteModal: false,
      columns: defaultColumns.slice()
    };
  }

  componentDidMount() {
    //请求模板数据
    actions.templateModel.loadTemplateList().then(res => {
      const { queryParam } = this.props;
      let queryParamAndColumns={
        queryParam
      };
      //根据模板数据获取表格的columns、分页
      if (res.content.length > 0) {
        const modelContent = JSON.parse(res.content[0].modelContent);
        queryParamAndColumns = this.getQueryParamAndColumns(modelContent);
        this.setState({
          selectValue: 1,
          columns: queryParamAndColumns.columns
        });
      }

      actions.templateModel.loadList(queryParamAndColumns.queryParam);
    });
  }

  /**
   *
   * 获取查询参数和选中columns
   *  @param {*} template 模板对象
   */
  getQueryParamAndColumns = template => {
    let trueColumns = defaultColumns.map(item => {
      return Object.assign({}, item);
    });
    const { queryParam } = this.props;
    const { paginationObj = { activePage: 1, items: 25 } } = template.tablePros;
    const selectColumns = template.columns;
    let sortMap = [];
    queryParam["pageParams"] = {
      pageIndex: paginationObj.activePage - 1,
      pageSize: paginationObj.items
    };
    //保存的columns不可以保存key为function的内容，因此和原始的columns合并下
    trueColumns = selectColumns.map((item, index) => {
      //排序参数查询
      if (item.orderNum > 0) {
        const direction = (item.order === "ascend" ? "ASC" : "DESC");
        let property = item.dataIndex;
        if (property.includes("EnumValue")) {
            property = property.replace("EnumValue", ''); //去掉枚举尾标记，前后端约定
        }
        sortMap[property] = direction;
        
      }

      //合并选中columns，生成最终的columns
      let colItem = item;
      //根据dataIndex查找column元素，不可以根据index查找，因为模板的column经过交换列的操作，index并不对应
      trueColumns.some(originItem => {
        if (originItem.dataIndex == item.dataIndex) {
          colItem = { ...originItem, ...item };
          return true;
        }
      });
      return colItem;
    });
    queryParam.sortMap = sortMap;
    return {
      queryParam,
      columns:trueColumns
    }
  };
  /**
   *返回当前选中的数据数组
   *
   * @param {*} data
   */
  getSelectedDataFunc = data => {
    console.log("data", data);
  };

  /**
   *
   * 设置某一行数据是否被选中，使用类似于rowClassName
   */
  selectedRow = (record, index) => {};

  /**
   *后端排序
   *
   * @param {*} sortParam 排序参数
   * @param {*} paramColumns 当前表的column
   */
  sortFun = (sortParam, paramColumns) => {
    const { queryParam = {} } = this.props;
    queryParam.sortMap = getSortMap(sortParam);
    actions.templateModel.loadList(queryParam);
    this.setState({
      columns: paramColumns.slice() //避免修改原始columns
    });
  };

  // 分页  跳转指定页数
  freshData = pageIndex => {
    this.onPageSelect(pageIndex, 0);
  };

  // 分页  跳转指定页数和设置一页数据条数
  onDataNumSelect = (index, value) => {
    this.onPageSelect(value, 1);
  };

  // type为0标识为pageIndex,为1标识pageSize
  onPageSelect = (value, type) => {

    let queryParam = deepClone(this.props.queryParam); // 深拷贝查询条件从action里
    const {pageIndex, pageSize} = getPageParam(value, type,queryParam.pageParams);
    queryParam['pageParams'] = {pageIndex, pageSize};
    actions.templateModel.loadList(queryParam);

  };

  /**
   * 选则模板
   *
   * @param {*} value
   */
  handleSelectChange = value => {
    //grid中的column是否完全使用传入的column
    this.noReplaceColumns = true;
    const { selectOptionDataSource } = this.props;
    let queryParamAndColumns={
      queryParam:{
        pageParams : {
          pageIndex : 0,
          pageSize : 25
        },
        whereParams :[],
        orderParams : {
            orderParamsList : []
        }
      }
    };


    //保存的columns不可以保存key为function的内容，因此和原始的columns合并下
    if (value) {
      const selectTemplate = selectOptionDataSource.find(item=>item.value == value);
      queryParamAndColumns = this.getQueryParamAndColumns(selectTemplate.trueValue);
    }else{
      queryParamAndColumns.columns = defaultColumns.slice()
    }
    this.setState({ selectValue: value, columns: queryParamAndColumns.columns }, () => {
      actions.templateModel.loadList(queryParamAndColumns.queryParam);
    });
    setTimeout(() => {
      this.noReplaceColumns = false;
    }, 1000);
  };


  /**
   *
   * @description 获取column和table属性，生成模板
   * @memberof Index
   */
  createTemTable = () => {
    let colsAndTablePros = this.grid.getColumnsAndTablePros();
    let modelContentColumns = [],modelContentTable;
    colsAndTablePros.columns.forEach(item => {
      modelContentColumns.push({
        dataIndex: item.dataIndex,
        ifshow: item.ifshow,
        order: item.order,
        sorter: item.sorter,
        width: item.width,
        orderNum: item.orderNum,
        fixed: item.fixed
      });
    });
    modelContentTable = Object.assign({}, colsAndTablePros.tablePros);
    modelContentTable.columns = [];

    this.props.form.validateFields((err, values) => {
      values.modelContent = JSON.stringify({
        columns: modelContentColumns,
        tablePros: modelContentTable
      });
      actions.templateModel.saveTemplate(values);
    });
    this.setState({
      showModal: false
    });
  };


  /**
   *
   * @description 删除模板前调用的方法，防止select其他事件、用于打开删除模态框
   * @memberof Index
   */
  beforeDelTemplate = (e, item) => {
    e.stopPropagation();
    e.preventDefault();
    this.delId = item.id;
    this.setState({
      showDeleteModal: true
    });
  };

  /**
   * @description 打开和关闭创建模板模态框
   * @memberof Index
   */
  ifShowModal = showModal => {
    this.setState({
      showModal
    });
  };

  /**
   * @description 打开和关闭删除模板模态框
   * @memberof Index
   */
  ifShowDeleteModal = showDeleteModal => {
    this.setState({
      showDeleteModal
    });
  };


  /**
   * @description 删除模板
   * @memberof Index
   */
  delTemplate = () => {
    actions.templateModel.removeTemplate(this.delId);
    this.ifShowDeleteModal(false);
  };

  /**
   *
   * @description 导出
   * @memberof Index
   */
  export = () => {
    this.grid.exportExcel();
  };

  render() {
    let {
      list,
      showLoading,
      pageIndex,
      totalPages,
      queryParam,
      selectOptionDataSource,
      total,
      form
    } = this.props;
    const { getFieldProps } = form;

    let { modelName, showModal, showDeleteModal, selectValue } = this.state;

    const paginationObj = {
      // 分页
      activePage: pageIndex, //当前页
      total: total, //总条数
      items: totalPages,
      freshData: this.freshData,
      onDataNumSelect: this.onDataNumSelect,
    };

    const sortObj = {
      //后端排序
      mode: "multiple",
      backSource: true,
      sortFun: this.sortFun
    };

    let templateOptsDom = selectOptionDataSource.map((item, index) => {
      return (
        <Option value={item.value} key={item.value}>
          <span>
            {item.key}
            <Icon
              type="uf-del"
              className={classNames("del-templ-icon", { disabled: index == 0 })}
              onClick={e => this.beforeDelTemplate(e, item)}
            />
          </span>
        </Option>
      );
    });
    let btns = [
      {
        label: "确定",
        fun: this.createTemTable,
        icon: "uf-correct"
      },
      {
        label: "取消",
        fun: () => this.ifShowModal(false),
        icon: "uf-close"
      }
    ];
    return (
      <div className="view-template">
        <Header title="C2单表Grid模板示例 " />
        <SearchArea form={form} queryParam={queryParam} />
        <div className="table-header">
          <div className="btn-group">
            <Select
              className="select-templ"
              style={{ width: 200 }}
              placeholder="选则模板"
              onChange={this.handleSelectChange}
              value={selectValue}
            >
              {templateOptsDom}
            </Select>

            <Button
              iconType="uf-save"
              className="save-btn"
              onClick={() => {
                this.ifShowModal(true);
              }}
            >
              保存模板
            </Button>

            <PopDialog
              className="template-con"
              show={showModal} //默认是否显示
              title="保存模板"
              close={() => this.ifShowModal(false)}
              btns={btns}
              size={"sm"}
            >
              <Label>模板名称：</Label>
              <FormControl
                {...getFieldProps("modelName", {
                  validateTrigger: "onBlur",
                  initialValue: modelName || "",
                  rules: [
                    {
                      type: "string",
                      required: true,
                      pattern: /\S+/gi,
                      message: "请输入模板名称"
                    }
                  ]
                })}
              />
            </PopDialog>
            <Button
              iconType="uf-export"
              className="save-btn"
              onClick={this.export}
            >
              导出
            </Button>
          </div>
        </div>
        <div className="girdParent">
          <Grid
            data={list}
            rowKey={(r, i) => i}
            columns={this.state.columns.slice()}
            paginationObj={paginationObj}
            selectedRow={this.selectedRow}
            draggable={true}
            dragborder={true}
            multiSelect={{ type: "checkbox" }}
            getSelectedDataFunc={this.getSelectedDataFunc}
            scroll={{ y: "300px" }}
            showHeaderMenu={true}
            noReplaceColumns={this.noReplaceColumns}
            ref={(el) => this.grid = el}
            sort={sortObj} //后端排序
            sheetName="demo4 导出模板"
            sheetIsRowFilter={true}
            headerHeight={36}
            sheetHeader={{ height: 30, ifshow: false }}
          />
          <Loading show={showLoading} loadingType="line" />
        </div>

        <Alert
          show={showDeleteModal} //默认是否显示
          cancelFn={() => this.ifShowDeleteModal(false)}
          confirmFn={this.delTemplate}
          context="是否删除该模板 ?"
        />
      </div>
    );
  }
}
export default Form.createForm()(Index);
