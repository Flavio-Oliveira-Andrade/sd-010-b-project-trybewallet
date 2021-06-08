import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.validarEmail = this.validarEmail.bind(this);
    this.emailInput = this.emailInput.bind(this);
    this.passwordInput = this.passwordInput.bind(this);
    this.redirect = this.redirect.bind(this);

    this.state = {
      email: '',
      password: '',
      buttonState: false,
      redirect: false,
    };
  }

  emailInput(e) {
    this.setState({
      email: e.target.value,
    });
  }

  passwordInput(e) {
    this.setState({
      password: e.target.value,
    });
  }

  validarEmail() {
    const { password, email } = this.state;
    const SIX = 6;
    const emailRegex = /\S+@\S+\.\S+/;

    if (password.length >= SIX && emailRegex.test(email)) {
      this.setState({ buttonState: true, redirect: true });
    }
  }

  redirect() {
    return <Redirect to="/teste" />;
  }

  render() {
    const { buttonState, redirect } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input
              type="email"
              id="email"
              data-testid="email-input"
              name="email"
              onChange={ this.emailInput }
              onKeyUp={ this.validarEmail }
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              id="password"
              data-testid="password-input"
              name="password"
              onChange={ this.passwordInput }
              onKeyUp={ this.validarEmail }
            />
          </label>

          {buttonState === false
            ? <button type="button" disabled>Entrar</button>
            : <button type="button" onClick={ redirect && this.redirect }>Entrar</button>}
        </form>
      </div>
    );
  }
}

export default Login;
