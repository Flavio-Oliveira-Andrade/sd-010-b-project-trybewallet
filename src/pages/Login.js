import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section className="loginSection">
        <input type="text" placeholder="Email" data-testid="email-input" />
        <input type="text" placeholder="Senha" data-testid="password-input" />
        <button type="button">Entrar</button>
      </section>
    );
  }
}

export default Login;
