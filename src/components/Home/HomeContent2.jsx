import React, { Component } from "react";

class HomeContent2 extends Component {
  state = {};
  render() {
    return (
      <div className="homeContent2">
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/bunch-flowers-leaves-table_1304-4187.jpg"
          }
          alt="table"
        />
        <div className="homeText2">
          <h1>
            Somos especialistas em transformar ideias em incríveis eventos.
          </h1>
          <p>
            Como mais de 5 anos de atuação, a Stock Name está consolidada no
            mercado como uma empresa lider da area, proporcionando qualidade e
            profissionalismo no nosso serviço. Como mais de 5 anos de atuação, a
            Stock Name está consolidada no mercado como uma empresa lider da
            area, proporcionando qualidade e profissionalismo no nosso serviço.
            Como mais de 5 anos de atuação, a Stock Name está consolidada no
            mercado como uma empresa lider da area, proporcionando qualidade e
            profissionalismo no nosso serviço.
          </p>
        </div>
      </div>
    );
  }
}

export default HomeContent2;
