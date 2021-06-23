import React from 'react';

import Header from '../components/Header';
import Form from '../components/Form';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet-page">
        <Header />
        <Form />
      </div>);
  }
}

export default Wallet;
