import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <section className="login-inputs">
          <input
            type="text"
            placeholder="Email"
            data-testid="email-input"
          />
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
          />
        </section>
        <div className="link">
          <Link
            to="/"
            data-testid="btn-login"
          >
            Entrar
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
// #Passo 01
