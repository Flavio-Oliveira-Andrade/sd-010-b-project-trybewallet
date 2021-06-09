import React from 'react';
import './Login.css';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input data-testid="email-input" type="email" className="email" />
        <input data-testid="password-input" type="password" className="password" />

        <button type="button">Entrar</button>
      </form>

    );
  }
}

export default Login;
