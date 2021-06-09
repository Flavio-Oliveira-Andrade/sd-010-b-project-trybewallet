import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { submitEmail } from '../actions';

const MIN_LENGTH_PASSWORD = 5;
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      isValidEmail: false,
      isValidPassword: false,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.changeDisabled = this.changeDisabled.bind(this);
  }

  handleEmail({ target: { name, value } }) {
    const emailRegexp = RegExp(/[a-z]+@[a-z]+.com/g);
    const isValidEmail = emailRegexp.test(value);
    this.setState({
      [name]: value,
      isValidEmail,
    });
  }

  handlePassword({ target: { value } }) {
    const isValidPassword = (value.length > MIN_LENGTH_PASSWORD);
    this.setState({
      isValidPassword,
    });
  }

  changeDisabled() {
    const { isValidPassword, isValidEmail } = this.state;
    return !!((isValidPassword && isValidEmail));
  }

  render() {
    const { emailInput } = this.state;
    const { saveEmail } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="email-input"
          name="emailInput"
          placeholder="email"
          onChange={ (e) => this.handleEmail(e) }
        />
        <br />
        <input
          type="password"
          data-testid="password-input"
          name="password-input"
          placeholder="senha"
          onChange={ (e) => this.handlePassword(e) }
        />
        <br />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !this.changeDisabled() }
            onClick={ () => saveEmail(emailInput) }
          >
            Entrar
          </button>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(submitEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
};
