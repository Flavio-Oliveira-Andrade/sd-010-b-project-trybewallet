import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';

import './Login.css';

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
    const { updateUser, history } = this.props;
    const { email, senha } = this.state;

    const checkEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const min = 6;
    const verificaBotao = email.match(checkEmail) && senha.length >= min ? null : true;

    const checkLogin = () => {
      updateUser(email);
      history.push('/carteira');
    };

    return (
      <div className="login">
        <h3 className="paragrafo">LOGIN</h3>
        <label htmlFor="email" className="title">
          E-mail:
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <br />
        <label htmlFor="senha" className="title">
          Senha:
          <input
            type="password"
            data-testid="password-input"
            name="senha"
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <br />
        <button
          type="button"
          className="btnLogin"
          disabled={ verificaBotao }
          onClick={ checkLogin }
        >
          {' '}
          ENTRAR
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
