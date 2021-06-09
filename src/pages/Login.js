import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addUsername } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this.loginBtn = this.loginBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.shouldRedirect = this.shouldRedirect.bind(this);
  }

  loginBtn() {
    const { email, password } = this.state;
    // fonte: https://www.w3resource.com/javascript/form/email-validation.php

    const mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordMinLenght = 6;
    if (email.match(mail) && password.length >= passwordMinLenght) {
      return false;
    }
    return true;
  }

  shouldRedirect(e) {
    const { setUser } = this.props;
    const { email } = this.state;
    if (!email) {
      e.preventDefault();
    }
    setUser(email);
  }

  handleChange({ value, name }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="App">
        <form className="Login">
          <input
            data-testid="email-input"
            type="text"
            name="email"
            maxLength="50"
            placeholder="Email"
            value={ email }
            onChange={ (e) => this.handleChange(e.target) }
            required
          />
          <input
            data-testid="password-input"
            type="password"
            name="password"
            maxLength="50"
            placeholder="Senha"
            value={ password }
            onChange={ (e) => this.handleChange(e.target) }
            required
          />
          <button
            disabled={ this.loginBtn() }
            type="button"
            to="/carteira"
            onClick={ this.shouldRedirect }
          >
            <Link to="/carteira">
              Entrar
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

const mapDispathToProps = (dispatch) => ({
  setUser: (email) => dispatch(addUsername(email)),
});

export default connect(null, mapDispathToProps)(Login);
