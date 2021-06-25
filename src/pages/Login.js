import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailValid: false,
      passwordValid: false,
      redirect: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isFormOk = this.isFormOk.bind(this);
  }

  componentDidUpdate() {
    this.isFormOk();
  }

  isFormOk() {
    const { emailValid, passwordValid } = this.state;
    if (emailValid && passwordValid) {
      const button = document.getElementById('button');
      button.disabled = false;
    }
  }

  handleEmailChange(eve) {
    const email = eve.target.value;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailValid = regex.test(email);
    if (emailValid) {
      this.setState((oldState) => ({
        ...oldState,
        emailValid: true,
        email,
      }));
    } else {
      this.setState((oldState) => ({
        ...oldState,
        email,
        emailValid: false,
      }));
    }
  }

  handlePasswordChange(eve) {
    const password = eve.target.value;
    const six = 6;
    if (password.length >= six) {
      this.setState((oldState) => ({
        ...oldState,
        passwordValid: true,
      }));
    } else {
      this.setState({ passwordValid: false });
    }
  }

  handleSubmit() {
    const { email } = this.state;
    const { dispatchUser } = this.props;
    dispatchUser(email);
    this.setState((oldState) => ({
      ...oldState,
      redirect: true,
    }));
  }

  render() {
    const { redirect } = this.state;
    return (
      <main>
        <label htmlFor="email-input">
          Email:
          <input
            data-testid="email-input"
            name="email-input"
            id="email-input"
            type="email"
            placeholder="trybe@betrybe.com"
            required
            onChange={ this.handleEmailChange }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            data-testid="password-input"
            name="password-input"
            id="password-input"
            type="password"
            placeholder="Digite sua senha"
            required
            onChange={ this.handlePasswordChange }
          />
        </label>
        <button
          id="button"
          type="button"
          disabled
          onClick={ this.handleSubmit }
        >
          Entrar
        </button>
        {redirect && <Redirect to="/carteira" />}
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUser: (email) => dispatch(
    userAction(email),
  ),
});

Login.propTypes = {
  dispatchUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
