import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
// import { Link as button } from 'react-router-dom';

import { addEmail } from '../actions';
import { setEmailAction, setPasswordAction } from '../actions/userAction';
import '../css/loginPage.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleVerification = this.handleVerify.bind(this);
  }

  // Regex from :
  // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  handleVerify() {
    const { email } = this.state;
    const pattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (email.match(pattern)) return true;
  }

  handleChange({ value, name }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    const serialLength = 5;

    return (
      <form>
        <label htmlFor="email" className="login-label">
          E-mail:
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="exemplo@exemplo.com"
            data-testid="email-input"
            onChange={ (e) => this.handleChange(e.target) }
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            onChange={ (e) => this.setState({ password: e.target.value }) }
            placeholder="senha"
            data-testid="password-input"
          />
        </label>
        <button
          type="submit"
          className="login-btn"
          disabled={
            password.length <= serialLength || (!this.handleVerify())
          }
          onClick={ () => {
            setEmailAction(email);
            setPasswordAction(password);
            const { addEmailUser } = this.props;
            addEmailUser(email);
            this.setState({ redirect: true });
          } }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  addEmailUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.email,
});

const mapDispatchToProps = (dispatch) => ({
  addEmailUser: (email) => dispatch(addEmail(email)),
  setEmailAction: (email) => dispatch(setEmailAction(email)),
  setPasswordAction: (password) => dispatch(setPasswordAction(password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
