import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabledButton: true,
    };
    this.validarCampos = this.validarCampos.bind(this);
  }

  validarCampos() {
    const { email, password } = this.state;
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const validPassword = /\d{5,}/;

    if (email.match(validEmail)) {
      if (password.match(validPassword)) {
        this.setState({ disabledButton: false });
      }
    } else {
      this.setState({ disabledButton: true });
    }
  }

  render() {
    const { email, password, disabledButton } = this.state;
    const { login } = this.props;
    return (
      <main>
        <h1>Login</h1>
        <form>
          <label htmlFor="inputEmail">
            E-mail
            <input
              data-testid="email-input"
              type="email"
              name="email"
              onChange={ (event) => {
                this.validarCampos();
                this.setState({ email: event.target.value });
              } }
            />
          </label>
          <label htmlFor="InputPassword">
            Password
            <input
              data-testid="password-input"
              type="password"
              name="password"
              onChange={ (event) => {
                this.validarCampos();
                this.setState({ password: event.target.value });
              } }
            />
          </label>
          <Link to="/carteira">
            <button type="button" disabled={ disabledButton } onClick={ () => login({ email, password }) }>Entrar</button>
          </Link>
        </form>
      </main>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginAction(e)) });

export default connect(null, mapDispatchToProps)(Login);
