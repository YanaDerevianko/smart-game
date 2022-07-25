import { React, useState } from "react";
import { Card } from "components/Card/Card";
// import { v4 as uuidv4 } from "uuid";
import scss from "./Wrapper.module.scss";
import { createRandomArray } from "utils/pairArrayGenerationService";

export const Wrapper = ({ numbers }) => {
  const array = createRandomArray();
  const [items, setItems] = useState(array);
  const [prev, setPrev] = useState(-1);

  const check = (current) => {
    if (numbers[current].value === numbers[prev].value) {
      numbers[current].status = "correct";
      numbers[prev].status = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      numbers[current].status = "incorrect";
      numbers[prev].status = "incorrect";
      setItems([...items]);
      setTimeout(() => {
        numbers[current].status = "";
        numbers[prev].status = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  };
  const handleClick = (id) => {
    if (prev === -1) {
      numbers[id].status = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  return (
    <div className={scss.wrapper}>
      {numbers.map(({ value, status }, idx) => (
        <Card
          key={idx}
          id={idx}
          value={value}
          status={status}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
