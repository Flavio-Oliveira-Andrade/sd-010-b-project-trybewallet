import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import saveMail from '../actions/userActions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.validateLogin = this.validateLogin.bind(this);

    this.state = {
      email: '',
      isDisabled: true,
    };
  }

  // Source:Função utilizada no projeto em grupo Trivia e adaptada neste contexto
  validateLogin() {
    const emailInput = document.getElementById('email-input').value;
    const passwordInput = document.getElementById('password-input').value;
    const SIX_CHAR = 6;

    const validEmail = (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/).test(emailInput);
    const validPassword = passwordInput.length >= SIX_CHAR;
    if (validEmail && validPassword) {
      this.setState({
        email: emailInput,
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  render() {
    const { email, isDisabled } = this.state;
    const { login } = this.props;

    return (
      <div>
        <label htmlFor="email-field">
          E-mail
          <input
            name="email-field"
            id="email-input"
            type="email"
            data-testid="email-input"
            onChange={ this.validateLogin }
            placeholder="Email"
          />
        </label>
        <label htmlFor="password-field">
          Senha
          <input
            name="password-field"
            id="password-input"
            type="text"
            data-testid="password-input"
            onChange={ this.validateLogin }
            placeholder="Senha"
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => login(email) }
            disabled={ isDisabled }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(saveMail(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
