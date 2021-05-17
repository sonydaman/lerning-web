import React ,{ useState } from 'react';
// import PropTypes from 'prop-types'
import { Alert, Button, Col, Form, FormLabel, Row } from 'react-bootstrap'

function SignUpComponent(props) {
    const {title,btnText,inputText,inputT,isRemember}=props;
    const [isValid, setIsValid] = useState({});
    const [emailVal, setEmailVal] = useState('');
    const [pwdVal, setPwdVal] = useState('');
    const result = {emailVal:'test@test.com',pwdVal:'123456'}
    const handelEmail = (e)=>{
      setEmailVal(e.currentTarget.value)
    }
    const handelPwd = (e)=>{
      setPwdVal(e.currentTarget.value)
    }
    const handelSubmit =()=>{
     if(result.emailVal === emailVal && result.pwdVal === pwdVal) {
        setIsValid({error:false,success:true,msg:'Login Success'})
     }
     else{
       setIsValid({error:true,success:false,msg:'Invalid User name or password'})
     }
    }
    return (
        <div className="Login-Box text-center">
          <div className="Login-logo">SIGN UP</div>
          <div className="form-container">
            {
             isValid.success &&
              <Alert variant='success'>
              {isValid.msg}
            </Alert>
            }
            {
              isValid.error &&
              <Alert variant='danger'>
              {isValid.msg}
            </Alert>
            }
            <p>{title}</p>
            {/* <p>{emailVal}</p>
            <p>{pwdVal}</p> */}
            <Form>
              <Row>
                <Col lg={8} md={8} sm={8}>
                  <input
                    type="email"
                    className="input-field"
                    placeholder={inputT}
                    name="email"
                    onChange={handelEmail}
                  />
                </Col>
              </Row>
              <Row>
                <Col  lg={8} md={8} sm={8}>
                  <input
                    type="password"
                    className="input-field"
                    placeholder={inputText}
                    name="Password"
                    onChange={handelPwd}
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
                  <FormLabel className="form-check-label" htmlFor="dropdownCheck">
                    Remember me
                  </FormLabel>
                </Col>
              </Row>}
              <Row>
                <Col>
                  <Button onClick={handelSubmit} className="submit-btn"type="button">{btnText}</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
    )
}

SignUpComponent.propTypes = {

}

export default SignUpComponent