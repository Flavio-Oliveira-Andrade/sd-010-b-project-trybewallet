import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { actionEmail } from '../actions';

// Regex retirado do site: https://regex-generator.olafneumann.org/
const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
const regexPassword = /[\w]{6}/;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailIsValid: false,
      passwordIsValid: false,
      isDisabled: true,
    };
    this.validateInput = this.validateInput.bind(this);
  }

  componentDidUpdate(_, prevState) {
    const { email, password } = this.state;
    if (prevState.email !== email || prevState.password !== password) {
      this.isDisabledButton();
    }
  }

  isDisabledButton() {
    const { emailIsValid, passwordIsValid } = this.state;
    if (emailIsValid && passwordIsValid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  validateInput({ target: { name, value } }) {
    if (name === 'email') {
      const isValid = regexEmail.test(value);
      this.setState({ emailIsValid: isValid });
    }

    if (name === 'password') {
      const isValid = regexPassword.test(value);
      this.setState({ passwordIsValid: isValid });
    }

    this.setState({ [name]: value });
  }

  render() {
    const { email, password, isDisabled } = this.state;
    const { userLogOn } = this.props;
    return (
      <div className="form-login">
        <form>
          <input
            type="email"
            name="email"
            value={ email }
            onChange={ this.validateInput }
            placeholder="Email"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.validateInput }
            placeholder="Password"
            data-testid="password-input"
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ isDisabled }
              onClick={ () => userLogOn(email) }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => ({
  userLogOn: (email) => dispatch(actionEmail(email)),
});

Login.propTypes = {
  userLogOn: PropTypes.func.isRequired,
};

export default connect(null, mapStateToProps)(Login);
