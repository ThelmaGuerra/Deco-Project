import React, { Component } from "react";
import ReactDOM from "react-dom";

class HomeContent2 extends Component {
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

    if (clientHeight > top + height / 5) {
      const ref = ReactDOM.findDOMNode(this.h1Ref.current);

      ref.style.animation = "scale_ 1s 0.6s ease-in-out forwards";
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

    if (clientHeight > top + height / 15) {
      const ref = ReactDOM.findDOMNode(this.pRef.current);

      ref.style.animation = "slide-top 1s 0.8s ease-in-out forwards";
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

      ref.style.animation = "slide-right 1s 0.4s ease-in-out forwards";
    } else {
      const ref = ReactDOM.findDOMNode(this.imgRef.current);
      ref.style.animation = "none";
      ref.style.opacity = "0";
    }
  };

  render() {
    return (
      <div className="homeContent2">
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/bunch-flowers-leaves-table_1304-4187.jpg"
          }
          alt="table"
          ref={this.imgRef}
        />
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
