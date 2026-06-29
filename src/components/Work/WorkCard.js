import React,{useState, useEffect, useCallback, useRef, Fragment} from "react";
import "./style.css";
import {AiOutlineZoomIn,AiOutlineZoomOut} from 'react-icons/ai';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io";
import configuration from "../configuration";

const WorkCard = (props) => {
  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeAutoplay, setActiveAutoplay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef();

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
      [isAnimating]
  );


  //Next picture image index
  const nextBackground = useCallback(() => {
    goToBackground(currentIndex >= configuration.maxItems - 1 ? 0 : currentIndex + 1);
  },[currentIndex, goToBackground])

  const prevBackground = () => {
    goToBackground(currentIndex <= 0 ? configuration.maxItems - 1 : currentIndex - 1)
  }

  
  

  //Hook
  useEffect(() => {
    if(configuration.autoplay && activeAutoplay && !click){
      clearTimeout(autoplayRef.current);
      autoplayRef.current = setTimeout(() =>{
        nextBackground();
      }, configuration.autoplaySpeed);
    }
  },[currentIndex, activeAutoplay, isAnimating, click, nextBackground])

  //Image background
  const imageBackground = (indexNow) => {
    return <img className="introImage" 
    src={props.imgsrc[indexNow].image} 
    alt="IntroImage"
    onMouseEnter={pauseTimer} onMouseLeave={playTimer}
    />
  }

  //button thumbnail
  const thumbnail = () => {
    return(
      <Fragment>
        {
          props.imgsrc.map((catalog, idx) => (

                <button className={(idx !== currentIndex) ?"button1 small-btn": "button1 small-highlight"} style={{ backgroundImage: 'url('+ catalog.image + ')', backgroundSize: 'cover' } } onClick={() => goToBackground(idx)} 
                onMouseEnter={pauseTimer} onMouseLeave={playTimer}></button>
           
            
          )

          )
        }
      </Fragment>
    )
    
  };
  
  return <div className="WorkCard">
    
  <div className={click ? "WorkPictureZoom" :"WorkPicture"}>
    
    <div className="IMAGE">
      {imageBackground(currentIndex)}
    </div>
    <div className="icons" onClick={handleClick}>
      {click ? (<AiOutlineZoomOut size={20} style={{color:"#000"}}/>) : (<AiOutlineZoomIn size={20} style={{color:"#000"}}/>)}
      
    </div>
    
  </div>
  

  <div className="arrows">
      <IoIosArrowDropleftCircle size={40} className="leftArrow" onClick={() => prevBackground()} onMouseEnter={pauseTimer} onMouseLeave={playTimer}/>
      {thumbnail()}
      <IoIosArrowDroprightCircle size={40} className="rightArrow" onClick={() => nextBackground()} onMouseEnter={pauseTimer} onMouseLeave={playTimer}/>
    </div>
  
  <h2 className="WorkTitle">{props.title}</h2>
  <div className="WorkDetails">
    <p>{props.content}</p>
    <div className="WorkButtons">
      <a href={props.source} className="button1">Source</a>
      {props.indepthsummary ? (<a href={props.summaryLink} className="button1">Summary</a>) : (<></>)}
    </div>
    
  </div>
</div>
//   }
  
};

export default WorkCard;
