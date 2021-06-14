import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUserInfo } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      button: true,
    };
    this.handleButton = this.handleButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }

  checkEmail() {
    const { state: { email } } = this;
    const emailMatch = email.match(/[a-z]+@[a-z]+.com/);
    if (emailMatch) {
      return true;
    }
    if (!emailMatch) {
      return false;
    }
  }

  checkPassword() {
    const { state: { password } } = this;
    const six = 6;
    const five = 5;
    if (password.length >= six) {
      return true;
    }
    if (password.length <= five) {
      return false;
    }
  }

  handleButton() {
    const isEmailValid = this.checkEmail();
    const isPasswordValid = this.checkPassword();
    if (isEmailValid && isPasswordValid) {
      this.setState({ button: false });
    }
    if (!isEmailValid || !isPasswordValid) {
      this.setState({ button: true });
    }
  }

  handleChange(event) {
    switch (event.target.name) {
    case 'email':
      return this.setState({ email: event.target.value }, this.handleButton);
    case 'password':
      return this.setState({ password: event.target.value }, this.handleButton);
    default:
      break;
    }
  }

  render() {
    const {
      handleChange, state: { email, button }, props: { saveUser },
    } = this;
    return (
      <>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ handleChange }
          />
        </label>

        <Link to="/carteira">
          <button
            type="button"
            disabled={ button }
            onClick={ () => saveUser(email) }
          >
            Entrar
          </button>
        </Link>
      </>
    );
  }
}
Login.propTypes = {
  saveUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveUser: (email) => dispatch(saveUserInfo(email)),
});

export default connect(null, mapDispatchToProps)(Login);
