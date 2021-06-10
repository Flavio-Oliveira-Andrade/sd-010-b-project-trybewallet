import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    const { email, password } = this.state;
    const emailValido = email.match(/^[^ ]+@[^ ]+.[a-z]{2,3}$/);
    return (
      <div>
        Login
        <br />
        <label htmlFor="email">
          <br />
          E-mail:
          {' '}
          <input
            id="email"
            type="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <br />
          Senha:
          {'      '}
          <input
            id="password"
            type="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        {'     '}
        <Link to="/carteira">
          <button
            type="button"
            className="login-form-btn"
            onClick={ () => console.log('oi') }
            disabled={ !emailValido || password.length <= '5' }
          >
            Entrar
          </button>
        </Link>

      </div>
    );
  }
}

export default Login;
