import React, { useState } from "react";
import Data from "./components/data";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from "./components/order";

const App = () => {
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);

  const handleClick = (item) => {
    console.log(item);
    if (cart.indexOf(item) !== -1) return;
    let temp = item;
    temp.amount = 1;
    setCart([...cart, temp]);
  };



  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const placeOrderClick = () => {
    window.alert("Order Placed Successfully");
    let today = new Date();
    let temp = {
      order_Date:
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear(),
      order_Time: today.getHours() + ":" + today.getMinutes(),
    };
    let array = cart;
    let _array = array.map(_item => {
      return {..._item,...temp, total_price : _item.price * _item.amount}
    })
    // array.push(temp);
    setOrder(_array);
    if(localStorage.getItem("orders")){
      let prevOrder = JSON.parse(localStorage.getItem("orders"))
      localStorage.setItem("orders", JSON.stringify([..._array,...prevOrder]));
    }else{
      localStorage.setItem("orders", JSON.stringify(_array));
    }
    
    
    setCart([]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={[
            <Navbar size={cart.length} />,
            <Data handleClick={handleClick} handleChange={handleChange} />,
          ]}
        />
        <Route path="/order" element={<Order order={order} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
              placeOrderClick={placeOrderClick}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
