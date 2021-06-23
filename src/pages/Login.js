import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { emailAction, passwordAction, disabledAction } from '../actions';

class Login extends React.Component {
  componentDidUpdate() {
    const { email, password, changeEnabled } = this.props;
    this.isEnabled(email, password, changeEnabled);
  }

  isEnabled(email, password, changeEnabled) {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    const validEmail = emailRegex.test(email);
    const SEIS = 6;
    const validPassword = password.length >= SEIS;
    const validDisabled = !(validEmail && validPassword);
    if (!validDisabled) {
      changeEnabled(validDisabled);
    }
  }

  render() {
    const { changeEmail, changePassword, isDisabled } = this.props;
    return (
      <form action="">
        <div>Login</div>
        <label htmlFor="email">
          {'E-mail: '}
          <input
            data-testid="email-input"
            id="email"
            name="email"
            onChange={ (e) => changeEmail(e.target.value) }
            type="email"
          />
        </label>
        <label htmlFor="password">
          {'Senha: '}
          <input
            data-testid="password-input"
            id="password"
            name="password"
            onChange={ (e) => changePassword(e.target.value) }
            type="text"
          />
        </label>
        <Link to="/carteira">
          <button
            disabled={ isDisabled }
            onClick={ this.redirectsToWallet }
            type="button"
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (email) => dispatch(emailAction(email)),
  changePassword: (password) => dispatch(passwordAction(password)),
  changeEnabled: (isDisabled) => dispatch(disabledAction(isDisabled)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isDisabled: state.user.isDisabled,
});

Login.propTypes = {
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  changeEnabled: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
