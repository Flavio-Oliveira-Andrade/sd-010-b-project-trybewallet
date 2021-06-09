import React from 'react';

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
    console.log(email, password);
    return (
      <main>
        <h1>Login</h1>
        <form>
          <label htmlFor="inputEmail">
            E-mail
            <input
              data-testid="email-input"
              type="email"
              name="email"
              onChange={ (event) => this.setState({ email: event.target.value }) }
            />
          </label>
          <label htmlFor="InputPassword">
            Password
            <input
              data-testid="password-input"
              type="password"
              name="password"
              onChange={ (event) => this.setState({ password: event.target.value }) }
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </main>
    );
  }
}

export default Login;
