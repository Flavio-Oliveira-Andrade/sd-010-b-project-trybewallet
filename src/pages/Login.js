import React from 'react';
import Imput from '../components/Input';
import travoltaWallet from '../images/travoltaWallet.gif';

class Login extends React.Component {
  render() {
    return (
      <form className="login">
        <img src={ travoltaWallet } alt="travoltaWallet" width="185px" />
        <br />
        <Imput place="Email" name="email" value="" test="email-input" />
        <br />
        <Imput place="Senha" name="password" value="" test="password-input" />
        <br />
        <button type="button">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
