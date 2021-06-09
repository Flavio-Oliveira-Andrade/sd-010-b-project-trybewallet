import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      EmailBol: true,
      Senha: true,
      page: false,
    };
    this.email = this.email.bind(this);
    this.senha = this.senha.bind(this);
    this.botao = this.botao.bind(this);
  }

  botao() {
    this.setState({ page: true });
  }

  email({ target: { value } }) {
    if (value.match(/[a-z]+@[a-z]+.com/g)) {
      this.setState({
        Email: value,
        EmailBol: false,
      });
    }
  }

  senha({ target: { value } }) {
    const senhaMinima = 5;
    if (value.length > senhaMinima) {
      this.setState({
        Senha: false,
      });
    }
  }

  render() {
    const { page, EmailBol, Senha, Email } = this.state;

    if (page === true) {
      return <Redirect to="/carteira" />;
    }

    return (
      <form>
        {console.log(Email)}
        <label htmlFor="Login">
          Login
          <input
            type="text"
            data-testid="email-input"
            name="Login"
            placeholder="Digite seu email"
            onChange={ this.email }
          />
        </label>
        <label htmlFor="Senha">
          Senha
          <input
            type="text"
            data-testid="password-input"
            name="Senha"
            placeholder="Digite sua senha"
            onChange={ this.senha }
          />
        </label>
        <button
          type="button"
          disabled={ EmailBol || Senha }
          onClick={ this.botao }
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
