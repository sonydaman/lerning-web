import React from 'react'
import PropTypes from 'prop-types'

const LoginPage = props => {
    return (
        <div>
            <div className="Login-Box">
            <div className="Login-logo">
                FUNBOOK
            </div>
            <div className="form-container">
                <p>Sign in to start your session</p>
                <Form>
                    <Row>
                        <div>
                    <input type="email" className="input-field" placeholder="Email" name="email"/>
                        </div>
                        <div>
                    <input type="password" className="input-field" placeholder="Password" name="Password"/>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
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

                  //  <div class="Social-authority-link">
                  //      <p class="or">-OR-</p>
                  //      <a  class="btn btn-block btn-social btn-facebook btn-flat col-12" href="#">
                  //          <i class="fa fa-facebook col-2"></i>Sign in using facebook</a>
                  //       <a class="btn btn-block btn-social btn-Google btn-flat col-12" href="#">
                  //           <i class="fa fa-google-plus col-2"></i>Sign in using Google+</a>
                  //      </div>
                  //      <a class="page" href="#">I forget my Password</a></br>
                  //      <a class="page" href="#">Register a new Membership</a>
                  //  </div>
    )
}

LoginPage.propTypes = {

}

export default LoginPage
