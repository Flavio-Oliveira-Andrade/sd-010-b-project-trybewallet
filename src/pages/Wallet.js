import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';

import '../style/wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <section className="white-body">
        <Header />
        <Form />
        <Table />
      </section>
    );
  }
}

export default Wallet;
