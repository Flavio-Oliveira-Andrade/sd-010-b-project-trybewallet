import React from 'react';
import '../App.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      emailMessageError: '',
      pwMessageError: '',
      invalidEmail: true,
      invalidPw: true,
    };
    this.handleValidateEmail = this.handleValidateEmail.bind(this);
    this.handleValidatePassword = this.handleValidatePassword.bind(this);
    this.emailMessageError = this.emailMessageError.bind(this);
    this.pwMessageError = this.pwMessageError.bind(this);
  }

  handleValidateEmail({ value }) {
    this.setState({
      userEmail: value,
    });
    if (value.includes('@') && value.includes('.com')) {
      this.setState({
        invalidEmail: false,
        emailMessageError: '',
      });
    } else {
      this.setState({
        invalidEmail: true,
      });
      this.emailMessageError(value);
    }
  }

  handleValidatePassword({ value }) {
    const lengthChar = 6;
    if (value.length >= lengthChar) {
      this.setState({
        invalidPw: false,
        pwMessageError: '',
      });
    } else {
      this.setState({
        invalidPw: true,
      });
      this.pwMessageError(value);
    }
  }

  emailMessageError(value) {
    this.setState({
      emailMessageError: '* Invalid e-mail!',
    });
    if (value === '') {
      this.setState({
        emailMessageError: '',
      });
    }
  }

  pwMessageError(value) {
    this.setState({
      pwMessageError: '* Invalid password!',
    });
    if (value === '') {
      this.setState({
        pwMessageError: '',
      });
    }
  }

  render() {
    const { emailMessageError, pwMessageError, invalidEmail, invalidPw } = this.state;
    return (
      <section className="login-form-container">
        <form className="login-form">
          <div><h1>TrybeWallet!</h1></div>
          <div className="text-login">Login</div>
          <label htmlFor="email">
            Email:
            <input
              className="email"
              name="email"
              type="email"
              data-testid="email-input"
              onChange={ ({ target }) => { this.handleValidateEmail(target); } }
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
              onChange={ ({ target }) => { this.handleValidatePassword(target); } }
            />
            <p className="validateError">{ pwMessageError }</p>
          </label>
          <button type="button" disabled={ invalidEmail || invalidPw }>Entrar</button>
        </form>
      </section>
    );
  }
}

export default Login;
