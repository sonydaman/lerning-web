import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Form, FormLabel, Row } from 'react-bootstrap'
import "../style/signin.css"

const LoginPage = props => {
    return (
      <div className="container m-auto">
        <div className="Login-Box text-center">
          <div className="Login-logo">FUNBOOK</div>
          <div className="form-container">
            <p>Sign in to start your session</p>
            <Form>
              <Row>
                <Col lg-8 md-8 sm-8>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="Email"
                    name="email"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg-8 md-8 sm-8>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    name="Password"
                  />
                </Col>
              </Row>
              <Row>
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
              </Row>
              <Row>
                <Col>
                  <Button className="submit-btn"type="submit"> Sign in</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
}

LoginPage.propTypes = {

}

export default LoginPage
