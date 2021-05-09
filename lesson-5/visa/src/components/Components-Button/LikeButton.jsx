import React from 'react'
// import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons'

const LikeButton = props => {
    return (
        <div>
            <Button variant="outline-info">
                <FontAwesomeIcon icon={faHeartbeat} />
            </Button>
        </div>
    )
}

LikeButton.propTypes = {

}

export default LikeButton
