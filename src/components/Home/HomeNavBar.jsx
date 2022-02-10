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

    if (clientHeight > top + height * 10.5) {
      const ref = ReactDOM.findDOMNode(this.setRef.current);
      document.removeEventListener("scroll", this.isInViewport);

      $(document).ready(function () {
        $(ref)
          .hide()
          .slideDown("5s")
          .animate({ opacity: 1 }, { queue: false, duration: "5s" });
      });
    } else {
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
