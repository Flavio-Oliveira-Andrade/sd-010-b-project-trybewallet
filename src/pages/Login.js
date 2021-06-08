import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
  handleOnclick() {
    return <Redirect to="/carteira" />;
  }

  render() {
    return (
      <div className="Login">
        <section className="login-inputs">
          <input
            type="text"
            // onChange={ onChange }
            placeholder="email"
            data-testid="email-input"
            // onChange={ this.handleOnChange }
          />
          <input
            type="password"
            // onChange={ onChange }
            placeholder="senha"
            data-testid="password-input"
          />
        </section>
        <input
          type="button"
          value="Entrar"
          onClick={ this.handleOnclick }
        />
      </div>
    );
  }
}

export default Login;
