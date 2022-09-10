import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
// import ProfileScreen from "./ProfileScreen";
// import { logout } from './userSlice';

function Nav() {
  const [handle, setHandle] = useState(false);

  const navigate = useNavigate();


  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandle(true);
      } else {
        setHandle(false);
      }
    });
    // return ()=>{
    //     window.removeEventListener("scroll");
    // }
  });
  return (
    <div className={`nav ${handle && "nav__scrol"}`}>
      <img
        loading="lazy"
        className="nav__logo"
        onClick={() => navigate("/")}
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix"
      />
      <img
         loading="lazy"
        className="nav__avatar"
        onClick={() => navigate("ProfileScreen")}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;
