import React from 'react';

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
    const MIN_LENGTH = 5;
    const { email, password } = this.state;
    const verifySign = email.includes('@');
    const verifyDotCom = email.includes('.com');
    if (password.length >= MIN_LENGTH && verifySign && verifyDotCom) {
      this.setState({ loginError: false });
    }
    if (password.length < MIN_LENGTH) {
      this.setState({ loginError: true });
    }
  }

  render() {
    const { email, password, loginError } = this.state;
    return (
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
              this.setState({ email: e.target.value });
              this.validateLogin();
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
              this.setState({ password: e.target.value });
              this.validateLogin();
            } }
          />
        </label>

        <button
          type="button"
          data-testid="btn-login"
          onClick={ () => [email, password] }
          disabled={ loginError }

        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
