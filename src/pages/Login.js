import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import '../App.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // Validação de email e senha pego no stack overflow
  function handleValidateEmail() {
    return (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email));
  }

  function handleValidatePassword() { 
    return (/[a-z0-9._%+-]{6}/.test(password));
  }
 
  function addEmail() {
    dispatch({ type: 'ADD_USER', email });
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
      <Link to="/carteira">
        <button
          disabled={ !handleValidateEmail() || !handleValidatePassword() }
          type="button"
          onClick={ addEmail }
        >
          Entrar
        </button>
      </Link>
    </div>
  );
}

export default Login;
