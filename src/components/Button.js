import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  validate(email, password) {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordLength = 6;
    if (emailRegex.test(email) && password.length >= passwordLength) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.props;
    const disableLoginBtn = this.validate(email, password);
    return (
      <Link to="/carteira">
        <button
          type="submit"
          className="login-button"
          disabled={ disableLoginBtn }
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

export default connect(mapStateToProps, null)(Button);

Button.propTypes = {
  enableButton: propTypes.bool,
  email: propTypes.string,
  password: propTypes.string,
}.isRequired;
