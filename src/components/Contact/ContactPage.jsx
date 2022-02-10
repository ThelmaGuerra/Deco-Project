import React, { Component } from "react";
import NavBar from "../NavBar";
import TalkToUs from "./TalkToUs";
import ContactContent from "./ContactContent";
import Footer from "../Footer";

class ContactPage extends Component {
  state = {};
  render() {
    return (
      <div className="contact">
        <NavBar />
        <TalkToUs />
        <ContactContent />
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
