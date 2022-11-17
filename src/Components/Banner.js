import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";
import requests from "../request";
import "./Banner.css";
import { getBanner } from "../Features/userSlice";

function Banner() {
  const dispatch = useDispatch();
  const banner = useSelector((state) => state.user.banner);
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    dispatch(getBanner());
    setMovie(banner[Math.floor(Math.random() * banner?.length - 1)]);
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header>
      <div
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h2 className="banner__title">
            {movie?.title || movie?.name || movie?.orginal_name}
          </h2>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
      <div className="banner__bottom"></div>
    </header>
  );
}

export default Banner;
