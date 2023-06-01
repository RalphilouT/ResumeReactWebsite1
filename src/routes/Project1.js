import React from "react";
import Navbar from "../components/Navbar";
import Footer1 from "../components/Footer";
import Introimage2 from "../components/IntroImage2";
import ProjectOne from "../components/ProjectOne";


const Project1 = () => {
  return <div>
    <Navbar/>
    <Introimage2 header="React Website" paragraph="In depth summary"/>
    <ProjectOne/>
    <Footer1/>
  </div>;
};

export default Project1;
