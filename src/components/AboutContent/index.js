import { Link } from "react-router-dom";
import "./style.css";
import React from "react";
import { react1, react2 } from "../../assets";

const AboutContent = () => {
    
    const image = (imageSrc) => {
        return (
            <img src={imageSrc} className="image" alt="imaget"></img>
        );
    };

  return <div className="AboutPage">
  <div className="LeftSide">
      <h1>
        Who Am I?
      </h1>
      <p>
        My name is Ralphilou Tatoy. I'm a Software Engineer. I have experience in front-end and back-end development in an agile environment.
      </p>
      <Link to="/Contact">
        <button className="button1">Contact</button>
      </Link>
  </div>
  <div className="RightSide">
    <div className="imagecontainer">
      <div className="imagetop">
            {image(react1)}
      </div>
      <div className="imagebottom">
            {image(react2)}
      </div>
    </div>
  </div>
</div>;
};

export default AboutContent;
