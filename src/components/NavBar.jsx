import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};

  render() {
    return (
      <div className="navbar">
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

export default NavBar;
