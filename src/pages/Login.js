import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          data-testid="email-input"
          type="text"
          placeholder="E-mail"
        />
        <input
          data-testid="password-input"
          type="text"
          placeholder="Senha"
        />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
