import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form action="">
        <h1>Login</h1>
        <input type="email" data-testid="email-input" placeholder="E-mail" />
        <input type="password" data-testid="password-input" placeholder="Senha" />
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
