import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // source: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  validateEmail() {
    const { email } = this.state;
    const emailPattern = /\S+@\S+\.\S+/;

    return emailPattern.test(email);
  }

  validatePassword() {
    const MINIMUM_PASS_LENGTH = 6;
    const { password } = this.state;

    if (password.length >= MINIMUM_PASS_LENGTH) {
      return true;
    }

    return false;
  }

  validateInputs() {
    if (this.validateEmail() && this.validatePassword()) {
      this.setState({
        isButtonDisabled: false,
      });
    } else {
      this.setState({
        isButtonDisabled: true,
      });
    }
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    }, () => this.validateInputs());
  }

  render() {
    const { email, password, isButtonDisabled } = this.state;

    return (
      <form>
        <h3>Login</h3>
        <label htmlFor="email-input">
          E-mail:
          <input
            id="email-input"
            type="email"
            name="email"
            value={ email }
            data-testid="email-input"
            onChange={ (event) => { this.handleChange(event); this.validateInputs(); } }
          />
        </label>
        <label htmlFor="password-input">
          Password:
          <input
            id="password-input"
            type="password"
            name="password"
            value={ password }
            data-testid="password-input"
            onChange={ (event) => { this.handleChange(event); this.validateInputs(); } }
          />
        </label>
        <button
          disabled={ isButtonDisabled }
          // onClick={}
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
