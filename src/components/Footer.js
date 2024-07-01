import "./FooterStyles.css";
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github'
import twitter from 'react-useanimations/lib/twitter'
import linkedin from 'react-useanimations/lib/linkedin'
import home from 'react-useanimations/lib/home'
import archive from 'react-useanimations/lib/archive'
// import { TwitterEmbed } from 'react-social-media-embed';
import { Timeline } from 'react-twitter-widgets'
// import notification from 'react-useanimations/lib/notification'
// import {FaHome,FaPhone,FaMailBulk,FaGithub,FaTwitter, FaLinkedin} from "react-icons/fa";
import React from "react";
import { Me } from "../assets";


const Footer = () => {
  return <div className="footer">
    <div className="footerContent">
      <div className="leftSide">
        <div className="home">
        <h4>
        {/* <FaHome size = {20} style={{color:"#000", marginRight: "2rem"}}/> */}
        <UseAnimations  animation={home} size = {30} wrapperStyle={{color:"black",marginRight:"2.5rem",}} ></UseAnimations>
        <p>Van Nuys, CA. 91405</p>
        <div>
          {/* <p>13627 Sherman Way Apt. 302</p> */}
          {/* <p>Van Nuys, CA. 91405</p> */}
        </div>
        </h4>
        </div>
        
        {/* <div className="phone">
          <h4>
            <FaPhone size = {20} style={{color:"#000",marginRight:"2rem"}}></FaPhone>
            <UseAnimations  animation={notification} size = {30} wrapperStyle={{color:"black",marginRight:"2rem"}} ></UseAnimations>
            <div>
            <p>747-250-6314</p>
            </div>
          </h4>
          
        </div> */}

        <div className="email">
          <h4>
            {/* <FaMailBulk size = {20} style={{color:"#000",marginRight:"2rem"}}></FaMailBulk> */}
            <UseAnimations  animation={archive} size = {30} wrapperStyle={{color:"black",marginRight:"2rem"}} ></UseAnimations>
            <div>
            <p>ralphilou24@gmail.com</p>
            </div>
          </h4> 
        </div>
        <div style={{ display: 'flex', justifyContent: 'auto' }}>
        {/* <TwitterEmbed url="https://twitter.com/Lakers/status/1315472674177478656" width={325} /> */}
          <Timeline dataSource={{ sourceType: "profile", screenName: "ralphilou1" }} options={{ width: "300", height: "300" , theme: "dark"}}/>
        </div>
      </div>
      <div className="rightSide">
          <h4>About Me</h4>
          <img className="Picture" src={Me} alt="PictureOfRalphilou"></img>
          <p>My name is Ralphilou Tatoy. I am a first generation that aspire to help and 
            deliver application that improve daily life. 
            Fueled by the hunger of pursuing new knowledge and 
            collaboration.</p>
          <div className="social">
            <a href="https://github.com/RalphilouT">
            <UseAnimations  animation={github} size = {30} wrapperStyle={{color:"black",marginRight:"2rem"}} ></UseAnimations>
            </a>
            <a href="https://twitter.com/ralphilou1">
            <UseAnimations  animation={twitter} size = {30} wrapperStyle={{color:"black",marginRight:"2rem"}} ></UseAnimations>
            </a>
            <a href="https://www.linkedin.com/in/ralphilou-tatoy-580211149/">
            <UseAnimations  animation={linkedin} size = {30} wrapperStyle={{color:"black",marginRight:"2rem"}} ></UseAnimations>
            </a>
          </div>
      </div>
    </div>
    {/* <div class="tagembed-container" style={{width:'100%', height:'100%', overflow:'auto'}}><div class="tagembed-socialwall" data-wall-id="104189" view-url="https://widget.tagembed.com/104189">  </div> <script src="//widget.tagembed.com/embed.min.js" type="text/javascript"></script></div> */}

  </div>;
};

export default Footer;
