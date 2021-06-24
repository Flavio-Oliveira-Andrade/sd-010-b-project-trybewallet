import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actionLogin from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      disable: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.verifyEmailPass = this.verifyEmailPass.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value }, this.verifyEmailPass());
  }

  verifyEmailPass() {
    const { password, email } = this.state;
    const minLength = 4;
    this.setState({ disable: password.length > minLength && email.includes('.com') });
  }

  render() {
    const { email, password, disable } = this.state;
    const { redirect, login } = this.props;
    return (
      <div className="Login">
        { redirect && <Redirect to="/carteira" /> }
        <form className="formLogin">
          <input
            placeholder="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
          <input
            placeholder="senha"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ !disable }
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
  redirect: state.user.password,
});

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(actionLogin(email)),
});

Login.propTypes = {
  redirect: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
