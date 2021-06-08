import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="email">
          E-mail:
          <input type="email" id="email" />
        </label>
        <label htmlFor="password">
          Senha:
          <input type="password" id="password" maxLength="6" />
        </label>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
