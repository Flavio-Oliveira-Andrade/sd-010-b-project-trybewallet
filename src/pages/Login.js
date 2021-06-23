import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import userActions from '../actions/userActions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleOnChange({ target }) {
    const { value, type } = target;

    this.setState({
      [type]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const { userEmail } = this.props;
    const MAGIC_NUMBER = 6;

    const validationEmail = () => {
      const regexEmail = /\S+@\S+\.\S+/;

      const validation = regexEmail.test(email);
      return validation;
    };

    const passwordValidation = password.length >= MAGIC_NUMBER;

    return (
      <section>
        <h1>TRYBE</h1>
        <div>
          <input
            type="email"
            data-testid="email-input"
            onChange={ this.handleOnChange }
          />
          <input
            type="password"
            data-testid="password-input"
            onChange={ this.handleOnChange }
          />
          <Link
            onClick={ () => (userEmail(email)) }
            to="/carteira"
          >
            <button
              type="button"
              disabled={ !(validationEmail() && passwordValidation) }
            >
              Entrar
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  userEmail: PropTypes.func,
}.isRequired;

const mapDispatchToPros = (dispatch) => ({
  userEmail: (email) => dispatch(
    userActions(email),
  ),
});

export default connect(null, mapDispatchToPros)(Login);
