import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { saveUserAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      active: true,
    };

    this.handleInput = this.handleInput.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  checkLogin() {
    const validateEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
    const minimumPasswordLength = 5;
    const { email, password } = this.state;
    if (validateEmail.test(email) && password.length >= minimumPasswordLength) {
      this.setState({ active: false });
    }
  }

  handleInput({ target }) {
    this.setState({ [target.id]: target.value });
    this.checkLogin();
  }

  render() {
    const { saveUserEmail, user } = this.props;
    const { active, email } = this.state;
    return (
      <section>
        <form>
          <input
            type="email"
            data-testid="email-input"
            placeholder="Digite seu email"
            id="email"
            onChange={ this.handleInput }
          />
          <input
            type="password"
            data-testid="password-input"
            placeholder="Digite sua senha"
            id="password"
            onChange={ this.handleInput }
          />
        </form>
        <button
          onClick={ () => saveUserEmail(email) }
          disabled={ active }
          type="button"
        >
          Entrar
        </button>
        {user && <Redirect to="/carteira" />}
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveUserEmail: (user) => dispatch(saveUserAction(user)),
});

const mapStateToProps = (state) => ({
  user: state.user.email,
});

Login.propTypes = {
  saveUserEmail: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
