
import "./ProjectTwoStyles.css"

import react2 from "../assets/react2.jpg"
import React from "react";
const ProjectTwoSection = (props) =>{
    if(props.leftside === "LeftSide"){
        return <div className="project2">
    <div className={props.leftside}>
        <h1>
          {props.title}
        </h1>
        <p>
          {props.content}
        </p>
        <a href={props.source} className="button1">Source</a>
        
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
        return <div className="project2">
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
        <a href={props.source} className="button1">Source</a>
    </div>
    
   
    
  </div>
    }
    
};

export default ProjectTwoSection;