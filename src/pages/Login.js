import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginAction from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.onChangeHandleEmail = this.onChangeHandleEmail.bind(this);
    this.onChangeHandlePassword = this.onChangeHandlePassword.bind(this);
    this.state = {
      password: '',
      email: '',
    };
  }

  onChangeHandleEmail({ target }) {
    this.setState({
      email: target.value,
    });
  }

  onChangeHandlePassword({ target }) {
    this.setState({
      password: target.value,
    });
  }

  render() {
    const { login } = this.props;
    const { password, email } = this.state;
    const minLength = 6;
    return (
      <div>
        <div className="login-div">Login</div>
        <form className="form-login">
          <input
            type="email"
            placeholder="e-mail"
            data-testid="email-input"
            onChange={ this.onChangeHandleEmail }
          />
          <input
            type="text"
            placeholder="senha"
            data-testid="password-input"
            onChange={ this.onChangeHandlePassword }
          />
          <Link to="/carteira">
            <button
              type="submit"
              onClick={ () => login(email) }
              disabled={
                !email.includes('.com')
                || !email.includes('@')
                || password.length < minLength
              }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(loginAction(payload)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
