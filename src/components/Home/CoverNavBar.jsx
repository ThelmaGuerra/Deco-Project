import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import $ from "jquery";

class CoverNavBar extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.setRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("scroll", this.isInViewport);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.isInViewport);
  }

  isInViewport = () => {
    let top = this.setRef.current.getBoundingClientRect().top;
    let bottom = this.setRef.current.getBoundingClientRect().bottom;
    let height = this.setRef.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (height > bottom) {
      const ref = ReactDOM.findDOMNode(this.setRef.current);
      ref.style.position = "absolute";
    } else {
      const ref = ReactDOM.findDOMNode(this.setRef.current);
      ref.style.position = "sticky";
    }
  };

  render() {
    return (
      <div ref={this.setRef} className="coverNavbar">
        <NavLink className="nav_link" to="/">
          <div className="cover_navbar_logo">
            <h1>deco</h1>
          </div>
        </NavLink>
        <ul>
          <li>
            <NavLink className="nav_link" to="/portfolio">
              PORTFÓLIO
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/about_us">
              QUEM SOMOS?
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/contact">
              CONTATO
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default CoverNavBar;
