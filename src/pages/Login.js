import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="idEmail">
          <input
            type="email"
            placeholder="email"
            id="idEmail"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="idpassword">
          <input
            type="password"
            placeholder="password"
            id="idpassword"
            data-testid="email-input"
          />
        </label>
        <button type="button">Entrar</button>
      </div>);
  }
}

export default Login;
