import React, { useState } from 'react';

function FormWallet() {
  const [payment, setPayment] = useState({ name: 'dinheiro' });
  const [tag, setTag] = useState({ name: 'alimentação' });

  return (
    <form>
      <label htmlFor="valor">
        Valor:
        <input type="text" name="valor" />
      </label>
      <label htmlFor="description">
        Descrição:
        <input type="text" name="description" />
      </label>
      <label htmlFor="currency">
        <select>
          Moeda:
        </select>
      </label>
      <label htmlFor="payment">
        Método de pagamento
        <select
          name="payment"
          value={ payment }
          onChange={ ({ target }) => setPayment({ name: target.value }) }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>
      <label htmlFor="tag">
        Tag
        <select
          name="tag"
          value={ tag }
          onChange={ ({ target }) => setTag({ name: target.value }) }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    </form>
  );
}

export default FormWallet;
