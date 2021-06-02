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

  componentDidUpdate() {
    const { email, password } = this.state;
    const minimalPasswordLength = 6;
    if (password.length >= minimalPasswordLength && email.match(/^[^\s@]+@[^\s@]+$/)) {
      document.getElementById('btn').disabled = false;
    }
    // regex veio daqui: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <form>
        <label htmlFor="id-email">
          Email
          <input
            data-testid="email-input"
            id="id-email"
            type="email"
            value={ email }
            onChange={ this.handleChange }
            name="email"
          />
        </label>
        <label htmlFor="id-senha">
          Senha
          <input
            data-testid="password-input"
            id="id-senha"
            type="password"
            value={ password }
            onChange={ this.handleChange }
            name="password"
          />
        </label>
        <button type="button" disabled id="btn">Entrar</button>
      </form>
    );
  }
}

export default Login;
