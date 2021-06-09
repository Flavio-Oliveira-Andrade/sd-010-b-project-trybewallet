import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import saveEmailAction from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      active: true,
      email: '',
      password: '',
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
    this.handleLogin();
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
    this.handleLogin();
  }

  handleLogin() {
    const { email, password } = this.state;
    const passwordLength = 5;
    if (
      email.match(/((\w+)@(\w+)\.(\w+))/i)
      && password.length >= passwordLength
    ) {
      this.setState((value) => ({ active: !value }));
    }
  }

  render() {
    const { active, password, email } = this.state;
    const { saveEmail } = this.props;
    // console.log(redirect);
    // if (redirect) return <Redirect to="/carteira" />;
    return (
      <section>
        <h2>Loguin</h2>
        <form>
          <label htmlFor="input-loguin">
            Digite seu e-mail:
            <input
              data-testid="email-input"
              id="input-loguin"
              value={ email }
              onChange={ this.handleEmail }
            />
          </label>
          <label htmlFor="input-senha">
            Digite sua senha:
            <input
              data-testid="password-input"
              id="input-senha"
              value={ password }
              onChange={ this.handlePassword }
            />
          </label>
        </form>
        <button
          onClick={ () => saveEmail(email) }
          disabled={ active }
          type="button"
        >
          <Link to="/carteira">Entrar</Link>
        </button>
      </section>
    );
  }
}

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
  // redirect: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  redirect: state.reducerUser.user,
});

const mapDispatchToProp = (dispatch) => ({
  saveEmail: (email) => dispatch(saveEmailAction(email)),
});

export default connect(mapStateToProps, mapDispatchToProp)(Login);
