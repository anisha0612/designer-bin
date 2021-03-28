import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductItem = ({ name, imageUrl, title, price, id, ...others }) => {
  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      <Link to={`${title}/${id}`} className='product-item'>
        <Card className='card m-3' border='light'>
          <Card.Img variant='top' src={imageUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>${price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductItem;
