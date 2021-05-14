import React from 'react'
import PropTypes from 'prop-types'
//import Achievement from '../Components/Achievement'
import Achievements from '../Components/Achievements'


const InsertPage = props => {
    return (
        <div className="insert-page">
            <Achievements items={[{ title: 'text1', img: 'https://unsplash.it/200/200' },
            { title: 'text2', img: 'https://unsplash.it/200/200? id=1' },
            { title: 'text3', img: 'https://unsplash.it/200/200? id=2' },
            { title: 'text4', img: 'https://unsplash.it/200/200? id=3' }


            ]


            } />
        </div>
    )
}
export default InsertPage