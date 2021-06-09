import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.buttonEnable = this.buttonEnable.bind(this);

    this.state = {
      email: 'exemplo@exemplo.com',
      password: '',
      validEmail: false,
      validPassword: false,
    };
  }

  handleChangeEmail(event) {
    const { target: { value } } = event;
    const isValid = this.validEmail(value);
    this.setState({
      email: value,
      validEmail: isValid,
    });
  }

  handleChangePassword(event) {
    const { target: { value } } = event;
    const isValid = this.validPassword(value);
    this.setState({
      password: value,
      validPassword: isValid,
    });
  }

  validEmail(email) {
    const re = /\S+@\S+\.\S+/;
    const validEmail = re.test(email);
    return validEmail;
  }

  validPassword(pw) {
    const NUMBER_CARACTER = 5;
    const validPassword = pw.length > NUMBER_CARACTER;
    return validPassword;
  }

  buttonEnable() {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  }

  render() {
    const { login } = this.props;
    const { email, password } = this.state;

    return (
      <form action="">
        <h1>Login</h1>
        <input
          onChange={ this.handleChangeEmail }
          type="email"
          data-testid="email-input"
          placeholder="E-mail"
          value={ email }
        />
        <input
          onChange={ this.handleChangePassword }
          type="password"
          data-testid="password-input"
          placeholder="Senha"
        />
        <Link
          to="/carteira"
          onClick={ () => login(email, password) }
        >
          <button type="button" disabled={ this.buttonEnable() }>Entrar</button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(loginAction(email, password)),
});

Login.propTypes = {
  login: PropTypes.object,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
