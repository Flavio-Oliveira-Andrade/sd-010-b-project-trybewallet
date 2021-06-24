import React from 'react';
import LoginComponent from '../components/Login';
import Button from '../components/Button';

class Login extends React.Component {
  render() {
    return (
      <section className="login-container">
        <LoginComponent />
        <Button />
      </section>
    );
  }
}

export default Login;
