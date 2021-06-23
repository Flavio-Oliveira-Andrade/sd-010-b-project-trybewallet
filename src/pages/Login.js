import React from 'react';

import '../App.css'

class Login extends React.Component {
  render() {
    return(
      <div className="container">
        <input
          data-testid="email-input"
          type="email"
          placeholder="Email"
          required
        />
        <input data-testid="password-input" type="password" placeholder="Senha" required />
        <button>Entrar</button>
      </div>
    );
  }
}

export default Login;
