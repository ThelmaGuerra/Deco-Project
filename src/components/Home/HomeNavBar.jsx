import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import $ from "jquery";

class HomeNavBar extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.setRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("scroll", this.isInViewport);
  }

  componentWillUnmount() {
    document.addEventListener("scroll", this.isInViewport);
  }

  isInViewport = () => {
    let top = this.setRef.current.getBoundingClientRect().top;
    let height = this.setRef.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height * 10) {
      const ref = ReactDOM.findDOMNode(this.setRef.current);

      ref.style.animation = "slide-top 0.5s 0.2s ease-in-out forwards";
      console.log("in view");
    } else {
      const ref = ReactDOM.findDOMNode(this.setRef.current);
      ref.style.opacity = "0";
      ref.style.animation = "none";
      console.log("NOT in view");
    }
  };

  render() {
    return (
      <div ref={this.setRef} className="homeNavbar">
        <NavLink className="nav_link" to="/">
          <div className="home_navbar_logo">
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

export default HomeNavBar;
