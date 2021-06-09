import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { actionLogar } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange() {
    const re = /\S+@\S+\.\S+/;
    const MIN_PASSWORD_LENGTH = 6;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (re.test(email) && password.length >= MIN_PASSWORD_LENGTH) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleClick() {
    const { logar, history } = this.props;
    logar(document.getElementById('email').value);
    history.push('/carteira');
  }

  render() {
    const { disabled } = this.state;
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
          disabled={ disabled }
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
