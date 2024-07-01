import React,{useState} from "react";
import "./WorkCardStyles.css";
import {AiOutlineZoomIn,AiOutlineZoomOut} from 'react-icons/ai'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle  } from "react-icons/io";

const WorkCard = (props) => {
  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [activeIndex, setActiveIndex] = useState(0);


  if(props.indepthsummary === false){
      
    return <div className="WorkCard">
      
    <div className={click ? "WorkPictureZoom" :"WorkPicture"}>
      <div className="IMAGE">
        
        <img src={props.imgsrc[activeIndex].image} alt="workcardimage" ></img>
      </div>

      <div className="icons" onClick={handleClick}>
        {click ? (<AiOutlineZoomOut size={20} style={{color:"#000"}}/>) : (<AiOutlineZoomIn size={20} style={{color:"#000"}}/>)}
        
      </div>
    </div>
    <div className="arrows">
      <IoIosArrowDropleftCircle size={40} className="leftArrow" onClick={(e) => {setActiveIndex(activeIndex > 0 ? activeIndex - 1 : activeIndex + 2)}}/>
      <IoIosArrowDroprightCircle size={40} className="rightArrow" onClick={(e) => {setActiveIndex(activeIndex < 2 ? activeIndex + 1 : activeIndex - 2)}}/>
    </div>
    
    

    
    <h2 className="WorkTitle">{props.title}</h2>
    <div className="WorkDetails">
      <p>{props.content}</p>
      <div className="WorkButtons">
        
        <a href={props.source} className="button1">Source</a>
        
      </div>
      
    </div>
    
  </div>
  }else if (props.indepthsummary === true){
  //   const[click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  return <div className="WorkCard">
    
  <div className={click ? "WorkPictureZoom" :"WorkPicture"}>
    
    <div className="IMAGE">
      <img src={props.imgsrc[activeIndex].image} alt="workcardimage"></img>
    </div>
    <div className="icons" onClick={handleClick}>
      {click ? (<AiOutlineZoomOut size={20} style={{color:"#000"}}/>) : (<AiOutlineZoomIn size={20} style={{color:"#000"}}/>)}
      
    </div>
  </div>
  <div className="arrows">
      <IoIosArrowDropleftCircle size={40} className="leftArrow" onClick={(e) => {setActiveIndex(activeIndex > 0 ? activeIndex - 1 : activeIndex + 2)}}/>
      <IoIosArrowDroprightCircle size={40} className="rightArrow" onClick={(e) => {setActiveIndex(activeIndex < 2 ? activeIndex + 1 : activeIndex - 2)}}/>
    </div>
  
  <h2 className="WorkTitle">{props.title}</h2>
  <div className="WorkDetails">
    <p>{props.content}</p>
    <div className="WorkButtons">
      <a href={props.source} className="button1">Source</a>
      <a href={props.summaryLink} className="button1">Summary</a>
    </div>
    
  </div>
  
</div>
  }
  
};

export default WorkCard;
