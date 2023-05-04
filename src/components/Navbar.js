import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  };
  window.addEventListener("scroll",changeColor);
  return (
  <div className={color ? "container container-bg top" :"container top"}>
    <Link to="/">
      <h1>Resume</h1>
    </Link>
    <ul className= {click ? "navmenu active" : "navmenu"}>
      <li>
          <Link to="/">Home</Link>
      </li>
      <li>
          <Link to="/Project">Project</Link>
      </li>
      <li>
          <Link to="/Contact">Contact</Link>
      </li>
      <li>
          <Link to="/About">About</Link>
      </li>
    </ul>
    
    <div className="hidenavbarhamburger" onClick={handleClick}>
      {click ? (<FaTimes size={20} style={{color:"#000"}}/>): (<FaBars size={20} style={{color:"#FFF"}}/>)}
        
        
    </div>
  </div>);

};

export default Navbar;
