import React, { useState } from "react";
import Header from "./Header";

export default function Login() {
    const [isSignInForm,setIsSignInForm] = useState(true);

    function toggleForm(){
        setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header />
      <div>
        <img
        className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/4371a395-0e42-46ae-be36-5755eebc638b/web/IN-en-20260209-TRIFECTA-perspective_3a6d8659-ddfe-4547-9584-dce64c02c230_large.jpg"
          alt=""
        />
      </div>

      <form className="w-3/12 absolute p-4 bg-black/70 my-30 mx-auto right-0 left-0 text-white rounded-lg ">

        <h1 className="font-bold text-3xl py-4">{isSignInForm? <div>sign in</div>: <div>sign up</div>}</h1>

         {!isSignInForm&& <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
       

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          Sign In
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already registered? sign In now..."}</p>
      </form>
    </div>
  );
}
