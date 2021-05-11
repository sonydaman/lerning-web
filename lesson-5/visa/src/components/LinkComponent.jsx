import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LinkComponent = props => {
    const {items}= props;
    return (
        <div className="link">
            {
                items.map((item,index)=>{
                    return (<ListGroup.Item key={index}>
                        <Link to={item.url}>
                            {item.linkText}
                            </Link>
                    </ListGroup.Item>)
                })
            }
            
        </div>
    )
}

LinkComponent.propTypes = {

}

export default LinkComponent
