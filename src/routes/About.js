import React from "react";
import { Navbar, Footer, IntroImage2, Education, AboutContent, Chatbot } from "../components";

const About = () => {
  return <div>
  <Chatbot/>
  <Navbar/>
  <IntroImage2 header="ABOUT" paragraph="Software Engineer"/>
  <AboutContent/>
  <Education/>
  <Footer/>
</div>;
};

export default About;
