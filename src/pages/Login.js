import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import login from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      enableButton: true,
    };
    this.enableLoginButton = this.enableLoginButton.bind(this);
  }

  enableLoginButton({ target: { type, value } }) {
    const { password, email } = this.state;
    const characteres = /\S+@\S+\.\S+/;
    const passLenght = 5;
    if (characteres.test(email) && password.length >= passLenght) {
      this.setState({
        enableButton: false,
      });
    } else {
      this.setState({
        enableButton: true,
      });
      this.setState(() => ({
        [type]: value,
      }));
    }
  }

  render() {
    const { email, password, enableButton } = this.state;
    const { saveLogin } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="fname">
            <input
              data-testid="email-input"
              type="email"
              placeholder="Digite o email"
              onChange={ this.enableLoginButton }
              value={ email }
            />
          </label>
          <input
            data-testid="password-input"
            type="password"
            placeholder="me@example.com"
            onChange={ this.enableLoginButton }
            value={ password }
          />
          <Link
            to="/carteira"
            onClick={ () => saveLogin(email) }
          >
            <button
              disabled={ enableButton }
              type="submit"
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  saveLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveLogin: (email) => dispatch(login(email)) });

export default connect(null, mapDispatchToProps)(Login);
