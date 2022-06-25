import React, { Component } from "react";
import ReactDOM from "react-dom";

class HomeContent2 extends Component {
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

      ref.style.animation = "slide-top 2s ease-in-out forwards";
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

      ref.style.animation = "slide-top 1s 1.5s ease-in-out forwards";
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
        "set-background-image 1s 1.1s ease-in-out forwards";
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

    if (clientHeight > top * height) {
      ref.style.animation =
        "grey_background_object_animation_reverse 2s ease-in-out";
    } else {
      ref.style.animation = "none";
      ref.style.opacity = "0";
    }
  };

  render() {
    return (
      <div className="homeContent2">
        <div className="homeImg2" ref={this.imgRef}>
          <div
            className="grey_background_object_homeImg2"
            ref={this.grey_background_objectRef}
          ></div>
        </div>
        <div className="homeText2">
          <h1 ref={this.h1Ref}>
            Somos especialistas em transformar ideias em incríveis eventos.
          </h1>
          <p ref={this.pRef}>
            Como mais de 5 anos de atuação, a Deco está consolidada no mercado
            como uma empresa lider da area, proporcionando qualidade e
            profissionalismo no nosso serviço. Como mais de 5 anos de atuação, a
            Deco está consolidada no mercado como uma empresa lider da area,
            proporcionando qualidade e profissionalismo no nosso serviço. Como
            mais de 5 anos de atuação, a Deco está consolidada no mercado como
            uma empresa lider da area, proporcionando qualidade e
            profissionalismo no nosso serviço.
          </p>
        </div>
      </div>
    );
  }
}

export default HomeContent2;
