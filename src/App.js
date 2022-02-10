import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <NavBar />
        <main></main>
      </div>
    );
  }
}

export default App;
