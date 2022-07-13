import React, { useState, useEffect } from "react";
import "../styles/cart.css";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange,placeOrderClick}) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <div>
      <Navbar show={true} />
      <div className="cart-outlet">
        <article>
          {cart.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.img} alt="" />
                <p>{item.title}</p>
              </div>

              <div>
                <button onClick={() => handleChange(item, 1)}>+</button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <div>
                <span>{item.amount}*{item.price}</span>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          {cart.length > 0 ? (
            <div className="">
              <div className="total">
                <span>Total Price of your Cart</span>
                <span>Rs - {price}</span>
              </div>
              <div className="cart-bottom">
                <button onClick={placeOrderClick}>PLACE ORDER</button>
              </div>
            </div>
          ) : (
            <div>
              <h1>Empty Cart</h1>
              <p>Please Add Something in Cart</p>{" "}
              <Link to="/">
                <p>Click here</p>
              </Link>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default Cart;
