import React, { useEffect, useState } from "react";
import "../styles/card.css";

const Cards = ({ item, handleChange, handleClick }) => {
  const { name, type, cuisine, availabilty, img, price } = item;

  const [data,setData] = useState(item)

  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{name}</p>
        <p>{type}</p>
        <p>{cuisine}</p>
        <h4>Available For:</h4>
        <p>{availabilty[0]}</p>
        <p>{availabilty[1]}</p>
        <p>{availabilty[2]}</p>
        <b>Price - {price}Rs</b>
        <br></br>

        <div className="actions">
          <div>
            <button
              className="addCart-button"
              onClick={() => handleClick(item)}
            >
              Add to Cart
            </button>
          </div>
          {data.amount > 0 ? (
            <div className="quantity">
              <button className="plus" onClick={() => handleChange(item, 1)}>
                +
              </button>
              <button className="amount">{item.amount}</button>
              <button className="minus" onClick={() => handleChange(item, -1)}>
                -
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Cards;
