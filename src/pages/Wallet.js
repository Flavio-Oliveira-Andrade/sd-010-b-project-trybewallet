import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <div>TrybeWallet</div>
        <Header />
        <Form />
        <Table />
      </section>
    );
  }
}

export default Wallet;
