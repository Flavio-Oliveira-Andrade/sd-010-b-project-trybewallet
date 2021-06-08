import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input data-testid="email-input" type="email" />

        <input data-testid="password-input" type="password" />

        <button type="button">Entrar</button>
      </form>

    );
  }
}

export default Login;
