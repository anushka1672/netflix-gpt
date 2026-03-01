import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidaData } from "../utils/validate";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
      const user = useSelector((state)=>state.user);

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const Email = useRef(null);
  const password = useRef(null);
  const Name = useRef(null);

  function toggleForm() {
    setIsSignInForm(!isSignInForm);
  }

  function handleSubmit() {
    const msg = checkValidaData(Email.current.value,password.current.value);
    setErrorMsg(msg);
    if (msg) return;

    if (!isSignInForm) {
     createUserWithEmailAndPassword( auth, Email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
         displayName: Name.current.value, photoURL: "https://th.bing.com/th/id/OIP.oPwmMLaYLk59gogVnJxJ1AHaEK?w=332&h=187&c=7&r=0&o=7&cb=defcache2&dpr=1.3&pid=1.7&rm=3&defcache=1"
           }).then(() => {
                const {uid, email, displayName,photoURL} = auth.currentUser;
                   dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL})); 
              console.log(user);
              navigate("/browse") 
 
          }).catch((error) => {
              setErrorMsg(error.code+"-"+error.message)
     });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode+"-"+errorMessage);
        });
      } else {
        signInWithEmailAndPassword(auth,Email.current.value, password.current.value)
        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log(user);
          navigate("/browse") 
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode+"-"+errorMessage);
        });
    }
  }

  useEffect(()=>{
    if(user){
      navigate("/browse")
    }

  })

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

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-4 bg-black/70 my-30 mx-auto right-0 left-0 text-white rounded-lg "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? <div>sign in</div> : <div>sign up</div>}
        </h1>

        {!isSignInForm && (
          <input
            ref={Name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          ref={Email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        {errorMsg && <p className="text-red-500">{errorMsg}</p>}

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleSubmit}
        >
          {isSignInForm ? <div>sign in</div> : <div>sign up</div>}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? sign In now..."}
        </p>
      </form>
    </div>
  );
}
