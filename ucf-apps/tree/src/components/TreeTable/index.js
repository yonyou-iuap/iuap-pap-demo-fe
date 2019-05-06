import React, {Component} from 'react';
import {actions} from 'mirrorx';

// 导入组件
import Grid from 'components/Grid';
import CommonPop from '../CommonPop';
import Button from 'components/Button';
import Alert from 'components/Alert';
import ButtonRoleGroup from 'components/ButtonRoleGroup';

// 导入自定义工具类
import {deepClone, success, Error, Warning,getPageParam} from 'utils';

// 导入样式
import './index.less';


class TreeTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tableHeight : 500
		};
		this.grid = null;
		this.column = [
			{
				title: "姓名",
				dataIndex: "name",
				key: "name",
				width:200,
			},
			{
				title: "性别",
				dataIndex: "sexEnumValue",
				key: "sexEnumValue",
				width:200,
			},
			{
				title: "年龄",
				dataIndex: "age",
				key: "age",
				width: 200,
			}
		]
	}

	componentWillMount() {
		const _this = this;

		_this.getHeight();

		window.onresize = function() {
			_this.getHeight();
		}
	}

	componentWillUnmount() {
		window.onresize = {}
	}

	/**
	 * @description 表格复选框勾选时间
	 * @param {Object} value 行数据
	 * @returns null
	 */
	getSelectedDataFunc = (selectData, record, index) => {
		let { tableData } = this.props;
		let _tableData = deepClone(tableData);
		if (index != undefined) {
			_tableData[index]['_checked'] = !_tableData[index]['_checked'];
		} else {//点击了全选
			if (selectData.length > 0) {//全选
				_tableData.map(item => {
					if (!item['_disabled']) {
						item['_checked'] = true
					}
				});
			} else {//反选
				_tableData.map(item => {
					if (!item['_disabled']) {
						item['_checked'] = false
					}
				});
			}
		}
		// 获取选中数据
		console.log("selvalue",selectData);
		actions.walsinTree.updateState({
			tableSelValue : selectData,
			tableData: _tableData
		})
	}

    /**
	 * @description 分页  跳转指定页数
	 * @param {Number} pageIndex 分页组件，当前页面索引
	 */
	freshData = (pageIndex) => {
        this.onPageSelect(pageIndex, 0);
    }

    /**
	 * @description 表格数据每页显示数目回调函数，即pageSize回调函数
	 * @param {number} index pageSize下拉框中的选中数据索引
	 * @param {string} value value为grid一页显示条数值
	 */
	onDataNumSelect = (index, value) => {
        this.onPageSelect(value, 1);
    }

    /**
	 *
	 * @description pageIndex、pageSize的公共处理函数
	 * @param {Number} value value为传入的pageIndex或pageSize的值
	 * @param {Number} type 类型标识 0标识此次调用为pageIndex,为1标识此次调用为pageSize
	 */
	onPageSelect = (value, type) => {
		let _this = this;
		let {paginationParam} = _this.props,
			resultObj = paginationParam.reqParam && deepClone(paginationParam.reqParam) || {};
		console.log('paginationParam',paginationParam);
		// if (type === 0) {
		// 	resultObj['pageIndex'] = value - 1;
        // } else {

		// 	resultObj = Object.assign({}, deepClone(resultObj), {
		// 		pageSize : value.toLowerCase() !== 'all' && value || 1,
		// 		pageIndex : 0
		// 	});
		// }

		const {pageIndex, pageSize} = getPageParam(value, type,resultObj);
		resultObj['pageIndex'] = pageIndex;
		resultObj['pageSize'] = pageSize;
		actions.walsinTree.loadTable(resultObj);

		_this.resetSelData();
    }

	/**
	 *
	 * @description 新增、修改、查看点击事件
	 * @param {Number} btnFlag 页面标识为0表示新增、1表示修改、2表示查看详情
	 */
	onCommonClick = (btnFlag) => (value) => {
		let _this = this;
		let	{comModalParam, paginationParam, tableSelValue} = _this.props,
			resultObj = {},
			len = tableSelValue.length;
		comModalParam = deepClone(comModalParam);

		if (btnFlag > 0) {
			// 表示编辑、查看
			if (Array.isArray(tableSelValue) && len) {

				if (len > 1) {
					Warning("请选择单条表数据");
					return;
				}

				resultObj = Object.assign({}, comModalParam, {
					showModal : true,
					initEditValue : tableSelValue[0],
					btnFlag
				})
			} else {
				Warning("请选择表数据");
				return ;
			}
		} else {
			// 表示新增,需判断时候选择树节点
			let search_treeId = typeof paginationParam.reqParam !== 'undefined' && paginationParam.reqParam.search_treeId || "";
			if (search_treeId) {

				resultObj = {
					showModal : true,
					btnFlag,
					initEditValue : {}
				}
			} else {
				Warning("请选择表数据所属树节点");
			}

		}
		actions.walsinTree.updateState({
			comModalParam : resultObj
		})
	}

	onDelete = async () => {
		// 删除方法
		let {tableSelValue} = this.props;
		if	(Array.isArray(tableSelValue) && tableSelValue.length > 0) {
			await actions.walsinTree.updateState({
				delModal : true
			});

		} else {
			Warning("请选择数据");
		}
	}

	/**
	 *
	 * @description delModal confirm & cancel common method
	 * @param {Boolean} delFlag 为true表示点击modal确认按钮，为false表示点击的是modal取消按钮
	 * @param {Object} tableSelValue 表示表格行数据
	 */
	onModalDel = async (delFlag) => {

		let _this = this;
        let {tableSelValue} = _this.props;
        if (delFlag) {
			await actions.walsinTree.updateState({
				showLoading : true
			});
            await actions.walsinTree.delTableData(tableSelValue);
            _this.closeModal();
        } else {
			_this.closeModal();
		}
    }

	closeModal = async () => {
		await actions.walsinTree.updateState({
			showLoading : false,
			delModal : false
		});
	}

	/**
	 *	@description export function
	 */
	onExport = () => {
		this.grid.exportExcel();
	}

	componentDidMount() {
		let _this = this;
		let {paginationParam} = _this.props;

		actions.walsinTree.loadTable(paginationParam.reqParam || {
			pageIndex : 0,
            pageSize : 25,
		});

		_this.resetSelData();

	}

	resetSelData = () => {
		actions.walsinTree.updateState({
			tableSelValue : []
		})
	}

	/**
	 * @description 根据表格选中数据的数量，确定按钮是否禁用还是显示，
	 * 				情况一：没有选中数据，增、改、详情、删状态分别为显示、禁用、禁用、禁用
	 * 				情况二：有单条选中数据，增、改、详情、删动作皆可触发
	 * 				情况三：有多条选中数据，增、改、详情、删状态分别为显示、禁用、禁用、显示
	 * @param {Object} tableSelValue 表示表格行数据
	 * @returns {Object} 按钮禁用状态对象
	 */
	onHandleDisabled = () => {
		let {tableSelValue} = this.props,
			len = tableSelValue.length;

		if(len) {

			if(len == 1) {
				return {0 : false, 1 : false, 2 : false, 3 : false};
			} else {
				return {0 : false, 1 : true, 2 : true, 3 : false};
			}

		} else {
			return { 0 : false, 1 : true, 2 : true, 3 : true}
		}

	}

	/**
	 * @description 根据页面视口区域高度计算表格高度，以确定什么时候出滚动条
	 * @param {Number} clientHeight 视口高度
	 * @param {Number} scrollHeight 包含滚动内容大小的高度
	 * @param {Number} pageHeadHeight head的高度
	 * @param {Number} buttonGroupHeight 增、删、改按钮组的高度
	 * @param {Number} paginationHeight 分页组件的高度
	 * @param {Number} tableHeadHeight 表格头的高度
	 * @param {Number} paddingHeight 表格距离视口底部的距离
	 * @returns {Number} height表格内容区高度
	 */
	getHeight = () => {
		let clientHeight = Math.max(document.body.clientHeight,document.documentElement.clientHeight),
			scrollHeight = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),
			height = 0,
			pageHeadHeight = 42,
			buttonGroupHeight = 58,
			paginationHeight = 43,
			tableHeadHeight = 42,
			paddingHeight = 32;
		let showHeight = (clientHeight < scrollHeight ) && clientHeight || scrollHeight;

		height = showHeight - pageHeadHeight - buttonGroupHeight - paginationHeight - tableHeadHeight - paddingHeight;
		this.setState({
			tableHeight : height
		})
	}

	render() {
		let _this = this;
		let { tableData = [], paginationParam, delModal } = _this.props;
		let {pageIndex} = paginationParam.reqParam || {};
		let {totalPages = 0, total = 0,} = paginationParam.resParam || {}
		const paginationObj = {   // 分页
            activePage: pageIndex + 1,//当前页
            total: total,//总条数
            items: totalPages,
            freshData: _this.freshData,
            onDataNumSelect: _this.onDataNumSelect,
            // dataNumSelect: ['10', '20', '30', '50'], //每页多少条的下拉选择Option内容
            // dataNum: 0,
		};
		let showObj = _this.onHandleDisabled();
		let {tableHeight} = _this.state;
		return (
			<div className="tree-table">
				<div className = 'table-header'>
					<ButtonRoleGroup funcCode="tree">
						<Button
							colors="primary" style={{"margin" : 8}}
							onClick={ _this.onCommonClick(0)}
							role = 'add'
							disabled = {showObj[0]}
						>新增</Button>
						<Button style={{"margin" : 8}}
							onClick={ _this.onCommonClick(1)}
							role = 'update'
							shape='border'
							disabled = {showObj[1]}
						>修改</Button>
						<Button
							style={{"margin" : 8}}
							shape='border'
							onClick={ _this.onCommonClick(2)}
							disabled = {showObj[2]}
						>详情</Button>
						<Button
							style={{"margin" : 8}}
							onClick={_this.onDelete}
							role = 'delete'
                            shape='border'
							disabled = {showObj[3]}
						>删除</Button>
					</ButtonRoleGroup>
					<Button
						style = {{"margin" : 8}}
						size = 'sm'
						onClick = {_this.onExport}
                        shape='border'
					>
						导出
					</Button>
				</div>
				<Grid
					ref = {grid => this.grid = grid}
					data={tableData}
					rowKey={(r, i) => r.id}
					columns={_this.column}
					paginationObj={paginationObj}
					getSelectedDataFunc={_this.getSelectedDataFunc}
					multiSelect={{ type: "checkbox" }}
					scroll={{y: tableHeight}}
                />
				<CommonPop {...this.props}/>
				<Alert
					show = {delModal}
					context = "是否要删除 ?"
					confirmFn = {() => this.onModalDel(true)}
					cancelFn = {() => this.onModalDel(false)}
				/>
			</div>
		);
	}
}

export default TreeTable;
