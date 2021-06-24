import React, { useState } from 'react';

export default function Payment() {
  const [payment, setPayment] = useState({ name: 'dinheiro' });

  return (
    <label htmlFor="payment">
      Método de pagamento :
      <select
        name={ payment }
        id="payment"
        value={ payment }
        onChange={ ({ target }) => setPayment({ name: target.value }) }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    </label>
  );
}
