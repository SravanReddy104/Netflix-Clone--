import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useState,useEffect } from 'react';
import  axios from "./axios";
import requests from './request';
const Slideshow = () => {
    const [slideImages, setslideImages] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await axios.get(requests.fetchNetflixOrginals);
          console.log(response);
          setslideImages(
            response.data.results
          );
        }
        fetchData();
      }, []);
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage':`url("https://image.tmdb.org/t/p/original/${slideImage?.backdrop_path}")` }}>
               
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;