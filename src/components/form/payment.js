import React, { useState } from 'react';

// https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks
export default function Payment() {
  const [payment, setPayment] = useState('dinheiro');

  return (
    <label htmlFor="payment">
      Método de pagamento :
      <select
        name={ payment }
        id="payment"
        value={ payment }
        onChange={ ({ target }) => setPayment(target.value) }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    </label>
  );
}
