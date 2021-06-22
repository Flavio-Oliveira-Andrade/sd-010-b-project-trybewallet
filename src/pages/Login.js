import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form action="">
        <div>Login</div>
        <label htmlFor="email">
          {'E-mail: '}
          <input
            data-testid="email-input"
            id="email"
            type="email"
          />
        </label>
        <label htmlFor="password">
          {'Senha: '}
          <input
            data-testid="password-input"
            id="password"
            type="text"
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
