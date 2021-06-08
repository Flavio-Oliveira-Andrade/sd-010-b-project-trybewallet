import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: true,
    };
    this.infoValidationError = this.infoValidationError.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });

    this.infoValidationError();
  }

  validEmail(email) {
    return /^[\w+.]+@\w+.\w{2,}(?:.\w{2})?$/.test(email);
  }

  infoValidationError() {
    const { email, password } = this.state;
    const maxLength = 5;
    if (this.validEmail(email) === true && password.length >= maxLength) {
      return this.setState({
        error: false,
      });
    }
    return this.setState({
      error: true,
    });
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button type="button" disabled={ error }>Entrar</button>
      </form>
    );
  }
}

export default Login;
