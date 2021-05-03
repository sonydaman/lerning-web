import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BreadCrumb } from '../components'
// import { Link } from 'react-router-dom'
export const GalleryPage = () => {
    return (
        <div>
<<<<<<< HEAD
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                    </nav>
                         <h2>Gallery</h2> 
=======
          <BreadCrumb pageName="Galley" />
          <h2>Gallery</h2> 
>>>>>>> bab31a6e0b472e5c29fa93c49fb0106d84f6ca01
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

