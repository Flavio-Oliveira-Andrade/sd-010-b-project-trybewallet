import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      emailValidation: false,
      passwordValidation: false,
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validaEmail = this.validaEmail.bind(this);
    this.validaSenha = this.validaSenha.bind(this);
  }

  //  função retirada do https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail

  // Baseado na lógica de Mariana Mohr - https://github.com/tryber/sd-010-b-project-trybewallet/pull/22/commits/9c87af1008e6737638955bb0351505d9fc3d532f#

  handleChange({ target }) {
    const { value, name } = target;
    const { email, senha } = this.state;
    this.setState({
      [name]: value,
    },
    () => {
      if (name === 'email') { this.validaEmail(email); }
      if (name === 'senha') { this.validaSenha(senha); }
    });
  }

  validaEmail(email) {
    const emailTest = RegExp(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/);
    const verificaEmail = emailTest.test(email);
    if (verificaEmail) {
      this.setState({
        emailValidation: verificaEmail,
      },
      () => {
        const { emailValidation, passwordValidation } = this.state;
        if (emailValidation === true && passwordValidation === true) {
          this.setState({ disabled: false });
        }
      });
    }
  }

  validaSenha(senha) {
    const passwordSize = 6;
    if (senha.length >= passwordSize) {
      this.setState({
        passwordValidation: true,
      },
      () => {
        const { emailValidation, passwordValidation } = this.state;
        if (emailValidation && passwordValidation) {
          this.setState({ disabled: false });
        }
      });
    }
  }

  render() {
    const { email, senha, disabled } = this.state;

    return (
      <form>
        <label htmlFor="email">
          <input
            name="email"
            id="email"
            data-testid="email-input"
            type="email"
            placeholder="E-mail"
            onChange={ (event) => this.handleChange(event) }
            value={ email }
          />
        </label>
        <label htmlFor="senha">
          <input
            name="senha"
            id="senha"
            data-testid="password-input"
            type="password"
            placeholder="Senha"
            onChange={ (event) => this.handleChange(event) }
            value={ senha }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

export default Login;
