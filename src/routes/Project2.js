import React from "react";
import { Navbar, Footer, IntroImage2, ProjectTwo, Chatbot } from "../components";

const Project2 = () => {
  return <div>
    <Chatbot/>
    <Navbar/>
    <IntroImage2 header="API, Frontend, Testing" paragraph="Project involving backend, frontend, and automated testing"/>
    <ProjectTwo/>    
    <Footer/>
  </div>;
};

export default Project2;
