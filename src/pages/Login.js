import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { userLogin } from '../actions/userAction';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isButtonDisabled: true,
      redirect: false,
    };

    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirectToWallet = this.redirectToWallet.bind(this);
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

  redirectToWallet() {
    this.setState({ redirect: true });
  }

  render() {
    const { email, password, isButtonDisabled, redirect } = this.state;
    const { dispatchUserLogin } = this.props;
    return (
      <form>
        { redirect && <Redirect to="/carteira" /> }
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
          onClick={ () => { dispatchUserLogin(email); this.redirectToWallet(); } }
          type="button"
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  dispatchUserLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchUserLogin: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
