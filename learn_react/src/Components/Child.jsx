import React, { useState } from "react";

const Child = ({ props }) => {

  const [count, setCount] = useState(0)


  const handleclick = () => {
   setCount(count  + 1)
  }

  return (
    <div>
      {/* <h1>
        Child component: {props.name} is
        {props.age} years old and is {props.complextion} in complextion.
      </h1> */}
  
      <h1> Count: {count} </h1>
      <button type="button" onClick={handleclick}>
        Click
      </button>
    </div>
  );
};

export default Child;


//  0x01_useState