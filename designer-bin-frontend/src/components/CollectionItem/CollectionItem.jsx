import React from "react";
import { Card, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

// import "./CollectionItem.css";

const CollectionItem = ({ id, match, history, ...otherItems }) => {
  return (
    <Col sm={12} md={6} lg={4} xl={3}>
      {/* <Link to={`${otherItems.category}/${id}`} className='product-item'> */}{" "}
      <Card
        className='card m-3'
        onClick={() => history.push(`${match.url}/${id}`)}>
        <Card.Img variant='top' src={otherItems.imageUrl} />
        <Card.Body>
          <Card.Title>{otherItems.name}</Card.Title>
          <Card.Text>${otherItems.price}</Card.Text>
        </Card.Body>
      </Card>
      {/* </Link> */}
    </Col>
  );
};

export default withRouter(CollectionItem);
