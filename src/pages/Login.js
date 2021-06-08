import React from 'react';

class Login extends React.Component {
  render() {
    return(
      <form>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            data-testid="email-input"
          />
        </label>
        <label htmlFor="">
          Senha
          <input
            type="password"
            name="password"
            data-testid="password-input"
          />
        </label>
        <button type="button">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
