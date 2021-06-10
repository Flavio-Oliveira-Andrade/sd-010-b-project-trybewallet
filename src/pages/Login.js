import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import '../App.css';
import { loginUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      emailMessageError: '',
      pwMessageError: '',
      invalidEmail: true,
      invalidPw: true,
      loginAllowed: false,
    };
    this.handleValidateEmail = this.handleValidateEmail.bind(this);
    this.handleValidatePassword = this.handleValidatePassword.bind(this);
    this.handleClickLoginAllowed = this.handleClickLoginAllowed.bind(this);
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

  handleClickLoginAllowed() {
    const { userEmail, invalidEmail, invalidPw } = this.state;
    const { globalStateEmail } = this.props;
    globalStateEmail(userEmail);
    if (!invalidEmail || !invalidPw) {
      this.setState({
        loginAllowed: true,
      });
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
    const {
      emailMessageError,
      pwMessageError,
      invalidEmail,
      invalidPw,
      loginAllowed,
    } = this.state;
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
          <button
            type="button"
            disabled={ invalidEmail || invalidPw }
            onClick={ this.handleClickLoginAllowed }
          >
            Entrar
          </button>
        </form>
        { loginAllowed && <Redirect to="/carteira" /> }
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  globalStateEmail: (email) => { dispatch(loginUser(email)); },
});

export default connect(null, mapDispatchToProps)(Login);
