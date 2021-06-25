import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <main>
        <label htmlFor="email-input">
          Email:
          <input
            data-testid="email-input"
            name="email-input"
            id="email-input"
            type="email"
            placeholder="trybe@betrybe.com"
            required
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            data-testid="password-input"
            name="password-input"
            id="password-input"
            type="password"
            placeholder="trybe@betrybe.com"
            required
          />
        </label>
        <button type="button">Entrar</button>
      </main>
    );
  }
}

export default Login;
