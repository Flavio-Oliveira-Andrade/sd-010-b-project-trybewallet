import React, { Component } from 'react';
import Despesa from './Despesa';
import FormularioDeDespesa from './FormularioDeDespesa';

class Wallet extends Component {
  render() {
    return (
      <div>
        <FormularioDeDespesa />
        <Despesa />
      </div>
    );
  }
}

export default Wallet;
