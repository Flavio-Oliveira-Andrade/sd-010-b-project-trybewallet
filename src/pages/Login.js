import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logOn from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });

    const { email, password } = this.state;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const passMaxLength = 5;
    const emailValidation = emailRegex.test(email);
    if (password.length >= passMaxLength && emailValidation) {
      this.setState({ disabled: false });
    }
  }

  render() {
    const { email, password, disabled } = this.state;
    const { login } = this.props;
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input
            name="email"
            type="text"
            data-testid="email-input"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />

          <input
            name="password"
            type="password"
            data-testid="password-input"
            placeholder="Password"
            value={ password }
            onChange={ this.handleChange }
          />

          <button
            type="button"
            disabled={ disabled }
            onClick={ () => login({ email }) }
          >
            <Link to="/carteira">
              Entrar
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (payload) => dispatch(logOn(payload)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
