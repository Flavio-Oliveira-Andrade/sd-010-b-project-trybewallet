import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main className="login">
        Login
        <form>
          <label htmlFor="email">
            Email
            <input id="email" type="email" data-testid="email-input" />
          </label>
          <label htmlFor="senha">
            Senha:
            <input id="senha" type="password" data-testid="password-input" />
          </label>
          <button type="button">Entrar</button>
        </form>
      </main>);
  }
}

export default Login;
