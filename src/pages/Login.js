import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import '../css/login.css';
import { connect } from 'react-redux';
import action from '../actions';

class Login extends React.Component {
  constructor(state) {
    super(state);
    this.onSubmit = this.onSubmit.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.state = {
      emailValid: false,
      passwordValid: false,
      redirect: false,
      email: '',
    };
  }

  componentDidMount() {
    const { passwordValid, emailValid } = this.state;
    const btn = document.querySelector('#submit');
    btn.disabled = !(passwordValid && emailValid);
  }

  onSubmit() {
    const { passwordValid, emailValid } = this.state;
    this.setState(() => ({
      redirect: passwordValid && emailValid,
    }));
  }

  loginHandler({ target }) {
    const { passwordValid, emailValid } = this.state;

    if (target.type === 'email') {
      this.setState(() => ({
        emailValid: target.validity.valid && target.value.includes('.com'),
        email: target.value,
      }));
    } else {
      const MIN_PASSWORD_LEN = 5;
      this.setState(() => ({
        passwordValid: target.value.length >= MIN_PASSWORD_LEN,
      }));
    }

    const btn = document.querySelector('#submit');
    btn.disabled = !(passwordValid && emailValid);
  }

  render() {
    const { redirect, email } = this.state;
    const { emailDispatch } = this.props;

    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div className="loginPage">

        <div className="loginBox">
          <h2>Login</h2>
          <form className="form" onChange={ this.loginHandler }>
            <input data-testid="email-input" type="email" placeholder="Email" />
            <input data-testid="password-input" type="password" placeholder="Senha" />
            <button
              id="submit"
              onClick={ () => {
                this.onSubmit();
                emailDispatch(email);
              } }
              type="button"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (state) => dispatch(action(state)) });

Login.propTypes = {
  emailDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
