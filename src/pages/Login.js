import React from 'react';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';
import propTypes from 'prop-types';
// import { Redirect } from 'react-router';
import login from '../actions';
// import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAdress: '',
      passwordData: '',
      buttonEnabler: true,
    };

    this.validationFields = this.validationFields.bind(this);
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
    const { emailAdress, passwordData, buttonEnabler } = this.state;
    const { firstDispatch } = this.props;

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
        <div>
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
        </div>
        <button
          type="button"
          id="btn-submit"
          onClick={ () => firstDispatch(emailAdress,
            passwordData) }
          disabled={ buttonEnabler }
        >
          Entrar
        </button>
      </div>);
  }
}

const mapDipatchToProps = (dispatch) => ({
  firstDispatch: (emailAdress, passwordData) => dispatch(login(
    emailAdress, passwordData,
  )),
});

Login.propTypes = {
  firstDispatch: propTypes.func.isRequired,
};
export default connect(null, mapDipatchToProps)(Login);
