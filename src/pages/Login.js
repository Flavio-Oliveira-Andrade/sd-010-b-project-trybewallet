import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <div>
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
        </div>
      </form>
    )
  }
}

export default Login;
