import React from 'react'
import PropTypes from 'prop-types'
import { Header } from '../Header'
import { Footer } from '../Footer'

const LandingLayout = props => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

LandingLayout.propTypes = {
    children : PropTypes.node
}

export default LandingLayout
