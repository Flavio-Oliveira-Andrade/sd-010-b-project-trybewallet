import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="login">
        <section className="inputs">
          <input
            type="text"
            onChange={ (e) => this.setState({ email: e.target.value }) }
            placeholder="email"
            data-testid="email-input"
          />
          <input
            type="password"
            onChange={ (e) => this.setState({ password: e.target.value }) }
            placeholder="senha"
            data-testid="password-input"
          />
        </section>
        <div className="link">
          <Link
            to="/clients"
            onClick={ () => console.log({ email, password }) }
            data-testid="btn-login"
          >
            Entrar
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
