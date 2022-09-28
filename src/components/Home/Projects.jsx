import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";

class Projects extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.h1Ref = React.createRef();
    this.borderRef = React.createRef();
    this.cellRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("scroll", this.isInViewport_h1);
    document.addEventListener("scroll", this.isInViewport_border);
    document.addEventListener("scroll", this.isInViewport_cell);
  }

  componentWillUnmount() {
    document.addEventListener("scroll", this.isInViewport_h1);
    document.addEventListener("scroll", this.isInViewport_border);
    document.addEventListener("scroll", this.isInViewport_cell);
  }

  isInViewport_h1 = () => {
    if (!this.h1Ref.current) return;
    let top = this.h1Ref.current.getBoundingClientRect().top;
    let height = this.h1Ref.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 15) {
      const ref = ReactDOM.findDOMNode(this.h1Ref.current);
      ref.style.animation = " 0.8s 0.5s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.h1Ref.current);
      ref.style.animation = "none";
    }
  };

  isInViewport_border = () => {
    if (!this.borderRef.current) return;
    let top = this.borderRef.current.getBoundingClientRect().top;
    let height = this.borderRef.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 15) {
      const ref = ReactDOM.findDOMNode(this.borderRef.current);
      ref.style.animation = " 1s 0.7s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.borderRef.current);
      ref.style.animation = "none";
    }
  };

  isInViewport_cell = () => {
    if (!this.cellRef.current) return;
    let top = this.cellRef.current.getBoundingClientRect().top;
    let height = this.cellRef.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 2) {
      const ref = ReactDOM.findDOMNode(this.cellRef.current);
      ref.style.animation = " 1s 0.7s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.cellRef.current);
      ref.style.animation = "none";
    }
  };

  render() {
    const { events } = this.props;
    return (
      <div className="projects">
        <h1 ref={this.h1Ref}>Projetos</h1>
        <div ref={this.borderRef} className="projects_border"></div>
        <div ref={this.cellRef}>
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
      </div>
    );
  }
}

export default Projects;
