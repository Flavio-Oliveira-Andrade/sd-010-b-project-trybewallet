import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    console.log(email, password);
    return (
      <div>
        <input
          data-testid="email-input"
          type="text"
          placeholder="e-mail"
          name="email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="password-input"
          type="password"
          placeholder="password"
          name="password"
          onChange={ this.handleChange }
        />
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
