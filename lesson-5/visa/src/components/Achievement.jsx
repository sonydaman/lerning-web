import React from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import Img from './Img'

const Achievement = props => {
    const {item} = props;
    return (
        <div className="title-container">
                <Title titleName={item.title} />
                <Img source={item.img} />
        </div>
    )
}

Achievement.propTypes = {
    item : PropTypes.object
}

export default Achievement
