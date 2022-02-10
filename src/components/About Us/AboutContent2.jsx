import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

class AboutContent2 extends Component {
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

      ref.style.opacity = "1";
      ref.style.animation = "slide-top 1s ease-in-out forwards";
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

      ref.style.animation = "slide-top 1s 0.5s ease-in-out forwards";
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
      console.log("element is in view");

      ref.style.animation = "scale_ 1s 0.6s ease-in-out forwards";
    } else {
      console.log("NOT IN VIEW");
      const ref = ReactDOM.findDOMNode(this.imgRef.current);
      ref.style.animation = "none";
      ref.style.opacity = "0";
    }
  };

  render() {
    return (
      <div className="aboutContent2">
        <div className="topElements">
          <h1 ref={this.h1Ref}>Lorena Alves</h1>
          <p>
            Motivação é aquilo que te faz começar.{" "}
            <p>Hábito é aquilo que te faz continuar.</p>
          </p>
          <div className="border1"></div>
        </div>
        <div className="bottomElements">
          <div className="border2"></div>
          <p ref={this.pRef}>
            Sou fundadora e responsável pela parte criativa dos projetos da
            Stock Name. Minha carreira começou com desenvolvimento de objetos de
            decoração para arquitetos, segmento em que continuo atuando.{" "}
            <p>
              O amor e curiosidade por arte e design e a oportunidade de viajar
              por várias culturas distintas são fatores que expandem
              constantemente o meu olhar, me proporcionando uma visão mais
              contemporânea de decoração.
            </p>{" "}
            Os projetos de decoração que venho executando ao longo dos anos com
            a Stock Name nasceram do encanto que tenho por cores, detalhes,
            formas, fotografia, paisagens, materiais, luz e tudo que remete
            harmonia e beleza.
          </p>
          <img
            src={process.env.PUBLIC_URL + "/images/Lorena Alves.jpeg"}
            alt="table"
            ref={this.imgRef}
          />
        </div>
      </div>
    );
  }
}

export default AboutContent2;
