import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';
import './CSS/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disableButton: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState({ [name]: value }, () => {
      const { email, password } = this.state;
      const regex = /\S+@\S+\.\S+/;
      const min = 6;
      if (regex.test(email) && password.length >= min) {
        this.setState({ disableButton: false });
      } else this.setState({ disableButton: true });
    });
  }

  render() {
    const { email, disableButton } = this.state;
    const { submit } = this.props;
    return (
      <div className="main-box">
        <div className="login-box">
          <div className="login-header"><h1>TrybeWallet</h1></div>
          <input
            data-testid="email-input"
            type="text"
            placeholder="e-mail"
            name="email"
            onChange={ this.handleChange }
          />
          <input
            data-testid="password-input"
            type="password"
            placeholder="password"
            name="password"
            onChange={ this.handleChange }
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ disableButton }
              onClick={ () => submit(email) }
            >
              Entrar
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({ submit: (email) => dispatch(login(email)) });

Login.propTypes = { submit: Proptypes.func }.isRequired;

export default connect(null, mapDispatchToProps)(Login);
