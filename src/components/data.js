import React from "react";
import list from "../data";
import Cards from "./card";
import "../styles/data.css";

const Data = ({ handleClick, handleChange }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards
          key={item.id}
          item={item}
          handleClick={handleClick}
          handleChange={handleChange}
        />
      ))}
    </section>
  );
};

export default Data;
