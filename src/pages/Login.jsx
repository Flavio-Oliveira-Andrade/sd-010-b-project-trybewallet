import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              data-testid="email-input"
              type="email"
              id="email-input"
              name="email-input"
            />
          </label>
          <br />
          <label htmlFor="password-input">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              id="password-input"
              name="password-input"
            />
          </label>
          <button type="button">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
