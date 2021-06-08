import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Input from '../components/InputLogin';
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
      <div className="Login">
        { redirect && <Redirect to="/carteira" /> }
        <form className="formLogin">
          <img src={ travoltaWallet } alt="travoltaWallet" className="travolta" />
          <br />
          <Input
            place="Email"
            name="email"
            test="email-input"
            handle={ this.handleChange }
          />
          <Input
            place="Senha"
            name="password"
            test="password-input"
            type="password"
            handle={ this.handleChange }
          />
          <button
            type="button"
            disabled={ !buttonDisable }
            onClick={ () => login({ email, password }) }
            className="buttonLogin"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  redirect: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginAction(e)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
