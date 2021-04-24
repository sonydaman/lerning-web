import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
// https://fontawesome.com/icons?d=gallery&p=2&s=solid
export const Sidebar = () => {
    return (
        
            <ListGroup>
                <ListGroup.Item>Profile</ListGroup.Item>
                <ListGroup.Item>Home</ListGroup.Item>
                <ListGroup.Item>
                    <Link to="/about">
                        <FontAwesomeIcon icon={faAdjust} />
                        About us
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item>Gallery</ListGroup.Item>
                <ListGroup.Item>Academics</ListGroup.Item>
                <ListGroup.Item>Achievements</ListGroup.Item>
                <ListGroup.Item>Books</ListGroup.Item>
                <ListGroup.Item>Contact</ListGroup.Item>
                <ListGroup.Item>Our Social sites</ListGroup.Item>
                <ListGroup.Item>Log Out</ListGroup.Item>
            </ListGroup>
    )
}
