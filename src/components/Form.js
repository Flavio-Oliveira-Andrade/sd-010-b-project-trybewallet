import React from 'react';

// import { Container } from './styles';
function inputMethod() {
  return (
    <label className="labels-form" htmlFor="payment">
      Método de pagamento
      <select
        className="inputs-form"
        id="payment"
        name="method"
      >
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
    </label>
  );
}

function inputCurrency() {
  return (
    <label className="labels-form" htmlFor="currencie">
      Moeda
      <select
        className="inputs-form"
        id="currencie"
        name="currency"
      >
        <option value="Teste">Teste</option>
      </select>
    </label>
  );
}

function inputTag() {
  return (
    <label className="labels-form" htmlFor="tag">
      Tag
      <select
        className="inputs-form"
        id="tag"
        name="tag"
      >
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
    </label>
  );
}

function From() {
  return (
    <form>
      <label htmlFor="value">
        Valor:
        <input type="number" id="value" name="value" />
      </label>
      { inputCurrency() }
      { inputMethod() }
      {inputTag()}
      <label className="labels-form" htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
        />
      </label>

    </form>
  );
}

export default From;
