import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import userInput from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
    };

    this.validation = this.validation.bind(this);
  }

  validation() {
    const button = document.querySelector('.login-button');
    const loginInput = document.querySelectorAll('input')[0].value;
    const passwordInput = document.querySelectorAll('input')[1].value;

    if (loginInput.includes('@') && loginInput.includes('.com')) {
      const lenghtPassword = 6;

      if (passwordInput.length >= lenghtPassword) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    } else {
      button.disabled = true;
    }
  }

  render() {
    const { emailDispatch } = this.props;
    const { email } = this.state;
    return (
      <form>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            data-testid="email-input"
            className="login-input"
            onChange={ this.validation }
            required
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.validation }
            required
          />
        </label>
        <Link to="/carteira">
          <button
            className="login-button"
            type="button"
            disabled
            onClick={ () => emailDispatch(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (email) => dispatch(userInput(email)),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
