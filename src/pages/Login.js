import React from 'react';
import './styles/Login.css';

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" data-testid="email-input" />
          <input type="password" placeholder="Password" data-testid="password-input" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
