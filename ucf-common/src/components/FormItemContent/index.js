import React, { Component } from 'react'
import { Row, Col, Label } from 'tinper-bee'
import './index.less'
class FormItemContent extends Component{
    render() {
        const { label, children } = this.props;
        const hasLabel = !!label
        return (
            <Row>
                {hasLabel ? (
                    <Col lg={2} md={3} sm={4}>
                        <Label>{label}</Label>
                    </Col>
                ) : null}
                <Col md={hasLabel ? 9 : 12} sm={hasLabel ? 8 : 12} >
                    {children}
                </Col>
            </Row>
        )
    }
}

export default FormItemContent