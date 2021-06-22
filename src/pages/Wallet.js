import React from 'react';
import Header from '../components/Header';
import FormularioDeDespesa from '../components/FormularioDeDespesa';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <FormularioDeDespesa />
        <Table />
      </main>
    );
  }
}

export default Wallet;
