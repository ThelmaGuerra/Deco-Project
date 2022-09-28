import React, { Component } from "react";
import ChatBox from "../ChatBox";

class AboutContent1 extends Component {
  state = {};
  render() {
    return (
      <div className="aboutContent1-wrap">
        <ChatBox />
        <div className="aboutContent1">
          <div className="aboutText">
            <h1>Quem somos?</h1>
            <p>
              A Deco é uma empresa criativa que tem como propósito oferecer
              momentos de leveza, beleza e alegria através dos seus projetos de
              decoração. Acreditamos na alegria de viver, no ser humano e na
              celebração dos momentos especiais como um ato de gratidão e de
              compartilhamento de experiências e sensações. Sensações que se
              eternizarão pelo resto de nossas vidas em forma de memória dentro
              de nós e de quem amamos. <p> </p> Nossos projetos são únicos e
              personalizados, pensados para cada cliente e sua história, para
              que a festa seja mágica e inesquecível.
            </p>
          </div>
          <img
            src={
              "https://github.com/ThelmaGuerra/Deco-Images/blob/main/images/mesa%20caf%C3%A9%20mulheres%201%20progressive.jpg?raw=true"
            }
            alt="coffee table"
          />
        </div>
      </div>
    );
  }
}

export default AboutContent1;
