import React from 'react'
//import PropTypes from 'prop-types'
import LoginComponent from '../Components/LoginComponent'
const LoginPage = props => {
    return (
        <div className="container">

            <LoginComponent title="log in start your work" btntext="signin" inputtext="email" inputText="password" isRemember />
        </div>
    )
}

LoginPage.propTypes = {

}

export default LoginPage
