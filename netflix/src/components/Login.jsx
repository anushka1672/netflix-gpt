import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidaData } from "../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const Email = useRef(null);
  const password = useRef(null);
  const Name = useRef(null);

  function toggleForm() {
    setIsSignInForm(!isSignInForm);
  }

  function handleSubmit() {
    const msg = checkValidaData(
      Email.current.value,
      password.current.value
    );

    setErrorMsg(msg);
    if (msg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: Name.current.value,
            photoURL:
              "https://th.bing.com/th/id/OIP.oPwmMLaYLk59gogVnJxJ1AHaEK?w=332&h=187&c=7&r=0&o=7&cb=defcache2&dpr=1.3&pid=1.7&rm=3",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } =
                auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              navigate("/browse");
            })
            .catch((error) => {
              setErrorMsg(error.code + "-" + error.message);
            });
        })
        .catch((error) => {
          setErrorMsg(error.code + "-" + error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMsg(error.code + "-" + error.message);
        });
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/browse");
    }
  });

  return (
    <div className="relative w-full h-screen">
      <Header />

      {/* Background Image */}
      <img
        className="absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4371a395-0e42-46ae-be36-5755eebc638b/web/IN-en-20260209-TRIFECTA-perspective_3a6d8659-ddfe-4547-9584-dce64c02c230_large.jpg"
        alt="background"
      />

      {/* Login Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="
        absolute 
        w-[90%] 
        sm:w-[70%] 
        md:w-4/12 
        lg:w-3/12
        p-6 
        bg-black/80 
        top-24 
        left-0 
        right-0 
        mx-auto 
        text-white 
        rounded-lg
        "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={Name}
            type="text"
            placeholder="Full Name"
            className="p-3 md:p-4 my-3 md:my-4 w-full bg-gray-700 rounded"
          />
        )}

        <input
          ref={Email}
          type="text"
          placeholder="Email Address"
          className="p-3 md:p-4 my-3 md:my-4 w-full bg-gray-700 rounded"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 md:p-4 my-3 md:my-4 w-full bg-gray-700 rounded"
        />

        {errorMsg && (
          <p className="text-red-500 text-sm">{errorMsg}</p>
        )}

        <button
          className="p-3 md:p-4 my-5 bg-red-700 w-full rounded-lg hover:bg-red-800"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="py-3 text-sm cursor-pointer"
          onClick={toggleForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
}