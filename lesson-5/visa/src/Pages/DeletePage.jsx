import propTypes from 'prop-types'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
//import Achievement from '../Components/Achievement'
import Achievements from '../Components/Achievements'
//import { Img } from '../Components'

const DeletePage = (props) => {
    const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

    return (
        <div>
            <h1>delete page</h1>
            <ul className="text">
                <li>page1</li>
                <li>page2</li>
                <li>page3</li>
                <li>page4</li>

            </ul>
            <Row>
                {
                    images.map((imagesId, index) => {
                        const url = "https://unsplash.it/400/400?id=" + imagesId;
                        return (
                            <Col key={index} lg={3} sm={12} md={6}>
                                <img className="w-100" src={url} alt="as" />
                            </Col>
                        )
                    }



                    )
                }
            </Row>

        </div>
    )
}

DeletePage.propTypes = {

}

export default DeletePage
