import React, { Component } from "react";
import NavBar from "../NavBar";
import PortfolioContent from "./PortfolioContent";
import Footer from "../Footer";

class PortfolioPage extends Component {
  state = {};

  render() {
    const { events } = this.props;
    return (
      <div>
        <NavBar />
        <PortfolioContent events={events} />
        <Footer />
      </div>
    );
  }
}

export default PortfolioPage;
