import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loginError: true,
    };
    this.validateLogin = this.validateLogin.bind(this);
  }

  validateLogin() {
    const MIN_LENGTH = 6;
    const { email, password } = this.state;
    const verifySign = email.includes('@'); // change to regex
    const verifyDotCom = email.includes('.com'); // change to regex
    if (password.length >= MIN_LENGTH && verifySign && verifyDotCom) {
      this.setState({ loginError: false });
    }
    if (password.length < MIN_LENGTH) {
      this.setState({ loginError: true });
    }
  }

  render() {
    const { email, loginError } = this.state;
    const { setUserEmail } = this.props;
    return (
      <section className="login-container">
        <form>
          <label htmlFor="emailInput">
            Email:
            <input
              type="email"
              name="emailInput"
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
              name="passwordInput"
              id="passwordInput"
              placeholder="Password"
              data-testid="password-input"
              onChange={ (e) => {
                this.setState({ password: e.target.value }, this.validateLogin);
              } }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              data-testid="btn-login"
              disabled={ loginError }
              onClick={ () => setUserEmail(email) }
            >
              Entrar
            </button>
          </Link>
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
