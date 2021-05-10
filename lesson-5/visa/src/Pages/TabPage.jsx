import React from 'react'
import propTypes from 'prop-types'
import Achievement from '../Components/Achievement'
import Achievements from '../Components/Achievements'
const TabPage = props => {
    return (
        <div className="tab-page">
            <Achievements items={
                [{ title: 'Test1', img: 'https:unsplash.it/200/200' },
                { title: 'Test2', img: 'https:unsplash.it/200/200?id=1' },
                { title: 'Test3', img: 'https:unsplash.it/200/200?id=2' },
                { title: 'Test3', img: 'https:unsplash.it/200/200?id=3' },
                { title: 'Test4', img: 'https:unsplash.it/200/200?id=4' },




                ]
            }
            />
        </div>
    )
}


TabPage.propTypes = {

}
export default TabPage
