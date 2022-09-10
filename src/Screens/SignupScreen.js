import React, { useRef } from "react";
import "./SignupScreen.css";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function SignupScreen() {
  const navigate =useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const signIn = (e) => {
    e.preventDefault();
    const user = signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((e) => console.log(e))
      .catch((err) => alert(err));
    navigate("/")
    console.log("the user is ", user);
  };
  const register = async (e) => {
    e.preventDefault();

    const user = await createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )

      .then((e) => console.log(e))
      .catch((err) => alert(err));
      navigate("/")
    console.log(user);
  };

  return (
    <div className="signupscreen">
      <form>
        <h1>Sign In</h1>
        <input
          type="email"
          ref={emailRef}
          className="input__email"
          placeholder="Email"
        />
        <input
          type="password"
          ref={passwordRef}
          className="input__password"
          placeholder="Password"
        />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="gray"> New to Netflix?</span>
          <span className="signuplink" onClick={register}>
       
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
