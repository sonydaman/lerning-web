import React from 'react'
import { Col, Row } from 'react-bootstrap'
export const AchievementsPage = () => {
    const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    return (
        <div>
            <Row>
                {
                    images.map((imageId, index) => {
                        const url = "https://unsplash.it/400/400?id=" + imageId;
                        return (
                            <Col key={index} lg={3} sm={12} md={6}>
                                <img className="w-100"
                                    src={url} alt="as" />
                            </Col>
                        )
                    })
                }
            </Row>

        </div>

    )
}