import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      sendBtn: true,
    };
    this.validateBtn = this.validateBtn.bind(this);
  }

  validateBtn() {
    const passwordLength = 5;
    const { email, password } = this.state;
    const validateArroba = email.includes('@');
    const validateDomain = email.includes('.com');

    if (password.length > passwordLength && validateArroba && validateDomain) {
      this.setState({ sendBtn: false });
    } else {
      this.setState({ sendBtn: true });
    }
  }

  render() {
    const { sendBtn, email, password } = this.state;

    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ (e) => {
            this.setState({ email: e.target.value });
            this.validateBtn();
          } }
        />
        <br />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ (e) => {
            this.setState({ password: e.target.value });
            this.validateBtn();
          } }
        />
        <br />
        <button
          type="submit"
          onClick={ () => [email, password] }
          disabled={ sendBtn }
        >
          Entrar
        </button>
      </form>
    );
  }
}

// Requisito 2 feito com a ajuda do meu colega Leandro Reis, link de sua PR: https://github.com/tryber/sd-010-b-project-trybewallet/pull/37

export default Login;
