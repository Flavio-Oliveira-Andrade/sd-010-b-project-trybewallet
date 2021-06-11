import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      sendBtn: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  validateRejex() {
    const passwordLength = 5;
    const { email, password } = this.state;
    const regex = /\S+@\S+\.\S+/;

    if (email.match(regex) && password.length > passwordLength) {
      this.setState({
        sendBtn: true,
      });
    }
  }
  // Aprendendo a usar regex em: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    },
    this.validateRejex());
  }

  render() {
    const { sendBtn } = this.state;

    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
          handleChange={ this.handleChange }
        />
        <br />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          handleChange={ this.handleChange }
        />
        <br />
        <button
          type="submit"
          disabled={ !sendBtn }
        >
          Entrar
        </button>
      </form>
    );
  }
}

// Requisito 2 feito com a ajuda do meu colega Fábio Marturano, link de sua PR: https://github.com/tryber/sd-010-b-project-trybewallet/pull/14

export default Login;
