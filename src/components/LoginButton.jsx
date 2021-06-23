import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class LoginButton extends React.Component {
  render() {
    const { email, password } = this.props;
    const regex = /\S+@\S+\.\S+/;
    const minPasswordSize = 6;
    if (regex.test(email) && password.length >= minPasswordSize) {
      return (
        <button
          type="button"
          className="login-button"
        >
          Entrar
        </button>
      );
    }

    return (
      <button
        type="button"
        className="login-button"
        disabled
      >
        Entrar
      </button>
    );
  }
}

const mapStateToProps = ({ user: { email, password } }) => ({
  email,
  password,
});

export default connect(mapStateToProps, null)(LoginButton);

LoginButton.propTypes = {
  enableButton: propTypes.bool,
}.isRequired;
