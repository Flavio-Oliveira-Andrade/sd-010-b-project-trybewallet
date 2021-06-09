import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { appLogin } from '../actions';
import { emailCheck, passwordCheck } from '../services/inputError';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: {
        value: '',
        message: '',
        error: false,
      },
      password: {
        value: '',
        message: '',
        error: false,
      },
    };
  }

  checkInputError(name, checker, ...args) {
    const message = checker(...args);
    if (message) {
      this.setState((prevState) => ({
        [name]: {
          ...prevState[name], message, error: true,
        },
      }));
    } else {
      this.setState((prevState) => ({
        [name]: {
          ...prevState[name], message: '', error: false,
        },
      }));
    }
  }

  handleChanges(name, value) {
    this.setState((prevState) => ({
      [name]: {
        ...prevState[name], value,
      },
    }), () => {
      if (name === 'password') this.checkInputError(name, passwordCheck, value);
      if (name === 'email') this.checkInputError(name, emailCheck, value);
    });
  }

  handleSubmit(e, email) {
    e.preventDefault();
    const { login, history } = this.props;
    login(email);
    history.push('/carteira');
  }

  render() {
    const { email: { value: emailValue, message: emailMessage, error: EError },
      password: { value: passwordValue, message: passwordMessage, error: PError },
    } = this.state;
    const FormHasError = EError
    || PError
    || emailValue.length === 0
    || passwordValue.length === 0;
    return (
      <form>
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ emailValue }
          onChange={ ({ target: { name, value } }) => this.handleChanges(name, value) }
        />
        <span>{emailMessage}</span>
        <input
          data-testid="password-input"
          type="password"
          name="password"
          value={ passwordValue }
          onChange={ ({ target: { name, value } }) => this.handleChanges(name, value) }
        />
        <span>{passwordMessage}</span>
        <button
          disabled={ FormHasError }
          onClick={ (e) => this.handleSubmit(e, emailValue) }
          type="submit"
        >
          Entrar

        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(appLogin(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
