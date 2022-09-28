import React, { Component } from "react";
import ChatBox from "../ChatBox";
import CoverNavBar from "./CoverNavBar";
import { BsChevronDown } from "react-icons/bs";

class HomeCover extends Component {
  state = {};
  render() {
    return (
      <div className="homecover">
        <CoverNavBar />
        <h1 className="homecover_h1">Decoração de eventos em um clique</h1>
        <ChatBox />
        <BsChevronDown className="event_arrow_icon_homecover" />
        <div className="video-container">
          <video autoPlay loop muted id="background-video">
            <source
              src={process.env.PUBLIC_URL + "/Videos/background-video.mp4"}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    );
  }
}

export default HomeCover;
