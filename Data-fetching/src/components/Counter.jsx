import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "../Redux/counterSlice";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center h-screen flex-col ">
      <h1>{count}</h1>
      <button type="button" onClick={() => dispatch(increment())}> Increment</button>
      <button type="button" onClick={() => dispatch(decrement())}> Decrement</button>
    </div>
  );
};

export default Counter;
