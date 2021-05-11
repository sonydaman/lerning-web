import React from 'react'
// import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareSquare } from '@fortawesome/free-solid-svg-icons'
const ShareButton = props => {
    return (
        <div>
            <Button variant="outline-info">
                <FontAwesomeIcon icon={faShareSquare} />
            </Button>
        </div>
    )
}

ShareButton.propTypes = {

}

export default ShareButton
