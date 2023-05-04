import "./IntroImageStyle.css";

import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const introimage = () => {
  return <div className="hero1">
    <div className="imageHome">
    <img className="introImage" src={IntroImg} alt="IntroImage"/>
    </div>
    <div className="content">
      <p>Software Engineer</p>
      <h1> Developer</h1>
      <div>
        <Link to="/Project" className="button1">Projects</Link>
        <Link to="/Contact" className="button1 button1-light">Contact</Link>
      </div>
    </div>
  </div>;
};

export default introimage;
