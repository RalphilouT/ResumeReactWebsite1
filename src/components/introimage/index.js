import "./style.css";
import React, { useCallback, useEffect, useRef, useState } from "react";
// import { introbg } from "../../assets";
import { Link } from "react-router-dom";
import introimagedata from "./introimagedata";

const IntroImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeAutoplay, setActiveAutoplay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef();

  // configuration
  const configuration = {
    maxItems: 2,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 6000
  }

  //Pause timer
  const pauseTimer = () => {
    console.log("Timer Pause");
    setActiveAutoplay(false);
  }
  
  //Play timer
  const playTimer = () => {
    console.log("Timer Unpaused");
    setActiveAutoplay(true);
  }

  //Next picture image index
  const nextBackground = () => {
    goToBackground(currentIndex >= configuration.maxItems -1 ? 0 : currentIndex + 1);
  }

  //Change index depending on mouse and animation
  const goToBackground = useCallback(
    index => 
      {
        if(!isAnimating){
           setCurrentIndex(index);
           setIsAnimating(true);

           setTimeout(() => {
            setIsAnimating(false);
           }, configuration.speed)
        }
      },
      [isAnimating, currentIndex]
  );

  //Hook
  useEffect(() => {
    if(configuration.autoplay && activeAutoplay){
      clearTimeout(autoplayRef.current);
      autoplayRef.current = setTimeout(() =>{
        nextBackground();
      }, configuration.autoplaySpeed);
    }
  },[currentIndex, activeAutoplay, isAnimating])

  //Image background
  const imageBackground = (indexNow) => {
    return <img className="introImage" 
    src={introimagedata.map((value, index)=>{
      return value.background[indexNow].bgImage
    })} 
    alt="IntroImage"
    onMouseEnter={pauseTimer} onMouseLeave={playTimer}
    />
  }
  return <div className="hero1" onMouseEnter={pauseTimer} onMouseLeave={playTimer}>
    <div className="imageHome" >
      {imageBackground(currentIndex)}
    </div>
    <div className="content">
      <p>Software Engineer</p>
      <h1> Developer</h1>
      <div>
        <Link to="/Project" className="button1" onMouseEnter={pauseTimer} onMouseLeave={playTimer}>Projects</Link>
        <Link to="/Contact" className="button1 button1-light">Contact</Link>
      </div>
    </div>
  </div>
};

export default IntroImage;
