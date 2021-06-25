import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
        {currency.map( (item) => {
          return (
            <option key={item.code} value={item.code}>{item.code}</option>
          )
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

function Header(emailUser, field) {
  return (
    <header>
      <h2 data-testid="email-field">{emailUser}</h2>
      <h3 data-testid="total-field">{field}</h3>
      <h3 data-testid="header-currency-field">BRL</h3>
    </header>
  )
}

function Wallet() {
  const [field, setField] = useState(0);
  const emailUser = useSelector((state) => state.user.email);
  const [ currency, setCurrency ] = useState([])
  const [form, setForm] = useState({
    id: 0,
    value: 0,
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
    exchangeRates: {},
  });
  useEffect(() => {
    getApi()
  }, [])

  function getApi() {
    api.get("all").then((response) => {
      const resp = response.data;
      const array = [
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
      ]
      setCurrency(array)
      console.log(array)
    }).catch(error => console.log(error))
  }

  return (
    <>
      {Header(emailUser, field)}
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
        <button
          type="button"
          onClick={ () => {
            setField(0);
            setForm(0);
          } }
        >
          Opa
        </button>
      </form>

    </>
  );
}

export default Wallet;
