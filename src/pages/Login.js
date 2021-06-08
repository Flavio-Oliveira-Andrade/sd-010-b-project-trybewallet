import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label data-testid="email-input" htmlFor="login">
          <input
            id="login"
            type="email"
          />
        </label>
        <label data-testid="password-input" htmlFor="password">
          <input
            id="password"
            type="text"
            min="6"
          />
        </label>
        <button type="button">Entrar</button>
      </div>);
  }
}

export default Login;
