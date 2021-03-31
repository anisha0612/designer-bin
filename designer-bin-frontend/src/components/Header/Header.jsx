import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shop.svg";
import "./Header.css";

// * @desc HEADER Component is the Navigation for the Web App

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      <div className='link-options'>
        <Link to='/shop' className='link'>
          SHOP
        </Link>

        {/* {currentUser ? (
          <span className='link' onClick={() => auth.signOut()}>
            SIGN OUT
          </span>
        ) : ( */}
        <Link to='/signin' className='link'>
          <i className='fas fa-user'></i> SIGN IN
        </Link>
        {/* )} */}

        <Link to='/cart' className='link'>
          <i className='fas fa-shopping-cart'></i> CART
        </Link>
      </div>
    </div>
  );
};

export default Header;
