import React from 'react';
import Header from '../components/Header';
import Inputs from '../components/Inputs';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Inputs />
        <Table />
      </>
    );
  }
}

export default Wallet;
