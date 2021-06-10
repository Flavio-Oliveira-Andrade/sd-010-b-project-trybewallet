import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actionUpdate from '../actions';

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
    const { updateEmail } = this.props;
    const { Email } = this.state;
    updateEmail(Email, 'EMAIL');
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
    const { page, EmailBol, Senha } = this.state;

    if (page === true) {
      return <Redirect to="/carteira" />;
    }

    return (
      <form>
        <label htmlFor="Login">
          Login
          <input
            type="text"
            data-testId="email-input"
            name="Login"
            placeholder="Digite seu email"
            onChange={ this.email }
          />
        </label>
        <label htmlFor="Senha">
          Senha
          <input
            type="password"
            data-testId="password-input"
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

Login.propTypes = {
  updateEmail: PropTypes.func.isRequired,
};

const mapDispachToProps = (dispatch) => ({
  updateEmail: (value, tipo) => dispatch(
    actionUpdate(value, tipo),
  ),
});

export default connect(null, mapDispachToProps)(Login);
