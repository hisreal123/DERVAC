import React from "react";

const Button = ({ ...props}) => {
  return (
    <button
      {...props}
      className={`${props.className} border border-gray-300 py-1 font-bold rounded-lg`}
    >
      {props.icon && (
        <span className="flex items-center justify-center space-x-2">
          {props.icon}
          <span>{props.title}</span>
        </span>
      )}
      {!props.icon && <span>{props.title}</span>}
    </button>
  );
};

export default Button;
