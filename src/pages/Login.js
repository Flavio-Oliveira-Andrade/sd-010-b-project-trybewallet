import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveEmailLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.executeLogin = this.executeLogin.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    if (name === 'email') { this.emailValidation(value); }
    if (name === 'password') { this.passwordValidation(value); }
  }

  emailValidation(email) {
    const reTest = new RegExp(/^[\w-.]+@([\w-]+.)+[\w-]{2,3}$/g);
    if (reTest.test(email)) {
      this.setState((prev) => ({ ...prev, validEmail: true }));
    } else {
      this.setState((prev) => ({ ...prev, validEmail: false }));
    }
  }
  // regex pego da página regexr.com

  passwordValidation(password) {
    const maxCharacters = 6;
    if (password.length >= maxCharacters) {
      this.setState((prev) => ({ ...prev, validPassword: true }));
    } else {
      this.setState((prev) => ({ ...prev, validPassword: false }));
    }
  }

  executeLogin() {
    const { login } = this.props;
    const { email } = this.state;
    login(email);
  }

  render() {
    const { validEmail, validPassword } = this.state;
    const validLogin = (validEmail && validPassword);

    return (
      <div>
        Login
        <br />
        <label htmlFor="email">
          E-mail:
          {' '}
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        {' '}
        <label htmlFor="password">
          Senha:
          {' '}
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        {' '}
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !validLogin }
            onClick={ this.executeLogin }
          >
            Entrar

          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(saveEmailLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  login: PropTypes.function,
}.isRequired;
