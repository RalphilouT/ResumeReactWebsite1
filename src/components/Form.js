import "./FormStyles.css";
import React, { Component } from "react";
// import writeUserData from "../Firebase"


class Form extends Component{
  constructor(props){
    super(props);
    this.state = {Name: '',Email: '', Subject: '',Message: ''}
    
  }
  handleChange = ({target})=>{
    this.setState({[target.name]: target.value});
   

  }
  
  submit = () =>{
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
        }).then(alert("Sent!"))
        .catch((error)=>{
          alert("Error!");
        })
    
  }
  render () {
    
    return(
      <React.Fragment>
          <div className="form" ref="effects">
      <form>
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
    {/* <h3>Your Name is: {this.state.NAME}</h3>
    <h3>Your EMAIL is: {this.state.MESSAGE}</h3> */}
      </React.Fragment>
      
    );
  }
}
// const Form = () => {
//   return 
// };

export default Form;


