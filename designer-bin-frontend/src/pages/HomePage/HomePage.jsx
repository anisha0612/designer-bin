import React from "react";
import { Container, Image } from "react-bootstrap";
import Directory from "../../components/Directory/Directory.jsx";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <Container className='home-page'>
        <Image
          className='image'
          src='https://www.fashionremix.com/wp-content/uploads/2019/12/hot-top.jpg'
          alt='cover-image'
        />
        <Directory />
      </Container>
    </>
  );
};

export default Homepage;
