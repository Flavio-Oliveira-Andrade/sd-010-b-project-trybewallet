import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { userInfo } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      disabled: true,
      redirect: false,
      email: '',
      password: 0,
    };
  }

  // Lógica de validação de inputs desenvolvida com a ajuda de Paulo Henrique Lima - Turma 10 - Tribo B e
  // Aladino Borges - Turma 10 - Tribo B

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, this.handleValidate);
  }

  handleValidate() {
    const { email, password } = this.state;
    const MIN_PASSWORD_LENGTH = 6;
    const regexEmail = /\S+@\S+\.\S+/;
    const emailText = email;
    const passwordNumber = password;

    if (regexEmail.test(emailText) && passwordNumber.length >= MIN_PASSWORD_LENGTH) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleClick() {
    const { email } = this.state;
    const { userToSend } = this.props;
    this.setState({
      redirect: true,
    });
    userToSend(email);
  }

  render() {
    const { disabled, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <section>
        Login
        <input
          name="email"
          data-testid="email-input"
          type="email"
          placeholder="Digite aqui o seu e-mail"
          onChange={ (event) => this.handleChange(event) }
        />
        <input
          name="password"
          data-testid="password-input"
          type="password"
          placeholder="Digite sua senha"
          onChange={ (event) => this.handleChange(event) }
        />
        <button
          type="button"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </section>
    );
  }
}

// Lógica feita com a ajuda do @Jonathan Souza - Turma 10 - Tribo B

const mapDispatchToProps = (dispatch) => ({
  userToSend: (email) => dispatch(userInfo(email)),
});

Login.propTypes = {
  userToSend: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
