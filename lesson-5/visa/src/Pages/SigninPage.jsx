import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Form, FormLabel, Row } from 'react-bootstrap'

const LoginPage = props => {
    return (
      <div>
        <div className="Login-Box">
          <div className="Login-logo">FUNBOOK</div>
          <div className="form-container">
            <p>Sign in to start your session</p>
            <Form>
              <Row>
                <div>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    name="Password"
                  />
                </div>
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
                <Col>
                  <Button type="submit"> Sign in</Button>
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
