import React, { Component } from "react";
import HomeNavBar from "./HomeNavBar";
import HomeContent1 from "./HomeContent1";
import HomeContent2 from "./HomeContent2";
import Projects from "./Projects";
import HomeCover from "./HomeCover";
import Clients from "./Clients";
import Calendar from "./Calendar";
import Footer from "../Footer";

class HomePage extends Component {
  render() {
    const { events } = this.props;

    return (
      <div>
        <HomeCover />
        <HomeNavBar />
        <HomeContent1 />
        <HomeContent2 />
        <Projects events={events} />
        <Clients />
        <Calendar />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
