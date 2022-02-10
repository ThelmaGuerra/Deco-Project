import React, { Component } from "react";

class ContactContent extends Component {
  render() {
    return (
      <div className="contactContentAll">
        <div className="contactContent">
          <h1>Contato</h1>
          <div className="map_and_information">
            <div className="map"></div>
            <div className="information">
              <div>
                <h2>Celular</h2>
                <h3>(21) 99158-9108</h3>
              </div>
              <div>
                <h2>Email</h2>
                <h3>contato@stockname.com.br</h3>
              </div>
              <div>
                <h2>Localização</h2>
                <h3>Rua Joaquim Morais Castro, 53 - 53700-70</h3>
                <h3>Recife, PE</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactContent;
