import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email-input">
            Email:
            <input data-testid="email-input" type="text" />
          </label>
          <br />
          <br />
          <label htmlFor="password-input">
            Senha:
            <input data-testid="password-input" type="password" />
          </label>
          <br />
          <br />
          <button type="submit" name="entrar">Entrar</button>
        </form>

      </div>
    );
  }
}

export default Login;
