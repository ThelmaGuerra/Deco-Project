import React, { Component } from "react";
import ReactDOM from "react-dom";

class HomeContent1 extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.h1Ref = React.createRef();
    this.pRef = React.createRef();
    this.imgRef = React.createRef();
    this.grey_background_objectRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("scroll", this.isInViewport_h1);
    document.addEventListener("scroll", this.isInViewport_p);
    document.addEventListener("scroll", this.isInViewport_img);
    document.addEventListener(
      "scroll",
      this.isInViewport_grey_background_object
    );
  }

  componentWillUnmount() {
    document.addEventListener("scroll", this.isInViewport_h1);
    document.addEventListener("scroll", this.isInViewport_p);
    document.addEventListener("scroll", this.isInViewport_img);
    document.addEventListener(
      "scroll",
      this.isInViewport_grey_background_object
    );
  }

  isInViewport_h1 = () => {
    if (!this.h1Ref.current) return;
    let top = this.h1Ref.current.getBoundingClientRect().top;
    let height = this.h1Ref.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height) {
      const ref = ReactDOM.findDOMNode(this.h1Ref.current);

      ref.style.animation = "slide-top 1.5s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.h1Ref.current);
      ref.style.opacity = "0";
      ref.style.animation = "none";
    }
  };

  isInViewport_p = () => {
    if (!this.pRef.current) return;
    let top = this.pRef.current.getBoundingClientRect().top;
    let height = this.pRef.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 10) {
      const ref = ReactDOM.findDOMNode(this.pRef.current);

      ref.style.animation = "slide-top 0.7s 1.5s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.pRef.current);
      ref.style.animation = "none";
      ref.style.opacity = "0";
    }
  };

  isInViewport_img = () => {
    if (!this.imgRef.current) return;
    let top = this.imgRef.current.getBoundingClientRect().top;
    let height = this.imgRef.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    if (clientHeight > top + height / 2) {
      const ref = ReactDOM.findDOMNode(this.imgRef.current);
      ref.style.opacity = "1";
      ref.style.backgroundImage = ref.style.animation =
        "set-background-image-homeContent1 1s 1.1s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.imgRef.current);
      ref.style.animation = "none";
    }
  };

  isInViewport_grey_background_object = () => {
    if (!this.grey_background_objectRef.current) return;
    let top =
      this.grey_background_objectRef.current.getBoundingClientRect().top;
    let height =
      this.grey_background_objectRef.current.getBoundingClientRect().height;
    let clientHeight = document.documentElement.clientHeight;

    const ref = ReactDOM.findDOMNode(this.grey_background_objectRef.current);

    if (clientHeight > top + height) {
      ref.style.animation =
        "grey_background_object_animation_reverse 1.5s ease-in-out";
    } else {
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
        <div className="homeImg1" ref={this.imgRef}>
          <div
            className="grey_background_object"
            ref={this.grey_background_objectRef}
          ></div>
        </div>
      </div>
    );
  }
}

export default HomeContent1;
