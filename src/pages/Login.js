import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      Senha: false,
      Alert: '',
      page: '',
    };
    this.entrar = this.entrar.bind(this);
    this.email = this.email.bind(this);
    this.senha = this.senha.bind(this);
  }

  entrar() {
    const { Senha, Email } = this.state;
    if (Email === '') {
      this.setState({
        Alert: 'Loguin invalido',
      });
      return console.log('Loguin');
    }
    if (Senha === false) {
      this.setState({
        Alert: 'senha invalida',
      });
      return console.log('Senha');
    }
    this.setState({
      page: 'carteira',
    });
  }

  email({ target: { value } }) {
    if (value.match(/[a-z]+@[a-z]+.com/g)) {
      this.setState({
        Email: value,
      });
    }
  }

  senha({ target: { value } }) {
    const senhaMinima = 6;
    if (value.length > senhaMinima) {
      this.setState({
        Senha: true,
      });
    }
  }

  render() {
    const { Alert, page } = this.state;

    if (page === 'carteira') {
      return <Redirect to="/carteira" />;
    }

    return (
      <form>
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
            data-testid="email-input"
            name="Senha"
            placeholder="Digite sua senha"
            onChange={ this.senha }
          />
        </label>
        <button type="button" onClick={ this.entrar }>Entrar</button>
        <p>{`${Alert}`}</p>
      </form>
    );
  }
}

export default Login;
