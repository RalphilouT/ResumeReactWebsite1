import "./ProjectOneStyles.css";
import React from "react";
import ProjectOneSection from "./ProjectOneSection";
import ProjectOneData from "./ProjectOneData";

const ProjectOne = () => {
  return (
    <div>
    {ProjectOneData.map((value,index)=>{
          return(
            <ProjectOneSection key={index} leftside={value.leftside} rightside={value.rightside} imgsrc = {value.imgsrc} title={value.title} content = {value.content}/>
          )
        })}
    </div>
  );

};

export default ProjectOne;
