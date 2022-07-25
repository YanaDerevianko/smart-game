import { React, useState } from "react";
import { Card } from "components/Card/Card";
import scss from "./Wrapper.module.scss";
import { createRandomArray } from "utils/pairArrayGenerationService";

export const Wrapper = ({ numbers }) => {
  const array = createRandomArray();
  const [items, setItems] = useState(array);
  const [prev, setPrev] = useState(-1);

  const check = (id) => {
    let currNum = numbers.find(number => number.id === id);
    let prevNum = numbers.find(number => number.id === prev);
    if (currNum.value === prevNum.value) {
      currNum.status = "correct";
      prevNum.status = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      currNum.status = "incorrect";
      prevNum.status = "incorrect";
      setItems([...items]);
      setTimeout(() => {
        currNum.status = "";
        prevNum.status = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  };
  const handleClick = (id) => {
    let activeNum = numbers.find(number => number.id === id);
    if (prev === -1) {
      activeNum.status = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  };

  return (
    <div className={scss.wrapper}>
      {numbers.map(({id, value, status }, idx) => (
        <Card
          key={idx}
          id={id}
          value={value}
          status={status}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
