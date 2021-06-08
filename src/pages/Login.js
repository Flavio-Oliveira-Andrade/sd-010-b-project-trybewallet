import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userLogin } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
      isLogged: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.verifyLoginConditions = this.verifyLoginConditions.bind(this);
    this.handleEnterButtonClick = this.handleEnterButtonClick.bind(this);
  }

  verifyEmail(email) {
    const format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(format)) {
      return true;
    }
    return false;
  }

  verifyLoginConditions() {
    const { email, password } = this.state;
    const PASSWORD_LENGTH = 6;
    const isValidEmail = this.verifyEmail(email);

    if (isValidEmail && password.length >= PASSWORD_LENGTH) {
      this.setState({
        disabled: false,
      });
    } else {
      (
        this.setState({
          disabled: true,
        })
      );
    }
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    },
    () => this.verifyLoginConditions());
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    },
    () => this.verifyLoginConditions());
  }

  handleEnterButtonClick(email) {
    const { dispatchUserLogin } = this.props;
    dispatchUserLogin(email);
    this.setState({
      isLogged: true,
    });
  }

  render() {
    const { disabled, email, isLogged } = this.state;

    if (isLogged) {
      return (
        <Redirect to="/carteira" />
      );
    }
    return (
      <section>
        <input
          type="email"
          data-testid="email-input"
          onChange={ this.handleEmailChange }
        />
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.handlePasswordChange }
        />
        <button
          type="button"
          disabled={ disabled }
          onClick={ () => this.handleEnterButtonClick(email) }
        >
          Entrar
        </button>
      </section>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUserLogin: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  dispatchUserLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
