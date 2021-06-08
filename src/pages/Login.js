import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidEmail: false,
      isValidPassword: false,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.changeDisabled = this.changeDisabled.bind(this);
  }

  handleEmail({ target: { value } }) {
    const emailRegexp = RegExp(/[a-z]+@[a-z]+.com/g);
    const isValidEmail = emailRegexp.test(value);
    this.setState({
      isValidEmail,
    });
  }

  handlePassword({ target: { value } }) {
    const MIN_LENGTH_PASSWORD = 5;
    if (value.length > MIN_LENGTH_PASSWORD) {
      this.setState({
        isValidPassword: true,
      });
    }
  }

  changeDisabled() {
    const { isValidPassword, isValidEmail } = this.state;
    return !!((isValidPassword && isValidEmail));
  }

  render() {
    return (
      <div>
        <input
          type="text"
          data-testid="email-input"
          placeholder="email"
          onChange={ (e) => this.handleEmail(e) }
        />
        <br />
        <input
          type="password"
          data-testid="password-input"
          name="password-input"
          placeholder="senha"
          onChange={ (e) => this.handlePassword(e) }
        />
        <br />
        <Link to="/wallet">
          <button type="button" disabled={ !this.changeDisabled() }>Entrar</button>
        </Link>
      </div>
    );
  }
}

export default Login;
