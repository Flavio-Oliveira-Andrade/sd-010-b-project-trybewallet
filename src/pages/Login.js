import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      invalidEmail: false,
      invalidPassword: false,
      buttonDisabled: true,
    };
    this.validateFields = this.validateFields.bind(this);
    this.loginEnabled = this.loginEnabled.bind(this);
  }

  validateFields() {
    const { email, password } = this.state;
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const regexPassword = /\d{6,}/;

    if (email.match(regexEmail)) {
      this.setState({ invalidEmail: false }, () => { this.loginEnabled(); });
    } else {
      this.setState({ invalidEmail: true }, () => { this.loginEnabled(); });
    }

    if (password.match(regexPassword)) {
      this.setState({ invalidPassword: false }, () => { this.loginEnabled(); });
    } else {
      this.setState({ invalidPassword: true }, () => { this.loginEnabled(); });
    }
  }

  loginEnabled() {
    const { email, password, invalidEmail, invalidPassword } = this.state;
    if (email === '' && password === '') {
      return this.setState({ buttonDisabled: true });
    }

    this.setState({ buttonDisabled: invalidPassword || invalidEmail });
  }

  render() {
    const { buttonDisabled } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Usuário:
            <input
              data-testid="email-input"
              id="email-input"
              type="text"
              name="usuario"
              onChange={ (event) => {
                this.validateFields();
                this.setState({ email: event.target.value },
                  () => { this.validateFields(); });
              } }
            />
          </label>
          <label htmlFor="password-input">
            Senha:
            <input
              data-testid="password-input"
              id="password-input"
              type="password"
              onChange={ (event) => {
                this.validateFields();
                this.setState({ password: event.target.value },
                  () => { this.validateFields(); });
              } }
            />
          </label>
          <button
            type="button"
            disabled={ buttonDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
