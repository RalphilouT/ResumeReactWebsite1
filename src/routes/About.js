import React from "react";
import Navbar from "../components/Navbar";
import Footer1 from "../components/Footer";
import Introimage2 from "../components/IntroImage2";
import Education from "../components/Education";
import AboutContent from "../components/AboutContent";

const About = () => {
  return <div>
  <Navbar/>
  <Introimage2 header="ABOUT" paragraph="Software Engineer"/>
  <AboutContent/>
  <Education/>
  <Footer1/>
</div>;
};

export default About;
