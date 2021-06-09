import React from 'react';
import { Link } from 'react-router-dom';

function ButtonEnter({ enterLogin = null }) {
  function login() {
    if (enterLogin) {
      enterLogin();
    }
  }

  return (
    <Link to="/carteira">
      <button
        type="button"
        onClick={ login }
      >
        Entrar
      </button>
    </Link>
  );
}

export default ButtonEnter;
