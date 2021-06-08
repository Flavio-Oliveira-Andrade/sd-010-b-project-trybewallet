import React from 'react';

class LoginPage extends React.Component {
  constructor() {
    super();
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.state = {
      email: '',
      validPassword: false,
      validEmail: false,
    };
  }

  handleEmail({ value }) {
    this.setState({
      email: value,
    });
    const { email } = this.state;
    if (email.includes('@') && email.includes('.')) {
      this.setState({
        validEmail: true,
      });
    }
  }

  handlePassword({ value }) {
    const MIN_LENGTH_PASSWORD = 6;
    if (value.length >= MIN_LENGTH_PASSWORD) {
      this.setState({
        validPassword: true,
      });
    } else {
      this.setState({
        validPassword: false,
      });
    }
  }

  render() {
    const { validEmail, validPassword } = this.state;
    return (
      <section>
        <form>
          <input
            type="email"
            data-testid="email-input"
            onChange={ ({ target }) => this.handleEmail(target) }
          />
          <input
            type="password"
            data-testid="password-input"
            onChange={ ({ target }) => this.handlePassword(target) }
          />
          <button type="button" disabled={ !validEmail || !validPassword }>
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

export default LoginPage;
