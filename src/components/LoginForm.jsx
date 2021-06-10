import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLogin } from '../actions/index';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      disabled: true,
    };
    this.validateLogin = this.validateLogin.bind(this);
    this.walletRedirect = this.walletRedirect.bind(this);
  }

  walletRedirect(e) {
    e.preventDefault();
    const { setLoginToState } = this.props;
    const email = document.getElementById('email-input').value;
    this.setState((oldState) => ({ ...oldState, shouldRedirect: true }));
    setLoginToState(email);
  }

  validateLogin() {
    const emailInput = document.getElementById('email-input').value;
    const passwordInput = document.getElementById('password-input').value;
    const SIX_CHAR = 6;
    // Regex para email https://regexr.com/3e48o
    const validEmail = (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/).test(emailInput);
    const validPassword = passwordInput.length >= SIX_CHAR;
    if (validEmail && validPassword) {
      // document.getElementById('formButton').disabled = false;
      this.setState((oldState) => ({ ...oldState, disabled: false }));
    } else {
      // document.getElementById('formButton').disabled = true;
      this.setState((oldState) => ({ ...oldState, disabled: true }));
    }
  }

  render() {
    const { shouldRedirect, disabled } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <form>
        <fieldset>
          <label htmlFor="email-input">
            Email:
            <input
              type="text"
              onChange={ this.validateLogin }
              id="email-input"
              data-testid="email-input"
              value="teste@email.com"
            />
          </label>
          <br />
          <label htmlFor="password-input">
            Senha:
            <input
              type="password"
              onChange={ this.validateLogin }
              id="password-input"
              data-testid="password-input"
            />
          </label>
          <br />
          <button
            id="formButton"
            type="submit"
            onClick={ this.walletRedirect }
            disabled={ disabled }
          >
            Entrar

          </button>
        </fieldset>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLoginToState: (values) => dispatch(setLogin(values)),
  };
}

export default connect(null, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = PropTypes.func.isRequired;
