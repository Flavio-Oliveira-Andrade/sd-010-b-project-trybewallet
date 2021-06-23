import React, { useState } from 'react';

import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleValidateEmail() {
    return (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email));
  }

  function handleValidatePassword() {
    return (/[a-z0-9._%+-]{6}/.test(password));
  }

  return (
    <div className="container">
      <input
        data-testid="email-input"
        type="email"
        placeholder="Email"
        onChange={ ({ target }) => {
          setEmail(target.value);
        } }
        required
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="Senha"
        onChange={ ({ target }) => {
          setPassword(target.value);
        } }
        required
      />
      <button disabled={ !handleValidateEmail() || !handleValidatePassword() } type="button">Entrar</button>
    </div>
  );
}

export default Login;
