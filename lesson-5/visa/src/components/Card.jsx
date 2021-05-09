import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'

const Card = props => {
   
    return (
        <div>
            <h2>Product 1</h2>
        <Row>
            <Col lg={3}><img src="https://unsplash.it/200/200?id=1" alt="loading" />
            </Col>
            <Col lg={9}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, nesciunt dolorem. Qui nihil eos dolore veniam aperiam, repellat dolor saepe error placeat itaque quidem laborum nemo similique mollitia. Ducimus, neque.
            Magni, similique sint? Dignissimos, culpa tenetur! Doloribus similique, dolores, dignissimos dolor amet voluptatibus odio molestiae quod voluptas beatae enim velit sunt voluptate quo. Autem aspernatur illum, reiciendis hic corporis omnis.
            Harum explicabo modi maxime numquam quibusdam totam, animi excepturi quas ex omnis debitis vel, doloremque cumque quaerat dolorum qui maiores. Tenetur saepe voluptatum omnis eos ratione dolorum veritatis sed delectus.
            Id, quam, delectus quas nobis neque commodi dolore dicta repellat iste tempora quod nulla deserunt, quo fugit laudantium debitis. Voluptate magni impedit sapiente autem sunt nam dolores minus architecto voluptatum.
            </p>
            </Col>
            </Row>
            
        </div>
    )
}

Card.propTypes = {

}

export default Card
