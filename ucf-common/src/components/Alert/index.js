import React, { Component } from 'react';
import PropTypes from "prop-types";
import PopDialog from 'components/Pop';
import './style.less';


const propTypes = {
    title: PropTypes.string,
    confirmFn: PropTypes.func,
    cancelFn: PropTypes.func,
    context: PropTypes.string,
    show: PropTypes.bool
};

const defaultProps = {
    title: "温馨提示",
    confirmFn: PropTypes.func,
    context: "确认要删除吗 ?",
    show: false
};

class AlertDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: !!props.show
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.show != nextProps.show) {
            this.setState({ show: nextProps.show })
        }
    }

    //确认回调函数
    confirmFn = () => {
        let { confirmFn } = this.props;
        // this.close();
        confirmFn && confirmFn();
    }

    //取消回调函数
    cancelFn = () => {
        let { cancelFn } = this.props;
        // this.close();
        cancelFn && cancelFn();

    }

    close = () => {
        this.setState({
            show: false
        })
    }

    dialogBtnConfig = [
        {
            label: '取消',
            fun: this.cancelFn,
            shape: 'border'
        },
        {
            label: '确定',
            fun: this.confirmFn,
            colors: 'primary'
        },
    ]

    render() {
        let { context, children } = this.props;
        //按钮组
        return (
            <span>
                <span
                    className="alert-modal-title"
                    onClick={() => { this.setState({ show: true }) }}
                >
                    {children}
                </span>
                <PopDialog
                    className="alert_dialog_modal u-modal-confirm" // 设置弹框样式
                    show={this.state.show} //默认是否显示
                    close={this.cancelFn}
                    title={<span className="modal_conf_title">{this.props.title}</span>}
                    size="sm"
                    titleIcon="uf-qm-c"
                    backdrop={false}
                    closeButton={false}
                    btns={this.dialogBtnConfig}>
                    <span className="alert-modal-cont">{context}</span>
                </PopDialog>
            </span>
        )
    }
}

AlertDialog.propTypes = propTypes;
AlertDialog.defaultProps = defaultProps;
export default AlertDialog;
