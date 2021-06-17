import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { setUser } from '../actions';

const MIN_LENGTH = 6; // password

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isBtnDisable: true,
      isLogged: false,
    };
    this.validateLogin = this.validateLogin.bind(this);
  }

  // regex reference: https://regexr.com/3e48o

  validateLogin() {
    const { email, password } = this.state;
    const isValidEmail = email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);

    if (password.length >= MIN_LENGTH && isValidEmail) {
      this.setState({ isBtnDisable: false });
    } else {
      this.setState({ isBtnDisable: true });
    }
  }

  redirectToWallet() {
    this.setState({ isLogged: true });
  }

  render() {
    const { email, isBtnDisable, isLogged } = this.state;
    const { setUserEmail } = this.props;
    if (isLogged) {
      return <Redirect to="/carteira" />;
    }
    return (
      <section className="login-container">
        <form>
          <label htmlFor="emailInput">
            Email:
            <input
              type="email"
              id="emailInput"
              placeholder="Email"
              data-testid="email-input"
              onChange={ (e) => {
                this.setState({ email: e.target.value }, this.validateLogin);
              } }
            />
          </label>
          <label htmlFor="passwordInput">
            Senha:
            <input
              type="password"
              id="passwordInput"
              placeholder="Password"
              data-testid="password-input"
              onChange={ (e) => {
                this.setState({ password: e.target.value }, this.validateLogin);
              } }
            />
          </label>
          <section className="btn-container">
            <button
              type="button"
              data-testid="btn-login"
              disabled={ isBtnDisable }
              onClick={ () => {
                setUserEmail(email);
                this.redirectToWallet();
              } }
            >
              Entrar
            </button>
          </section>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  setUserEmail: (state) => dispatch(setUser(state)),
});

Login.propTypes = {
  setUserEmail: PropTypes.func.isRequired,
};

export default connect(null, mapStateToProps)(Login);
