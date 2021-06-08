import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <>
        <div>Login</div>
        <input data-testid="email-input" />
        <input data-testid="password-input" />
      </>
    );
  }
}

export default Login;
