import React from 'react'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import LoggingForm from '../components/LoggingForm';
import IntroImage2 from '../components/IntroImage2';
const Logging = (props) => {
  

  return <div>
    <Navbar></Navbar>
    <IntroImage2 header="Login" paragraph="Log in"/>
    <LoggingForm></LoggingForm>
    <Footer></Footer>
  </div>
}

export default Logging