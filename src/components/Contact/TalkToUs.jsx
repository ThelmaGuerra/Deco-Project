import React, { Component } from "react";

class TalkToUs extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.state = { name: "Nome" };
    this.state = { email: "Email" };
    this.state = { message: "" };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    alert("Sua Mensagem foi enviada: " + this.state.message);
    event.preventDefault();
  }

  render() {
    return (
      <div className="talk_to_us">
        <div className="talk_to_us_block">
          <div className="talk_to_us_content">
            <h1>Fale Conosco</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleNameChange}
                  placeholder="Nome"
                />
              </label>
              <label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  placeholder="Email"
                />
              </label>
              <label className="message_label">
                <textarea
                  id="message_input"
                  type="text"
                  value={this.state.message}
                  onChange={this.handleMessageChange}
                  placeholder="Messagem"
                />
              </label>
              <input className="submit_button" type="submit" value="Enviar" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TalkToUs;
