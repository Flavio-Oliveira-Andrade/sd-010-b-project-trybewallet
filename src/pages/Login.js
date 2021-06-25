import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  workingButton() {
    const { email, password } = this.state;
    const { login } = this.props;
    return (
      <button
        type="button"
      >
        <Link
          to="/carteira"
          onClick={ () => login({ email, password }) }
        >
          Entrar
        </Link>
      </button>
    );
  }

  notWorkingButton() {
    return (
      <button type="button" disabled>
        <Link to="/">Entrar </Link>
      </button>
    );
  }

  render() {
    const { email, password } = this.state;
    const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const minPassLength = 6;
    return (
      <form>
        <input
          type="email"
          placeholder="email"
          data-testid="email-input"
          onChange={ (e) => this.setState({ email: e.target.value }) }
        />
        <input
          type="password"
          placeholder="password"
          data-testid="password-input"
          onChange={ (e) => this.setState({ password: e.target.value }) }
        />
        {
          password.length >= minPassLength && email.match(emailValidation)
            ? this.workingButton()
            : this.notWorkingButton()
        }

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginAction(e)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
