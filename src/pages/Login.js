import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      login: true,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      this.confirmationCheck(this.state);
    });
  }

  confirmationCheck ({ password, email }) {
    const caract = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const emailTest = caract.test(email);
    const passwordMin = 6;

    if (email  && password.length >= passwordMin) {
      this.setState({
        login: false,
      });
    } else {
      this.setState({
        login: true,
      });
    }
  }

  render() {
    const { login, password, email } = this.state;
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            id="email"
            type=""
            name="email"
            onChange={this.handleChange}
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            id="password"
            name="password"
            onChange={this.handleChange}
            data-testid="password-input"
          />
        </label>
        <button>Entrar</button>
      </form>
    );
  }
}

export default Login;
