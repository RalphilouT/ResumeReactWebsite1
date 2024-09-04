import "./style.css"
import React, { Component } from "react"
import { chatboxicon, Me } from "../../assets"

class ChatBot extends Component{
    
    constructor(props) {
        super(props)
        this.messages = [];
        this.state = {icon: '', userMessage: '', popUpChat: false, messages: []};
        

    }
    
    handleChange = ({target})=>{
        this.setState({[target.name]: target.value});
    }

    onSendButton() {
        
        // extract user input text
        var chatBox = document.querySelector('.chatbox__support');
        var textField = chatBox.querySelector('input');
        // let text1 = textField.value;
        let text1 = this.state.USERMESSAGE
        // if user enters nothing
        if (text1 === "") {
            return;
        }
        
        // this.updateChatText("This may take a while")
        let msg1 = {name: "User", message: text1}
        this.state.messages.push(msg1)
        this.messages.push(msg1)
        
        // In Base.html but can be hard coded to http://127.0.0.1:5000/predict 
        fetch(process.env.REACT_APP_CHATBOT, {
            method: 'POST',
            body: JSON.stringify({message: text1}),
            mode: 'cors',
            headers: {
                'Content-Type' : 'application/json'
              },
        })
        .then(r => r.json())
        .then(r => {
            // Display back to the user 
            let msg2 = {name: "Ralph", message: r.answer};
            this.messages.push(msg2);
            this.updateChatText(chatBox);
            textField.value = ''

        }).catch((error) => {
            console.error('Error:' , error);
            this.updateChatText(chatBox);
            textField.value = '';
        });

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
        // console.log(this.state.popUpChat)
        
        var chatBox = document.querySelector('.chatbox__support');
        // var html = '';
        
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
                                    <div class="messages__item messages__item--visitor"> I am using a free service so this might take a while! </div>

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
                        <div class="chatbox__button">
                            <button><img src={chatboxicon} alt="icon"  onClick={this.clickChatActivate} name="popUpChat"/></button>
                        </div>
                    </div>
                </div>
                </body>
            </React.Fragment>
            
        );
        
    }
    
}

export default ChatBot;