import "./style.css";
import React from "react";

const introimage2 = (props) => {
  return <div className="introimg2">
      <div className="introIMAGE2">
      </div>
      <div className="header">
        <h1>{props.header}</h1>
        <p>{props.paragraph}</p>
      </div>
    </div>
  };


export default introimage2;
