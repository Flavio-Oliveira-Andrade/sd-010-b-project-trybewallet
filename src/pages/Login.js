import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import saveMail from '../actions/userActions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      isDisabled: true,
    };

    this.validateLogin = this.validateLogin.bind(this);
  }

  // Source:Função utilizada no projeto em grupo Trivia e adaptada neste contexto
  validateLogin() {
    const emailInput = document.getElementById('email-input-id').value;
    const passwordInput = document.getElementById('password-input-id').value;
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
        <label htmlFor="email-input-id">
          E-mail:
          <input
            id="email-input-id"
            type="email"
            data-testid="email-input"
            onChange={ this.validateLogin }
            placeholder="Digite aqui seu e-mail"
          />
        </label>
        <label htmlFor="password-input-id">
          Senha:
          <input
            id="password-input-id"
            type="text"
            data-testid="password-input"
            onChange={ this.validateLogin }
            placeholder="Digite aqui sua senha"
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
