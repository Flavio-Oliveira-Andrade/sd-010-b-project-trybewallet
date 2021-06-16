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
      password: '',
    };
  }

  btnEnable() {
    const { password } = this.state;
    const { email } = this.props;
    const minFieldLength = 6;
    const disabled = (email === 'error') || (password.length < minFieldLength);
    this.setState({
      disabled,
    });
  }

  verifyEmail({ target: { value: email } }) {
    const { checkEmail } = this.props;
    if (email.match(/^[^\s@]+@[^\s@]+.[^\s@]+$/i)) {
      checkEmail(email);
      this.btnEnable();
    } else {
      checkEmail('error');
    }
  }

  verifyPassword({ target: { value: password } }) {
    this.setState({
      password,
    }, () => this.btnEnable());
  }

  render() {
    const { disabled } = this.state;
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
          <button type="button" disabled={ disabled }>Entrar</button>
        </Link>
      </div>
    );
  }
}

Login.propTypes = {
  checkEmail: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  checkEmail: (email) => dispatch(emailValidate(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
