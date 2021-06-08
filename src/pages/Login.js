import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailVerified: false,
      passwordVerified: false,
    };
    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyPassword = this.verifyPassword.bind(this);
  }

  verifyEmail({ target }) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

    this.setState({ emailVerified: emailRegex.test(target.value) });
  }

  verifyPassword({ target }) {
    const passwordMinLength = 6;

    this.setState({
      passwordVerified: target.value.length >= passwordMinLength,
    });
  }

  render() {
    const { emailVerified, passwordVerified } = this.state;
    return (
      <div>
        <form action="">
          <label htmlFor="userEmail">
            Email
            <input
              type="email"
              name="userEmail"
              data-testid="email-input"
              onChange={ this.verifyEmail }
            />
          </label>
          <label htmlFor="userPassword">
            Password
            <input
              type="password"
              name="userPassword"
              data-testid="password-input"
              onChange={ this.verifyPassword }
            />
          </label>
        </form>
        <button type="button" disabled={ !emailVerified || !passwordVerified }>
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
