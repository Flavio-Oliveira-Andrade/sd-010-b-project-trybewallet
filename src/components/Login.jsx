import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      login: '',
      password: '',
      email: '',
    };

    handleChange = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    };
  }

  render() {
    const { login, password, email } = this.state;
    return (
      <form>
        <label htmlFor="login">
          Login
          <input
            type="email"
            id="login"
            name="login"
            value={ login }
            data-testid="email-input"
            onChange={ (event) => handleChange(event) }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            value={ password }
            data-testid="password-input"
            onChange={ (event) => handleChange(event) }
          />
        </label>
        <button type="submit">
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
