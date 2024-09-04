import React from "react";

import { Navbar, Footer, IntroImage2, Form, Chatbot } from "../components";

const Contact = () => {
  return <div>
  <Chatbot/>
  <Navbar/>
  <IntroImage2 header="CONTACT" paragraph="I am excited to talk to you!"/>
  <Form/>
  <Footer/>
</div>;
};

export default Contact;
