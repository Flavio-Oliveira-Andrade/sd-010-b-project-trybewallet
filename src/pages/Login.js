import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Trybe Login</h1>

        <label htmlFor="email-login">
          Email
          <input
            id="email-login"
            type="text"
            name="email"
            placeholder="email@email.com"
            data-testid="email-input"
          />
        </label>

        <label htmlFor="password-login">
          Senha
          <input
            id="password-login"
            type="password"
            name="password"
            placeholder="informe sua senha"
            data-testid="password-input"
          />
        </label>

        <button type="button">Entrar</button>

      </div>
    );
  }
}

export default Login;
