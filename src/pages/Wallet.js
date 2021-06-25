import React from 'react';
import Header from '../components/Header';
import FormExpanses from '../components/FormExpanses';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FormExpanses />
      </div>
    );
  }
}

export default Wallet;
