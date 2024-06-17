import "./FormStyles.css";
import React, { Component } from "react";
import emailjs from "@emailjs/browser";
// import {useUser } from '@clerk/clerk-react'


class Form extends Component{
  constructor(props){
    super(props);
    this.state = {Name: '',Email: '', Subject: '',Message: ''}
    
  }
  handleChange = ({target})=>{
    this.setState({[target.name]: target.value});
   

  }
  sendEmail(e) {
    e.preventDefault();    
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID=process.env.REACT_APP_USER_ID;
    emailjs.sendForm(serviceID,templateID, e.target, userID)
      .then((result) => {
          window.location.reload();
      }, (error) => {
          console.log(error.text);
      });
  }
  submit = (e) =>{
    let NameInput = this.state.NAME;
    let EmailInput = this.state.EMAIL;
    let SubjectInput = this.state.SUBJECT;
    let MessageInput = this.state.MESSAGE;

    // writeUserData(NameInput,EmailInput, SubjectInput,MessageInput);
    fetch("https://ralphilouresume-default-rtdb.firebaseio.com/Contact.json",
       {
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({
            Name: NameInput,
            Email: EmailInput,
            Subject: SubjectInput,
            MessageInput: MessageInput
           })
        })
        .catch((error)=>{
          alert("Error!");
        }); 
  }
  render () {
    
    return(
      
      <React.Fragment>
      {/* {user ? <div>Your email address is {user.primaryEmailAddress.emailAddress}</div> : null} */}
      <div className="form" ref="effects">
      <form onSubmit={this.sendEmail}>
        <label htmlFor="NAME">
          Your Name
        </label>
        <input type="text" name="NAME" value={this.state.NAME} onChange={this.handleChange}/>
        <label htmlFor="EMAIL">
          Email
        </label>
        <input type="email" name="EMAIL" value = {this.state.EMAIL} onChange={this.handleChange}>
          
        </input>
        <label htmlFor="SUBJECT">
          Subject
        </label>
        <input type="text" name="SUBJECT" value={this.state.SUBJECT} onChange={this.handleChange}>
          
        </input>
        <label htmlFor="MESSAGE">
          Message
        </label>
        <textarea rows="6" placeholder="Type your message here" name="MESSAGE" value={this.state.MESSAGE} onChange={this.handleChange}/>
        <button className="button1" onClick={this.submit}>Submit</button>
        
      </form>
    </div>
  
      </React.Fragment>
      
    );
  }
}


export default Form;


