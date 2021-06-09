import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailMessageError: '',
      passwordMessageError: '',
      invalidEmail: true,
      invalidPassword: true,
    };
    this.handleValidateEmail = this.handleValidateEmail.bind(this);
    this.handleValidatePassword = this.handleValidatePassword.bind(this);
  }

  handleValidateEmail({ value }) {
    this.setState({
      email: value,
    });
    if (value.includes('@') && value.includes('.com')) {
      this.setState({
        invalidEmail: false,
      });
    } else {
      this.setState({
        invalidEmail: true,
      });
    }
  }

  handleValidatePassword({ value }) {
    const lengthChar = 6;
    if (value.length >= lengthChar) {
      this.setState({
        invalidPassword: false,
      });
    } else {
      this.setState({
        invalidPassword: true,
      });
    }
  }

  emailMessageError() {
    this.setState({
      emailMessageError: '* Invalid e-mail!'
    });
  }

  passwordMessageError() {
    this.setState({
      passwordMessageError: '* Invalid password!'
    });
  }

  render() {
    const { emailMessageError, passwordMessageError, invalidEmail, invalidPassword } = this.state;
    return (
      <>
        <div>
          Login
        </div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              className="email"
              name="email"
              type="email"
              data-testid="email-input"
              onChange={ ({ target }) => { this.handleValidateEmail(target)} }
            />
            <p className="validateError">{ emailMessageError }</p>
          </label>
          <label htmlFor="password">
            Senha:
            <input
              id="password"
              name="password"
              type="password"
              data-testid="password-input"
              onChange={ ({ target }) => {this.handleValidatePassword(target)} }
            />
            <p className="validateError">{ passwordMessageError }</p>
          </label>
          <button type="button" disabled={ invalidEmail || invalidPassword }>Entrar</button>
        </form>
      </>
    );
  }
}

export default Login;
