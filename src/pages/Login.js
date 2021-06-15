import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        Login
        <input
          data-testid="email-input"
          type="email"
          placeholder="Digite aqui o seu e-mail"
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="Digite sua senha"
        />
        <button type="button">Entrar</button>
      </section>
    );
  }
}

export default Login;
