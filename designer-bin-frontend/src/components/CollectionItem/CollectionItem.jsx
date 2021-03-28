import React from "react";
import { Card, Col } from "react-bootstrap";

// import "./CollectionItem.css";

const CollectionItem = ({ name, imageUrl, price, ...otherItems }) => {
  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      <Card className='card m-3'>
        <Card.Img variant='top' src={imageUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>${price}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CollectionItem;
