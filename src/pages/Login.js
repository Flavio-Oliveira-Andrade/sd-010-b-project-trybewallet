import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            required
            placeholder="E-mail"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            required
            placeholder="Senha"
            min="6"
          />
        </label>
        <Link to="/carteira">
          <button type="button">Entrar</button>
        </Link>
      </form>
    );
  }
}

export default Login;
