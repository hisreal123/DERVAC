import React, { useContext, useRef, useState } from "react";
import Register from "./Register";
import { RegisterCtx } from "../context/RegisterCtx";

const Login = () => {
  const [message, setMessage] = useState(null);

  const {isOpen, setIsOpen} = useContext(RegisterCtx)
  console.log(isOpen)

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
    <>
      <Register />

      <div className="w-[80%] mx-auto h-screen flex flex-col justify-center items-center">
        <h1 className="mb-4 text-3xl "> Log in </h1>
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

          <button
            type="submit"
            className="bg-black text-white font-bold rounded-md py-2 border
          hover:border-gray-300 hover:bg-white hover:text-black"
          >
            Log in
          </button>
        </form>

        {/* this button will call Register  */}
        <button
          type="submit"
          className="bg-green-600 text-white font-bold rounded-md py-2 border
          hover:border-gray-300 hover:bg-white hover:text-black px-10 mt-20"
          onClick={() => {setIsOpen(true)}}
        >
          Creat Account
        </button>
      </div>
    </>
  );
};

export default Login;
