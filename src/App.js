import React,{Component} from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Home, Project, Contact, Project1, Project2, About } from "./routes";

class App extends Component{
  render(){
      let registerLink = process.env.REACT_APP_CHATBOTAPI_REGISTERLINK
      let apiUser = process.env.REACT_APP_APIUSER
      let apiPassword = process.env.REACT_APP_APIPASS
     fetch(registerLink, {
      method: 'POST',
      body: JSON.stringify({name: apiUser, password: apiPassword}),
      mode: 'cors',
      headers: {
          'Content-Type' : 'application/json',
        }
    }).catch((error) => {
      console.error('Error:' , error);
  })
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
