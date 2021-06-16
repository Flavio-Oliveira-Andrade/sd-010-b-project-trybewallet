import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import saveEmail from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => this.validateEmail());
  }

  // handleSubmit(target) {
  //   const targetResult = target;
  //   console.log(targetResult);
  // }

  validateEmail() {
    // Source: https://stackoverflow.com/a/9204568/15377250
    const { password, email } = this.state;
    const maxPassword = 6;
    const re = /\S+@\S+\.\S+/;
    if (re.test(String(email).toLowerCase()) && password.length >= maxPassword) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { email, disabled, password } = this.state;
    const { save } = this.props;
    return (
      <form>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            data-testid="password-input"
            name="password"
            placeholder="Senha"
            value={ password }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => save(email) }
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  save: (item) => dispatch(saveEmail(item)),
});

Login.propTypes = {
  save: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
