import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({  size, show }) => {
  return (
    <nav>
      <div className="nav_box">
        {show ? (
          <span className="my_shop">
            <Link to="/">Back</Link>
          </span>
        ) : (
          <span className="my_shop">
            Food
          </span>
        )}
        <div className="cart">
          <span>
            <Link to="/cart">
              <i className="fas fa-cart-plus"></i>
            </Link>
          </span>
          <span>{size}</span>
        </div>
        <div className="order_btn">
          <Link to="/order">Your Orders</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
