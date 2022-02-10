import React, { Component } from "react";

class AboutContent1 extends Component {
  state = {};
  render() {
    return (
      <div className="aboutContent1">
        <div className="aboutText">
          <h1>Quem somos?</h1>
          <p>
            A Stock name é uma empresa criativa que tem como propósito oferecer
            momentos de leveza, beleza e alegria através dos seus projetos de
            decoração. Acreditamos na alegria de viver, no ser humano e na
            celebração dos momentos especiais como um ato de gratidão e de
            compartilhamento de experiências e sensações. Sensações que se
            eternizarão pelo resto de nossas vidas em forma de memória dentro de
            nós e de quem amamos. <p> </p> Nossos projetos são únicos e
            personalizados, pensados para cada cliente e sua história, para que
            a festa seja mágica e inesquecível.
          </p>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/images/coffee.jpg"}
          alt="coffee table"
        />
      </div>
    );
  }
}

export default AboutContent1;
