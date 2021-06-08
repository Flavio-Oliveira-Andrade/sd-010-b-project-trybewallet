import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      userPassword: '',
    };
  }

  render() {
    const { userEmail, userPassword } = this.state;
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
            onChange={ (e) => this.setState({ userEmail: e.target.value }) }
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
            onChange={ (e) => this.setState({ userPassword: e.target.value }) }
          />
        </label>

        <Link
          to="/clients"
          data-testid="btn-login"
          onClick={ () => [userEmail, userPassword] } // temp
        >
          Entrar
        </Link>
      </form>
    );
  }
}

export default Login;
