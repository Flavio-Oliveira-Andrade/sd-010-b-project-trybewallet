import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import loginAction from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmail: false,
      isPassword: false,
    };
    this.checkEmail = this.checkEmail.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  checkEmail({ target }) {
    const { value } = target;
    const emailRegexp = RegExp(/[a-z]+@[a-z]+.com/g);
    const isEmail = emailRegexp.test(value);
    this.setState({
      isEmail,
    });
  }

  checkPassword({ target }) {
    const { value } = target;
    const LENGHT_VALID = 6;
    if (value.length >= LENGHT_VALID) this.setState({ isPassword: true });
  }

  enableButton() {
    const { isEmail, isPassword } = this.state;
    return (isEmail && isPassword);
  }

  render() {
    return (
      <form>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            id="email"
            onChange={ (e) => this.checkEmail(e) }
            data-testid="email-input"
          />
        </label>
        <br />
        <label htmlFor="senha">
          <input
            type="password"
            name="password"
            id="senha"
            onChange={ (e) => this.checkPassword(e) }
            data-testid="password-input"
          />
        </label>
        <br />
        <Link
          to="/wallet"
        >
          <button type="button" disabled={ !this.enableButton() }>
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginAction(e)),
});

export default connect(null, mapDispatchToProps)(Login);
