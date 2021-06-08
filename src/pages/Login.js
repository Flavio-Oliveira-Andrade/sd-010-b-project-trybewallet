import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          placeholder="E-mail"
          // required
          // disabled
          // onChange="muda o estado global"
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Senha"
          // required
          // disabled
          // onChange="muda o estado global"
          minLength="6"
        />
        <Link to="/carteira">
          <button type="submit">Entrar</button>
        </Link>
      </div>
    );
  }
}

export default Login;
