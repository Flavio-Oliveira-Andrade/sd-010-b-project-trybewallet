import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true,
      loginTrue: false,
    };

    this.validateLogin = this.validateLogin.bind(this);
  }

  validateLogin() {
    const emailInput = document.getElementById('email-input').value;
    const passwordInput = document.getElementById('password-input').value;
    const SIX_CHAR = 6;
    const validEmail = (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/).test(emailInput);
    const validPassword = passwordInput.length >= SIX_CHAR;
    if (validEmail && validPassword) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  render() {
    const { loginTrue, isDisabled } = this.state;
    if (loginTrue) {
      return <Redirect to="/carteira" />;
    }

    return (
      <div>
        <input
          id="email-input"
          type="email"
          data-testid="email-input"
          onChange={ this.validateLogin }
          placeholder="Email"
        />
        <input
          id="password-input"
          type="text"
          data-testid="password-input"
          onChange={ this.validateLogin }
          placeholder="Senha"
        />
        <button
          type="button"
          onClick={ this.btnEnter }
          disabled={ isDisabled }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
