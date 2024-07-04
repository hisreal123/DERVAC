import React, { forwardRef } from "react";

const Input = forwardRef(({ ...props }, ref) => {
  return (
    <div>
      <input
        {...props}
        ref={ref}
        required
        className="w-full border border-gray-300 rounded-md p-2 placeholder:text-xs placeholder:text-gray-700"
      />
    </div>
  );
});

export default Input;
