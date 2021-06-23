import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <section>
        <h1>TRYBE</h1>
        <div>
          <input type="email" data-testid="email-input" />
          <input type="password" data-testid="password-input" />
          <button type="submit">Entrar</button>
        </div>
      </section>
    );
  }
}

export default Login;
