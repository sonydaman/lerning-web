import React from 'react'
import PropTypes from 'prop-types'
import Achievement from './Achievement';


const Achievements = props => {
    const { items } = props;
    return (
        <div className="achievements">
            {
                items.map((item, index) => {
                    return (
                        <Achievement key={index} item={item} />
                    )
                })
            }
        </div>
    )
}

Achievements.propTypes = {
    items: PropTypes.array
}

export default Achievements
