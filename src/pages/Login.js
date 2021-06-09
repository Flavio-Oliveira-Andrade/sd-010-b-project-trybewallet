import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { addEmail } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userEmail: '',
      redirect: false,
      validEmail: false,
      validPassword: false,
    };
    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  verifyEmail({ value }) {
    if (value.match(/[a-z]+@[a-z]+.com/g)) {
      this.setState({
        validEmail: true,
      });
    }

    this.setState({
      userEmail: value,
    });
  }

  verifyPassword({ value }) {
    const minimumLength = 6;
    if (value.length >= minimumLength) {
      this.setState({
        validPassword: true,
      });
    }
  }

  buttonClick() {
    const { userEmail } = this.state;
    const { loginWallet } = this.props;
    loginWallet(userEmail);
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { redirect, validEmail, validPassword } = this.state;
    return (
      <form>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ ({ target }) => this.verifyEmail(target) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ ({ target }) => this.verifyPassword(target) }
          />
        </label>
        <button
          type="button"
          onClick={ this.buttonClick }
          disabled={ !validEmail || !validPassword }
        >
          Entrar
        </button>
        { redirect && <Redirect to="/carteira" /> }
      </form>
    );
  }
}

Login.propTypes = {
  loginWallet: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginWallet: (email) => dispatch(addEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
