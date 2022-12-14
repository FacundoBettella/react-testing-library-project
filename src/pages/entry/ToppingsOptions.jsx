import React from 'react';
import Col from "react-bootstrap/Col";

const ToppingsOptions = ({ name, imagePath }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
    <img
      style={{ widht: "75%" }}
      src={`http://localhost:3030/${imagePath}`}
      alt={`${name} topping`}
    />
  </Col>
  )
}

export default ToppingsOptions