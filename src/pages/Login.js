import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disableButton: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value }, () => {
      const { email, password } = this.state;
      const regex = /\S+@\S+\.\S+/;
      const min = 6;
      if (regex.test(email) && password.length >= min) {
        this.setState({ disableButton: false });
      } else this.setState({ disableButton: true });
    });
  }

  render() {
    const { disableButton } = this.state;
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
        <button
          type="button"
          disabled={ disableButton }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
