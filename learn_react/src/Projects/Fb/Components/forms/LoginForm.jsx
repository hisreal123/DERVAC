import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const LoginForm = () => {
  const [message, setMessage] = useState(null);

  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // we prevent the browser from refreshing

    const validateEmail = email.current.value;
    const validatePassword = password.current.value;
    // check for confrim password

    setMessage("Registration Successfull !!!");
    console.log(validateEmail, validatePassword);
  };

  return (
    <form
      className="flex flex-col space-y-3 w-[60%] mx-auto "
      onSubmit={handleSubmit}
    >
      <input
        className="px-2 border border-grey-400 py-2"
        ref={email}
        type="email"
        name="email"
        id="email"
        placeholder="Enter email"
        required
      />
      <input
        className="px-2 border border-grey-400 py-2"
        ref={password}
        type="password"
        name="password"
        id="name"
        placeholder="Enter password"
        required
      />

      {/* conditon ? true : false */}
      {message ? (
        <span className="bg-red-50 border-red-200 py-2">{message}</span>
      ) : (
        ""
      )}

      <Button
        title="Log in"
        className="bg-blue-500 text-white font-bold rounded-md py-2 border
          hover:border-gray-300 hover:bg-blue-700 "
      />

      <Link to="/forgot-password" className="text-blue-500 font-medium block mx-auto text-xs">
        Forgotten password?{" "}
      </Link>
    </form>
  );
};

export default LoginForm;
