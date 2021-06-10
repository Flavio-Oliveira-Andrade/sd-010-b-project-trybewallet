import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <div>Login</div>
        <form>
          <label htmlFor="email">
            Email
            <input type="email" name="email" />
          </label>
          <label htmlFor="password">
            Senha
            <input type="password" name="password" />
          </label>
        </form>
        <button type="button">
          Entrar
        </button>

      </section>
    );
  }
}

export default Login;
