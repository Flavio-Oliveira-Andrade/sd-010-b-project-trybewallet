import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { actionLogar } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.getElementById('login-button').disabled = true;
  }

  handleChange() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const re = /\S+@\S+\.\S+/;
    const MIN_PASSWORD_LENGTH = 6;
    if (re.test(email) && password.length >= MIN_PASSWORD_LENGTH) {
      document.getElementById('login-button').disabled = false;
    } else {
      document.getElementById('login-button').disabled = true;
    }
  }

  handleClick() {
    const { logar, history } = this.props;
    logar(document.getElementById('email').value);
    history.push('/carteira');
  }

  render() {
    return (
      <section id="login">
        <h1>Login</h1>
        <label htmlFor="email">
          E-mail:
          <input
            type="text"
            id="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            id="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <input
          type="button"
          id="login-button"
          value="Entrar"
          onClick={ this.handleClick }
        />
      </section>
    );
  }
}

const mapStateToPros = () => ({});

const mapDispatchToProps = (dispatch) => ({
  logar: (email) => dispatch(actionLogar({ email })),
});

Login.propTypes = {
  logar: propTypes.func,
}.isRequired;

export default connect(mapStateToPros, mapDispatchToProps)(Login);
