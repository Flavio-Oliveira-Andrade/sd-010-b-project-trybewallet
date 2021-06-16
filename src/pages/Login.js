import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <header>Faça o Login</header>
        <section>
          <input
            type="text"
            placeholder="digite seu email"
            data-testid="email-input"
          />
          <input
            type="password"
            placeholder="digite sua senha"
            data-testid="password-input"
          />
          <button
            type="submit"
          >
            Entrar
          </button>
        </section>
      </div>
    );
  }
}

export default Login;
