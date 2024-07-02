import React from "react";
import { Navbar, Footer, IntroImage2, Education, AboutContent } from "../components";

const About = () => {
  return <div>
  <Navbar/>
  <IntroImage2 header="ABOUT" paragraph="Software Engineer"/>
  <AboutContent/>
  <Education/>
  <Footer/>
</div>;
};

export default About;
