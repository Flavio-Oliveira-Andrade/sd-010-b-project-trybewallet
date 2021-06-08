import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
      <form>
        <h2>LOGIN</h2>
        <fieldset>
          <label htmlFor="email-input">
            Email:
            <input type="text" id="email-input" data-testid="email-input" />
          </label>
          <br />
          <label htmlFor="password-input">
            Senha:
            <input type="text" id="password-input" data-testid="password-input" />
          </label>
          <br />
          <button type="submit">Entrar</button>
        </fieldset>
      </form>
    );
  }
}

export default LoginForm;
