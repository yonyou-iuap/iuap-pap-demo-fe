import React, { Component } from 'react';
import { findDOMNode } from 'react-dom'
import PropTypes from "prop-types";
import { Modal, Icon } from 'tinper-bee'
import Button from 'components/Button';
import './style.less';

const ButtonBrand = Button;
const ButtonWarning = Button;
const ButtonDefaultAlpha = Button;
const ButtonDefaultLine = Button;

const defaultProps = {
  title: "",
  show: false,
  btns: [{ label: "", fun: null, className: "" }, { label: "", fun: null, className: "" }],   //设置操作按钮
  close: null,
  data: null,
  titleIcon: "",
  btnRender: null,
};

const propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
  btns: PropTypes.array,
  close: PropTypes.func,
  data: PropTypes.object,
  titleIcon: PropTypes.string,
  btnRender: PropTypes.object,
};

class PopDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidUpdate() {
      this.modalEle = findDOMNode(this.modalNode);
  }

  close = () => {
    this.props.close && this.props.close();
  }

  btnClick = (e, da) => {
    let _data = this.props.data ? this.props.data : this;
    if (da.fun) {
      da.fun(_data)
    }
  }

  render() {
    let { titleIcon, btnRender, closeButton=true } = this.props;
    let _btns = [], btn = 'btn';
    if (this.props.btns) {
      this.props.btns.map((da, i) => {
        let _button = null, icon = {};
        da.icon ? icon.iconType = da.icon : "";
        let _className = da.className ? da.className : null;
        let _defultAlphaButton = <ButtonDefaultLine colors={da.colors} shape={da.shape} key={"pop_btn" + i} {...icon} onClick={(e) => { this.btnClick(e, da) }} className={`${_className} ${btn}`} >{da.label}</ButtonDefaultLine>
        if (this.props.type == "delete") {
          _button = i === 0 ? <ButtonWarning colors={da.colors} shape={da.shape}  key={"pop_btn" + i} {...icon} onClick={(e) => { this.btnClick(e, da) }} className={`${_className} ${btn}`} >{da.label}</ButtonWarning> : _defultAlphaButton;
        } else {
          _button = i === 0 ? <ButtonBrand colors={da.colors} shape={da.shape}  {...icon} disabled={this.props.btnDisabled} key={"pop_btn" + i} onClick={(e) => { this.btnClick(e, da) }} className={`${_className} ${btn}`} >{da.label}</ButtonBrand> : _defultAlphaButton;
        }
        _btns.push(_button);
      })
    }


    return (
      <span>
        <span className="alert-modal-title" onClick={this.props.close}>
          {btnRender}
        </span>
        <Modal
            ref={node => this.modalNode = node}
            enforceFocus={false}
            className={(this.props.className ? this.props.className : "") + " pop_dialog "}
            size={this.props.size ? this.props.size : "lg"} backdrop={this.props.backdrop ? true : 'static'}
            show={this.props.show} onHide={this.props.close}
            animation={false}
        >
          <Modal.Header closeButton={closeButton}>
            <Modal.Title>
              {titleIcon ? <Icon type={titleIcon} /> : null}
              {this.props.title}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="pop_body">
            <div className="pop_dialog">
              {this.props.children}
            </div>

          </Modal.Body>

          <Modal.Footer className="pop_footer">
            {_btns}
          </Modal.Footer>
        </Modal>
      </span>)
  }
}

PopDialog.propTypes = propTypes;
PopDialog.defaultProps = defaultProps;
export default PopDialog;
