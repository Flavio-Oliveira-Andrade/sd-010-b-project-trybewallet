import React from 'react';
import Inputs from '../components/Inputs';

import cambio from '../img/cambio.jpg';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
    this.checkInput = this.checkInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // pucxando o valor dos inputs e colocando no estado local

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  // valida o email e sennha
  checkInput() {
    const { password, email } = this.state;
    const cinco = 5;
    const emailValidate = (
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
    );
    return !(email.match(emailValidate) && password.length > cinco);
  }

  render() {
    const { password, email } = this.state;
    return (
      <form className="login">
        <img src={ cambio } alt="wallet" width="200px" />
        <Inputs
          place="Email"
          name="email"
          handle={ this.handleChange }
          value={ email }
          test="email-input"
        />
        <Inputs
          place="Senha"
          type="password"
          name="password"
          handle={ this.handleChange }
          value={ password }
          test="password-input"
        />
        <button
          type="button"
          disabled={ this.checkInput() }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
