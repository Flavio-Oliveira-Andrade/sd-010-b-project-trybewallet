import React from 'react';
import Header from '../componente/Header';
import Table from '../componente/Table';
import ExpenseForms from '../componente/ExpenseForms';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <ExpenseForms />
        <hr />
        <Table />
      </section>
    );
  }
}

export default Wallet;
