import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>

        <input data-testid="email-input" />
        <input data-testid="password-input" />
        <button>Entrar</button>
      </div>
    );
  }
}

export default Login;
