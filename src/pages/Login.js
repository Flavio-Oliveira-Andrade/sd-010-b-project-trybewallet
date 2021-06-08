import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Imput from '../components/Input';
import loginAction from '../actions';

import travoltaWallet from '../images/travoltaWallet.gif';

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
        { redirect && <Redirect to="/carteira" /> }
        <form className="login">
          <img src={ travoltaWallet } alt="travoltaWallet" width="185px" />
          <br />
          <Imput
            place="Email"
            name="email"
            test="email-input"
            handle={ this.handleChange }
          />

          <br />
          <Imput
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
  login: (e) => dispatch(loginAction(e)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
