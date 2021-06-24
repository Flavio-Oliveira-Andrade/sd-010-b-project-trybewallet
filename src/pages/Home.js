import React from 'react';
import { connect } from 'react-redux';
import LoginData from '../components/Login';
import LoginButton from '../components/Button';

class Home extends React.Component {
  render() {
    return (
      <section className="login-container">
        <LoginData />
        <LoginButton />
      </section>
    );
  }
}

export default connect()(Home);
