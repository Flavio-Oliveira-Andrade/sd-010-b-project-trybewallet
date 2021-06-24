import React from 'react';
import { connect } from 'react-redux';
import LoginData from '../components/LoginData';
import LoginButton from '../components/LoginButton';

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
