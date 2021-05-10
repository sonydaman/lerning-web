import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAdjust } from '@fortawesome/free-solid-svg-icons'
// https://fontawesome.com/icons?d=gallery&p=2&s=solid
export const Sidebar = () => {
    return (

        <ListGroup>
            <ListGroup.Item>
                <Link to="/main">
                    Dashboard
                    </Link>
            </ListGroup.Item>
            <ListGroup.Item>Profile</ListGroup.Item>
            <ListGroup.Item>
                <Link to="/about">
                    {/* <FontAwesomeIcon icon={faAdjust} /> */}
                        About us
                    </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/gallery">
                    {/* <FontAwesomeIcon icon={faAdjust} /> */}
                        Gallery
                    </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/academic">
                    {/* <FontAwesomeIcon icon={faAdjust} /> */}
                        Academic
                    </Link>

            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/achievements">
                    Achievements
                        </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/books">
                    Books
                    </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/home">
                    HomePage
                    </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/contact">
                    ContactPage
                    </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/signin">
                    Signin
                    </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/contact">

                </Link>
            </ListGroup.Item>
            <ListGroup.Item>Contact</ListGroup.Item>
            <ListGroup.Item>
                <Link to="/blog">
                    Blog
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/feature">
                    Feature
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/keyboard">
                    Keyboard
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/insert">
                    Insert
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/Product">
                    Product
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/products">
                    ProductsPage
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/select">
                    SelectPage
                </Link>
            </ListGroup.Item>
            <ListGroup.Item>
                <Link to="/tab">
                    TabPage
                </Link>
            </ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
            <ListGroup.Item>Log Out</ListGroup.Item>
        </ListGroup>
    )
}
