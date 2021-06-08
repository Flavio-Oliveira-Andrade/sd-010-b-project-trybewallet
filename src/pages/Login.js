import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          data-testid="email-input"
          type="email"
          placeholder="E-mail"
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Senha"
        />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
