import React from 'react';

import Header from '../components/Header';
import Form from '../components/Form';
import CoastTable from '../components/CoastTable';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <CoastTable />
      </div>
    );
  }
}

export default Wallet;
