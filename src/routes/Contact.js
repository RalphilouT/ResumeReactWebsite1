import React from "react";
import Navbar from "../components/Navbar";
import Footer1 from "../components/Footer";
import Introimage2 from "../components/IntroImage2";
import Form from "../components/Form";

const Contact = () => {
  return <div>
  <Navbar/>
  <Introimage2 header="CONTACT" paragraph="I am excited to talk to you!"/>
  <Form/>
  <Footer1/>
</div>;
};

export default Contact;
