import React from 'react'
import PropTypes from 'prop-types'
import DangerButton from './DangerButton'
import SuccessButton from './SuccessButton'
const DangerButton = props => {
    return (
        <div>
            <div className="text1">
                <DangerButton />
            </div>
            <div className="text2">
                <SuccessButton />
            </div>
        </div>
    )
}

DangerButton.propTypes = {

}

export default DangerButton

