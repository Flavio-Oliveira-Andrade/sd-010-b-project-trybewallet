import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import submitEmail from '../actions/userActions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      sendBtn: true,
    };
    this.validateBtn = this.validateBtn.bind(this);
  }

  validateBtn() {
    const passwordLength = 4;
    const { email, password } = this.state;
    const validateArroba = email.includes('@');
    const validateDomain = email.includes('.com');

    if (password.length > passwordLength && validateArroba && validateDomain) {
      this.setState({ sendBtn: false });
    } else {
      this.setState({ sendBtn: true });
    }
  }

  render() {
    const { sendBtn, email } = this.state;
    const { submitEmailBtn } = this.props;

    return (
      <form>
        <input
          type="email"
          data-testid="email-input"
          placeholder="Email"
          onChange={ (e) => {
            this.setState({ email: e.target.value });
            this.validateBtn();
          } }
        />
        <br />
        <input
          type="password"
          data-testid="password-input"
          placeholder="Senha"
          onChange={ (e) => {
            this.setState({ password: e.target.value });
            this.validateBtn();
          } }
        />
        <br />
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => submitEmailBtn(email) }
            disabled={ sendBtn }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitEmailBtn: (email) => dispatch(submitEmail(email)),
});

Login.propTypes = {
  submitEmail: Proptypes.func,
}.isRequired;

// Requisito 2 feito com a ajuda do meu colega Leandro Reis, link de sua PR: https://github.com/tryber/sd-010-b-project-trybewallet/pull/37

export default connect(null, mapDispatchToProps)(Login);
