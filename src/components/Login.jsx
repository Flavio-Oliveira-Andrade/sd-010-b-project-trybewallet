import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loginUser from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.inviteState = this.inviteState.bind(this);
    this.validateEmailAndPassword = this.validateEmailAndPassword.bind(this);

    this.state = {
      login: '',
      disable: true,
      password: '',
    };
  }

  inviteState() {
    const { login } = this.state;
    const { add } = this.props;

    add(login);
  }

  validateEmail(mail) {
    const format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    // Alessandra passou o Regex que ela utilizou no projeto dela.
    if (mail.match(format)) {
      return true;
    }
    return false;
  }

  validateEmailAndPassword() {
    const { login, password } = this.state;
    const minLength = 6;
    if (this.validateEmail(login) === true && password.length >= minLength) {
      this.setState({
        disable: false,
      });
    } else {
      this.setState({
        disable: true,
      });
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, () => this.validateEmailAndPassword());
  }

  render() {
    const { login, password, disable } = this.state;
    return (
      <form>
        <label htmlFor="login">
          Login
          <input
            type="email"
            id="login"
            name="login"
            value={ login }
            data-testid="email-input"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            value={ password }
            data-testid="password-input"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <button type="submit" disabled={ disable } onClick={ this.inviteState }>
          <Link to="/carteira">
            Entrar
          </Link>
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (mail) => dispatch(loginUser(mail)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  add: PropTypes.func.isRequired,
};
