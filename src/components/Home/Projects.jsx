import React, { Component } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

class Projects extends Component {
  state = {};

  render() {
    const { events } = this.props;
    return (
      <div className="projects">
        <h1>Projetos</h1>
        <div className="projects_border"></div>
        <ScrollContainer className="projects_row">
          {events.map((event) => (
            <div key={event.name} className="projects_cell">
              <img
                src={process.env.PUBLIC_URL + event.cover}
                alt={event.name}
              />
              <h2 key={event.name}>{event.name}</h2>
            </div>
          ))}
        </ScrollContainer>
      </div>
    );
  }
}

export default Projects;
