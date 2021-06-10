import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/Login.css';

class Login extends React.Component {
  isButtonDisabled(userEmail, userPassword) {
    // Regex from https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (userEmail.match(emailRegex) && userPassword !== '') {
      return false;
    }

    return true;
  }

  render() {
    const { userEmail, userPassword } = this.props;
    return (
      <div className="Login">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" data-testid="email-input" />
          <input type="password" placeholder="Password" data-testid="password-input" />
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

Login.propTypes = {
  userEmail: PropTypes.string.isRequired,
  userPassword: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Login);
