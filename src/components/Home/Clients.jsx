import React, { Component } from "react";
import ReactDOM from "react-dom";

class Clients extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.h1Ref = React.createRef();
    this.logo1Ref = React.createRef();
    this.logo2Ref = React.createRef();
    this.logo3Ref = React.createRef();
    this.logo4Ref = React.createRef();
    this.logo5Ref = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("scroll", this.isInViewport_h1);
    document.addEventListener("scroll", this.isInViewport_logo1);
    document.addEventListener("scroll", this.isInViewport_logo2);
    document.addEventListener("scroll", this.isInViewport_logo3);
    document.addEventListener("scroll", this.isInViewport_logo4);
    document.addEventListener("scroll", this.isInViewport_logo5);
  }

  componentWillUnmount() {
    document.addEventListener("scroll", this.isInViewport_h1);
    document.addEventListener("scroll", this.isInViewport_logo1);
    document.addEventListener("scroll", this.isInViewport_logo2);
    document.addEventListener("scroll", this.isInViewport_logo3);
    document.addEventListener("scroll", this.isInViewport_logo4);
    document.addEventListener("scroll", this.isInViewport_logo5);
  }

  isInViewport_h1 = () => {
    let top = this.h1Ref.current.getBoundingClientRect().top;
    let height = this.h1Ref.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 15) {
      const ref = ReactDOM.findDOMNode(this.h1Ref.current);

      ref.style.animation = "slide-top 1s 0.2s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.h1Ref.current);
      ref.style.animation = "none";
      ref.style.opacity = "0";
    }
  };

  isInViewport_logo1 = () => {
    let top = this.logo1Ref.current.getBoundingClientRect().top;
    let height = this.logo1Ref.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 15) {
      const ref = ReactDOM.findDOMNode(this.logo1Ref.current);

      ref.style.animation = "slide-top 0.5s 0.8s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.logo1Ref.current);
      ref.style.animation = "none";
      ref.style.opacity = "0";
    }
  };

  isInViewport_logo2 = () => {
    let top = this.logo2Ref.current.getBoundingClientRect().top;
    let height = this.logo2Ref.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 15) {
      const ref = ReactDOM.findDOMNode(this.logo2Ref.current);

      ref.style.animation = "slide-top 0.5s 0.9s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.logo2Ref.current);
      ref.style.animation = "none";
      ref.style.opacity = "0";
    }
  };

  isInViewport_logo3 = () => {
    let top = this.logo3Ref.current.getBoundingClientRect().top;
    let height = this.logo3Ref.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 15) {
      const ref = ReactDOM.findDOMNode(this.logo3Ref.current);

      ref.style.animation = "slide-top 0.5s 1s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.logo3Ref.current);
      ref.style.animation = "none";
      ref.style.opacity = "0";
    }
  };

  isInViewport_logo4 = () => {
    let top = this.logo4Ref.current.getBoundingClientRect().top;
    let height = this.logo4Ref.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 15) {
      const ref = ReactDOM.findDOMNode(this.logo4Ref.current);

      ref.style.animation = "slide-top 0.5s 1.1s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.logo4Ref.current);
      ref.style.animation = "none";
      ref.style.opacity = "0";
    }
  };

  isInViewport_logo5 = () => {
    let top = this.logo5Ref.current.getBoundingClientRect().top;
    let height = this.logo5Ref.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 15) {
      const ref = ReactDOM.findDOMNode(this.logo5Ref.current);

      ref.style.animation = "slide-top 0.5s 1.2s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.logo5Ref.current);
      ref.style.animation = "none";
      ref.style.opacity = "0";
    }
  };

  render() {
    return (
      <div className="clients">
        <h1 ref={this.h1Ref}>Clientes</h1>
        <div className="clients_border"></div>
        <div className="images">
          <img
            src={process.env.PUBLIC_URL + "/images/Clientes/fargo.png"}
            alt="logo fargo"
            ref={this.logo1Ref}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/Clientes/honda.png"}
            alt="logo honda"
            ref={this.logo2Ref}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/Clientes/snapchat.png"}
            alt="logo snapchat"
            ref={this.logo3Ref}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/Clientes/audi.png"}
            alt="logo audi"
            ref={this.logo4Ref}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/Clientes/showtime.png"}
            alt="logo showtime"
            ref={this.logo5Ref}
          />
        </div>
      </div>
    );
  }
}

export default Clients;
