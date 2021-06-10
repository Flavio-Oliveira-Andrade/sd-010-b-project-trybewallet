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
      <div className="container-login">
        <div className="wrap-login">
          <div className="slogan-container">
            <h1>Sua Cotação </h1>
            <h3>Em qualquer Moeda</h3>
            {/* <img alt="img" src={ img } width="270" /> */}
          </div>
          <form>
            <span className="login-form-title">
              Faça seu Login
            </span>
            <div className="wrap-input">
              <input
                className="input"
                type="email"
                id="email"
                placeholder="Email"
                onChange={ this.handleChange }
              />
            </div>
            <div className="wrap-input">
              <input
                className="input"
                type="password"
                id="password"
                placeholder="Password"
                maxLength="12"
                onChange={ this.handleChange }
              />
            </div>
            <Link to="/wallet">
              <button
                type="button"
                className="login-form-btn"
                onClick={ () => console.log('oi') }
                disabled={ !emailValido || password.length <= '5' }
              >
                Entrar
              </button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
