import React, { useReducer } from "react";

// Define the initial state of the counter..
const initialState = { count: 0 };

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "multiply":
      return { count: state.count * 2 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};
const index = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter app !!!</h1>
      <h2>Counter: {state.count}</h2>

      <div>
        <button className="border px-3 rounded-md" type="button" onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button className="border px-3 rounded-md" type="button" onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        <button className="border px-3 rounded-md" type="button" onClick={() => dispatch({type: 'multiply'})}>Mutiply</button>
        <button className="border px-3 rounded-md" type="button" onClick={() => dispatch({type: 'reset'})}>Reset</button>
      </div>
    </div>
  );
};

export default index;
