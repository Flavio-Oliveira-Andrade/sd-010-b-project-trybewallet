import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Header from '../components/Header';
import Forms from '../components/Forms';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Forms />
      </main>
    );
  }
}

export default Wallet;
