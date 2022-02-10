import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AboutUsPage from "./components/About Us/AboutUsPage";
import ContactPage from "./components/Contact/ContactPage";
import PortfolioPage from "./components/Portfolio/PortfolioPage";
import EventPage from "./components/Portfolio/Events/EventPage";
import { getEvents } from "./services/Events";
import ScrollToTop from "./services/ScrollToTop";
import "./App.css";

class App extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    const events = getEvents();
    this.setState({ events });
  }

  render() {
    const { events } = this.state;

    return (
      <div className="container">
        <main className="container">
          <ScrollToTop>
            <Routes basename="/Deco-Project">
              <Route
                path="/"
                element={<HomePage events={this.state.events} />}
              />
              <Route path="/about_us" element={<AboutUsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route
                path="/portfolio"
                element={<PortfolioPage events={this.state.events} />}
              />
              {this.state.events.map((event) => (
                <Route
                  path={"/portfolio/" + event.id}
                  element={<EventPage event={event} />}
                />
              ))}
            </Routes>
          </ScrollToTop>
        </main>
      </div>
    );
  }
}

export default App;
