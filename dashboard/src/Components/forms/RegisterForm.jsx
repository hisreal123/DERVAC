import React, { useRef, useState } from "react";
import Input from "../ui/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { FcGoogle } from "react-icons/fc";

const RegisterForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    // Validate inputs
    const validateEmail = emailRef.current.value;
    const validatePassword = passwordRef.current.value;
    const validateConfirmPassword = confirmPasswordRef.current.value;

    // Check password match
    if (validatePassword !== validateConfirmPassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage("Registration successful!");

      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label htmlFor="email" className="text-xs mb-2 block">
            Email
          </label>
          <Input
            ref={emailRef}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="text-xs mb-2 block">
            Password
          </label>
          <Input
            ref={passwordRef}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="text-xs mb-2 block">
            Confirm Password
          </label>
          <Input
            ref={confirmPasswordRef}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Re-enter your password"
          />
        </div>

        {/* Display message */}
        <span className="text-red-500 text-xs mb-2 block">{message}</span>

        <Button
          type="submit"
          title="Register"
          className="bg-black w-full text-white my-3"
        />

        <Button
          type="button" // Change type to button to prevent form submission
          title="Register with Google"
          icon={<FcGoogle />}
          className="bg-white w-full text-black text-xs"
        />

        <div className="text-xs flex justify-center items-center space-x-1">
          <span className="block text-gray-400">Already have an account?</span>
          <Link to="/" className="text-xs font-bold my-3 block">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
