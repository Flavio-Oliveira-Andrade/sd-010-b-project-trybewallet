import React from 'react';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';
import propTypes from 'prop-types';
import login from '../actions';
// import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAdress: '',
      passwordData: '',
    };
  }

  render() {
    const { emailAdress, passwordData } = this.state;
    const { firstDispatch } = this.props;
    return (
      <div>
        <label htmlFor="login">
          <input
            id="login"
            type="email"
            name="email"
            data-testid="email-input"
            placeholder="insert your email"
            onChange={ ({ target: { value } }) => this.setState({ emailAdress: value }) }
            required
          />
        </label>
        <div />
        <div>
          <label data-testid="password-input" htmlFor="password">
            <input
              id="password"
              minLength="6"
              type="password"
              placeholder="insert your password"
              onChange={ ({ target: { value } }) => this
                .setState({ passwordData: value }) }
              value={ passwordData }
              required
            />
          </label>
        </div>
        <button
          type="button"
          onClick={ () => firstDispatch(emailAdress, passwordData) }
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
