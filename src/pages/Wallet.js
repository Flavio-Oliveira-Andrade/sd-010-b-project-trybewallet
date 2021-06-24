import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function inputMethod(form, setForm) {
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

function inputCurrency(form, setForm) {
  return (
    <label className="labels-form" htmlFor="currencie">
      Moeda
      <select
        className="inputs-form"
        id="currencie"
        name="currency"
      />
    </label>
  );
}

function inputTag(form, setForm) {
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

function Wallet() {
  const [field, setField] = useState(0);
  const emailUser = useSelector((state) => state.user.email);
  const [form, setForm] = useState({
    id: 0,
    value: 0,
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
    exchangeRates: {},
  });

  return (
    <>
      <header>
        <h2 data-testid="email-field">{emailUser}</h2>
        <h3 data-testid="total-field">{field}</h3>
        <h3 data-testid="header-currency-field">BRL</h3>
      </header>

      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" name="value" />
        </label>
        { inputCurrency(form, setForm) }
        { inputMethod(form, setForm) }
        {inputTag(form, setForm)}
        <label htmlFor="desc">
          Descrição:
          <input type="text" name="desc" />
        </label>
        <button
          type="button"
          onClick={ () => {
            setField(0)
            setForm(0)
          } }
        >
          Opa
        </button>
      </form>

    </>
  );
}

export default Wallet;
