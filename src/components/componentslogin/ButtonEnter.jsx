import React from 'react';
import { Link } from 'react-router-dom';

function ButtonEnter({
  enterLogin = null,
  disabledEnter = false,
}) {
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
        disabled={ disabledEnter }
      >
        Entrar
      </button>
    </Link>
  );
}

export default ButtonEnter;
