import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="emailInput">
          Email:
          <input
            type="email"
            name="emailInput"
            id="emailInput"
            placeholder="Email"
            data-testid="email-input"
            onChange={ (e) => this.setState({ email: e.target.value }) }
          />
        </label>

        <label htmlFor="passwordInput">
          Senha:
          <input
            type="password"
            name="passwordInput"
            id="passwordInput"
            placeholder="Password"
            data-testid="password-input"
            onChange={ (e) => this.setState({ password: e.target.value }) }
          />
        </label>

        <button
          type="button"
          data-testid="btn-login"
          onClick={ () => [email, password] }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
