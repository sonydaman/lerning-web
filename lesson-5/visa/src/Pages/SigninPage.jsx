import React from 'react'
// import PropTypes from 'prop-types'
import "../style/signin.css"
import LoginComponent from '../Components/LoginComponent'
import { Button } from 'react-bootstrap';
import { useLayout } from '../hooks/LayoutHook';

const LoginPage = props => {
  const {state,dispatch} = useLayout();
  const handel= ()=>{
    dispatch({type:'loggedIn'})
  }
  // console.log(state);
  return (
    <div className="container m-auto">
      <Button onClick={handel}>
        {state.isLoggedIn ? 'Profile' : 'Login'}
      </Button>
      <LoginComponent title="Sign in to start your session" btnText="Sign In" inputText="Password" inputT="Email" isRemember />
    </div>

  );
}

LoginPage.propTypes = {

}

export default LoginPage
