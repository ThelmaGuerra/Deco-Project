import React, { Component } from "react";
import NavBar from "../../NavBar";
import EventoContent1 from "./EventContent1";
import Footer from "./../../Footer";

class EventPage extends Component {
  state = {};
  render() {
    const { event } = this.props;
    return (
      <div>
        <NavBar />
        <EventoContent1 event={event} />
        <Footer />
      </div>
    );
  }
}

export default EventPage;
