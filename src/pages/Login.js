import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="input-email" id="email">
            Email
            <input data-testid="email-input" type="text" id="input-email" />
          </label>
          <label htmlFor="input-password">
            Senha
            <input data-testid="password-input" type="password" id="input-password" />
          </label>
          <Link to="/carteira">
            <button type="submit">Entrar</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
