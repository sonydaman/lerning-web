import React from 'react'
import PropTypes from 'prop-types'
import PhotoshopComponent from '../Components/Components-Button/PhotoshopComponent'

const GayatriPage = props => {
    return (
        <>
            <div className="img1">
                <PhotoshopComponent />
                <img src="https://unsplash.it/50/50"></img>
                <h1>Gayatri Tutorial</h1>
                <img src="https://unsplash.it/50/50"></img>
                <h1>Gayatri Tutorial</h1>
            </div>
            <div className="img1">
                <h4>introduction</h4>
                aim<img src="https://unsplash.it/200/200"></img>
            </div>
        </>
    )

}
GayatriPage.prototype = {

}
export default GayatriPage