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
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                    <Form.Label></Form.Label>
                    <Form.Control type="Name" placeholder="Enter Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSurName">
                    <Form.Label></Form.Label>
                    <Form.Control type="surname" placeholder="Enter Surname" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridMobileNumber">
                    <Form.Label></Form.Label>
                    <Form.Control onChange={handelEmail} placeholder="Enter Mobile number or email address" />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Form.Label></Form.Label>
                    <Form.Control onChange={handelPwd} type = "password" placeholder="Enter New Password" />
                </Form.Group>
                <Form.Group controlId="dob">
                            <Form.Label> Date of Birth</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                 </Form.Group>

              
                <Button onClick={handelSubmit} variant="success"
                >Sign Up
                </Button>
                </Form>
                        
                    
               
            </div>
        </div>
                    )
}

SignUpComponent.propTypes = {

}

export default SignUpComponent