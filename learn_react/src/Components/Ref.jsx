import React, { useRef, useState } from "react";

const Ref = () => {
  const [message, setMessage] = useState(null);

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  //   create a submit function

  const handleSubmit = (event) => {
    event.preventDefault(); // we prevent the browser from refreshing

    //
    const validateEmail = email.current.value;
    const validateName = name.current.value;
    const validatePassword = password.current.value;
    const validateConfirmPassword = confirmPassword.current.value;

    // check for confrim password
    if (validatePassword !== validateConfirmPassword) {
      setMessage("Password does not match");
    } else {
      setMessage("Registration Successfull !!!");
      console.log(validateName, validateEmail, validatePassword);
    }
  };

  return (
    <div className="w-[80%] mx-auto h-screen flex flex-col justify-center items-center">
      <h1 className="mb-4 text-3xl "> Register </h1>
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
          ref={name}
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
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
        <input
          className="px-2 border border-grey-400 py-2"
          ref={confirmPassword}
          type="password"
          name="confirmPassword"
          id="confimPassword"
          placeholder="Confirm Password"
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Ref;
