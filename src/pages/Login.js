import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <h2>Loguin</h2>
        <form>
          <label htmlFor="input-loguin">
            Digite seu e-mail:
            <input data-testid="email-input" id="input-loguin" />
          </label>
          <label htmlFor="input-senha">
            Digite sua senha:
            <input data-testid="password-input" id="input-senha" />
          </label>
        </form>
        <button type="button">Entrar</button>
      </section>
    );
  }
}

export default Login;
