import React from 'react';
import { connect } from 'react-redux';
import './Login.css';
import { Redirect } from 'react-router-dom';
import bitcoin from '../images/5a105381eed609b127ec423c337f64e3.gif';

const PASSWORD_LENGTH = 5;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      buttonDisable: true,
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.ableButton = this.ableButton.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  validate() {
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail -> referência da validação do email
    const { email, password } = this.state;
    const emailTester = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    if (emailTester.test(email) && password.length >= PASSWORD_LENGTH) {
      return true;
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    this.ableButton();
  }

  ableButton() {
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        buttonDisable: false,
      });
    }
  }

  handleLogin() {
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { buttonDisable, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    if (!redirect) {
      return (
        <div id="login--div">
          <img
            src={ bitcoin }
            alt="bitcoin"
          />
          <form className="login--form">
            <input
              data-testid="email-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={ this.handleChange }
            />
            <input
              data-testid="password-input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={ this.handleChange }
            />
            <button
              type="button"
              className="login--button"
              disabled={ buttonDisable }
              min={ 6 }
              onClick={ this.handleLogin }
              style={ { backgroundColor: buttonDisable ? '#AD3838' : '#DAF7A6' } }
            >
              Entrar
            </button>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer,
  wallet: state.walletReducer,
});

const mapDispatchToProps = (state) => ({
  type: 'LOGIN',
  payload: {
    email: state.email,
    password: state.password,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
