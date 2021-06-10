import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
        />
        <button
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
