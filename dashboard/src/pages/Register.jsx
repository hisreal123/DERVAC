import React from 'react'
import RegisterForm from '../Components/forms/RegisterForm';

const Register = () => {
  return (
    <div
      className="register-wrapper flex flex-col 
    justify-center items-center h-screen w-screen"
    >
      <section className="section">
        <h1 className="font-bold text-2xl mb-4 "> Register</h1>
        <p className="font-light text-xs md:text-sm mb-10">
         Register, Please enter your details
        </p>
        <RegisterForm />
      </section>
    </div>
  );
}

export default Register
