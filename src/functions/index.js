import React from 'react';
// ---------------------------------------------------------------------------------------------
// FormsWallet

export function formValue() {
  return (
    <label
      htmlFor="value"
    >
      Valor:
      <input
        id="value"
        type="number"
        name="value"
      />
    </label>
  );
}

export function formCurrency(currencies) {
  return (
    <label
      htmlFor="coin"
    >
      Moeda:
      <select
        id="coin"
        type="number"
        name="currency"
      >
        {currencies.filter((coin) => coin !== 'USDT')
          .map((coin) => (
            <option
              key={ coin }
            >
              {coin}
            </option>
          ))}
      </select>
    </label>
  );
}

export function formPayment() {
  return (
    <label
      htmlFor="payment"
    >
      Método de Pagamento:
      <select
        id="payment"
        type="text"
        name="payment"
      >
        <option>Selecione:</option>
        <option>Dinheiro</option>
        <option>Cartão de débito</option>
        <option>Cartão de crédito</option>
      </select>
    </label>
  );
}

export function formTag() {
  return (
    <label
      htmlFor="tag"
    >
      Tag:
      <select
        id="tag"
        type="text"
        name="tag"
      >
        <option>Selecione:</option>
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
    </label>
  );
}

export function formDescription() {
  return (
    <label
      htmlFor="description"
    >
      Descrição:
      <input
        id="description"
        type="text"
        name="description"
      />
    </label>
  );
}

// ---------------------------------------------------------------------------------------------
