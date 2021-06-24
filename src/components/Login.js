import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleUserLogin, passwordLogin } from '../actions/loginActions';

class Login extends React.Component {
  render() {
    const { loginEmail, loginPassword } = this.props;
    return (
      <form>
        <label htmlFor="email-input">
          <input
            type="email"
            id="email-input"
            data-testid="email-input"
            placeholder="email"
            onChange={ ({ target: { value } }) => loginEmail(value) }
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            id="password-input"
            data-testid="password-input"
            placeholder="password"
            onChange={ ({ target: { value } }) => loginPassword(value) }
          />
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginEmail: (payload) => dispatch(handleUserLogin(payload)),
  loginPassword: (payload) => dispatch(passwordLogin(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  login: propTypes.func,
}.isRequired;
