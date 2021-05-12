import React from 'react'
import PropTypes from 'prop-types'
import DangerButton from '../Components/Components-Button/DangerButton'
import SuccessButton from '../Components/Components-Button/SuccessButton'
import PicComponent from '../Components/Components-Button/PicComponent'

const ShiftPage = props => {
    return (
        <>
            <div className="head">
                <DangerButton></DangerButton>
                <SuccessButton />
                <PicComponent />
                <h1>test1</h1>
                <img src="https:unsplash.it/200/200"></img>
            </div>
            <div className="test">
                <h1>test2</h1>
                <img src="https:unsplash.it/200/200"></img>
            </div>
            <div className="test">
                <h1>test3</h1>
                <img src="https:unsplash.it/200/200"></img>
            </div>
            <div className="test">
                <h1>test4</h1>
                <img src="https:unsplash.it/200/200"></img>
            </div>
        </>
    )
}


ShiftPage.propTypes = {

}

export default ShiftPage

