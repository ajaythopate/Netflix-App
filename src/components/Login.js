import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/Validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrormessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const FullName = useRef(null);


  const handleButtonClick = () => {

    const message = checkValidData(email.current.value, password.current.value, FullName.current.value);
    setErrormessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);

  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png"
          alt="logo" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (
          <input
            ref={FullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg" />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg" />

        <p className="text-orange-500">{errorMessage}</p>

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registred? Sign In Now."}
        </p>

      </form>
    </div>
  )
}

export default Login