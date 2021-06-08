import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="userEmail">
            Email
            <input
              type="email"
              name="userEmail"
              data-testid="email-input"
            />
          </label>
          <label htmlFor="userPassword">
            Password
            <input
              type="password"
              name="userPassword"
              data-testid="password-input"
            />
          </label>
        </form>
        <button type="button">Entrar</button>
      </div>
    );
  }
}

export default Login;
