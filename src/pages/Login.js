import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <label>
          <input
            type="email"
            data-testid="email-input"
            placeholder="email"
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="password"
          />
          <button
            type="button"
          >
            Entrar
          </button>
        </label>
      </>
    );
  }
}

export default Login;
