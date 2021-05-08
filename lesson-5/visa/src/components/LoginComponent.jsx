import React from 'react'
// import PropTypes from 'prop-types'
import { Button, Col, Form, FormLabel, Row } from 'react-bootstrap'

function LoginComponent(props) {
    const {title,btnText,inputText,inputT,isRemember}=props;
    return (
        <div className="Login-Box text-center">
          <div className="Login-logo">FUNBOOK</div>
          <div className="form-container">
            <p>{title}</p>
            <Form>
              <Row>
                <Col lg-8 md-8 sm-8>
                  <input
                    type="email"
                    className="input-field"
                    placeholder={inputT}
                    name="email"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg-8 md-8 sm-8>
                  <input
                    type="password"
                    className="input-field"
                    placeholder={inputText}
                    name="Password"
                  />
                </Col>
              </Row>
              {isRemember && <Row>
                <Col>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="dropdownCheck"
                  />
                  <FormLabel className="form-check-label" for="dropdownCheck">
                    Remember me
                  </FormLabel>
                </Col>
              </Row>}
              <Row>
                <Col>
                  <Button className="submit-btn"type="submit">{btnText}</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
    )
}

LoginComponent.propTypes = {

}

export default LoginComponent

