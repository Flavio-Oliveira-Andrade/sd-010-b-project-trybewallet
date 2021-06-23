import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import saveMail from '../actions/userActions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.validateLogin = this.validateLogin.bind(this);
    this.btnEnter = this.btnEnter.bind(this);

    this.state = {
      email: '',
      isDisabled: true,
      loginTrue: false,
    };
  }

  componentWillUnmount() {
    this.setState({
      email: '',
      isDisabled: true,
      loginTrue: false,
    });
  }

  // Source:Função utilizada no projeto em grupo Trivia e adaptada neste contexto
  validateLogin() {
    const emailInput = document.getElementById('email-input').value;
    const passwordInput = document.getElementById('password-input').value;
    const SIX_CHAR = 6;

    const validEmail = (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/).test(emailInput);
    const validPassword = passwordInput.length >= SIX_CHAR;
    if (validEmail && validPassword) {
      this.setState({
        email: emailInput,
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  }

  btnEnter() {
    const { email } = this.state;
    const { login } = this.props;
    login(email);
    this.setState({
      loginTrue: true,
    });
  }

  render() {
    const { loginTrue, isDisabled } = this.state;

    if (loginTrue) {
      return <Redirect to="/carteira" />;
    }

    return (
      <div>
        <input
          id="email-input"
          type="email"
          data-testid="email-input"
          onChange={ this.validateLogin }
          placeholder="Email"
        />
        <input
          id="password-input"
          type="text"
          data-testid="password-input"
          onChange={ this.validateLogin }
          placeholder="Senha"
        />
        <button
          type="button"
          onClick={ this.btnEnter }
          disabled={ isDisabled }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email) => dispatch(saveMail(email)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
