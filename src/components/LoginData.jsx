import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailCheck, passwordCheck } from '../actions';

class LoginData extends React.Component {
  render() {
    const { checkEmail, checkPassword } = this.props;
    return (
      <fieldset className="input-area">
        <input
          type="email"
          data-testid="email-input"
          placeholder="example@example.com"
          onChange={ ({ target: { value } }) => checkEmail(value) }
        />
        <input
          type="password"
          data-testid="password-input"
          placeholder="min: 6 digits"
          pattern=".{6,}"
          onChange={ ({ target: { value } }) => checkPassword(value) }
        />
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  checkEmail: (payload) => dispatch(emailCheck(payload)),
  checkPassword: (payload) => dispatch(passwordCheck(payload)),
});

export default connect(null, mapDispatchToProps)(LoginData);

LoginData.propTypes = {
  checkInput: propTypes.func,
}.isRequired;
