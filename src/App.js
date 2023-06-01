import React,{Component} from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";
import Project1 from "./routes/Project1";
import Project2 from "./routes/Project2";

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
// function App() {
 
//   return (
//     <>
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/project1" element={<Project1 />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
      
//   );
  
// }


export default App;
