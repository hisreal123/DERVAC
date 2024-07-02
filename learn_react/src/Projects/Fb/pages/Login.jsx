import React, { useContext, useEffect, useRef, useState } from "react";

import Register from "../Components/Register";
import { RegisterCtx } from "../../../context/RegisterCtx";
import LoginForm from "../Components/forms/LoginForm";
import Button from "../Components/ui/Button";

const Login = () => {
  const { isOpen, setIsOpen } = useContext(RegisterCtx);

  const handleToggleRegister = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Register />

      <div className="w-[80%] mx-auto h-screen flex flex-col justify-center items-center">
        <h1 className="mb-4 text-3xl "> Log in </h1>

        <LoginForm />
        {/* this button will call Register  */}

        <Button
          title="Creat Account"
          type="button"
          className="bg-green-600 text-white font-bold rounded-md py-2 border
          hover:border-gray-300 hover:bg-white hover:text-black px-10 mt-20"
         handleClick={handleToggleRegister}
        />
      </div>
    </>
  );
};

export default Login;
