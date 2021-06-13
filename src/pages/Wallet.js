import React from 'react';
import Header from '../components/Header';
import Despesas from '../components/Despesa';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Despesas />
      </>
    );
  }
}

export default Wallet;
