import React from 'react';
import LoginData from '../components/LoginData';
import LoginButton from '../components/LoginButton';

class Login extends React.Component {
  render() {
    return (
      <section className="login-container">
        <LoginData />
        <LoginButton />
      </section>
    );
  }
}

export default Login;
