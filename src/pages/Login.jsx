import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.validateEmailAndPAssword = this.validateEmailAndPAssword.bind(this);
    this.state = {
      email: '',
      password: '',
      disabledButton: true,
      shouldRedirect: false,
    };
  }

  redirect() {
    this.setState({ shouldRedirect: true });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.validateEmailAndPAssword();
  }

  validateEmailAndPAssword() {
    const idealPasswordLength = 5;
    const { email, password } = this.state;
    const emailChecks = email.includes('@') && email.includes('.com');
    const passwordChecks = password.length >= idealPasswordLength;
    const result = emailChecks && passwordChecks;
    this.setState({ disabledButton: !result });
  }

  render() {
    const { email, disabledButton, shouldRedirect } = this.state;
    const { dispatchLogin } = this.props;
    if (shouldRedirect) return <Redirect to="/carteira" />;
    return (
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="email-input">
            Email:
            <input
              data-testid="email-input"
              type="email"
              id="email-input"
              name="email"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <label htmlFor="password-input">
            Senha:
            <input
              data-testid="password-input"
              type="password"
              id="password-input"
              name="password"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ disabledButton }
            onClick={ () => {
              this.redirect();
              dispatchLogin(email);
            } }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (state) => dispatch(userLogin(state)),
});

mapDispatchToProps();

export default Login;
