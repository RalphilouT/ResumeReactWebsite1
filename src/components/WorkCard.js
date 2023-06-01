import React,{useState} from "react";
import "./WorkCardStyles.css";
import {AiOutlineZoomIn,AiOutlineZoomOut} from 'react-icons/ai'


const WorkCard = (props) => {
  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return <div className="WorkCard">
    
  <div className={click ? "WorkPictureZoom" :"WorkPicture"}>
    
    <div className="IMAGE">
      <img src={props.imgsrc} alt="workcardimage" ></img>
    </div>
    <div className="icons" onClick={handleClick}>
      {click ? (<AiOutlineZoomOut size={20} style={{color:"#000"}}/>) : (<AiOutlineZoomIn size={20} style={{color:"#000"}}/>)}
      
    </div>
  </div>
  
  
  <h2 className="WorkTitle">{props.title}</h2>
  <div className="WorkDetails">
    <p>{props.content}</p>
    <div className="WorkButtons">
      <a href={props.source} className="button1">Source</a>
    </div>
    
  </div>
  
</div>
};

export default WorkCard;
