import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        Login
        <form>
          <label htmlFor="email-input">
            Email
            <input id="email-input" data-testid="email-input" type="email" />
          </label>
          <label htmlFor="password-input">
            Senha
            <input id="password-input" data-testid="password-input" type="password" />
          </label>
          <button type="button">Entrar</button>
        </form>
      </section>
    );
  }
}

export default Login;
