import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          User email:
          <input type="email" name="email" data-testid="email-input" />
        </label>
        <label htmlFor="pwd">
          Password:
          <input type="password" name="pwd" data-testid="password-input" />
        </label>
        <button type="submit">Entrar</button>
      </form>
    );
  }
}

export default Login;
