import React from 'react';
import '../css/login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="loginPage">
        <div className="loginBox">
          <h2>Login</h2>
          <form className="form">
            <input data-testid="email-input" type="email" placeholder="Email" />
            <input data-testid="password-input" type="password" placeholder="Senha" />
            <button type="button">Entrar</button>
          </form>
        </div>
      </div>);
  }
}

export default Login;
