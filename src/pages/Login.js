import React from 'react';
import './login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="form-login">
        <form>
          <input
            type="email"
            placeholder="Digite seu email"
            data-testid="email-input"
          />
          <input
            type="password"
            placeholder="Digite seu senha"
            data-testid="password-input"
          />
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
