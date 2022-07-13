import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import '../styles/card.css';


function Order({ order }) {

  const _data = [
    {
      img: "https://www.licious.in/blog/wp-content/uploads/2021/03/Buffalo-wings-recipe.jpg",
      name: 'chicken',
      type: 'Non-Veg',
      cuisine: 'SouthIndian',
      price: 100,
      amount: 1,
      order_Date: "20.06.2022",
      order_Time: "1:00pm"
    },
    {
      img: "https://kristineskitchenblog.com/wp-content/uploads/2022/04/oven-baked-chicken-thighs-recipe-495.jpg",
      name: 'chicken',
      type: 'Non-Veg',
      cuisine: 'SouthIndian',
      price: 100,
      amount: 1,
      order_Date: "25.06.2022",
      order_Time: "11:00pm"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9Y87lt1GWYqK5DUNyeGByB3GQQStqT_0Iw&usqp=CAU",
      name: 'chicken',
      type: 'Non-Veg',
      cuisine: 'SouthIndian',
      price: 100,
      amount: 1,
      order_Date: "27.06.2022",
      order_Time: "4:00pm"
    },
    {
      img: "https://static.onecms.io/wp-content/uploads/sites/43/2022/05/26/8805-CrispyFriedChicken-mfs-3x2-072.jpg",
      name: 'chicken',
      type: 'Non-Veg',
      cuisine: 'SouthIndian',
      price: 200,
      amount: 2,
      order_Date: "30.06.2022",
      order_Time: "6:00am"
    },

  ]

  const [price, setPrice] = useState(0);
  const [data, setData] = useState([])
  useEffect(() => {
    setData([...JSON.parse(localStorage.getItem('orders')), ..._data])
  }, [])

  const onInputChange = (e) => {
    const filterValue = data && data.filter((item) => {
      return item.name === e.target.value
    })
    console.log(filterValue);
    if (filterValue.length > 0) {
      setData(filterValue);
    }
  }
  const onInputValue = (e) => {
    const InputValue = data && data.filter((items) => {
      return items.type === e.target.value
    })
    console.log(InputValue)
    if (InputValue.length > 0) {
      setData(InputValue)
    }
  }

  useEffect(() => {
    console.log(order);
    let ans = 0;
    console.log(ans);
    setPrice(ans);
  }, []);

  return (
    <div>
      <Navbar show={true} />
      <input className="input"onChange={(e) => onInputChange(e)} placeholder="Enter Name of the product" />
      <select className="drop" onChange={(e) => onInputValue(e)} placeholder="Food Type" defaultValue={""}>
        <option>Select Type</option>
        <option value='Veg'>veg</option>
        <option value='Non-Veg'>non-veg</option>
      </select>
      <div className='order_main'>
        {data.length > 0 ? (
          data.map((item) => (

            <div className="cards">
              <div className="image_box">
                <img src={item.img} alt="" />
              </div>
              <div className="details">
                <p> Name:{item.name}</p>
                <p> type: {item.type} </p>
                <p> cuisine:{item.cuisine} </p>
                <p>quantity: {item.amount}  </p>
                <p> Price:{item.total_price} </p>
                <p>Time:{item.order_Time}</p>
                <p>Date:{item.order_Date}</p>
              </div>
            </div>

          ))
        ) : (
          <div className="order-Empty">

            <p>Please Add Something in Cart</p>
            <Link to="/">
              <p>Click here</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
