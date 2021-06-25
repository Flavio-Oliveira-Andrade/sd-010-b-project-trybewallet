import React from 'react';
import Header from '../components/Header';
import FormExpanses from '../components/FormExpanses';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpanses />
        <Table />
      </div>
    );
  }
}

export default Wallet;
