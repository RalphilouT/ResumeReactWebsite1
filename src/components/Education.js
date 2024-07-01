import React from "react";
import "./EducationCardStyles.css"
import EducationCard from "./EducationCard";
import EducationCardData from "./EducationCardData";

const Education = () =>{
    return <div className="cardGrid">
    <h1 className="EducationHeading">School History</h1>
    <div className="cardcontainer">
        {EducationCardData.map((value,index)=>{
                return(
                    <EducationCard key={index}  logosrc={value.logosrc}  title = {value.title} Website={value.Website} GPA = {value.GPA} City = {value.City} Diploma = {value.Diploma} Content = {value.Content}/>
                )
            })}
    </div>
        
  </div>
}
export default Education;