import React, { Component } from "react";

import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

class Footer extends Component {
  state = {};

  render() {
    return (
      <div className="footer">
        <div className="main_footer">
          <div className="contact_footer">
            <h1>Contato</h1>
            <h2>(21) 99158-9108</h2>
            <h2>contato@deco.com.br</h2>
          </div>
          <div className="location_footer">
            <h1>Localização</h1>
            <h2>Rua Joaquim Morais Castro, 53 - 53700-70</h2>
            <h2>Recife, PE</h2>
          </div>
          <div className="social_media_footer">
            <h1>Conecte-se</h1>
            <div className="social_media_footer_icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
            <h2>@decoempresarial</h2>
          </div>
        </div>
        <div className="copyright">
          <div>Copyright © Deco 2015. Todos os direitos reservados.</div>
        </div>
      </div>
    );
  }
}

export default Footer;
