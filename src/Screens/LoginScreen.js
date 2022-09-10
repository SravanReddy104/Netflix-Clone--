import React, { useState } from "react";
import SignupScreen from "./SignupScreen";

import "./LoginScreen.css";

function LoginScreen() {
 
    const [signin,setSignin] = useState(false);
   
  return (
    <div className="loginscreen">
      <div className="loginscreen__background">
        <img
          className="loginscreen__logo" 
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="hellp"
        />
       <button className="loginscreen__button">Login</button>
        <div className="loginscreen__gradient"></div>
        <div className="loginscreen__body">
        {signin?<SignupScreen />:
        <>
            <h1>Unlimited files, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginscreen__input">
          <form>
            <input
             
              type="email"
              placeholder="Email Address"
            ></input>
            <button onClick={()=>setSignin(true)} className="loginscreen__getstarted">GET STARTED</button>
          </form>
        </div>
          </>}

        
        </div>
    
      </div>
    </div>
  );
}

export default LoginScreen;
