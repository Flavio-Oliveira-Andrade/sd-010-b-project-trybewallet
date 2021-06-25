import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      email: '',
      redirect: false,
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(eve) {
    const email = eve.target.value;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    this.setState({
      login: regex.test(email),
      email,
    });
  }

  handlePasswordChange(eve) {
    const password = eve.target.value;
    const six = 6;
    if (password.length >= six) {
      this.setState((oldState) => ({
        ...oldState,
        login: true,
      }));
    } else {
      this.setState({ login: false });
    }
  }

  handleSubmit() {
    const { email, login } = this.state;
    if (login) {
      const { dispatchUser } = this.props;
      dispatchUser(email);
      this.setState((oldState) => ({
        ...oldState,
        redirect: true,
      }));
    }
  }

  render() {
    const { redirect } = this.state;
    return (
      <main>
        <label htmlFor="email-input">
          Email:
          <input
            data-testid="email-input"
            name="email-input"
            id="email-input"
            type="email"
            placeholder="trybe@betrybe.com"
            required
            onChange={ this.handleEmailChange }
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            data-testid="password-input"
            name="password-input"
            id="password-input"
            type="password"
            placeholder="Digite sua senha"
            required
            onChange={ this.handlePasswordChange }
          />
        </label>
        <button type="button" onClick={ this.handleSubmit }>Entrar</button>
        {redirect && <Redirect to="/carteira" />}
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUser: (email) => dispatch(
    userAction(email),
  ),
});

Login.propTypes = {
  dispatchUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
