import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>Login</div>
        <label htmlFor="email">
          Email:
          <input type="text" data-testid="email-input" id="email" />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input type="password" data-testid="password-input" id="password" />
        </label>
        <button type="button">Entrar</button>
      </>
    );
  }
}

export default Login;
