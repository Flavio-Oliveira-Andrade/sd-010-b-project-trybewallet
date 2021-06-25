import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { Container } from './styles';
function inputMethod(tableItem, setTableItem) {
  return (
    <label className="labels-form" htmlFor="payment">
      Método de pagamento
      <select
        className="inputs-form"
        id="payment"
        name="method"
        onChange={ ({ target }) => {
          setTableItem({
            ...tableItem,
            method: target.value,
          });
        } }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
    </label>
  );
}

function inputTag(tableItem, setTableItem) {
  return (
    <label className="labels-form" htmlFor="tag">
      Tag
      <select
        className="inputs-form"
        id="tag"
        name="tag"
        onChange={ ({ target }) => {
          setTableItem({
            ...tableItem,
            tag: target.value,
          });
        } }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    </label>
  );
}

function value(tableItem, setTableItem, setNumber) {
  return (
    <label htmlFor="value">
      Valor:
      <input
        onChange={ ({ target }) => {
          const numberValue = target.value;
          setNumber(parseFloat(target.value));
          setTableItem({
            ...tableItem,
            value: numberValue,
          });
        } }
        type="number"
        id="value"
        name="value"
      />
    </label>
  );
}

function description(tableItem, setTableItem) {
  return (
    <label className="labels-form" htmlFor="description">
      Descrição
      <input
        value={ tableItem.description }
        onChange={ ({ target }) => {
          setTableItem({
            ...tableItem,
            description: target.value,
          });
        } }
        type="text"
        id="description"
      />
    </label>
  );
}

function inputCurrency(currencyState, tableItem, setTableItem) {
  return (
    <label className="labels-form" htmlFor="currencie">
      Moeda
      <select
        className="inputs-form"
        id="currencie"
        name="currency"
        onChange={ ({ target }) => {
          setTableItem({
            ...tableItem,
            currency: target.value,
          });
        } }
      >
        {currencyState.map(
          (item) => <option key={ item } value={ item }>{item}</option>,
        )}
      </select>
    </label>
  );
}

function Form(props) {
  const dispatch = useDispatch();
  const { totalValue, setTotalValue } = props;
  const [number, setNumber] = useState(0);
  const [currencyState, setCurrencyState] = useState([]);
  const [tableItem, setTableItem] = useState({
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  });
  async function getApi() {
    const JSON = await fetch('https://economia.awesomeapi.com.br/json/all');
    const cotation = await JSON.json();
    setTableItem({
      ...tableItem,
      exchangeRates: cotation,
    });
    const currencies = Object.keys(cotation)
      .filter((item) => item !== 'USDT');
    setCurrencyState(currencies);
  }
  useEffect(() => {
    getApi();
  }, []);
  async function addItem() {
    const JSON = await fetch('https://economia.awesomeapi.com.br/json/all');
    const cotation2 = await JSON.json();
    setTotalValue(totalValue + number);
    setTableItem({
      ...tableItem,
      exchangeRates: cotation2,
      id: tableItem.id + 1,
    });
    dispatch({ type: 'ADD_EXPENSES', expenses: tableItem });
  }
  return (
    <form>
      {value(tableItem, setTableItem, setNumber)}
      {inputCurrency(currencyState, tableItem, setTableItem)}
      { inputMethod(tableItem, setTableItem) }
      {inputTag(tableItem, setTableItem)}
      {description(tableItem, setTableItem)}
      <button onClick={ addItem } type="button">Adicionar despesa</button>
    </form>
  );
}

Form.propTypes = {
  totalValue: PropTypes.number.isRequired,
  setTotalValue: PropTypes.func.isRequired,
};

export default Form;
