import React from 'react';
import { Redirect } from 'react-router';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      shouldRedirect: false,
    };

    this.loginEntry = this.loginEntry.bind(this);
    this.saveInGlobalState = this.saveInGlobalState.bind(this);
  }

  loginEntry({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  saveInGlobalState() {
    const { email } = this.state;
    const { user } = this.props;
    user(email);
    this.setState({ shouldRedirect: true });
  }

  renderEmailInput() {
    const { email } = this.state;
    return (
      <label htmlFor="input_email">
        E-mail
        <input
          id="input_email"
          data-testid="email-input"
          type="email"
          name="email"
          placeholder="Insira o e-mail"
          className="form-email"
          value={ email }
          onChange={ this.loginEntry }
        />
      </label>
    );
  }

  renderPasswordInput() {
    const { password } = this.state;
    return (
      <label htmlFor="input_password">
        Senha
        <input
          id="input_password"
          data-testid="password-input"
          type="password"
          name="password"
          placeholder="Insira senha"
          className="form-password"
          value={ password }
          onChange={ this.loginEntry }
        />
      </label>
    );
  }

  renderSubmitButton() {
    const { email, password } = this.state;
    const referenceSize = 6;
    return (
      <button
        type="button"
        disabled={
          // /\w+@\w+\.\w+/.test(email)
          !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && password.length >= referenceSize)
        }
        onClick={ this.saveInGlobalState }
      >
        Entrar
      </button>
    );
  }

  render() {
    const { shouldRedirect } = this.state;
    if (shouldRedirect) {
      return (<Redirect to="/carteira" />);
    }
    return (
      <>
        <h1>Hello, TrybeWallet!</h1>
        <h2>Login</h2>
        <form>
          { this.renderEmailInput() }
          { this.renderPasswordInput() }
          { this.renderSubmitButton() }
        </form>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (state) => dispatch(addUser(state)),
});

Login.propTypes = {
  user: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
