import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailValidation: false,
      passwordValidation: false,
      disabled: true,
    };

    this.verifyLoginCondition = this.verifyLoginCondition.bind(this);
    this.verifyEmailCondition = this.verifyLoginCondition.bind(this);
    this.verifyPasswordCondition = this.verifyLoginCondition.bind(this);
  }

  verifyLoginCondition() {
    const { emailValidation, passwordValidation } = this.state;

    if (emailValidation && passwordValidation) {
      this.setState({
        disabled: false,
      });
    }
  }

  handlechangeEmail(event) {
    this.setState({ email: event.target.value });

    const emailTest = RegExp(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/);
    const verifyEmail = emailTest.test(event.target.value);

    if (verifyEmail) {
      this.setState({ emailValidation: true });
      this.verifyLoginCondition();
    }
  }

  handlechangePassword(event) {
    const { value } = event.target;

    this.setState({ password: value });

    const passwordSize = 5;

    if (value.length >= passwordSize) {
      this.setState({ passwordValidation: true });
      this.verifyLoginCondition();
    }
  }

  render() {
    const { email, password, disabled } = this.state;

    return (
      <form>
        <label htmlFor="email">
          <input
            name="email"
            id="email"
            data-testid="email-input"
            type="email"
            placeholder="E-mail"
            onChange={ (event) => this.handlechangeEmail(event) }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            id="password"
            data-testid="password-input"
            type="password"
            placeholder="Senha"
            onChange={ (event) => this.handlechangePassword(event) }
            value={ password }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

export default Login;
