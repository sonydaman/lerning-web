import React from 'react'
import { Col, Row } from 'react-bootstrap'

import "../style/footer.css"
export const Footer = () => {
    return (
        <Footer className="footer" bg="dark" variant="dark">
            <div className="container">
                <Row>
                    <Col lg ={6} md={6} sm={6}>
                        <div className="Copy-right-text">
                            <p>Copyright By Learning Web</p>
                        </div>
                    </Col>
                    <Col lg ={6} md={6} sm={6}>
                        <div className="Policy">
                            <p>Powered by Khushal</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Footer>
       
    )
}
