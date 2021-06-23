import React from 'react';

import '../App.css';

function Login () {
  return (
    <div className="container">
      <input
        data-testid="email-input"
        type="email"
        placeholder="Email"
        onChange={}
        required
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="Senha"
        required
      />
      <button type="button">Entrar</button>
    </div>
  );
}

export default Login;
