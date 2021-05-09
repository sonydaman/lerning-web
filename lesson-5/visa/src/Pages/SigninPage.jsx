import React from 'react'
// import PropTypes from 'prop-types'

import "../style/signin.css"
import LoginComponent from '../Components/LoginComponent'

const LoginPage = props => {
    return (
      <div className="container m-auto">
        <LoginComponent title="Sign in to start your session" btnText="Sign In" inputText="Password" inputT="Email" isRemember/>
      </div>

    );
}

LoginPage.propTypes = {

}

export default LoginPage
