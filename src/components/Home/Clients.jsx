import React, { Component } from "react";

class Clients extends Component {
  state = {};
  render() {
    return (
      <div className="clients">
        <h1>Clientes</h1>
        <div className="images">
          <img
            src={process.env.PUBLIC_URL + "/images/Clientes/fargo.png"}
            alt="logo fargo"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/Clientes/honda.png"}
            alt="logo honda"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/Clientes/snapchat.png"}
            alt="logo snapchat"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/Clientes/audi.png"}
            alt="logo audi"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/Clientes/showtime.png"}
            alt="logo showtime"
          />
        </div>
      </div>
    );
  }
}

export default Clients;
