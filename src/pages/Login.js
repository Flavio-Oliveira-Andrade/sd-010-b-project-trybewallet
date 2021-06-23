import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { setUserData } = this.props;
    const minPasswordLength = 6;

    const emailValidator = () => {
      const regexCode = /\S+@\S+\.\S+/;

      const validator = regexCode.test(email);
      return validator;
    };

    const passwordValidator = password.length >= minPasswordLength;

    return (
      <div className="login-form">
        Login
        <label htmlFor="email">
          <input
            type="email"
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            data-testid="password-input"
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <Link
          onClick={ () => (setUserData(email)) }
          to="/carteira"
        >
          <button
            type="button"
            disabled={ !(emailValidator() && passwordValidator) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  setUserData: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  setUserData: (email) => dispatch(userLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
