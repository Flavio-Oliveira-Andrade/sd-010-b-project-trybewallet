import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="login">
        <label htmlFor="email">
          <input
            type="email"
            placeholder="E-mail"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label htmlFor="senha">
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            name="senha"
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <button
          type="button"
          className="btnLogin"
        >
          {' '}
          ENTRAR
        </button>
      </div>
    );
  }
}

export default Login;
