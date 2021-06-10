import React from 'react';

class PaymentMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'],
    };
  }

  render() {
    const { types } = this.state;
    return (
      <label htmlFor="método de pagamento">
        Método de Pagamento
        <select id="método de pagamento" name="método de pagamento">
          {types.map((type, key) => (
            <option key={ key }>
              { type }
            </option>))}
        </select>
      </label>
    );
  }
}

export default PaymentMethod;
