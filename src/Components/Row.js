import React, { useState } from "react";
// import requests from './request.js';
import axios from "../axios";
import { useEffect } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const baseurl = "https://image.tmdb.org/t/p/original";
const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetch() {
      const response = await axios.get(fetchUrl);

      setMovies(response.data.results);
      // console.log(movies)
      return response;
    }

    fetch();
  }, [fetchUrl]);
  const opts = {
    height:"390",
    width:"100%",
    playerVars :{
        autoplay:1,
    },

};
const handleClick = (movie) =>{

    if(trailerUrl){
        setTrailerUrl("")
    }else{
        
        movieTrailer(movie?.name||"").then((url)=>{
           
            const urlParmas = new URL(url).searchParams;
            setTrailerUrl(urlParmas.get("v"));
         
         
        }).catch((err)=>{
            console.log(err);
        })
    }
}


  return (
    <div>
      <div className="row">
        <h2 style={{ color: "white" }}>{title}</h2>
        {/* {movies[1].backdrop_path} */}

        <div className={`row__posters`}>
          {movies.map((movie) => {
            return (
              <img
                key={movie.id} onClick={()=>handleClick(movie)}
                className={`row__poster ${isLarge && "row__large"}`}
                src={`${baseurl}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                loading="lazy"
                alt={movie.title}
              />
            );
          })}
        </div>
       {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    </div>
  );
};

export default Row;
