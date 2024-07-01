import React,{Component} from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Home, Project, Contact, Project1, Project2, About } from "./routes";

class App extends Component{
  render(){
    return (
      <>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
        
    );
  }
  
}


export default App;
