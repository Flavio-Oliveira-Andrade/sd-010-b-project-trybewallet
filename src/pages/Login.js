import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div className="App">
        <input
          data-testid="email-input"
          type="text"
          name="email"
          maxLength="50"
          placeholder="Email"
          required
        />
        <input
          data-testid="password-input"
          type="password"
          name="email"
          maxLength="50"
          placeholder="Senha"
          required
        />
      </div>
    );
  }
}

export default Login;
