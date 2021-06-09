import React from 'react';
import { Redirect } from 'react-router';
import '../css/login.css';

class Login extends React.Component {
  constructor(state) {
    super(state);
    this.onSubmit = this.onSubmit.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.state = {
      emailValid: false,
      passwordValid: false,
      redirect: false,
      // email: '',
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
        // email: target.value,
      }));
    } else {
      const MIN_PASSWORD_LEN = 6;
      this.setState(() => ({
        passwordValid: target.value.length >= MIN_PASSWORD_LEN,
        // email: target.value,
      }));
    }

    const btn = document.querySelector('#submit');
    btn.disabled = !(passwordValid && emailValid);
  }

  render() {
    const { redirect } = this.state;

    if (redirect) return <Redirect to="/carteira" />;
    return (
      <div className="loginPage">

        <div className="loginBox">
          <h2>Login</h2>
          <form className="form" onChange={ this.loginHandler }>
            <input data-testid="email-input" type="email" placeholder="Email" />
            <input data-testid="password-input" type="password" placeholder="Senha" />
            <button id="submit" onClick={ this.onSubmit } type="button">Entrar</button>
          </form>
        </div>
      </div>);
  }
}

export default Login;
