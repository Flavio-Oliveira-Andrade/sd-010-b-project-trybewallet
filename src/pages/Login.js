import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.loginBtn = this.loginBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  loginBtn() {
    const { email, password } = this.state;
    if (email === '' || password === '') {
      return (
        <button type="button" disabled>
          Entrar
        </button>
      );
    }
    return (
      <button type="button">
        Entrar
      </button>
    );
  }

  handleChange({ value, name }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="App">
        <form className="Login">
          <input
            data-testid="email-input"
            type="text"
            name="email"
            maxLength="50"
            placeholder="Email"
            value={ email }
            onChange={ (e) => this.handleChange(e.target) }
            required
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            maxLength="50"
            placeholder="Senha"
            value={ password }
            onChange={ (e) => this.handleChange(e.target) }
            required
          />
          { this.loginBtn() }
        </form>
      </div>
    );
  }
}

export default Login;
