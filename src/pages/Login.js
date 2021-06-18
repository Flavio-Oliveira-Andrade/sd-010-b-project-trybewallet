import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionLogin } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonDisabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const button = document.getElementById('login-button');
    button.disabled = true;
  }

  handleChange() {
    // Ref- https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const validation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const MIN_LEN_PASS = 6;

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (validation.test(email) && password.length >= MIN_LEN_PASS) {
      this.setState({ buttonDisabled: false });
    } else {
      this.setState({ buttonDisabled: true });
    }
  }

  handleClick() {
    const { login, history } = this.props;
    const valueEmail = document.getElementById('email').value;

    login(valueEmail);
    history.push('/carteira');
  }

  render() {
    const { buttonDisabled } = this.state;

    return (
      <section>
        <h1>Trybe Login</h1>

        <label htmlFor="email-login">
          Email
          <input
            id="email"
            type="text"
            name="email"
            placeholder="email@email.com"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="password-login">
          Senha
          <input
            id="password"
            type="password"
            name="password"
            placeholder="informe sua senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>

        <button
          id="login-button"
          type="button"
          onClick={ this.handleClick }
          disabled={ buttonDisabled }
        >
          Entrar
        </button>

      </section>
    );
  }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(actionLogin({ email })),
});

Login.propTypes = {
  login: propTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
