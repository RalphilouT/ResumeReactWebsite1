import React from "react";
import Navbar from "../components/Navbar";
import Footer1 from "../components/Footer";
import Introimage2 from "../components/IntroImage2";
import ProjectTwo from "../components/ProjectTwo";

const Project2 = () => {
  return <div>
    <Navbar/>
    <Introimage2 header="API, Frontend, Testing" paragraph="Project involving backend, frontend, and automated testing"/>
    <ProjectTwo/>    
    <Footer1/>
  </div>;
};

export default Project2;
