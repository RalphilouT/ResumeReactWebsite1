import "./style.css";
import React from "react";
import ProjectTwoSection from "./ProjectTwoSection";
import ProjectTwoData from "./ProjectTwoData";

const ProjectTwo = () => {
  return (
    <div>
    {ProjectTwoData.map((value,index)=>{
          return(
            <ProjectTwoSection key={index} leftside={value.leftside} rightside={value.rightside} imgsrc = {value.imgsrc} title={value.title} content = {value.content} source={value.source}/>
          )
        })}
    </div>
  );

};

export default ProjectTwo;
