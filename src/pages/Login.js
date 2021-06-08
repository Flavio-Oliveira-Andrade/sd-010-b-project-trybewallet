import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { requestAddUser } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      validate: true,
      email: '',
      password: '',
    };

    this.submitLogin = this.submitLogin.bind(this);
    this.validateInput = this.validateInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateInput());
  }

  validateInput() {
    const { email, password } = this.state;
    const validateEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
    validateEmail.test(email);
    const validatePassword = password;
    const seis = 6;
    if (validatePassword.length > seis && validateEmail) {
      this.setState({ validate: false });
    } else {
      this.setState({ validate: true });
    }
  }

  submitLogin() {
    const { email } = this.state;
    const { keepEmail } = this.props;
    keepEmail(email);
  }

  render() {
    const { validate } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="email">
            Usuario:
            <input
              data-testid="email-input"
              type="text"
              name="email"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              name="password"
              onChange={ this.handleChange }
              required
            />
          </label>
          <Link to="/carteira">
            <button
              disabled={ validate }
              type="button"
              onClick={ this.submitLogin }
            >
              Entrar
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
// })

const mapDispatchToProps = (dispatch) => ({
  keepEmail: (email) => dispatch(requestAddUser(email)),
});

Login.propTypes = {
  keepEmail: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Login);
