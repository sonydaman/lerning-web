import React from 'react'
import PropTypes from 'prop-types'
import InputButton from '../Components/Components-Button/InputButton'

const AltPage = props => {
    return (
        <>
            <div classname="test1">
                <InputButton />
                <h1>AltKey</h1>
                <h3>key1</h3>
                <img src="https:unsplash.it/200/200"></img>

            </div>
            <div className="test2">
                <h3>key2</h3>
                <img src="https:unsplash.it/200/200"></img>

            </div>
            <div className="test3">
                <h3>key3</h3>
                <img src="https:unsplash.it/200/200"></img>

            </div>

            <div className="test4">
                <h3>key4</h3>
                <img src="https:unsplash.it/200/200"></img>

            </div>

        </>
    )
}

AltPage.propTypes = {

}

export default AltPage

