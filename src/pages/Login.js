import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      email: '',
      btnDisable: true,
    };

    this.check = this.check.bind(this);
    this.checkButton = this.checkButton.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateEmail(email) {
    const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    return re.test(email);
  }

  checkButton() {
    const { email, password } = this.state;
    const SENHA_MAIOR_6 = 5;
    if (this.validateEmail(email) && password.length >= SENHA_MAIOR_6) {
      this.setState({ btnDisable: false });
    }
  }

  check({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value });
    this.checkButton();
  }

  render() {
    const { btnDisable } = this.state;
    return (
      <form>
        <input
          id="email"
          type="email"
          data-testid="email-input"
          onChange={ this.check }
        />
        <input
          id="password"
          type="password"
          data-testid="password-input"
          min="6"
          onChange={ this.check }
        />
        <button type="button" id="login" disabled={ btnDisable }>Entrar</button>
      </form>
    );
  }
}

export default Login;
