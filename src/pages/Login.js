import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addUser } from '../actions';

import '../style/login.css';
import money from '../images/money.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.validation = this.validation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validation() {
    const { email, password } = this.state;
    const minLength = 5;
    const validEmail = this.validEmail(email);
    const validPass = (password.length > minLength);
    if (validEmail && validPass) {
      this.setState({ disabled: false });
    }
  }

  validEmail(email) {
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const regex = /\S+@\S+\.\S+/;
    const emailMatch = email.match(regex);
    if (emailMatch !== null) {
      this.setState({ email: emailMatch[0] });
      return (emailMatch.length === 1);
    }
    return false;
  }

  handleChange({ target }) {
    const { name, value } = target;
    if (name === 'email') {
      this.setState({ email: value }, this.validation);
    }
    if (name === 'password') {
      this.setState({ password: value }, this.validation);
    }
  }

  render() {
    const { disabled, email } = this.state;
    const { addUserState } = this.props;
    return (
      <section className="login-container">
        <span className="title-login">Faça login para acesar sua carteira virtual!</span>
        <form className="form-login">
          <img className="image-money" src={ money } alt="money" />
          {/* <a href="https://br.freepik.com/fotos-vetores-gratis/pessoas">
            Pessoas vetor criado por pch.vector - br.freepik.com
          </a> */}
          <label className="labels" htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              onChange={ this.handleChange }
              data-testid="email-input"
              autoComplete="none"
              className="inputs"
              required
            />
          </label>
          <label className="labels" htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              minLength="6"
              onChange={ this.handleChange }
              data-testid="password-input"
              className="inputs"
              required
            />
          </label>
        </form>
        <Link to="/carteira">
          <button
            type="button"
            // https://stackoverflow.com/questions/30187781/how-to-disable-a-button-when-an-input-is-empty
            disabled={ disabled }
            onClick={ () => addUserState(email) }
            className="button-enter"
          >
            Entrar
          </button>
        </Link>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUserState: (email) => dispatch(addUser(email)),
});

Login.propTypes = {
  addUserState: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
