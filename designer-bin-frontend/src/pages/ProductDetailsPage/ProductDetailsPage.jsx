import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Button } from "react-bootstrap";
import axios from "axios";
import Rating from "../../components/Rating/Rating.jsx";

const ProductDetailsPage = ({ match }) => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/${match.params.category}`);
      setShopData(data);
    };
    fetchData();
  }, [match.params.category]);

  const products = shopData.items;
  let product;
  if (products) {
    product = products.find((item) => item.id == match.params.id);
  }

  return (
    <div className='m-5 py-5 product-details'>
      <Link className='button-cart btn-light my-5 ml-5' to='/'>
        Go Back
      </Link>
      {product ? (
        <Row>
          <Col xs={6} md={4} className='m-5 pl-2'>
            <Image width={400} src={product.imageUrl} rounded />
          </Col>
          <Col xs={6} md={4} className='m-5 pl-5'>
            <h1 className='text-uppercase mb-3'>{product.name}</h1>
            <Rating className='my-3' value={product.rating} />
            <h4 className='my-3'>${product.price}</h4>

            <h6>{product.noOfItems > 0 ? "In Stock" : "Out Of Stock"}</h6>

            <Button
              className=' mr-5 my-5 p-2 button-cart'
              variant='outline-light'
              disabled={product.noOfItems === 0}
              type='button'>
              Add To Cart
            </Button>
          </Col>
        </Row>
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
};

export default ProductDetailsPage;
