import React from 'react'
import { Col, Row } from 'react-bootstrap'
export const GalleryPage = () => {
    return (
        <div>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                    </nav>
                         <h2>Gallery</h2> 
            <Row>
                <Col lg={3} sm={12} md={6}>
                    <img className="w-100"
                        src="https://unsplash.it/400/400?id=1" alt="as" />
                </Col>
                <Col lg={3} sm={12} md={6}>
                    <img className="w-100" src="https://unsplash.it/400/400?id=2" alt="as" />
                </Col>
                <Col lg={3} sm={12} md={6}>
                    <img className="w-100" src="https://unsplash.it/400/400?id=3" alt="as" />
                </Col>
            </Row>

        </div>

    )
}

