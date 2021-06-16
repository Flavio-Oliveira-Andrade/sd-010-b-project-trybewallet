import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { emailValidate } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.btnEnable = this.btnEnable.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);

    this.state = {
      disabled: true,
      email: '',
      password: '',
    };
  }

  btnEnable() {
    const { email, password } = this.state;
    const minFieldLength = 6;
    const disabled = (email === '') || (password.length < minFieldLength);
    this.setState({
      disabled,
    });
  }

  verifyEmail({ target: { value: email } }) {
    if (email.match(/^\S+@\S+\.\S+$/i)) {
      // if (email.match(/^[^\s@]+@[^\s@]+.[^\s@]+$/i)) {
      this.setState({
        email,
      }, () => this.btnEnable());
    } else {
      this.setState({
        email: '',
      }, () => this.btnEnable());
    }
  }

  verifyPassword({ target: { value: password } }) {
    this.setState({
      password,
    }, () => this.btnEnable());
  }

  render() {
    const { email, disabled } = this.state;
    const { checkEmail } = this.props;
    return (
      <div>
        Login
        <label htmlFor="email">
          e-mail:
          <input
            id="email"
            data-testid="email-input"
            type="text"
            placeholder="email@example.com"
            onChange={ this.verifyEmail }
          />
        </label>
        <label htmlFor="password">
          senha:
          <input
            id="password"
            data-testid="password-input"
            type="password"
            minLength="6"
            onChange={ this.verifyPassword }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => checkEmail(email) }
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  checkEmail: PropTypes.func.isRequired,
  // email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  checkEmail: (email) => dispatch(emailValidate(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
