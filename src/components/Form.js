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

function inputCurrency(currency) {
  return (
    <label className="labels-form" htmlFor="currencie">
      Moeda
      <select
        className="inputs-form"
        id="currencie"
        name="currency"
      >
        {currency.map(
          (item) => <option key={ item.code } value={ item.code }>{item.code}</option>,
        )}
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
  function getApi() {
    api.get('all').then((response) => {
      const resp = response.data;
      setCurrency([
        resp.USD,
        resp.CAD,
        resp.EUR,
        resp.GBP,
        resp.ARS,
        resp.BTC,
        resp.LTC,
        resp.JPY,
        resp.CHF,
        resp.AUD,
        resp.CNY,
        resp.ILS,
        resp.ETH,
        resp.XRP,
      ]);
      console.log(response.data);
    });
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
      { inputCurrency(currency) }
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
