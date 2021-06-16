import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import loginAction from '../actions';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.onHandleClick = this.onHandleClick.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.autenLogin = this.autenLogin.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  onHandleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  onHandleClick() {
    const { login } = this.props;
    const { email } = this.state;
    login(email);
  }

  autenLogin() {
    const { email, password } = this.state;
    const re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    const EMAIL_MIN_LENGHT = 6;

    if (password.length >= EMAIL_MIN_LENGHT && re.test(email)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <main className="home-page">
        <h1 className="logo">Pagina de login </h1>
        <section className="divCenter">
          <div className="login-item">
            <label htmlFor="email">
              <input
                autoComplete="off"
                className="email"
                placeholder="E-mail"
                type="email"
                id="email"
                onChange={ this.onHandleChange }
                data-testid="email-input"
              />
            </label>
            <label htmlFor="password">
              <input
                className="password"
                placeholder="Senha"
                type="password"
                name="password"
                id="password"
                onChange={ this.onHandleChange }
                data-testid="password-input"
              />
            </label>
            <Link to="/carteira">
              <input
                className="buttonLogin"
                id="buttonLogin"
                type="button"
                value="Entrar"
                onClick={ this.onHandleClick }
                disabled={ !this.autenLogin() }
              />
            </Link>
          </div>
        </section>
      </main>
    );
  }
}
LoginForm.propTypes = {
  login: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});
export default connect(null, mapDispatchToProps)(LoginForm);
