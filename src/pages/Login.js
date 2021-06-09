import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginAction } from '../actions';

// Fontes:
// - https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
// - https://github1s.com/tryber/sd-10b-live-lectures/blob/lecture/16.5/students-register/src/pages/Login.js
// - https://github.com/gabriellukke/plantao-revisao-redux-bloco-16/blob/with-redux-B/src/redux/reducers/index.js

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailCheck: false,
      passwordCheck: false,
      btnLock: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
  }

  handleChange({ target: { value, name } }) {
    const { email, password } = this.state;
    this.setState({
      [name]: value,
    },
    () => {
      if (name === 'email') { this.emailValidation(email); }
      if (name === 'password') { this.passwordValidation(password); }
    });
  }

  emailValidation(email) {
    const standartEmail = RegExp(/^[\w+.]+@\w+\.\w{2,}?$/);
    const validation = standartEmail.test(email);
    if (validation) {
      this.setState({
        emailCheck: validation,
      }, () => {
        const { emailCheck, passwordCheck } = this.state;
        if (emailCheck && passwordCheck) {
          this.setState({ btnLock: false });
        }
      });
    }
  }

  passwordValidation(password) {
    const minimunPassSize = 5;
    if (password.length === minimunPassSize) {
      this.setState({
        passwordCheck: true,
      }, () => {
        const { emailCheck, passwordCheck } = this.state;
        if (passwordCheck && emailCheck) {
          this.setState({ btnLock: false });
        }
      });
    }
  }

  render() {
    const { email, password, btnLock } = this.state;
    const { login } = this.props;
    return (
      <div className="media">
        <form className="box">
          <div className="field">
            <label className="label" htmlFor="email-input">
              Email:
              <input
                className="input control"
                data-testid="email-input"
                type="email"
                name="email"
                value={ email }
                onChange={ (event) => {
                  this.handleChange(event);
                } }
              />
            </label>
          </div>
          <div className="field">
            <label className="label" htmlFor="password-input">
              Senha:
              <input
                className="input control"
                data-testid="password-input"
                name="password"
                value={ password }
                type="password"
                onChange={ (event) => {
                  this.handleChange(event);
                } }
              />
            </label>
          </div>
          <Link to="/carteira">
            <button
              className="button is-primary"
              disabled={ btnLock }
              onClick={ () => { login(email); } }
              type="button"
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  login: propTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
