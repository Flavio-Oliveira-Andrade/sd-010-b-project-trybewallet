import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      isEmail: false,
      login: false,
    };

    // this.handleChange = this.handleChange.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
    this.validCredentials = this.validCredentials.bind(this);
    this.goToCarteira = this.goToCarteira.bind(this);
    // this.verify = this.verify.bind(this);
  }

  componentDidMount() {
    const buttonLogin = document.querySelector('#button-login');
    buttonLogin.disabled = true;
  }

  verifyEmail({ target }) {
    const { value } = target;
    if (value.includes('@') && value.includes('.com')) {
      this.setState({ isEmail: true });
    }
    this.setState({ email: value });
    this.validCredentials();
  }

  verifyPassword({ target }) {
    const { value } = target;
    const MIN_CHAR = 5;
    if (value.length >= MIN_CHAR) {
      this.setState({ isPassword: true });
    }
    this.validCredentials();
  }

  validCredentials() {
    const { isEmail, isPassword } = this.state;
    const buttonLogin = document.querySelector('#button-login');
    if (isEmail === true && isPassword === true) {
      buttonLogin.disabled = false;
    }
  }

  goToCarteira() {
    this.setState({ login: true });
    const { userEmail } = this.props;
    const { email } = this.state;
    userEmail(email);
  }

  render() {
    const { login } = this.state;
    return (
      <main>
        <header>
          <h1 className="home-title">
            Home
          </h1>
        </header>
        <div className="input-box">
          <form>
            <label htmlFor="email">
              <input
                type="text"
                name="email"
                placeholder="Usuário"
                data-testid="email-input"
                onChange={ (event) => this.verifyEmail(event) }
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder="Senha"
                data-testid="password-input"
                onChange={ (event) => this.verifyPassword(event) }
              />
            </label>
            <button
              id="button-login"
              type="button"
              onClick={ this.goToCarteira }
            >
              Entrar
            </button>
          </form>
        </div>
        {login && <Redirect to="/carteira" />}
      </main>
    );
  }
}

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  userEmail: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
