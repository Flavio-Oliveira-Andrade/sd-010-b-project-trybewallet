import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      validEmail: false,
      validSenha: false,
      geral: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validaEmail = this.validaEmail.bind(this);
    this.validaSenha = this.validaSenha.bind(this);
  }

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

  //  função retirada do https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  validaEmail(email) {
    const emailTest = RegExp(/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/);
    const verificaEmail = emailTest.test(email);
    if (verificaEmail) {
      this.setState({
        validEmail: verificaEmail,
      },
      () => {
        const { validEmail, validSenha } = this.state;
        if (validEmail === true && validSenha === true) {
          this.setState({ geral: false });
        }
      });
    }
  }

  validaSenha(senha) {
    const tamSenha = 5;
    if (senha.length === tamSenha) {
      this.setState({
        validSenha: true,
      },
      () => {
        const { validEmail, validSenha } = this.state;
        if (validEmail && validSenha) {
          this.setState({ geral: false });
        }
      });
    }
  }

  render() {
    const { email, senha, geral } = this.state;

    return (
      <main className="login">
        Login
        <form>
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              type="email"
              data-testid="email-input"
              value={ email }
              onChange={ (event) => {
                this.handleChange(event);
              } }
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              id="senha"
              name="senha"
              type="password"
              value={ senha }
              data-testid="password-input"
              onChange={ (event) => {
                this.handleChange(event);
              } }
            />
          </label>
          <button disabled={ geral } type="button">Entrar</button>
        </form>
      </main>);
  }
}

export default Login;
