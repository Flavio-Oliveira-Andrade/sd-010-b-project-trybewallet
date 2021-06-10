import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './styles/Login.css';
import { changeEmail, changePassword } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

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
    const { email, password } = this.state;
    return (
      <div className="Login">
        <h1>Login</h1>
        <form>
          <input
            name="email"
            type="email"
            value={ email }
            placeholder="Email"
            data-testid="email-input"
            onChange={ this.handleOnChange }
          />
          <input
            name="password"
            type="password"
            value={ password }
            placeholder="Password"
            data-testid="password-input"
            onChange={ this.handleOnChange }
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
  changeEmail: (state) => dispatch(changeEmail(state)),
  changePassword: (state) => dispatch(changePassword(state)),
});

Login.propTypes = {
  userEmail: PropTypes.string.isRequired,
  userPassword: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
