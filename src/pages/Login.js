import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { action } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.changer = this.changer.bind(this);
    this.regex = this.regex.bind(this);
    this.saveLogin = this.saveLogin.bind(this);

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
      redirect: false,
    };
  }

  changer({ target }) {
    const { name, value } = target;
    const { email, password } = this.state;
    const minPasswordLength = 5;
    this.setState({
      [name]: value,
    });
    if (this.regex(email) && (password.length >= minPasswordLength)) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  saveLogin(e) {
    e.preventDefault();
    const { myDispatch } = this.props;
    const { email, password } = this.state;
    if (email && password) {
      myDispatch({ type: 'LOGIN', payload: email });
      this.setState({ redirect: true });
    }
  }

  regex(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/carteira" />;
    }
    const { isDisabled } = this.state;
    return (
      <form className="login-form">
        <h1>Trybe Wallet</h1>
        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            name="email"
            onChange={ this.changer }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            onChange={ this.changer }
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          onClick={ this.saveLogin }
          disabled={ isDisabled }
        >
          Entrar
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  myDispatch: (state) => dispatch(action(state)),
});

Login.propTypes = {
  myDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
