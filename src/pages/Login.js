import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.validation = this.validation.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validation() {
    const { email, password } = this.state;
    const minLength = 5;
    const validEmail = this.validEmail(email);
    const validPass = (password.length > minLength);
    if (validEmail && validPass) {
      this.setState({ disabled: false });
    }
  }

  validEmail(email) {
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const regex = /\S+@\S+\.\S+/;
    const emailMatch = email.match(regex);
    if (emailMatch !== null) {
      this.setState({ email: emailMatch[0] });
      return (emailMatch.length === 1);
    }
    return false;
  }

  handleChange({ target }) {
    const { name, value } = target;
    if (name === 'email') {
      this.setState({ email: value }, this.validation);
    }
    if (name === 'password') {
      this.setState({ password: value }, this.validation);
    }
  }

  render() {
    const { disabled } = this.state;
    return (
      <section>
        <div>Login</div>
        <form>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              name="password"
              minLength="6"
              onChange={ this.handleChange }
              required
            />
          </label>
        </form>
        <button type="button" disabled={ disabled }>
          Entrar
        </button>

      </section>
    );
  }
}

export default Login;
