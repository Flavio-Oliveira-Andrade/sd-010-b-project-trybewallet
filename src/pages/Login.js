import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input type="text" name="email" data-testid="email-input" />
          </label>
          <label htmlFor="password">
            <input type="password" name="password" data-testid="password-input" />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
