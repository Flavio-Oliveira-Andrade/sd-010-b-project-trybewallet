import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { addAnEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      login: true,
      redirect: false,
    };
    this.functionCheck = this.functionCheck.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      this.confirmationCheck(this.state);
    });
  }

  functionCheck() {
    const { email } = this.state;
    const { functionDispatch } = this.props;
    functionDispatch(email);
    this.setState({ redirect: true });
  }

  confirmationCheck({ password, email }) {
    const caract = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const emailTest = caract.test(email);
    const passwordMin = 6;

    if (emailTest && password.length >= passwordMin) {
      this.setState({
        login: false,
      });
    } else {
      this.setState({
        login: true,
      });
    }
  }

  render() {
    const { login, password, email, redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input
            value={ email }
            id="email"
            type="email"
            name="email"
            onChange={ this.handleChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            value={ password }
            id="password"
            type="password"
            name="password"
            onChange={ this.handleChange }
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          disabled={ login }
          onClick={ this.functionCheck }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  functionDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  functionDispatch: (email) => dispatch(addAnEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
