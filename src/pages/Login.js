import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { getDataThunk } from '../actions/apiRequests';
import loginAction from '../actions/loginAction';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      mailValidation: false,
      passwordValidation: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.mailAndPassValidation = this.mailAndPassValidation.bind(this);
    this.handleBtnLogin = this.handleBtnLogin.bind(this);
  }

  componentDidUpdate(_, prevState) {
    const { email, password } = this.state;
    if (prevState.email !== email || prevState.password !== password) {
      this.mailAndPassValidation();
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  // Help de Diegho Moraes pra essa sacada de analizar direto do estado
  mailAndPassValidation() {
    const passwordMin = 6;
    const { email, password } = this.state;
    this.setState({
      mailValidation: email.match(/[a-z]+@[a-z]+.com/g),
      passwordValidation: password.length >= passwordMin,
    });
  }

  handleBtnLogin() {
    const { userLogin, fetchData } = this.props;
    const { email } = this.state;
    userLogin(email);
    fetchData();
  }

  render() {
    const { data, userLogin } = this.props;
    const { mailValidation, passwordValidation, email } = this.state;
    if (data) return <Redirect to="/carteira" />;
    return (
      <form>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            required
            placeholder="E-mail"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            required
            placeholder="Senha"
            onChange={ this.handleChange }
            min="6"
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            disabled={ !(mailValidation && passwordValidation) }
            onClick={ () => userLogin(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
  data: PropTypes.shape(Object).isRequired,
};

const mapStateToProps = (state) => ({
  notfoundError: state.wallet.error,
  data: state.wallet.data,
});

const mapDispatchToProps = (dispatch) => ({
  userLogin: (userMail) => dispatch(loginAction(userMail)),
  fetchData: () => dispatch(getDataThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
