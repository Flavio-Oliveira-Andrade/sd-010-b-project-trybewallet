import React from 'react';

class Login extends React.Component {


  validation({ userEmail, userPassword }) {
    const regex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const Email = regex.test(userEmail);
    const minNumber = 6;

    
  render() {
    return (
      <form>
        <label>
          Email:
          <input
            data-testid="email-input"
          />
        </label>
        <label>
          Senha:
          <input
            data-testid="password-input"
          />
        </label>
        <button>Entrar</button>
      </form>
    );
  }
}

export default Login;
