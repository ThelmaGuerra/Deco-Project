import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BsFillChatLeftFill } from "react-icons/bs";
import { IoMdSend, IoMdClose } from "react-icons/io";

class ChatBox extends Component {
  state = {
    chat_box_state: "close",
  };

  constructor(props) {
    super(props);
    this.chatboxRef = React.createRef();
    this.xRef = React.createRef();
    this.iconRef = React.createRef();
  }

  handleChatBoxState = () => {
    const chat_box_state = this.state.chat_box_state;
    const chat_box_ref = ReactDOM.findDOMNode(this.chatboxRef.current);
    const x_ref = ReactDOM.findDOMNode(this.xRef.current);
    const icon_ref = ReactDOM.findDOMNode(this.iconRef.current);

    if (chat_box_state === "close") {
      chat_box_ref.style.display = "flex";
      x_ref.style.display = "flex";
      icon_ref.style.display = "none";
      this.setState({ chat_box_state: "open" });
    } else {
      chat_box_ref.style.display = "none";
      x_ref.style.display = "none";
      icon_ref.style.display = "flex";
      this.setState({ chat_box_state: "close" });
    }
  };

  render() {
    return (
      <div className="chat-box-wrap">
        <div className="chat-box" ref={this.chatboxRef}>
          <div className="chat-box-avatar"></div>
          <p>
            Hey, how can I help you? Just in case I'm away from my desk, can you
            please include your name, company, phone, and email address? Thanks!
          </p>
          <div className="textarea">
            <textarea placeholder="Responda e tire suas dúvidas!"></textarea>
            <IoMdSend className="textarea-button" />
          </div>
          <h3>Chat by Deco</h3>
        </div>
        <div className="chat-box-button" onClick={this.handleChatBoxState}>
          <div className="chat-box-button-icon" ref={this.iconRef}>
            <BsFillChatLeftFill />
          </div>
          <div className="chat-box-button-x" ref={this.xRef}>
            <IoMdClose />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBox;
