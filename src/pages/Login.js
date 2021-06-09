import React from 'react';
import { connect } from 'react-redux';
import { emailOnChange, passwordOnChange } from '../actions/userAction';

class Login extends React.Component {
  render() {
    const { email, password } = this.props;
    return (
      <div>
        <label htmlFor="emailLogin">
          <input data-testid="email-input" id="emailLogin" type="email" onChange={ ({ target: { value } }) => email(value) } />
        </label>
        <label htmlFor="passwordLogin">
          <input data-testid="password-input" id="passwordLogin" type="password" onChange={ ({ target: { value } }) => password(value) } />
        </label>
        <button type="submit">Entrar</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  email: (email) => dispatch(emailOnChange(email)),
  password: (password) => dispatch(passwordOnChange(password)),
});

export default connect(null, mapDispatchToProps)(Login);
