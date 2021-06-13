import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonReady: false,
      email: '',
      password: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.emailVerify = this.emailVerify.bind(this);
    this.all = this.all.bind(this);
  }

  onClick() {
    const { sendLogin } = this.props;
    const { email } = this.state;
    console.log('Entrei aqui');
    sendLogin(email);

    this.setState({
      redirect: true,
    });
  }

  emailVerify() {
    const { email, password } = this.state;

    const mailFormat = /[a-z]+@[a-z]+.com/g;
    const less = 4;

    if (email.match(mailFormat)
      && password.length > less) {
      return this.setState({ buttonReady: true });
    }
    return this.setState({ buttonReady: false });
  }

  handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
    this.emailVerify();
  }

  all(buttonReady) {
    const { redirect } = this.state;
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
              this.onClick();
            } }
            disabled={ buttonReady !== true }
          >
            {' '}
            Entrar
            {' '}

          </button>
        </Link>
        { redirect && <Redirect to="/carteira" /> }
      </>
    );
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
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  sendLogin: (e) => dispatch(login(e)) });

export default connect(null, mapDispatchToProps)(Login);
