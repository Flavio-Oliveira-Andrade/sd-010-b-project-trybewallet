import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => this.validateEmail());
  }

  handleSubmit(target) {
    const targetResult = target;
    console.log(targetResult);
  }

  validateEmail() {
    const { password, email } = this.state;
    const maxPassword = 6;
    // eslint-disable-next-line max-len
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      re.test(String(email).toLowerCase()) && password.length >= maxPassword) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { email, disabled, password } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            data-testid="email-input"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <label htmlFor="password">
          <input
            data-testid="password-input"
            name="password"
            placeholder="Senha"
            value={ password }
            onChange={ (e) => this.handleChange(e) }
          />
        </label>
        <Link to="/carteira">
          <button
            type="button"
            onClick={ (e) => this.handleSubmit(e) }
            disabled={ disabled }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}

export default Login;
