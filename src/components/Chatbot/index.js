import "./style.css"
import React, { Component } from "react"
import {Me, chatIcon } from "../../assets"
var base64 = require('base-64');

class ChatBot extends Component{
    
    constructor(props) {
        super(props)
        this.messages = [];
        this.state = {icon: '', userMessage: '', popUpChat: false, messages: []};
        

    }
    
    handleChange = ({target})=>{
        this.setState({[target.name]: target.value});
    }
    emptyUserResponse(chatBox){
        let emptyMsg = {name: "Ralph", message: "You submitted an invalid sentence. Please submit your inquiry."}
        this.messages.push(emptyMsg)
        this.updateChatText(chatBox);
    }

    userFeedbackEnter(chatBox, userMessgae){
        let msg1 = {name: "User", message: userMessgae}
        let msg2 = {name: "Ralph", message: "Loading... Reload if it's taking too long."}
        this.messages.push(msg1)
        this.updateChatText(chatBox);
        this.messages.push(msg2)
        this.updateChatText(chatBox);
    }
    async onSendButton() {
        
        // extract user input text
        var chatBox = document.querySelector('.chatbox__support');
        var textField = chatBox.querySelector('input');
        let token = ''
        let headers = new Headers()
        let loginLink = process.env.REACT_APP_CHATBOTAPI_LOGINLINK
        let predictLink = process.env.REACT_APP_CHATBOTAPI_PREDICTLINK
        let text1 = this.state.USERMESSAGE
        
        // if user enters nothing
        if (text1 === undefined) {
            this.emptyUserResponse(chatBox)
            return;
        }

        this.userFeedbackEnter(chatBox, text1);
        
        headers.set('Authorization', 'Basic ' + base64.encode(process.env.REACT_APP_APIUSER + ":" + process.env.REACT_APP_APIPASS));
        await fetch(loginLink, {
            mode: 'cors',
            method: 'POST',
            headers: headers
        }
        )
        .then(r => r.json())
        .then( r => {
            token = r.token

        })
        .catch((error) => {
            console.error('Error:' , error);
            this.updateChatText(chatBox);
            textField.value = '';
        });

        
        await fetch(predictLink, {
            method: 'POST',
            body: JSON.stringify({message: text1}),
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json',
                "x-access-token": token
              },
        })
        .then(r => r.json())
        .then(r => {
            this.messages.pop()
            // Display back to the user 
            let msg2 = {name: "Ralph", message: r.answer};
            this.messages.push(msg2);
            this.updateChatText(chatBox);
            textField.value = ''

        }).catch((error) => {
            console.error('Error:' , error.message);
            this.updateChatText(chatBox);
            textField.value = '';
        });
        this.state.USERMESSAGE = undefined
    }

    
    updateChatText(chatBox){
        
        var html = '';
        this.messages.slice().reverse().forEach(function(item, index) {
            if(item.name === "Ralph")
            {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }else{
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }
        });
        html += '<div class="messages__item messages__item--visitor">I am using a free service so this might take a while!</div>'
        const chatmessage = chatBox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }

    clickChatActivate = ({target}) => {
        this.setState({[target.name] : !(this.state.popUpChat)})
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
        var chatBox = document.querySelector('.chatbox__support');
        
        if(this.state.popUpChat)  {
            chatBox.classList.add('chatbox--active')
        }else{
            chatBox.classList.remove('chatbox--active')
        }
    }
    
    render(){
        return(
            <React.Fragment>
                <body>
                <script src="https://cdn.lordicon.com/lordicon.js"></script>
                
                <div class="container">
                    
                    <div class="chatbox">
                        <div class="chatbox__support">
                            <div class="chatbox__header">
                                <div class="chatbox__image--header">
                                    <img class="chatbotpicture"src={Me} alt="bot"></img>
                                </div>
                                <div class="chatbox__content--header">
                                    <h4 class="chatbox__heading--header">Chat support</h4>
                                    <p class="chatbox__description--header">Hi. My name is Ralph. How can I help you?</p>
                                </div>
                            </div>
                            <div class="chatbox__messages">
                                <div>
                                    <div class="messages__item messages__item--visitor"> Let's have a chat! </div>
                                </div>
                            </div>
                            <div class="chatbox__footer">
                                <input type="text" placeholder="Write a message..." name="USERMESSAGE" value={this.state.USERMESSAGE} onChange={this.handleChange} onKeyDown={(e) => {
                                    if (e.key === "Enter")
                                    {   
                                        this.onSendButton()
                                    }
                                        
                                }}></input>
                                <button class="chatbox__send--footer send__button" onClick={this.onSendButton.bind(this)} name="messages">Send</button>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class="chatbox__button">
                      
        
                        <button><img src={chatIcon} alt="icon"  onClick={this.clickChatActivate} name="popUpChat"/>
                        </button>
                    </div>
                </div>
                </body>
            </React.Fragment>
            
        );
        
    }
    
}

export default ChatBot;