import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleValidation(email, password) {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const passMaxLength = 6;
    const emailValidation = emailRegex.test(email);
    if (password.length >= passMaxLength && emailValidation) {
      return false;
    }
    return true;
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input
            name="email"
            type="text"
            data-testid="email-input"
            placeholder="Email"
            value={ email }
            onChange={ this.handleChange }
          />

          <input
            name="password"
            type="password"
            data-testid="password-input"
            placeholder="Password"
            value={ password }
            onChange={ this.handleChange }
          />

          {this.handleValidation(email, password)
            ? <button type="button" disabled>Entrar</button>
            : <button type="button"><Link to="/carteira">Entrar</Link></button> }
        </form>
      </div>
    );
  }
}

export default Login;
