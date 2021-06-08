import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email">
            E-mail:
            <input type="email" id="email" data-testid="email-input" />
          </label>
          <label htmlFor="password">
            Senha:
            <input type="password" id="password" data-testid="password-input" />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;
