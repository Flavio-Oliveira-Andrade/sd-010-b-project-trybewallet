import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import loginAction from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      btnEnabler: true,
      shouldRedirect: false,
    };
    this.inputsValidation = this.inputsValidation.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  emailChange({ target: { value } }) {
    this.setState({ email: value });
    this.inputsValidation();
  }

  passwordChange({ target: { value } }) {
    this.setState({ password: value });
    this.inputsValidation();
  }

  handleClick() {
    const { email, password } = this.state;
    const { loginValidation } = this.props;
    loginValidation(email, password);
    this.setState({ shouldRedirect: true });
  }

  inputsValidation() {
    const { email, password } = this.state;
    const emailValidation = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
    const passwordValidation = /\d{5,}/;
    if (email.match(emailValidation) && password.match(passwordValidation)) {
      this.setState({ btnEnabler: false });
    } else { this.setState({ btnEnabler: true }); }
  }

  render() {
    const { email, password, btnEnabler, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return (
        <Redirect to="/carteira" />
      );
    }

    return (
      <div>
        <header>Faça o Login</header>
        <section>
          <input
            type="email"
            placeholder="digite seu email"
            data-testid="email-input"
            onChange={ this.emailChange }
            value={ email }
          />
          <input
            type="password"
            placeholder="digite sua senha"
            data-testid="password-input"
            onChange={ this.passwordChange }
            value={ password }
          />
          <button
            type="submit"
            onClick={ this.handleClick }
            disabled={ btnEnabler }
          >
            Entrar
          </button>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginValidation: (email, password) => dispatch(loginAction({
    userEmail: email,
    userPassword: password,
  })),
});

Login.propTypes = {
  loginValidation: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
