import React from "react";
import scss from "./Card.module.scss";

export const Card = ({ id, value, status, disabled, handleClick }) => {
  return (
    <button type="button" disabled={disabled}
      className={`${scss.card} ${status ? scss.active  + ' ' + scss[status] : ""} $`}
      onClick={() => handleClick(id)}
    >
      <p>{value}</p>
    </button>
  );
};
