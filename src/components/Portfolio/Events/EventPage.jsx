import React, { Component } from "react";

class EventPage extends Component {
  state = {};
  render() {
    const { event } = this.props;
    return (
      <div>
        <h1>AAAAAAAAAAAAAAAAAAAA</h1>
        <img src={event.cover} alt="" />
      </div>
    );
  }
}

export default EventPage;
