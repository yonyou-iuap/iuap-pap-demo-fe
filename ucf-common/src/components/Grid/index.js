import React, {Component} from "react";
import BeeGrid from "bee-complex-grid";
import Icon from "bee-icon";
import './index.less'

import 'bee-complex-grid/build/Grid.css';


const defualtPaginationParam = {
    dataNumSelect: ["5", "10", "15", "20", "25", "50", "All"],
    horizontalPosition: 'center',
    verticalPosition: "bottom",
    dataNum: 4,
    btnType: {
        shape: 'border'
    },
    confirmBtn: () => null
};
const defaultProps = {
    //   hideBodyScroll: true,
    headerScroll: false,
    bordered: false,
    data: []
};

class Grid extends Component {
    constructor(props) {
        super(props);
    }

    /**
     *获取保存的column和table上的属性
     *
     */
    getColumnsAndTablePros = () => {
        return this.grid.getColumnsAndTablePros();
    };
    /**
     *
     * 重置grid的columns
     */
    resetColumns = newColumns => {
        this.grid.resetColumns(newColumns);
    };

    exportExcel = () => {
        this.grid.exportExcel();
    };

    render() {
        const { paginationObj, data, exportData,  ...otherProps } = this.props;
        const _paginationObj = {...defualtPaginationParam, ...paginationObj};
        _paginationObj.disabled = paginationObj.disabled !== undefined
            ? paginationObj.disabled
            : data.length === 0;
        let _exportData = exportData || data;
        return (
            <BeeGrid
                className="ucf-example-grid"
                data={data}
                {...otherProps}
                exportData={_exportData}
                paginationObj={_paginationObj}
                ref={el => this.grid = el}
                emptyText={() => <Icon style={{fontSize: "60px"}} type="uf-nodata"/>}
            />
        );
    }
}

Grid.defaultProps = defaultProps;
export default Grid;
