import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login as loginSave } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonReady: false,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.emailVerify = this.emailVerify.bind(this);
    this.all = this.all.bind(this);
  }

  onClick() {
    const { login, history } = this.props;
    const { email, buttonReady } = this.state;
    if (buttonReady === true) {
      login(email);
      history.push('/carteira');
    }
  }

  emailVerify() {
    const { email, password } = this.state;

    const mailFormat = /[a-z]+@[a-z]+.com/g;
    const less = 4;

    if (email.match(mailFormat)
      && password.length > less) {
      return this.setState({ buttonReady: true });
    }
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
    this.emailVerify();
  }

  all(buttonReady) {
    return (
      <>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="email"
          name="email"
          data-testid="email-input"
          onChange={ this.handleChange }
        />
        <input
          type="password"
          name="password"
          placeholder="senha"
          data-testid="password-input"
          onChange={ this.handleChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            onClick={ () => {

            } }
            disabled={ buttonReady !== true }
          >
            {' '}
            Entrar
            {' '}

          </button>
        </Link>
      </>);
  }

  render() {
    const { buttonReady } = this.state;
    return (
      this.all(buttonReady)

    );
  }
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginSave(e)) });

export default connect(null, mapDispatchToProps)(Login);
