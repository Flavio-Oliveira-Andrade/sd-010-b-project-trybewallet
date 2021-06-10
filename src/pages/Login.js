import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginAction from '../actions/loginAction';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      mailValidation: false,
      passwordValidation: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.mailAndPassValidation = this.mailAndPassValidation.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
    this.mailAndPassValidation();
  }

  mailAndPassValidation() {
    const passwordMin = 5;
    const { email, password } = this.state;
    this.setState({
      mailValidation: email.match(/[a-z]+@[a-z]+.com/g),
      passwordValidation: password.length >= passwordMin,
    });
  }

  // Help de Diegho Moraes pra essa sacada de analizar direto do estado
  render() {
    const { userLogin } = this.props;
    const { email, mailValidation, passwordValidation } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            required
            placeholder="E-mail"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            required
            placeholder="Senha"
            onChange={ this.handleChange }
            min="6"
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !(mailValidation && passwordValidation) }
            onClick={ () => userLogin(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  userLogin: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userLogin: (userMail) => dispatch(loginAction(userMail)),
});

export default connect(null, mapDispatchToProps)(Login);
