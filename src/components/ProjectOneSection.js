import "./ProjectOneStyles.css"
import React from "react";
import { react2 } from "../assets";

const ProjectOneSection = (props) =>{
    if(props.leftside === "LeftSide"){
        return <div className="project1">
    <div className={props.leftside}>
        <h1>
          {props.title}
        </h1>
        <p>
          {props.content}
        </p>
        
    </div>
    <div className={props.rightside}>
      <div className="imagecontainer">
        <div className="imagetop">
          <img src={props.imgsrc} className="image" alt="imaget"></img>
        </div>
        <div className="imagebottom">
          <img src={react2} className="image" alt="imaget"></img>
        </div>
      </div>
    </div>
   
    
  </div>
    }else{
        return <div className="project1">
            <div className={props.rightside}>
      <div className="imagecontainer">
        <div className="imagetop">
          <img src={props.imgsrc} className="image" alt="imaget"></img>
        </div>
        <div className="imagebottom">
          <img src={react2} className="image" alt="imaget"></img>
        </div>
      </div>
    </div>
    <div className={props.leftside}>
        <h1>
          {props.title}
        </h1>
        <p>
          {props.content}
        </p>
        
    </div>
    
   
    
  </div>
    }
    
};

export default ProjectOneSection;