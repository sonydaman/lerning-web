import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "react-bootstrap";

const Card = (props) => {
  const { title, image, description } = props;

  return (
    <div>
      <h2>{title}</h2>
      <Row>
        <Col lg={3}>
          <img src={image} alt="loading" />
        </Col>
        <Col lg={9}>
          <p className="text-justify">{description}</p>
        </Col>
      </Row>
    </div>
  );
};

Card.propTypes = {};

export default Card;
