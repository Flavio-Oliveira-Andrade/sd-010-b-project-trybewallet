import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false,
      checkPassword: false,
      checkEmail: false,
      disable: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.passwordValidation = this.passwordValidation.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  emailValidation() {
    const email = document.getElementById('idEmail').value;
    const checkEmail = (/[\w.]+@\w+\.\w{2,4}/).test(email);
    if (checkEmail) {
      this.setState({ checkEmail: true }, this.buttonValidation);
    }
  }

  passwordValidation() {
    const password = document.getElementById('idpassword').value;
    const FIVE = 5;
    if (password.length > FIVE) {
      this.setState({ checkPassword: true },
        this.buttonValidation);
    } else {
      this.setState({ checkPassword: false }, this.buttonValidation);
    }
  }

  buttonValidation() {
    const { checkEmail, checkPassword } = this.state;
    if (checkEmail && checkPassword) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
    this.passwordValidation();
    this.emailValidation();
  }

  handleClick() {
    this.setState({ login: true });
  }

  render() {
    const { login, disable } = this.state;
    if (login) {
      return <Redirect to="/carteira" />;
    }
    return (
      <div>

        <label htmlFor="idEmail">
          <input
            type="email"
            name="email"
            placeholder="email"
            id="idEmail"
            data-testid="email-input"
            onChange={ this.handleChange }
            required
          />
        </label>
        <label htmlFor="idpassword">
          <input
            type="password"
            name="password"
            placeholder="password"
            id="idpassword"
            data-testid="password-input"
            onChange={ this.handleChange }

          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ disable }
        >
          Entrar

        </button>

      </div>
    );
  }
}

export default Login;
