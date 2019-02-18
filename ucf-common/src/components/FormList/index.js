/**
 * 用于向搜索面板，表单等输出统一的表单容器和表单项目
 * */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Label, Row, Col } from 'tinper-bee'
import Form from 'bee-form'
import './index.less'
const FormItem = Form.FormItem;

class FormListItem extends Component{
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        required: false,
        label: ''
    }
    static propTypes = {
        required: PropTypes.bool,
        label: PropTypes.node
    }
    getLayoutOption = () => {
        const {size, layoutOpt} = this.props;
        if (layoutOpt) {
            return layoutOpt
        } else {
            if (size === 'sm') {
                return {
                    md: 4,
                    xs: 6
                }
            } else {
                return {
                    md: 6,
                    sm: 10,
                    xs: 12
                }
            }
        }

    }


    render() {
        const { children, label, required } = this.props;
        const wrapLayoutOpt = this.getLayoutOption();
        return (
            <Col {...wrapLayoutOpt}>
                <FormItem className="u-form-item">
                    <Col md={3}  sm={4} xs={4}>
                        <Label className={required ? "mast" : ''} style={{width: "100%"}}>{label}</Label>
                    </Col>
                    <Col md={9} sm={8} xs={8} className="form-input-wrap">
                        {children}
                    </Col>
                </FormItem>
            </Col>
        )
    }
}

class FormList extends Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {
        size: '',
        className: ''
    }
    static propTypes = {
        size: PropTypes.string,
    }

    static Item = FormListItem;
    static createForm = Form.createForm;

    render() {
        const { className, size, children} = this.props;
        const cls = `ucf-exam-form ${size} ${className || ""}`;
        return (
            <Form
                className={cls}
            >
                <Row>
                    {children.map((child, ind) => {
                        if (child) {
                            return (
                                React.cloneElement(child, {size: size, key: ind})
                            )
                        }
                    })}
                </Row>
            </Form>
        )
    }
}

export default FormList;