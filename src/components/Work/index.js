import React, { useState } from "react";
import "./style.css";
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData";

const Work = () => {
  const [sortState, setSortState] = useState("none");
  
  const sorting = {
    none: {method: (a,b) => null},
    ascending: {method: (a,b) => (a.title < b.title ? -1 : 1)},
    descending: {method: (a,b) => (a.title > b.title ? -1 : 1)}
  };

  return <div className="WorkGrid">
    <h1 className="WorkHeading">
        Projects 
        <div>
    <select defaultValue={'DEFAULT'} onChange={(e)=> setSortState(e.target.value)} className="button2">
          <option value="DEFAULT" disabled>Sort</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
    </div>
    </h1>
    
    <div className="WorkContainer">
        
        {WorkCardData.sort(sorting[sortState].method).map((value,index)=>{
          return(
            <WorkCard key={index} imgsrc={value.imgsrc} title={value.title} content={value.content} source = {value.source} indepthsummary = {value.indepthsummary} summaryLink = {value.summaryLink}/>
          )
        })}
    </div>
  </div>;
};

export default Work;
