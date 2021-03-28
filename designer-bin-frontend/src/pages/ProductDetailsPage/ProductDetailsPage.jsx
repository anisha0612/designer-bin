import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";
import shopData from "../ShopPage/ShopData";

const ProductDetailsPage = ({ match }) => {
  const products = shopData.find(
    (category) => category.title.toLowerCase() === match.params.category
  ).items;
  const product = products.find((item) => item.id == match.params.id);

  return (
    <div className='m-5 py-5 product-details'>
      <Link className='button-cart btn-light my-5 ml-5' to='/'>
        Go Back
      </Link>
      <Row className=''>
        <Col xs={6} md={4} className='m-5 pl-2'>
          <Image width={400} src={product.imageUrl} rounded />
        </Col>
        <Col xs={6} md={4} className='m-5 pl-5'>
          <h1 className='text-uppercase'>{product.name}</h1>
          <h4 className='my-3'>${product.price}</h4>

          <h4>
            Size :
            {Object.entries(product.noOfItems).map(([key, value]) => (
              <h4 key={key} className='d-inline-flex m-4'>
                {key}
              </h4>
            ))}
          </h4>
          <Button
            className=' mr-5 my-5 p-2 button-cart'
            variant='outline-light'
            disabled={product.noOfItems === 0}
            type='button'>
            Add To Cart
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailsPage;
