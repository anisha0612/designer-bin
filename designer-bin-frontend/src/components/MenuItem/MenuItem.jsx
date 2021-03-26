import React from "react";
import { Col, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./MenuItem.css";

const MenuItem = ({ title, imgSrc, linkUrl, history, match }) => {
  return (
    <Col
      sm={12}
      md={6}
      lg={4}
      xl={4}
      className='MenuItem'
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <Card className='card m-3'>
        <Card.Img variant='top' src={imgSrc} />
        <Card.ImgOverlay>
          <Card.Title className='menuItem-title'>
            <strong>{title.toUpperCase()}</strong>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default withRouter(MenuItem);
