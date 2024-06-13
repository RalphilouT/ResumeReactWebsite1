import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import React, { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import { IoIosArrowDropleft, IoIosArrowDropdown } from "react-icons/io";
import { SignedIn, SignedOut, SignInButton, SignOutButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const[click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

  const[click2, setClick2] = useState(false);
  const handleClick2 = () => setClick2(!click2);
  
  const [color, setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >= 100){
      setColor(true);
    }else{
      setColor(false);
    }
  };
  window.addEventListener("scroll",changeColor);
  const { user } = useUser()
  
  return (
    
  <div className={color ? "container container-bg top" :"container top"}>
    <Link to="/">
      <h1>Portfolio</h1>
    </Link>
    
    <ul className= {click ? "navmenu active" : "navmenu"}>
      <li>
          <Link to="/">Home</Link>
      </li>
      
      <li>
          <Link to="/Project" class="button">Project 
          

          </Link><button className="dropDown" onClick={handleClick1} >
          {click1 ? (<IoIosArrowDropdown size={20} style={{color:"#000"}}/>): (<IoIosArrowDropleft size={20} style={{color:"#000"} }/>) }
          </button>
          <ul className= {click1 ? "navDropdown active" : "navDropdown"}>
            <li><Link to="/Project" class="button">All Projects</Link></li>
            <li><Link to="/Project2" class="button">API, Frontend, Test</Link></li>
            <li><Link to="/Project1" class="button">React Website</Link></li>
          </ul>
          
          
      </li>
     
      <li className= {click1 ? "navDropdown1 active" : "navDropdown1"}><Link to="/Project" class="button">Projects</Link></li>
      <li className= {click1 ? "navDropdown1 active" : "navDropdown1"}><Link to="/Project2" class="button">API, Frontend, Test</Link></li>

      <li className= {click1 ? "navDropdown1 active" : "navDropdown1"}><Link to="/Project1" class="button">React Website</Link></li>

          
      <li>
          <Link to="/Contact">Contact</Link>
      </li>
        
      
      <li>
          <Link to="/About">About</Link>
      </li>
      <SignedOut>
          <SignInButton>
          <li>
            <Link to="/">Log In</Link>
          </li>
          </SignInButton>
        </SignedOut>
      <li>
      {user ? <Link to="/#">Hello {user.firstName}</Link> : null}
      
      {user ? <button className="dropDown" href="/#" onClick={handleClick2} > {click2 ? (<IoIosArrowDropdown size={20} style={{color:"#000"}}/>): (<IoIosArrowDropleft size={20} style={{color:"#000"} }/>) }</button>: null}
          <ul className= {click2 ? "navDropdown1 active" : "navDropdown1"}>
              <SignedIn>
                <li>
                <SignOutButton>
                          <Link to="/" class="button">Log out</Link>
                  </SignOutButton>
                </li>
                  
              </SignedIn>
          </ul>
      </li>
      
    </ul>
    
    <div className="hidenavbarhamburger" onClick={handleClick}>
      {click ? (<FaTimes size={20} style={{color:"#000"}}/>): (<FaBars size={20} style={{color:"#000"}}/>)}
        
        
    </div>
    
  </div>
  
  );

};

export default Navbar;
