import React from "react";
import LoginForm from "../Components/forms/LoginForm";

const Login = () => {
  return (
    <div
      className="login-wrapper flex flex-col 
    justify-center items-center h-screen w-screen"
    >
      <section className="section">
        <h1 className="font-bold text-2xl mb-4 "> Welcome back</h1>
        <p className="font-light text-xs md:text-sm mb-10" >Welcome back!, Please enter your details</p> 
        <LoginForm />
      </section>
    </div>
  );
};

export default Login;
