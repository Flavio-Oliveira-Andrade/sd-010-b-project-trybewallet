import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      senha: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { history, updateUser } = this.props;
    const { email, senha } = this.state;
    // Crédito Alessandra Rezende
    const validaEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const min = 6;
    const habilitaBotao = email.match(validaEmail) && senha.length >= min ? null : true;
    const checkLogin = () => {
      updateUser(email);
      history.push('/carteira');
    };

    return (
      <div className="login">
        <label htmlFor="email">
          <input
            type="email"
            placeholder="E-mail"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label htmlFor="senha">
          <input
            type="password"
            placeholder="Senha"
            data-testid="password-input"
            name="senha"
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <button
          type="button"
          className="btnLogin"
          onClick={ checkLogin }
          disabled={ habilitaBotao }
        >
          {' '}
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateUser: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  updateUser: PropTypes.func.isRequired,
  history: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
