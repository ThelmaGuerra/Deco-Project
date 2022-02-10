import React, { Component } from "react";

class HomeContent1 extends Component {
  state = {};

  render() {
    return (
      <div className="homeContent1">
        <div className="homeText1">
          <h1>Elegância. Experiência.</h1>

          <p>
            A Stock Name é uma empresa criativa que tem como propósito fornecer
            momentos de alegria, beleza e harmonia para os seus eventos. A Stock
            Name é uma empresa criativa que tem como propósito fornecer momentos
            de alegria, beleza e harmonia para os seus eventos. A Stock Name é
            uma empresa criativa que tem como propósito fornecer momentos de
            alegria, beleza e harmonia para os seus eventos.
          </p>
        </div>
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/eventos/Casamento3/mesaCasamento3.jpg"
          }
          alt="table"
        />
      </div>
    );
  }
}

export default HomeContent1;
