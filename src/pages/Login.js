import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2>Login</h2>

        <input
          type="email"
          data-testid="email-input"
          onChange={
            (event) => this.setState({ email: event.target.value })
          }
        />

        <input
          type="password"
          data-testid="password-input"
          onChange={
            (event) => this.setState({ password: event.target.value })
          }
        />

        <Link to="/carteira">
          <button
            type="submit"
            onClick={
              () => console.log(email, password)
            }
          >
            Entrar
          </button>
        </Link>

      </div>
    );
  }
}

export default Login;
