import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {Button} from 'react-bootstrap'

import "../style/footer.css"
export const Footer = () => {
    return (
        <div className="footer">
                <Row>
                    <Col lg={6} md={6} sm={6}>
                        <div className="">
                            <p>Join Funbook to learn, share knowledge, and build your career.

</p>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        
                        <Button variant="light">Sign Up With Google</Button>
                        <Button variant="light">Sign Up With Facebook</Button>
                        <Button variant="dark">Sign Up With GitHub</Button>
                        
                    </Col>
                </Row>
        </div>
       
    )
}
