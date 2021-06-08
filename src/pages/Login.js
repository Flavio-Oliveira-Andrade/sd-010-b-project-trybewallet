import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import userLoginAction from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isDisable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.verificationValidInput = this.verificationValidInput.bind(this);
  }

  verificationValidInput() {
    const { email, password } = this.state;
    const minimalPasswordLength = 6;

    // Verificação de email conseguido através do site do Stackoverflow no link https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const emailValidationRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    if (emailValidationRegex.test(email) && password.length >= minimalPasswordLength) {
      this.setState({ isDisable: false });
    } else {
      this.setState({ isDisable: true });
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.verificationValidInput());
  }

  render() {
    const { userLogin } = this.props;
    const { isDisable, email } = this.state;
    return (
      <section>
        Login
        <form>
          <label htmlFor="email-input">
            Email
            <input
              name="email"
              id="email-input"
              data-testid="email-input"
              type="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Senha
            <input
              name="password"
              id="password-input"
              data-testid="password-input"
              type="password"
              minLength="6"
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              type="submit"
              disabled={ isDisable }
              onClick={ () => userLogin(email) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (email) => dispatch(userLoginAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
};
