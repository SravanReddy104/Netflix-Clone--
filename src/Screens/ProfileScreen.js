import React from "react";
import Nav from "../Components/Nav";
import "./profileScreen.css";
import { useSelector } from "react-redux/es/exports";

import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <div className="profilescreen">
        <div className="background">
          <Nav />
          <div className="profilescreen__body">
            <h2 className="edit__profile">Edit Profile</h2>
            <div className="profilescreen__info">
              <img
                className="profilescreen__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix"
              />
              <div className="profilescreen__details">
                <h3 className="profilescreen__email">{user.email}</h3>
                <h3 className="plans__header">Plans (Current Plans Premium)</h3>
                <h5 className="plans__renewl">Renewel date: 05/06/2024</h5>
                <div className="profilescreens__subscriptions">
                  <div className="subplans">
                    <h4>Netflix Standard</h4>
                    <h5>1040p</h5>
                  </div>
                  <button className="subscription__button">Subscribe</button>
                </div>
                <div className="profilescreens__subscriptions">
                  <div className="subplans">
                    <h4>Netflix Basic</h4>
                    <h5>720p</h5>
                  </div>
                  <button className="subscription__button">Subscribe</button>
                </div>
                <div className="profilescreens__subscriptions">
                  <div className="subplans">
                    <h4>Netflix Premium</h4>
                    <h5>4K+HDR</h5>
                  </div>
                  <button className="subscription__button current">
                    Subscribe
                  </button>
                </div>

                <button
                  className="profilescreen__signout"
                  onClick={() => signOut(auth)}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileScreen;
