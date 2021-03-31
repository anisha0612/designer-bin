import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Row, Col, Image, Button } from "react-bootstrap";
import axios from "axios";
import Rating from "../../components/Rating/Rating.jsx";

// * @desc Component to display the details of a product in a category when searched by id

const ProductDetailsPage = ({ match }) => {
  const [shopData, setShopData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `/api/${match.params.category}/${match.params.id}`
      );
      setShopData(data);
    };
    fetchData();
  }, [match]);

  return (
    <div className='m-5 py-5 product-details'>
      <Link className='button-cart btn-light my-5 ml-5' to='/'>
        Go Back
      </Link>
      {shopData ? (
        <Row>
          <Col xs={6} md={4} className='m-5 pl-2'>
            <Image width={400} src={shopData.imageUrl} rounded />
          </Col>
          <Col xs={6} md={4} className='m-5 pl-5'>
            <h1 className='text-uppercase mb-3'>{shopData.name}</h1>
            <Rating className='my-3' value={shopData.rating} />
            <h4 className='my-3'>${shopData.price}</h4>

            <h6>{shopData.noOfItems > 0 ? "In Stock" : "Out Of Stock"}</h6>

            <Button
              className=' mr-5 my-5 p-2 button-cart'
              variant='outline-light'
              disabled={shopData.noOfItems === 0}
              type='button'>
              Add To Cart
            </Button>
          </Col>
        </Row>
      ) : (
        <Row>
          <div className='m-5 py-5'>
            <h2>Loading ...</h2>
          </div>
        </Row>
      )}
    </div>
  );
};

export default ProductDetailsPage;
