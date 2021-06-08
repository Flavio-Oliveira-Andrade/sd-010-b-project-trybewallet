import React from 'react';

class LoginPage extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" data-testid="email-input" />
        </label>

        <label htmlFor="password">
          Senha:
          <input type="password" name="password" data-testid="password-input" />
        </label>

        <button type="button">Entrar</button>
      </>
    );
  }
}

export default LoginPage;
