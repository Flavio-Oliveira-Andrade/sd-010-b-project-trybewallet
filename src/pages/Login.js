import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.validation = this.validation.bind(this);
  }

  validation() {
    const button = document.querySelector('.login-button');
    const loginInput = document.querySelectorAll('input')[0].value;
    const passwordInput = document.querySelectorAll('input')[1].value;

    if (loginInput.includes('@') && loginInput.includes('.com')) {
      const lenghtPassword = 6;

      if (passwordInput.length >= lenghtPassword) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    } else {
      button.disabled = true;
    }
  }

  render() {
    return (
      <form>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            data-testid="email-input"
            className="login-input"
            onChange={ this.validation }
            required
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.validation }
            required
          />
        </label>
        <button
          className="login-button"
          type="button"
          disabled
          onClick={ this.validation }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
