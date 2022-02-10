import React, { Component } from "react";
import NavBar from "../NavBar";
import AboutContent1 from "./AboutContent1";
import AboutContent2 from "./AboutContent2";
import Footer from "../Footer";
import OurTeam from "./OurTeam";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div className="aboutUs">
        <NavBar />
        <AboutContent1 />
        <AboutContent2 />
        <OurTeam />
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
