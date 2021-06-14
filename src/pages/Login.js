import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <form>
          <input
            type="email"
            data-testid="email-input"
            placeholder="Digite seu email"
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
          />
          <button type="button">Entrar</button>
        </form>
      </section>
    );
  }
}

export default Login;
