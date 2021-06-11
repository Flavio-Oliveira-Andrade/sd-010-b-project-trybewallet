import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <section>
        <div>TrybeWallet</div>
        <Header />
        <Form />
      </section>
    );
  }
}

export default Wallet;
