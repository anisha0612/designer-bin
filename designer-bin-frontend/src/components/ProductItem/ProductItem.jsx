import React from "react";
import { Card, Col } from "react-bootstrap";

import { withRouter } from "react-router-dom";

// * @desc Component is a part of Category page which
// *  get items from Product Category Component and display each Item

const ProductItem = ({ _id, match, history, ...others }) => {
  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      {/* <Link to={`${others.category}/${id}`} className='product-item'> */}
      <Card
        className='card m-3'
        border='light'
        onClick={() => history.push(`${match.url}/${_id}`)}>
        <Card.Img variant='top' src={others.imageUrl} />
        <Card.Body>
          <Card.Title>{others.name}</Card.Title>
          <Card.Text>${others.price}</Card.Text>
        </Card.Body>
      </Card>
      {/* </Link> */}
    </Col>
  );
};

export default withRouter(ProductItem);
