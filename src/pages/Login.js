import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/Login.css';
import { inputEmail, inputPassword } from '../actions';

class Login extends React.Component {
  isButtonDisabled(userEmail, userPassword) {
    // Regex from https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (userEmail.match(emailRegex) && userPassword === '123456') {
      return false;
    }

    return true;
  }

  render() {
    const { userEmail, userPassword, changeEmail, changePassword } = this.props;
    return (
      <div className="Login">
        <h1>Login</h1>
        <form>
          <input
            name="email"
            type="email"
            placeholder="Email"
            data-testid="email-input"
            onChange={ (event) => changeEmail(event.target.value) }
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            data-testid="password-input"
            onChange={ (event) => changePassword(event.target.value) }
          />
          <button
            type="submit"
            disabled={ this.isButtonDisabled(userEmail, userPassword) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
// state.userReducer.user
const mapStateToProps = ({ userReducer: { user: { email, password } } }) => ({
  userEmail: email,
  userPassword: password,
});

const mapDispatchToProps = (dispatch) => ({
  changeEmail: (state) => dispatch(inputEmail(state)),
  changePassword: (state) => dispatch(inputPassword(state)),
});

Login.propTypes = {
  userEmail: PropTypes.string.isRequired,
  userPassword: PropTypes.string.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
