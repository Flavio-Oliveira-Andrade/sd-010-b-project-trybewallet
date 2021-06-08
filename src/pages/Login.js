import React from 'react';
import Imput from '../components/Input';
import travoltaWallet from '../images/travoltaWallet.gif';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      buttonDisable: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  verifyEmailAndPass() {
    const minLength = 4;
    const { email, password } = this.state;
    // local que tirei o regex: https://ui.dev/validate-email-address-javascript/
    const regex = /\S+@\S+\.\S+/;
    this.setState({ buttonDisable: email.match(regex) && password.length > minLength });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, this.verifyEmailAndPass());
  }

  render() {
    // const { email, password, buttonDisable } = this.state;
    const { buttonDisable } = this.state;
    return (
      <form className="login">
        <img src={ travoltaWallet } alt="travoltaWallet" width="185px" />
        <br />
        <Imput
          place="Email"
          name="email"
          test="email-input"
          handle={ this.handleChange }
        />

        <br />
        <Imput
          place="Senha"
          name="password"
          test="password-input"
          type="password"
          handle={ this.handleChange }
        />
        <br />
        <button type="button" disabled={ !buttonDisable }>
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
