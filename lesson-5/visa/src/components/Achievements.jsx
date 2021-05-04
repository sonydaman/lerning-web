import React from 'react'
import PropTypes from 'prop-types'

const Achievements = props => {
    const {items} = props;
    return (
        <div className="achievements">
            {
                items.map((item,index)=>(
                        <div key={index} className="title-container">
                            <div className="title">
                                {item.title}
                            </div>
                            <div className="title-img">
                                <img src={item.img} alt=""/>
                            </div>
                        </div>
                ))
                }
        </div>
    )
}

Achievements.propTypes = {
  items : PropTypes.array
}

export default Achievements
