import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyLogin } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
    this.handleFields = this.handleFields.bind(this);
  }

  handleFields(event) {
    const { email, password } = this.state;
    // console.log(email, password);
    // console.log(user.email, user.password);
    const regexValidateEmail = /\S+@\S+\.\S+/;
    const LENGTH_EMAIL = 5;
    if (password.length === LENGTH_EMAIL && regexValidateEmail.test(email)) {
      // console.log('O e-mail é válido!');
      this.setState({
        isDisabled: false,
      });
    } else {
      // console.log('Email e senha não válido');
      this.setState({
        isDisabled: true,
      });
    }

    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { verify } = this.props;
    const { email, password, isDisabled } = this.state;
    /* console.log(user); */
    return (
      <>
        <div>Login</div>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            data-testid="email-input"
            id="email"
            name="email"
            onChange={ (event) => this.handleFields(event) }
            value={ email }
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            type="text"
            data-testid="password-input"
            id="password"
            name="password"
            onChange={ (event) => this.handleFields(event) }
            value={ password }
          />
        </label>
        <button
          type="button"
          onClick={ () => verify({ email, password }) }
          disabled={ isDisabled }
        >
          <Link to="/carteira">Entrar</Link>
        </button>
      </>
    );
  }
}

Login.propTypes = {
  verify: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  verify: (login) => dispatch(verifyLogin(login)),
});

export default connect(null, mapDispatchToProps)(Login);
