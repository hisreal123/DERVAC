import React, { useContext, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RegisterCtx } from "../context/RegisterCtx";

const Register = () => {
  const { isOpen, setIsOpen } = useContext(RegisterCtx);

  console.log(isOpen);

  const email = useRef();
  const password = useRef();

  // function to close the modal
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  // submit form to console
  const handleSubmit = (event) => {
    event.preventDefault(); // we prevent the browser from refreshing

    const validateEmail = email.current.value;
    const validatePassword = password.current.value;
    // check for confrim password

    setMessage("Registration Successfull !!!");
    console.log(validateEmail, validatePassword);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="absolute top-[20%]  left-[28%] bg-white shadow-2xl pb-8 rounded-lg">
        <div className="  border-b border-gray-500 mb-4 px-4 py-2 flex justify-between  ">
          <div className="div">
            <h1 className="text-2xl font-bold"> Sign Up</h1>
            <span className="block"> It's quick and easy.</span>
          </div>

          <IoClose
            className="text-3xl mt-1 cursor-pointer"
            onClick={handleCloseModal}
          />
        </div>
        <form
          className="flex flex-col space-y-3 px-4  "
          onSubmit={handleSubmit}
        >
          <div className="flex space-x-6 ">
            <input
              className="px-2 border border-grey-400 py-2 "
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
          </div>

          <button
            type="submit"
            className="bg-black text-white font-bold rounded-md py-2 border
          hover:border-gray-300 hover:bg-white hover:text-black"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
