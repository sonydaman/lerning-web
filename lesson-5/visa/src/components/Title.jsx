import React from 'react'
import PropTypes from 'prop-types'

const Title = props => {
    const {titleName} = props
    return (
        <div className="title">
            {titleName}
        </div>
    )
}

Title.propTypes = {
    titleName : PropTypes.string
}

export default Title
