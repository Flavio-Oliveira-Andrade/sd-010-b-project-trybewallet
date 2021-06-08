import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { loginAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      validEmail: false,
      validPswd: false,
      email: '',
      shouldRedirect: false,
    };
  }

  render() {
    const { validEmail, validPswd, email, shouldRedirect } = this.state;
    const { saveEmail } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              data-testid="email-input"
              onChange={ (e) => {
                const ragex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const input = e.target.value;
                this.setState({ validEmail: ragex.test(input), email: input });
              } }
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              type="password"
              name="senha"
              data-testid="password-input"
              onChange={ (e) => {
                const minLen = 6;
                this.setState({ validPswd: e.target.value.length >= minLen });
              } }
            />
          </label>
        </form>
        {shouldRedirect ? <Redirect to="/carteira" /> : null }
        <button
          type="button"
          onClick={ () => {
            saveEmail(email);
            this.setState({ shouldRedirect: true });
          } }
          disabled={ !(validPswd && validEmail) }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(loginAction(email)),
});

Login.propTypes = ({
  saveEmail: PropTypes.func,
}).isRequired;

export default connect(null, mapDispatchToProps)(Login);
