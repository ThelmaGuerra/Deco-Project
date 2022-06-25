import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu } from "react-icons/cg";

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
        <div className="navbar_button">
          <CgMenu />
        </div>
      </div>
    );
  }
}

export default NavBar;
