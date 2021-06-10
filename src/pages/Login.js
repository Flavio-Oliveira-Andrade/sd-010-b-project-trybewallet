import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input data-testid="email-input" type="text" name="email" />
          </label>
          <label htmlFor="name">
            Nome:
            <input data-testid="password-input" type="password" name="senha" />
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
