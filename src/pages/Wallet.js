import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import PaymentList from '../components/PaymentList';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <PaymentList />
      </>
    );
  }
}

export default Wallet;
