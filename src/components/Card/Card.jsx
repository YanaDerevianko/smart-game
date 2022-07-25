import React from "react";
import scss from "./Card.module.scss";

export const Card = ({ id, value, status, handleClick }) => {
  return (
    <div
      className={`${scss.card} ${status ? scss.active  + ' ' + scss[status] : ""} `}
      onClick={() => handleClick(id)}
    >
      <p>{value}</p>
    </div>
  );
};
