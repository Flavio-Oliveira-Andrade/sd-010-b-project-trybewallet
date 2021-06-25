import React, {useEffect, useState} from 'react';
import api from '../api';


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
        {currency.map((item) => {
          return <option key={item.code} value={item.code}>{item.code}</option>
        })}
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

function Form() {
  const [ currency, setCurrency ] = useState([])

  useEffect(() => {
    getApi()
  }, [])
  async function getApi() {
    api.get("all").then((response) => {
      const currencies = response.data
      const array = [
        currencies.USD,
        currencies.CAD,
        currencies.EUR,
        currencies.GBP,
        currencies.ARS,
        currencies.BTC,
        currencies.LTC,
        currencies.JPY,
        currencies.CHF,
        currencies.AUD,
        currencies.CNY,
        currencies.ILS,
        currencies.ETH,
        currencies.XRP,
      ];
      setCurrency(array)
    }).catch( (error) => console.log(error));
  }

  return (
    <form>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" name="value" />
        </label>
        { inputCurrency(currency) }
        { inputMethod() }
        { inputTag() }
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

export default Form;