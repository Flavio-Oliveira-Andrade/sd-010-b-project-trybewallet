import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import loginAction from '../actions/loginAction';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { email: '' };

    this.handleUserMail = this.handleUserMail.bind(this);
  }

  handleUserMail({ target: { value } }) {
    this.setState({ email: value });
  }

  render() {
    const { userLogin } = this.props;
    const { email } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            data-testid="email-input"
            required
            placeholder="E-mail"
            onChange={ this.handleUserMail }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            data-testid="password-input"
            required
            placeholder="Senha"
            min="6"
          />
        </label>
        <Link to="/carteira">
          <button type="button" onClick={ () => userLogin(email) }>Entrar</button>
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userLogin: (userMail) => dispatch(loginAction(userMail)),
});

export default connect(null, mapDispatchToProps)(Login);
