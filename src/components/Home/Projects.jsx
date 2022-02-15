import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";

class Projects extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.h1Ref = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("scroll", this.isInViewport_h1);
  }

  componentWillUnmount() {
    document.addEventListener("scroll", this.isInViewport_h1);
  }

  isInViewport_h1 = () => {
    let top = this.h1Ref.current.getBoundingClientRect().top;
    let height = this.h1Ref.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 15) {
      const ref = ReactDOM.findDOMNode(this.h1Ref.current);
      ref.style.animation = "slide-top 1s 0.7s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.h1Ref.current);
      ref.style.animation = "none";
      ref.style.opacity = "0";
    }
  };

  render() {
    const { events } = this.props;
    return (
      <div className="projects">
        <h1 ref={this.h1Ref}>Projetos</h1>
        <div className="projects_border"></div>
        <ScrollContainer className="projects_row">
          {events.map((event) => (
            <div key={event.name} className="projects_cell">
              <NavLink className="nav_link" to={"/portfolio/" + event.id}>
                <img
                  src={process.env.PUBLIC_URL + event.cover}
                  alt={event.name}
                />
              </NavLink>
              <h2 key={event.name}>{event.name}</h2>
            </div>
          ))}
        </ScrollContainer>
      </div>
    );
  }
}

export default Projects;
