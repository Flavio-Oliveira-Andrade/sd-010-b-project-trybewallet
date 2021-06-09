import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name="email"
          placeholder="alguem@alguem.com"
          data-testid="email-input"

        />
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          data-testid="password-input"
        />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
