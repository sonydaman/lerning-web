import React from 'react'
import PropTypes from 'prop-types'
import Achievement from '../Components/Achievement'
import Achievements from '../Components/Achievements'
import InfoButton from '../Components/Components-Button/InfoButton'



const FeaturePage = props => {
    return (
        <div className="feature-page">
            <InfoButton />
            <Achievements items={
                [
                    { title: 'Test1', img: 'https://unsplash.it/200/200' },
                    { title: 'Test2', img: 'https://unsplash.it/200/200?id=1' },
                    { title: 'Test3', img: 'https://unsplash.it/200/200?id=2' }

                ]
            } />
        </div>
    )
}

FeaturePage.propTypes = {

}

export default FeaturePage
