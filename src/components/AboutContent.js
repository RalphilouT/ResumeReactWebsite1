import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from "react";
import react1 from "../assets/Me.jpg"
import react2 from "../assets/react2.jpg"
const AboutContent = () => {
  return <div className="AboutPage">
  <div className="LeftSide">
      <h1>
        Who Am I?
      </h1>
      <p>
        My name is Ralphilou Tatoy. I'm a Software Engineer. I have knowledge of front-end and back-end developing experience. I create software through agile software development.
      </p>
      <Link to="/Contact">
        <button className="button1">Contact</button>
      </Link>
  </div>
  <div className="RightSide">
    <div className="imagecontainer">
      <div className="imagetop">
        <img src={react1} className="image" alt="imaget"></img>
      </div>
      <div className="imagebottom">
        <img src={react2} className="image" alt="imaget"></img>
      </div>
    </div>
  </div>
</div>;
};

export default AboutContent;
