import React from 'react';
import './Login.css';
import LoginForm from '../components/LoginForm';

class Login extends React.Component {
  render() {
    return (
      <div className="loginbox">
        <h2>LOGIN</h2>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
