import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      emailVerified: false,
      passwordVerified: false,
      redirect: false,
    };

    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
    this.login = this.login.bind(this);
  }

  verifyEmail({ target }) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    this.setState({
      email: target.value,
      emailVerified: emailRegex.test(target.value),
    });
  }

  verifyPassword({ target }) {
    const passwordMinLength = 6;

    this.setState({
      passwordVerified: target.value.length >= passwordMinLength,
    });
  }

  login() {
    const { email } = this.state;
    const { saveEmail } = this.props;

    saveEmail(email);
    this.setState({ redirect: true });
  }

  render() {
    const { emailVerified, passwordVerified, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <div>
        <form action="">
          <label htmlFor="userEmail">
            Email
            <input
              type="email"
              name="userEmail"
              data-testid="email-input"
              onChange={ this.verifyEmail }
            />
          </label>
          <label htmlFor="userPassword">
            Password
            <input
              type="password"
              name="userPassword"
              data-testid="password-input"
              onChange={ this.verifyPassword }
            />
          </label>
        </form>
        <button
          type="button"
          onClick={ this.login }
          disabled={ !emailVerified || !passwordVerified }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (userEmail) => dispatch(userLogin(userEmail)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
