import React from 'react'
import { Col, Row } from 'react-bootstrap'
export const HomePage = () => {
    const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    return (
        <div>
            {/*reapet task start loop*/}
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
            {/*reapet task end loop*/}
        </div>
    )
}
