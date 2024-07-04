import React from "react";
import Input from "../ui/Input";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  return (
    <div className="login-form">
      <form action="" onSubmit={() => {}}>
        <div className="mb-3">
          <label htmlFor="email" className="text-xs mb-2 block">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-xs mb-2 block">
            Password
          </label>
          <Input
            type="Password"
            id="Password"
            name="Password"
            placeholder="Password"
          />
        </div>

        {/* forget Password */}
        <Link to="/forgot-password" className="text-xs font-bold my-3 block">
          Forgot Password
        </Link>

        <Button
          type="submit"
          title="Login"
          className="bg-black w-full text-white mb-2"
        />

        <Button
          type="submit"
          title="Sign In with Google"
          icon=<FcGoogle />
          className="bg-white w-full text-black  text-xs"
        />

        <div className="text-xs  flex  justify-center items-center space-x-1">
            <span className="block text-gray-400">Dont have an account?</span>
          <Link to="/register" className=" text-xs font-bold my-3 block">
            Sign up for free
          </Link>
        </div>


      </form>
    </div>
  );
};

export default LoginForm;
