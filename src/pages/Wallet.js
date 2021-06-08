import React from 'react';

import Header from '../components/Header';
import FormDespesa from '../components/FormDespesa';
import './Wallet.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="wallet">
        <div>
          <Header />
        </div>
        <div className="form-despesa">
          <FormDespesa />
        </div>
      </div>
    );
  }
}

export default Wallet;
