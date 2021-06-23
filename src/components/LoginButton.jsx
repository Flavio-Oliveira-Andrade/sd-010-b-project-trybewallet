import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LoginButton extends React.Component {
  validateLogin(email, password) {
    const regex = /\S+@\S+\.\S+/;
    const minPasswordSize = 6;
    if (regex.test(email) && password.length >= minPasswordSize) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.props;
    const disabled = this.validateLogin(email, password);
    return (
      <Link to="/carteira">
        <button
          type="button"
          className="login-button"
          disabled={ disabled }
        >
          Entrar
        </button>
      </Link>
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
  email: propTypes.string,
  password: propTypes.string,
}.isRequired;
