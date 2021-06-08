import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input type="email" id="email" data-testid="email-input" required />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              type="password"
              id="password"
              data-testid="password-input"
              minLength="6"
              required
            />
          </label>
          <Link to="/carteira">
            <button type="submit" data-testid="my-action">Entrar</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
