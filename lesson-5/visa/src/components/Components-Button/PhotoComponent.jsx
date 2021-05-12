import React from 'react'
import PropTypes from 'prop-types'

const PhotoComponent = props => {
    return (
        <div>
            <div className="img">
                <img src="https://unsplash.it/100/100"></img>
            </div>
        </div>
    )
}

PhotoComponent.propTypes = {

}

export default PhotoComponent
