import React from 'react';
import Header from '../components/header';
import Form from '../components/form';
import Table from '../components/table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

export default Wallet;
