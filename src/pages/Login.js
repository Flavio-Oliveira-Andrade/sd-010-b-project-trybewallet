import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { authLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailValid: false,
      isPasswordValid: false,
      auth: false,
      logs: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateFields = this.validateFields.bind(this);
    this.getAuthStatus = this.getAuthStatus.bind(this);
  }

  getAuthStatus() {
    const { isEmailValid, isPasswordValid } = this.state;
    const auth = isEmailValid && isPasswordValid;
    return !auth;
  }

  handleChange(name, value) {
    const { isEmailValid, isPasswordValid } = this.state;
    this.setState({
      [name]: value,
      auth: (isEmailValid && isPasswordValid),
    });
  }

  validateFields({ target }) {
    const { name, value } = target;
    let { auth, isEmailValid, isPasswordValid } = this.state;
    const emailRegularEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordLength = 6;
    switch (name) {
    case 'email':
      isEmailValid = emailRegularEx.test(value);
      auth = isEmailValid && isPasswordValid;
      if (!isEmailValid) {
        this.setState({ logs: 'Email deve seguir fulano@email.com', auth });
      }
      this.setState({ isEmailValid, auth });
      this.handleChange(name, value);
      break;
    case 'password':
      isPasswordValid = value.length >= passwordLength;
      isEmailValid = emailRegularEx.test(value);
      auth = isEmailValid && isPasswordValid;
      if (!isPasswordValid) {
        this.setState({ logs: 'Senha insegura.', auth });
      }
      this.setState({ isPasswordValid, auth });
      this.handleChange(name, value);
      break;
    default:
      return 'Error: Invalid Element';
    }
  }

  saveReduxState({ loginDispatch }) {
    loginDispatch(this.state);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect, logs } = this.state;
    const disableButton = this.getAuthStatus();
    const errorMessage = disableButton && logs
      ? <span className="error-message">{ logs }</span>
      : '';
    if (redirect) { return <Redirect to="/carteira" />; }
    return (
      <section id="Login">
        <header className="main-header">
          <h1>Hello, TrybeWallet!</h1>
        </header>
        <div className="box-login">
          <h2 className="secondary-heading">Login</h2>
          <div className="textbox">
            <i className="fas fa-user" aria-hidden="true" />
            <input
              type="text"
              name="email"
              className="input input-text"
              onChange={ this.validateFields }
              placeholder="Email"
              data-testid="email-input"
            />
          </div>
          <div className="textbox">
            <i className="fas fa-lock" aria-hidden="true" />
            <input
              type="password"
              name="password"
              className="input input-text"
              onChange={ this.validateFields }
              placeholder="Password"
              data-testid="password-input"
            />
          </div>
          <input
            type="button"
            disabled={ disableButton }
            value="Entrar"
            className="input input-button"
            onClick={ () => (this.saveReduxState(this.props)) }
          />
          { errorMessage }
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginDispatch: (state) => dispatch(authLogin(state)) });
export default connect(null, mapDispatchToProps)(Login);
