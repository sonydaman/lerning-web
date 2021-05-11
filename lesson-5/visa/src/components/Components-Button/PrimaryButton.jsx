import React from 'react'
import PropTypes from 'prop-types'
import PrimaryButton from './PrimaryButton'
import SecondryButton from './SecondryButton'

const PrimaryButton = props => {
    return (
        <div>
            <div className="test3">
                <PrimaryButton />
            </div>

            <div className="test4">
                <SecondryButton />
            </div>

        </div>
    )
}

PrimaryButton.propTypes = {

}

export default PrimaryButton


