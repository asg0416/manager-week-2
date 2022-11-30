import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusOne, minusOne } from "../redux/modules/counter";

const Contact = () => {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.counter.number);
  return (
    <div>
      {num}
      <button
        onClick={() => {
          dispatch(plusOne());
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        - 1
      </button>
    </div>
  );
};

export default Contact;
