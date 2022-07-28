import { React, useState, useRef, useEffect } from "react";
import { Card } from "components/Card/Card";
import scss from "./Wrapper.module.scss";

export const Wrapper = ({ numbers }) => {
  const [items, setItems] = useState(numbers);
  const [prev, setPrev] = useState(null);
  const [counterClick, setCounterClick] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      setTimeout(() => {
        setDisabled(false);
      }, 5000);
      return;
    }
    if (counterClick >= 2) {
      setDisabled(true);
      setTimeout(() => {
        setDisabled(false);
        setCounterClick(0);
        return;
      }, 1500);
      return;
    }
  }, [counterClick]);

  const check = (id) => {
    let currNum = items.find((item) => item.id === id);
    let prevNum = items.find((item) => item.id === prev);
    if (currNum.value === prevNum.value) {
      currNum.status = "correct";
      prevNum.status = "correct";
      setItems([...items]);
      setPrev(null);
    } else {
      currNum.status = "incorrect";
      prevNum.status = "incorrect";
      setItems([...items]);
      setTimeout(() => {
        currNum.status = "";
        prevNum.status = "";
        setItems([...items]);
        setPrev(null);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    setCounterClick((prevState) => prevState + 1);
    if (counterClick < 2) {
      let activeNum = items.find((item) => item.id === id);
      if (!prev) {
        activeNum.status = "active";
        setPrev(id);
        setItems([...items]);
      } else {
        check(id);
      }
      return;
    }
  };

  return (
    <div className={scss.wrapper}>
      {numbers.map(({ id, value, status }, idx) => (
        <Card
          key={idx}
          id={id}
          disabled={disabled}
          value={value}
          status={status}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
