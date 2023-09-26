import React from 'react';
import Header from './Header';

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png"
          alt="logo" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
       <h1 className ="font-bold text-3xl py-4">Sign In</h1>
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
        <button className ="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In</button>

      </form>
    </div>
  )
}

export default Login