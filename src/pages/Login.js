import React from 'react';

class Login extends React.Component {
  render() {

    return <div>Login</div>;
       <form>
        <label>
        <input data-testid="email-input"/>
      </label>
        <label>
        <input data-testid="password-input"/>
      </label>
      <button>Entrar</button>
      </form>;
  }
}

export default Login;
