import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="email">
          Email:
          <input data-testid="email-input" ide="email" type="text" name="name" />
        </label>
        <label htmlFor="password">
          Password:
          <input data-testid="password-input" id="password" type="password" name="name" />
        </label>
        <button type="button">Entrar</button>
      </>
    );
  }
}

export default Login;
