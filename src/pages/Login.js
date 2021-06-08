import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          <input type="text" name="email" data-testid="email-input" />
        </label>
        <label htmlFor="password">
          <input type="text" name="password" data-testid="password-input" />
        </label>
        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
