import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userLogin } from '../actions/index';
import '../Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    const minPasswordLength = 6;
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (validation.test(email)
      && (password.length >= minPasswordLength)) {
      return event;
    }
    return event.preventDefault();
  }

  render() {
    const { login } = this.props;
    const { email, password } = this.state;
    const minPasswordLength = 6;
    return (
      <div className="alignLogin">
        <form>
          <div>
            <label htmlFor="emailLogin">
              Email
              <input
                type="email"
                id="emailLogin"
                name="email"
                placeholder="digite seu email"
                onChange={ this.handleChange }
                data-testid="email-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="passwordLogin">
              Senha
              <input
                type="password"
                id="passwordLogin"
                name="password"
                placeholder="digite sua senha"
                onChange={ this.handleChange }
                data-testid="password-input"
              />
            </label>
          </div>
          <Link to="/carteira" onClick={ () => login({ email }) }>
            <button
              type="submit"
              disabled={
                !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)
                || password.length < minPasswordLength
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
  login: (email) => dispatch(userLogin(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
