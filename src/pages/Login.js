import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import loginAction from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      invalid: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validEmailAndPassword = this.validEmailAndPassword.bind(this);
  }

  validEmail(email) {
    const trueEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.com$/;
    // regex from stackoverflow
    if (email.match(trueEmail)) {
      return true;
    }
    return false;
  }

  validEmailAndPassword() {
    const { email, password } = this.state;
    const minLength = 6;
    if (this.validEmail(email) === true && password.length >= minLength) {
      this.setState({
        invalid: false,
      });
    } else {
      this.setState({
        invalid: true,
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validEmailAndPassword());
  }

  render() {
    const { email, invalid } = this.state;
    const { submit } = this.props;
    return (
      <>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            id="email"
            type="text"
            name="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            data-testid="password-input"
            id="password"
            type="password"
            name="password"
            onChange={ this.handleChange }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => submit(email) }
            disabled={ invalid }
          >
            Entrar

          </button>
        </Link>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submit: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
