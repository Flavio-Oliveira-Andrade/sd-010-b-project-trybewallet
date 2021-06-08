import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Usuário:
            <input
              data-testid="email-input"
              id="email-input"
              type="text"
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              data-testid="password-input"
              id="password-input"
              type="password"
            />
          </label>
          <button
            type="button"
            onClick={ () => {} }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
