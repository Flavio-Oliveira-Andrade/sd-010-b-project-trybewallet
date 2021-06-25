import React, { useEffect, useState } from 'react';
import api from '../api';

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
  const [currency, setCurrency] = useState([]);

  async function getApi() {
    const JSON = await fetch('https://economia.awesomeapi.com.br/json/all');
    const cotation = await JSON.json();
    const currencies = Object.keys(cotation)
      .filter((item) => item !== 'USDT');
    setCurrency(currencies);
  }

  useEffect(() => {
    getApi();
  }, []);
  return (
    <form>
      <label htmlFor="value">
        Valor:
        <input type="number" id="value" name="value" />
      </label>
      <label className="labels-form" htmlFor="currencie">
        Moeda
        <select
          className="inputs-form"
          id="currencie"
          name="currency"
        >
          {currency.map((item) => <option key={ item } value={ item }>{item}</option>)}
        </select>
      </label>
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
