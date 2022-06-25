import React, { Component } from "react";
import NavBar from "../NavBar";
import CoverNavBar from "./CoverNavBar";

class HomeCover extends Component {
  state = {};
  render() {
    return (
      <div
        className="homecover"
        style={{
          backgroundImage: "url(/images/eventos/Evento1/luzesEvento1.jpeg)",
        }}
      >
        <CoverNavBar />
      </div>
    );
  }
}

export default HomeCover;
