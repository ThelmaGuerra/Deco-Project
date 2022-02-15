import React, { Component } from "react";
import ReactDOM from "react-dom";

class HomeContent1 extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.h1Ref = React.createRef();
    this.pRef = React.createRef();
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("scroll", this.isInViewport_h1);
    document.addEventListener("scroll", this.isInViewport_p);
    document.addEventListener("scroll", this.isInViewport_img);
  }

  componentWillUnmount() {
    document.addEventListener("scroll", this.isInViewport_h1);
    document.addEventListener("scroll", this.isInViewport_p);
    document.addEventListener("scroll", this.isInViewport_img);
  }

  isInViewport_h1 = () => {
    let top = this.h1Ref.current.getBoundingClientRect().top;
    let height = this.h1Ref.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height) {
      const ref = ReactDOM.findDOMNode(this.h1Ref.current);

      ref.style.animation = "scale_ 1s 0.3s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.h1Ref.current);
      ref.style.opacity = "0";
      ref.style.animation = "none";
    }
  };

  isInViewport_p = () => {
    let top = this.pRef.current.getBoundingClientRect().top;
    let height = this.pRef.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 10) {
      const ref = ReactDOM.findDOMNode(this.pRef.current);

      ref.style.animation = "slide-top 1s 0.6s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.pRef.current);
      ref.style.animation = "none";
      ref.style.opacity = "0";
    }
  };

  isInViewport_img = () => {
    let top = this.imgRef.current.getBoundingClientRect().top;
    let height = this.imgRef.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 15) {
      const ref = ReactDOM.findDOMNode(this.imgRef.current);

      ref.style.animation = "slide-left 1s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.imgRef.current);
      ref.style.animation = "none";
      ref.style.opacity = "0";
    }
  };

  render() {
    return (
      <div className="homeContent1">
        <div className="homeText1">
          <h1 ref={this.h1Ref}>Elegância. Experiência.</h1>

          <p ref={this.pRef}>
            A Deco é uma empresa criativa que tem como propósito fornecer
            momentos de alegria, beleza e harmonia para os seus eventos. A Deco
            é uma empresa criativa que tem como propósito fornecer momentos de
            alegria, beleza e harmonia para os seus eventos. A Deco é uma
            empresa criativa que tem como propósito fornecer momentos de
            alegria, beleza e harmonia para os seus eventos.
          </p>
        </div>
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/eventos/Casamento3/mesaCasamento3.jpg"
          }
          alt="table"
          ref={this.imgRef}
        />
      </div>
    );
  }
}

export default HomeContent1;
