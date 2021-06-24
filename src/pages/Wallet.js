import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Wallet() {
  const [field, setField] = useState(0);
  const [cambio, setCambio] = useState('BRL');
  const emailUser = useSelector((state) => state.user.email);
  const [form, setForm] = useState({
    id: 0,
    value: 0,
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    description: '',
    exchangeRates: {},
  })

  return (
    <>
      <header>
        <h2 data-testid="email-field">{emailUser}</h2>
        <h3 data-testid="total-field">{field}</h3>
        <h3 data-testid="header-currency-field">{cambio}</h3>
      </header>

      <form>
        <label htmlFor="value">
          Valor:
          <input type="number" id="value" name="value" />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select name="moeda" id="moeda">
            <option value="BRL">BRL</option>
            <option value="USD">USD</option>
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select name="method" id="method">
            <option value="money">Dinheiro</option>
            <option value="cred">Cartão de crédito</option>
            <option value="deb">Cartão de debito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select name="tag" id="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <label>
          Descrição:
          <input type="text" name="name" />
        </label>
      </form>

    </>
  );
}

export default Wallet;
