import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { userLoginSuccessAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      disabled: true,
      loggedIn: false,
    };
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value }, () => this.loginValidation());
  }

  handleClick() {
    const { email } = this.state;
    const { userLoginSuccess } = this.props;
    userLoginSuccess(email);
    this.setState({ loggedIn: true });
  }

  loginValidation() {
    const { email, password } = this.state;
    let disabled = true;
    const EMAIL_VALIDATION = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi;
    const MIN_PASSWORD_LENGTH = 6;
    disabled = !(EMAIL_VALIDATION.test(email) && password.length >= MIN_PASSWORD_LENGTH);
    this.setState({ disabled });
  }

  render() {
    const { disabled, loggedIn } = this.state;
    return (
      <>
        <h1>Login</h1>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            name="email"
            type="text"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            data-testid="password-input"
            name="password"
            type="password"
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <button type="button" disabled={ disabled } onClick={ () => this.handleClick() }>
          ENTRAR
        </button>
        {
          loggedIn && <Redirect to="/carteira" />
        }
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLoginSuccess: (email) => dispatch(userLoginSuccessAction(email)),
});

Login.propTypes = {
  userLoginSuccess: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
