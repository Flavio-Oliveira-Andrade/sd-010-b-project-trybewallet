import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div>
        <section>
          <input
            type="email"
            placeholder="email"
            data-testid="email-input"
          />
          <input
            type="password"
            placeholder="senha"
            data-testid="password-input"
          />
          <button type="button">Entrar</button>
        </section>
      </div>
    );
  }
}

export default Login;
