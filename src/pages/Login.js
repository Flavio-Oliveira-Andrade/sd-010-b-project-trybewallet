import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          <input type="text" name="email" id="email" data-testid="email-input" />
        </label>
        <br />
        <label htmlFor="senha">
          <input type="password" name="senha" id="senha" data-testid="password-input" />
        </label>
        <br />
        <button type="button" onClick={ () => {} }>Entrar</button>
      </form>
    );
  }
}

export default Login;
