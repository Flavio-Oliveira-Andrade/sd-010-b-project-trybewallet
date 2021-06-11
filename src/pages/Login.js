import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { saveLoginEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: true,
      redirect: false,
    };
    this.infoValidationError = this.infoValidationError.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirectToWallett = this.redirectToWallett.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    const { value } = target;
    this.setState({
      [name]: value,
    });

    this.infoValidationError();
  }

  validEmail(email) {
    return /^[\w+.]+@\w+.\w{2,}(?:.\w{2})?$/.test(email);
  }

  infoValidationError() {
    const { email, password } = this.state;
    const maxLength = 5;
    if (this.validEmail(email) === true && password.length >= maxLength) {
      return this.setState({
        error: false,
      });
    }
    return this.setState({
      error: true,
    });
  }

  redirectToWallett() {
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { userEmail } = this.props;
    const { email, password, error, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;
    return (
      <form>
        <label htmlFor="email">
          <input
            type="text"
            id="email"
            name="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            id="password"
            name="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="button"
          disabled={ error }
          onClick={ () => { userEmail(email); this.redirectToWallett(); } }
        >
          Entrar
        </button>
      </form>
    );
  }
}

// export default Login;

const mapDispatchToProps = (dispatch) => ({
  userEmail: (login) => dispatch(saveLoginEmail(login)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  userEmail: PropTypes.func.isRequired,
};
