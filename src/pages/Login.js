import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validEmail: false,
      validPassword: false,
      disabled: true,
    };
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleDisabled = this.handleDisabled.bind(this);
  }

  handleDisabled() {
    const { validEmail, validPassword, disabled } = this.state;
    console.log(validEmail);
    console.log(validPassword);
    console.log(disabled);
    if (validEmail === true && validPassword === true) {
      this.setState({ disabled: false });
    }
  }

  handleChangePassword(e) {
    const qtdPassword = e.target.value.length;
    const passwordLength = 4;
    if (qtdPassword > passwordLength) {
      this.setState({
        password: e.target.value,
        validPassword: true,
      });
      this.handleDisabled();
    }
  }

  handleChangeEmail(e) {
    if (e.target.value.match(/((\w+)@(\w+)\.(\w+))/i)) {
      this.setState({
        email: e.target.value,
        validEmail: true,
      });
      this.handleDisabled();
    } else {
      this.setState({
        email: '',
        validEmail: false,
      });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    console.log(email);
    console.log(password);
    return (
      <>
        <div>Login</div>
        <input
          data-testid="email-input"
          name="email"
          onChange={ this.handleChangeEmail }
        />
        <input
          data-testid="password-input"
          name="password"
          onChange={ this.handleChangePassword }
        />
        <button
          disabled={ disabled }
          type="button"
          onClick={ this.validarEmail }
        >
          Entrar
        </button>
      </>
    );
  }
}

export default connect()(Login);
