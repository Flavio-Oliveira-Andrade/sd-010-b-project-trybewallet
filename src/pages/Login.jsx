import React from 'react';
import './Login.css';
import bitcoin from '../images/5a105381eed609b127ec423c337f64e3.gif';

class Login extends React.Component {
  render() {
    return (
      <div id="login--div">
        <img
          src={ bitcoin }
          alt="bitcoin"
        />
        <form className="login--form">
          <input
            type="email"
            placeholder="Email"
          />
          <input
            type="password"
            placeholder="Password"
          />
          <button
            type="button"
            className="login--button"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
