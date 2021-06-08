import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <section>
        <input type="email" data-testid="email-input" placeholder="E-mail" />
        <input type="password" data-testid="password-input" placeholder="Senha" />
        <Link to="/carteira">
          <button type="button">Entrar</button>
        </Link>
      </section>
    );
  }
}

export default Login;
