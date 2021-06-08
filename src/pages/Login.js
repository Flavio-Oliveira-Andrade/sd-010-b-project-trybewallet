import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="input-email">
          Email
          <input type="text" data-testid="email-input" id="input-email" />
        </label>

        <label htmlFor="input-password">
          Senha
          <input type="password" data-testid="password-input" id="input-password" />
        </label>

        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
