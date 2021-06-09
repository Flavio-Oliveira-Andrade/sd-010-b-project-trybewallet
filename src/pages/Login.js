import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Redirect } from 'react-router';
// import Wallet from './Wallet';
import login from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAdress: '',
      passwordData: '',
      buttonEnabler: true,
      shouldRedirect: false,
    };

    this.validationFields = this.validationFields.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { emailAdress, passwordData } = this.state;
    const { firstDispatch } = this.props;
    firstDispatch(emailAdress, passwordData);
    this.setState({ shouldRedirect: true });
  }

  validationFields() {
    const { emailAdress, passwordData } = this.state;
    const emailChecker = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
    const passwordChecker = /\d{5,}/;
    if (emailAdress.match(emailChecker) && passwordData.match(passwordChecker)) {
      this.setState({ buttonEnabler: false });
    } else { this.setState({ buttonEnabler: true }); }
  }

  render() {
    const { emailAdress, passwordData, buttonEnabler, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/carteira" />;
    }

    return (
      <div>
        <label htmlFor="login">
          <input
            id="login"
            type="email"
            data-testid="email-input"
            placeholder="insert your email"
            onChange={ ({ target: { value } }) => {
              this.setState({ emailAdress: value });
              this.validationFields();
            } }
            value={ emailAdress }
            required
          />
        </label>
        <div />
        <label htmlFor="password">
          <input
            id="password"
            minLength="6"
            data-testid="password-input"
            type="password"
            placeholder="insert your password"
            onChange={ ({ target: { value } }) => {
              this.setState({ passwordData: value });
              this.validationFields();
            } }
            value={ passwordData }
            required
          />
        </label>

        <button
          type="button"
          id="btn-submit"
          onClick={ () => this.onClick() }
          disabled={ buttonEnabler }
        >
          Entrar
        </button>
      </div>);
  }
}

const mapDipatchToProps = (dispatch) => ({
  firstDispatch: (emailAdress, passwordData) => dispatch(login({
    userName: emailAdress, password: passwordData })),
});

Login.propTypes = {
  firstDispatch: propTypes.func.isRequired,
};
export default connect(null, mapDipatchToProps)(Login);
