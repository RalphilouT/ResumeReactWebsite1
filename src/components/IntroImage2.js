import "./IntroImageStyle2.css";
import React from "react";

const IntroImage2 = (props) => {
  return <div className="introimg2">
      <div className="introIMAGE2">
      </div>
      <div className="header">
        <h1>{props.header}</h1>
        <p>{props.paragraph}</p>
      </div>
    </div>
  };


export default IntroImage2;
