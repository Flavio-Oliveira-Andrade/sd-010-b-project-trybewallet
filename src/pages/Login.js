import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Inputs from '../components/Inputs';
import loginAction from '../actions';

import cambio from '../img/cambio.jpg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      buttonDisable: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  verifyEmailAndPass() {
    const minLength = 4;
    const { email, password } = this.state;
    // local que tirei o regex: https://ui.dev/validate-email-address-javascript/
    const regex = /\S+@\S+\.\S+/;
    this.setState({ buttonDisable: email.match(regex) && password.length > minLength });
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value }, this.verifyEmailAndPass());
  }

  render() {
    const { email, password, buttonDisable } = this.state;
    const { login, redirect } = this.props;
    return (
      <div>
        { redirect && <Redirect to="/carteira" />}
        <form className="login">
          <img src={ cambio } alt="travoltaWallet" width="185px" />
          <br />
          <Inputs
            place="Email"
            name="email"
            test="email-input"
            handle={ this.handleChange }
          />

          <br />
          <Inputs
            place="Senha"
            name="password"
            test="password-input"
            type="password"
            handle={ this.handleChange }
          />
          <br />
          <button
            type="button"
            disabled={ !buttonDisable }
            onClick={ () => login({ email, password }) }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  redirect: state.user.redirect,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(loginAction(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
