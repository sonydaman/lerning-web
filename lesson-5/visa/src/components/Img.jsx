import React from 'react'
import PropTypes from 'prop-types'

const Img = props => {
    const {source} = props;
    return (
        <div className="title-img">
            <img src={source} alt="" />
        </div>
    )
}

Img.propTypes = {
    source : PropTypes.string
}

export default Img
