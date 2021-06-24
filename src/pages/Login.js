import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { salvaLoginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisable: true,
      email: '',
      password: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleLogin() {
    const { email, password } = this.state;
    const emailReg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const passwordLength = 6;
    if (emailReg.test(email) && password.length >= passwordLength) {
      this.setState({ isDisable: false });
    } else {
      this.setState({ isDisable: true });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value }, () => this.handleLogin());
  }

  render() {
    const { salvaLogin } = this.props;
    const { isDisable, email, password } = this.state;
    return (
      <section>
        <p>Login</p>
        <form>
          <label htmlFor="email-input">
            Email
            <input
              data-testid="email-input"
              type="email"
              value={ email }
              name="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Senha
            <input
              data-testid="password-input"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <Link to="/carteira">
            <button
              type="button"
              disabled={ isDisable }
              inClick={ () => salvaLogin(email) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  salvaLogin: (email) => dispatch(salvaLoginAction(email)),
});

Login.propTypes = {
  salvaLogin: PropTypes.func.isRequired,
};

// https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
// https://github.com/tryber/sd-010-a-project-trybewallet/blob/michael-petterson/src/components/Header.jsx
export default connect(null, mapDispatchToProps)(Login);
