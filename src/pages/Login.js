import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          <input
            name="email"
            id="email"
            data-testid="email-input"
            type="email"
            placeholder="E-mail"
            // required
            // disabled
            // onChange="muda o estado global"
          />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            id="password"
            data-testid="password-input"
            type="password"
            placeholder="Senha"
            // required
            // disabled
            // onChange="muda o estado global"
            minLength="6"
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
