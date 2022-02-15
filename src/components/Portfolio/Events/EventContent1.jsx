import React, { Component } from "react";
import { BsChevronDown } from "react-icons/bs";

class EventoContent1 extends Component {
  state = {};
  render() {
    const { event } = this.props;
    const { portfolio } = event;
    return (
      <div className="eventContent">
        {portfolio.map((image) => (
          <div
            className={event.className + "_eventContent"}
            style={{ backgroundImage: image }}
          >
            <h1>{event.name}</h1>
            <h2>{event.location}</h2>
            <h3>{event.date}</h3>
            <div className={event.className + "_background"}></div>
            <BsChevronDown className="event_arrow_icon" />
          </div>
        ))}
      </div>
    );
  }
}

export default EventoContent1;
