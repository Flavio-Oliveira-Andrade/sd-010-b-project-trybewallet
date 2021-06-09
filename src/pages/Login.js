import React from 'react';
import Inputs from '../components/Inputs';

import cambio from '../img/cambio.jpg';

class Login extends React.Component {
  render() {
    return (
      <form className="login">
        <img src={ cambio } alt="wallet" width="185px" />
        <br />
        <Inputs place="Email" name="email" value="" test="email-input" />
        <br />
        <Inputs place="Senha" name="password" value="" test="password-input" />
        <br />
        <button type="button">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
