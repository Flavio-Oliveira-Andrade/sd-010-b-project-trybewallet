import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h2>Hello, TrybeWallet!</h2>
        </header>
        <main>
          <h3>Faça seu Login!</h3>
          <label htmlFor="email">
            <input
              type="text"
              id="email"
              placeholder="Email"
              data-testid="email-input"
            />
          </label>
          <br />
          <label htmlFor="senha">
            <input
              type="password"
              id="senha"
              placeholder="Senha"
              data-testid="password-input"
            />
          </label>
          <button type="button">Entrar</button>
        </main>
      </div>
    );
  }
}

export default Login;
