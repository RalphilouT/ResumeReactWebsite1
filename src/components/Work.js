import React from "react";
import "./WorkCardStyles.css";
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData";

const Work = () => {
  return <div className="WorkGrid">
    <h1 className="WorkHeading">
        Projects
    </h1>
    <div className="WorkContainer">
        {WorkCardData.map((value,index)=>{
          return(
            <WorkCard key={index} imgsrc={value.imgsrc} title={value.title} content={value.content} source = {value.source} indepthsummary = {value.indepthsummary} summaryLink = {value.summaryLink}/>
          )
        })}
    </div>
  </div>;
};

export default Work;
