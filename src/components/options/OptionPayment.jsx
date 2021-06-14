import React from 'react';

class OptionPayment extends React.Component {
  render() {
    return (
      <>
        <option selected>-</option>
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </>
    );
  }
}

export default OptionPayment;
